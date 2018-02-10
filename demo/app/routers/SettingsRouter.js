import SettingsController from 'demo/app/controllers/SettingsController';

const SettingsRouter = Mn.AppRouter.extend({
  controller: SettingsController,

  appRoutes: {
    settings: 'settings'
  }
});

export default SettingsRouter;
