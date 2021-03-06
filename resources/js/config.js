//---------------------------------------------------------------------
// 
// Copyright (C) Microsoft Corporation. All rights reserved. See License.txt in the project root for license information.
// 
//---------------------------------------------------------------------

(function(){
  function getcmMode(format){
    // get CodeMirror mode for specific format
    switch(format){
      case 'csdl' :
        return 'xml';
      case 'json' :
      case 'swagger' :
        return {name: 'javascript', json: true};
      case 'yaml' :
        return 'yaml';
    }
  }

  window.morphoEditorConfig = {
    soruceFormats  : ['yaml'],
    targetFormats  : [/* 'csdl', */ 'json', 'swagger'],
    formats                 : {
      'csdl'  : {
        displayName   : 'CSDL',
        cmMode        : getcmMode('csdl')
      },
      'json'  : {
        displayName   : 'JSON',
        cmMode        : getcmMode('json')
      },
      'yaml'  : {
        displayName   : 'YAML',
        cmMode        : getcmMode('yaml')
      },
      'swagger'  : {
        displayName   : 'Swagger',
        cmMode        : getcmMode('swagger')
      }
    },

    samples       : 
    // sample
      ['new.yaml', 'todo-minimal.yaml', 'tripPin.yaml']
    // endsample
  };
})();