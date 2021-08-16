(this["webpackJsonpyaml-editor"]=this["webpackJsonpyaml-editor"]||[]).push([[2],{216:function(e,n,t){},232:function(e,n,t){},303:function(e,n,t){"use strict";t.r(n);var i=t(145),r=t.n(i),a=t(222),s=t.n(a),o=(t(232),t(21)),c=(t(216),t(225)),l=t(226),u=t(223),d=t(224),S=t(110);window.MonacoEnvironment={getWorker:function(e,n){return"yaml"===n?new d.a:new u.a}};var m=function(e){var n=Object(i.useRef)(),t=Object(i.useState)(),r=Object(o.a)(t,2),a=r[0],s=r[1];return Object(l.a)({validate:!0,enableSchemaRequest:!0,format:!0,hover:!0,completion:!0,schemas:[{uri:"https://cdisc.org/rules/1-0",fileMatch:["*"],schema:e.schema}]}),Object(i.useEffect)((function(){n.current&&(console.log(n.current),s(c.a.create(n.current,{language:"yaml",theme:"vs-dark"})))}),[]),Object(i.useEffect)((function(){a&&a.setValue(e.value)}),[a,e.value]),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{ref:n,style:{width:e.width,height:e.height}})})},y={id:"https://cdisc.org/rules/1-0",type:"object",description:"Validation schema CDISC Rules 1.0",properties:{CoreId:{type:"string"},Version:{type:"string"},Authority:{type:"object",properties:{Organization:{type:"string"}},additionalProperties:!1},Reference:{type:"string"},Description:{type:"string"},Sensitivity:{type:"string"},Scopes:{type:"string"},"Rule Type":{type:"string"},Outcome:{type:"string"},Citations:{type:"string"}},additionalProperties:!1},D={"rule1.yaml":{name:"rule1.yaml",value:"\nCoreId: Rule271828\nVersion: 1\nAuthority:\n    Organization: CDISC\nReference:\n    Origin: SDTM Conformance Rules\n    Version: 1.1\n    Id: CG0082\nDescription: Verify...\nSensitivity: Record\nScopes:\n    Standards:\n    - Name: SDTMIG\n        Version: 3.3\n    - Name: SDTMIG\n        Version: 3.4\n    Classes:\n    Include:\n        - Events\n        - Findings\n    Domains:\nRule Type:\n    Value Presence:\n    Conditions: --BODSYS IS NULL\n    Check: --BDSYCD IS NOT NULL\nOutcome:\n    Message: --BDSYCD is populated when --BODSYS is null\nCitations:\n    - Document: SDTM v1.4\n    Section: 2.2.2\n    Cited Guidance: Variable Qualifier of --BODSYS\n"},"rule2.yaml":{name:"rule2.yaml",value:"\nCoreId: Rule2\nVersion: 1\nAuthority:\n    Organization: CDISC\nReference:\n    Origin: SDTM Conformance Rules\n    Version: 1.1\n    Id: CG0082\nDescription: Verify...\nSensitivity: Record\nScopes:\n    Standards:\n    - Name: SDTMIG\n        Version: 3.3\n    - Name: SDTMIG\n        Version: 3.4\n    Classes:\n    Include:\n        - Events\n        - Findings\n    Domains:\nRule Type:\n    Value Presence:\n    Conditions: --BODSYS IS NULL\n    Check: --BDSYCD IS NOT NULL\nOutcome:\n    Message: --BDSYCD is populated when --BODSYS is null\nCitations:\n    - Document: SDTM v1.4\n    Section: 2.2.2\n    Cited Guidance: Variable Qualifier of --BODSYS\n"},"rule3.yaml":{name:"rule3.yaml",value:"\nCoreId: Rule3\nVersion: 1\nAuthority:\n    Organization: CDISC\nReference:\n    Origin: SDTM Conformance Rules\n    Version: 1.1\n    Id: CG0082\nDescription: Verify...\nSensitivity: Record\nScopes:\n    Standards:\n    - Name: SDTMIG\n        Version: 3.3\n    - Name: SDTMIG\n        Version: 3.4\n    Classes:\n    Include:\n        - Events\n        - Findings\n    Domains:\nRule Type:\n    Value Presence:\n    Conditions: --BODSYS IS NULL\n    Check: --BDSYCD IS NOT NULL\nOutcome:\n    Message: --BDSYCD is populated when --BODSYS is null\nCitations:\n    - Document: SDTM v1.4\n    Section: 2.2.2\n    Cited Guidance: Variable Qualifier of --BODSYS\n"}};var C=function(){var e=Object(i.useState)("rule1.yaml"),n=Object(o.a)(e,2),t=n[0],r=n[1],a=D[t];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("button",{disabled:"rule1.yaml"===t,onClick:function(){return r("rule1.yaml")},children:"rule1.yaml"}),Object(S.jsx)("button",{disabled:"rule2.yaml"===t,onClick:function(){return r("rule2.yaml")},children:"rule2.yaml"}),Object(S.jsx)("button",{disabled:"rule3.yaml"===t,onClick:function(){return r("rule3.yaml")},children:"rule3.yaml"}),Object(S.jsx)(m,{schema:y,value:a.value,width:800,height:600})]})},p=function(e){e&&e instanceof Function&&t.e(80).then(t.bind(null,380)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),i(e),r(e),a(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(C,{})}),document.getElementById("root")),p()}},[[303,3,4]]]);
//# sourceMappingURL=main.96ef62bc.chunk.js.map