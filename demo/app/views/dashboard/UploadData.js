import FormModel from 'demo/app/models/FormModel';
import LayoutView from 'demo/libs/LayoutView';
import UploadDataTpl from 'demo/app/templates/dashboard/uploaddata.tpl';

const UploadData = LayoutView.extend({
  tagName: 'form',

  className: 'form-horizontal',

  waiting: true,

  attributes: {
    style: 'height:180px;'
  },

  model: new FormModel(),

  ui: {
    goBtn: 'button.btn-go',
    file: '#file1',
    progress: '.progress-wrap',
    progressBar: '.progress-bar'
  },

  modelEvents: {
    sync: 'onSyncSuccess',
    request: 'onRequestStart'
  },

  events: {
    'xclick @ui.goBtn': 'clickHandler',
    'change @ui.file': 'onFileChange'
  },

  template: function(sModel) {
    return _.template(UploadDataTpl)(sModel);
  },

  templateContext: function() {
    const m = { waiting: this.waiting, sModel: this.model.attributes };
    return m;
  },

  onFileChange: function() {
    if (this.ui.file.val()) {
      this.ui.goBtn.removeClass('disabled');
    } else {
      this.ui.goBtn.addClass('disabled');
    }
  },

  clickHandler: function(e) {
    e.preventDefault();
    console.log('clicked', this);

    /*var formData = new FormData();
  formData.append('file', $('#file1')[0]);

  $.ajax({
    url: 'datas/upload.php',
    type: 'POST',
    data: formData,
    async: true,
    cache: false,
    contentType: false,
    enctype: 'multipart/form-data',
    processData: false,
    success: function (response) {
      console.log(response);
    }
  });*/

    var self = this;
    function _(el) {
      return document.getElementById(el);
    }
    function uploadFile() {
      self.ui.progress.show();
      self.ui.goBtn.addClass('disabled');
      var file = _('file1').files[0];
      // alert(file.name+" | "+file.size+" | "+file.type);
      var formdata = new FormData();
      formdata.append('file1', file);
      var ajax = new XMLHttpRequest();
      ajax.upload.addEventListener('progress', progressHandler, false);
      ajax.addEventListener('load', completeHandler, false);
      ajax.addEventListener('error', errorHandler, false);
      ajax.addEventListener('abort', abortHandler, false);
      ajax.open('POST', 'datas/upload.php');
      ajax.send(formdata);
    }
    function progressHandler(event) {
      //_("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;
      const percent = event.loaded / event.total * 100;
      //_("progressBar").value = Math.round(percent);
      //_("status").innerHTML = Math.round(percent)+"% uploaded... please wait";
      console.log('progressHandler: ' + Math.round(percent));
      self.ui.progressBar
        .width(Math.round(percent) + '%')
        .html(Math.round(percent) + '%');
    }
    function completeHandler(event) {
      //_("status").innerHTML = event.target.responseText;
      //_("progressBar").value = 0;
      console.log('completeHandler: ' + event.target.responseText);
      setTimeout(function() {
        self.ui.progress.hide('slow');
        self.el.reset();
      }, 1000);
    }
    function errorHandler(event) {
      //_("status").innerHTML = "Upload Failed";
      console.log('errorHandler: Upload Failed');
    }
    function abortHandler(event) {
      //_("status").innerHTML = "Upload Aborted";
      console.log('errorHandler: Upload Aborted');
    }
    uploadFile();
  },

  onSyncSuccess: function() {
    this.waiting = false;
    this.render();
  },

  onRequestStart: function() {
    this.waiting = true;
  },

  initialize: function() {
    this.model.fetch();
  }
});

export default UploadData;
