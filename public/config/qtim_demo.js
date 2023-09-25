window.config = {
    // This must match the location configured for web server
    path: '/',
    servers: [
      {
        id: 'local',
        // This must match the proxy location configured for the web server
        url: 'https://qtim-cu-dcm4chee-pacs.southcentralus.cloudapp.azure.com:8443/dcm4chee-arc/aets/DCM4CHEE/rs',
        write: true
      }
    ],
    disableWorklist: false,
    disableAnnotationTools: false,
    mode: 'light',
    preload: true,
    annotations: [
      {
        finding: {
          value: '85756007',
          schemeDesignator: 'SCT',
          meaning: 'Normal'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [255, 255, 0, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        },
      },
      {
        finding: {
          value: '108369006',
          schemeDesignator: 'SCT',
          meaning: 'Cervicitis'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [255, 0, 255, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      },
      {
        finding: {
          value: '34823008',
          schemeDesignator: 'SCT',
          meaning: 'CIN1'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [51, 124, 151, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      },
      {
        finding: {
          value: '369705002',
          schemeDesignator: 'SCT',
          meaning: 'CIN2'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [51, 102, 255, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      },
      {
        finding: {
          value: '399721002',
          schemeDesignator: 'SCT',
          meaning: 'CIN3'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [51, 204, 204, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      },
      {
        finding: {
          value: '47973001',
          schemeDesignator: 'SCT',
          meaning: 'Carcinoma'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [255, 80, 80, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      },
      {
        finding: {
          value: '47973023',
          schemeDesignator: 'SCT',
          meaning: 'Adenocarcinoma'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [127, 190, 80, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      },
      {
        finding: {
          value: '47973423',
          schemeDesignator: 'SCT',
          meaning: 'AIS'
        },
        geometryTypes: ['polygon', 'freehandpolygon', 'line', 'freehandline'],
        style: {
          stroke: {
            color: [127, 90, 180, 1],
            width: 2
          },
          fill: {
            color: [255, 255, 255, 0.2]
          }
        }
      }
    ],
    oidc: {
      authority: "https://qtim-cu-dcm4chee-pacs.southcentralus.cloudapp.azure.com:8843/realms/dcm4che/",
      clientId: "slim-web-viewer",
      scope: "openid profile email",
      grantType: "implicit",
    },
  }