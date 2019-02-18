// API Endpoints
export const API_SERVER = 'https://datagov-cloud-provisioning-api.ckan.io/api';
export const AUTH_SERVER = 'https://datagov-cloud-provisioning-api.ckan.io';

// Dummy values for UI development
export const USE_DUMMY_VALUES = false;
export const DUMMY_AUTHENTICATED = false;
export const DUMMY_AUTHORIZED = false;

export const DUMMY_TOKEN = 'xxx';
export const DUMMY_INSTANCES = [
      {
        'active': false,
        'id': 'demo-p3',
        'kind': 'default',
        'params': {
          'active': false,
          'ckanAdminEmail': 'bill@gates.com',
          'ckanHelmChartRepo': 'https://raw.githubusercontent.com/ViderumGlobal/ckan-cloud-helm/master/charts_repository',
          'ckanHelmChartVersion': 'v0.0.0',
          'ckanJobsDbTerminationGracePeriodSeconds': 1,
          'ckanJobsTerminationGracePeriodSeconds': 1,
          'ckanPhase': 'not ready',
          'ckanPlugins': 'stats text_view image_view recline_view datastore xloader',
          'ckanResources': '{\'requests\': {\'cpu\': \'400m\', \'memory\': \'1200Mi\'}, \'limits\': {\'memory\': \'2Gi\'}}',
          'datastoreDbTerminationGracePeriodSeconds': 1,
          'dbTerminationGracePeriodSeconds': 1,
          'displayTimezone': 'America/New_York',
          'id': 'demo-p3',
          'kind': 'default',
          'nginxReplicas': 1,
          'provisionerKindTitle': 'Default Profile',
          'replicas': 1,
          'siteTitle': 'This is DEMO P3 FINALLY!',
          'siteUrl': 'http://cloud-demo-p3.ckan.io',
          'terminationGracePeriodSeconds': 1,
          'valuesFile': '/etc/ckan-cloud/demo-p3_values.yaml'
        },
        'status': 'not ready'
      },
      {
        'active': true,
        'id': 'demo-p4',
        'kind': 'default',
        'params': {
          'active': false,
          'ckanAdminEmail': 'steve@jobs.com',
          'ckanHelmChartRepo': 'https://raw.githubusercontent.com/ViderumGlobal/ckan-cloud-helm/master/charts_repository',
          'ckanHelmChartVersion': 'v0.0.0',
          'ckanJobsDbTerminationGracePeriodSeconds': 1,
          'ckanJobsTerminationGracePeriodSeconds': 1,
          'ckanPhase': 'not ready',
          'ckanPlugins': 'stats text_view image_view recline_view datastore xloader',
          'ckanResources': '{\'requests\': {\'cpu\': \'400m\', \'memory\': \'1200Mi\'}, \'limits\': {\'memory\': \'2Gi\'}}',
          'datastoreDbTerminationGracePeriodSeconds': 1,
          'dbTerminationGracePeriodSeconds': 1,
          'displayTimezone': 'America/New_York',
          'id': 'demo-p4',
          'kind': 'default',
          'nginxReplicas': 1,
          'provisionerKindTitle': 'Default Profile',
          'replicas': 1,
          'siteTitle': 'This is DEMO P4',
          'siteUrl': 'http://cloud-demo-p3.ckan.io',
          'terminationGracePeriodSeconds': 1,
          'valuesFile': '/etc/ckan-cloud/demo-p3_values.yaml'
        },
        'status': 'not ready'
      }
];

export const DUMMY_USERS = [
    {
        'key': 'jeff@bezos.com',
        'self': true,
        'value': {
            'level': 2
        }
    },
    {
        'key': 'steve@jobs.com',
        'self': false,
        'value': {
            'level': 2
        }
    },
    {
        'key': 'bill@gates.com',
        'self': false,
        'value': {
            'level': 2
        }
    },
];

export const DUMMY_KINDS = [
    {'id': 'harvester', 'title': 'Harvester'},
    {'id': 'catalog', 'title': 'Inventory / Catalog'},
];

export const DUMMY_PROVIDERS = {
    github: {
        url: 'http://github.com/ViderumGlobal'
    }
};

export const DUMMY_DEETS = {
    password: '12345678',
    log: ['this', 'is', 'a', 'log'],
    id: 'instance_id'
};
