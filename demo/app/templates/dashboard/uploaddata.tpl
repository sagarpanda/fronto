<% if(!waiting){ %>
    <% if(sModel.categories.length === 0){ %>
    No record found
    <% }else{ %>
<div class="form-group">
    <label class="col-sm-3 control-label">Category</label>
    <div class="col-sm-9">
        <select class="form-control">
        <% for(var i=0;i<sModel.categories.length;i++){ %>
        <option><%= sModel.categories[i] %></option>
        <% } %>
        </select>
    </div>
</div>
<div class="form-group">
    <label class="col-sm-3 control-label">File Type</label>
    <div class="col-sm-9">
        <select class="form-control">
        <% for(var i=0;i<sModel.fileTypes.length;i++){ %>
        <option><%= sModel.fileTypes[i] %></option>
        <% } %>
        </select>
    </div>
</div>
<div class="form-group">
    <label class="col-sm-3 control-label"></label>
    <div class="col-sm-9">
        <input type="file" id="file1" />
    </div>
</div>
<div class="form-group progress-wrap" style="display:none;">
    <label class="col-sm-3 control-label"></label>
    <div class="col-sm-9" style="height:30px;">
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100" style="min-width: 2em; width: 0%;">
            0%
            </div>
        </div>
    </div>
</div>
<div class="form-group">
    <label class="col-sm-3 control-label"></label>
    <div class="col-sm-9">
    <button type="submit" class="btn btn-default btn-go disabled">Go</button>
    </div>
</div>

    <% } %>
<% }else{ %>
Loading...
<% } %>