gdjs.Escena_323Code = {};
gdjs.Escena_323Code.localVariables = [];
gdjs.Escena_323Code.idToCallbackMap = new Map();
gdjs.Escena_323Code.GDNewTextObjects1= [];
gdjs.Escena_323Code.GDNewTextObjects2= [];
gdjs.Escena_323Code.GDBlueButtonObjects1= [];
gdjs.Escena_323Code.GDBlueButtonObjects2= [];
gdjs.Escena_323Code.GDRedButtonWithShadowObjects1= [];
gdjs.Escena_323Code.GDRedButtonWithShadowObjects2= [];
gdjs.Escena_323Code.GDDinoObjects1= [];
gdjs.Escena_323Code.GDDinoObjects2= [];
gdjs.Escena_323Code.GDA_9595ButtonObjects1= [];
gdjs.Escena_323Code.GDA_9595ButtonObjects2= [];
gdjs.Escena_323Code.GDB_9595ButtonObjects1= [];
gdjs.Escena_323Code.GDB_9595ButtonObjects2= [];
gdjs.Escena_323Code.GDTransparentLightJoystickObjects1= [];
gdjs.Escena_323Code.GDTransparentLightJoystickObjects2= [];


gdjs.Escena_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Escena_323Code.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Escena_323Code.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Escena_323Code.GDBlueButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Escena_323Code.GDBlueButtonObjects1[k] = gdjs.Escena_323Code.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.Escena_323Code.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
}

}


};

gdjs.Escena_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_323Code.GDNewTextObjects1.length = 0;
gdjs.Escena_323Code.GDNewTextObjects2.length = 0;
gdjs.Escena_323Code.GDBlueButtonObjects1.length = 0;
gdjs.Escena_323Code.GDBlueButtonObjects2.length = 0;
gdjs.Escena_323Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Escena_323Code.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Escena_323Code.GDDinoObjects1.length = 0;
gdjs.Escena_323Code.GDDinoObjects2.length = 0;
gdjs.Escena_323Code.GDA_9595ButtonObjects1.length = 0;
gdjs.Escena_323Code.GDA_9595ButtonObjects2.length = 0;
gdjs.Escena_323Code.GDB_9595ButtonObjects1.length = 0;
gdjs.Escena_323Code.GDB_9595ButtonObjects2.length = 0;
gdjs.Escena_323Code.GDTransparentLightJoystickObjects1.length = 0;
gdjs.Escena_323Code.GDTransparentLightJoystickObjects2.length = 0;

gdjs.Escena_323Code.eventsList0(runtimeScene);
gdjs.Escena_323Code.GDNewTextObjects1.length = 0;
gdjs.Escena_323Code.GDNewTextObjects2.length = 0;
gdjs.Escena_323Code.GDBlueButtonObjects1.length = 0;
gdjs.Escena_323Code.GDBlueButtonObjects2.length = 0;
gdjs.Escena_323Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs.Escena_323Code.GDRedButtonWithShadowObjects2.length = 0;
gdjs.Escena_323Code.GDDinoObjects1.length = 0;
gdjs.Escena_323Code.GDDinoObjects2.length = 0;
gdjs.Escena_323Code.GDA_9595ButtonObjects1.length = 0;
gdjs.Escena_323Code.GDA_9595ButtonObjects2.length = 0;
gdjs.Escena_323Code.GDB_9595ButtonObjects1.length = 0;
gdjs.Escena_323Code.GDB_9595ButtonObjects2.length = 0;
gdjs.Escena_323Code.GDTransparentLightJoystickObjects1.length = 0;
gdjs.Escena_323Code.GDTransparentLightJoystickObjects2.length = 0;


return;

}

gdjs['Escena_323Code'] = gdjs.Escena_323Code;
