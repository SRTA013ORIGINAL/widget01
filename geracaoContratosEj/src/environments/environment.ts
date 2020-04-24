// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { EditComponent } from '../app/widget/edit/edit.component';

var service_location_cat_contrat = EditComponent.endereco_servico;
var dataset_campos_formulario = window.URL + '/api/public/ecm/dataset/datasets';

export const environment = {
  production: false,
  apiCategoriaContratacao: service_location_cat_contrat,
  datasetCamposFormulario: dataset_campos_formulario,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
