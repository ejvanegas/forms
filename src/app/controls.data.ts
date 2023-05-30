export interface Control {
  label: string;
  inputType: string;
  checked: boolean;
  key: string;
  value?: string;
}

export interface Schema {
  title: string;
  type: 'checkbox' | 'radio';
  controls: Control[];
}
export const LOCATION_TYPE: Schema = {
  title: 'Tipo de locación',
  type: 'checkbox',
  controls: [
    {
      label: 'En el sitio',
      inputType: 'checkbox',
      checked: true,
      key: 'onSite',
    },
    {
      label: 'Híbrido',
      inputType: 'checkbox',
      checked: false,
      key: 'hybrid',
    },
    {
      label: 'Remoto',
      inputType: 'checkbox',
      checked: false,
      key: 'remote',
    },
  ],
};

export const DISPONIBILITY: Schema = {
  title: 'Disponibilidad',
  type: 'checkbox',
  controls: [
    {
      label: 'Tiempo completo',
      inputType: 'checkbox',
      checked: false,
      key: 'fullTime',
    },
    {
      label: 'Contrato',
      inputType: 'checkbox',
      checked: false,
      key: 'contract',
    },
  ],
};

export const ORDER: Schema = {
  title: 'Te pueden gustar',
  type: 'radio',
  controls: [
    {
      label: 'Más recientes',
      inputType: 'radio',
      value: 'recent',
      key: 'order',
      checked: true,
    },
    {
      label: 'Las mejores coincidencias',
      inputType: 'radio',
      value: 'matches',
      key: 'order',
      checked: false,
    },
  ],
};

export const SPECIALTIES: Schema = {
  title: 'Especialidades',
  type: 'checkbox',
  controls: [
    {
      label: 'Finanzas y contabilidad',
      inputType: 'checkbox',
      checked: true,
      key: 'financeAccounting',
    },
    {
      label: 'Recursos humanos',
      inputType: 'checkbox',
      checked: false,
      key: 'humanResources',
    },
    {
      label: 'Datos y análisis',
      inputType: 'checkbox',
      checked: false,
      key: 'dataAnalysis',
    },
    {
      label: 'Diseño',
      inputType: 'checkbox',
      checked: false,
      key: 'design',
    },
    {
      label: 'Ingeniería y productos',
      inputType: 'checkbox',
      checked: false,
      key: 'engineeringProducts',
    },
    {
      label: 'Desarrollo de software',
      inputType: 'checkbox',
      checked: false,
      key: 'softwareDevelopment',
    },
    {
      label: 'Directores técnicos y de ingeniería',
      inputType: 'checkbox',
      checked: false,
      key: 'technicalManagers',
    },
    {
      label: 'Marketing y comunicaciones',
      inputType: 'checkbox',
      checked: false,
      key: 'marketingCommunications',
    },
    {
      label: 'Ventas',
      inputType: 'checkbox',
      checked: false,
      key: 'sales',
    },
  ],
};
