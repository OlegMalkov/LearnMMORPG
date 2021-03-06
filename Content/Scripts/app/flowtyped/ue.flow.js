declare class LightMapTexture2D mixins Texture2D {
  static Load(ResourceName: string): LightMapTexture2D;
  static Find(Outer: UObject, ResourceName: string): LightMapTexture2D;
  static GetDefaultObject(): LightMapTexture2D;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightMapTexture2D;
  static C(Other: UObject | any): LightMapTexture2D;
}
declare class LightmassCharacterIndirectDetailVolume mixins Volume {
  static GetDefaultObject(): LightmassCharacterIndirectDetailVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightmassCharacterIndirectDetailVolume;
  static C(Other: UObject | any): LightmassCharacterIndirectDetailVolume;
}
declare class LightmassImportanceVolume mixins Volume {
  static GetDefaultObject(): LightmassImportanceVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightmassImportanceVolume;
  static C(Other: UObject | any): LightmassImportanceVolume;
}
declare class LightmassPortalComponent mixins SceneComponent {
  PreviewBox: BoxComponent;
  static Load(ResourceName: string): LightmassPortalComponent;
  static Find(Outer: UObject, ResourceName: string): LightmassPortalComponent;
  static GetDefaultObject(): LightmassPortalComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightmassPortalComponent;
  static C(Other: UObject | any): LightmassPortalComponent;
}
declare class LightmassPortal mixins Actor {
  PortalComponent: LightmassPortalComponent;
  SpriteComponent: BillboardComponent;
  static GetDefaultObject(): LightmassPortal;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightmassPortal;
  static C(Other: UObject | any): LightmassPortal;
}
declare class LightmassPrimitiveSettingsObject mixins UObject {
  LightmassSettings: LightmassPrimitiveSettings;
  static Load(ResourceName: string): LightmassPrimitiveSettingsObject;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LightmassPrimitiveSettingsObject;
  static GetDefaultObject(): LightmassPrimitiveSettingsObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightmassPrimitiveSettingsObject;
  static C(Other: UObject | any): LightmassPrimitiveSettingsObject;
}
declare class LODActor mixins Actor {
  StaticMeshComponent: StaticMeshComponent;
  Proxy: HLODProxy;
  Key: string;
  LODDrawDistance: number;
  LODLevel: number;
  SubActors: Actor[];
  CachedNumHLODLevels: number;
  NumTrianglesInSubActors: any;
  NumTrianglesInMergedMesh: any;
  bOverrideMaterialMergeSettings: boolean;
  MaterialSettings: MaterialProxySettings;
  bOverrideTransitionScreenSize: boolean;
  TransitionScreenSize: number;
  bOverrideScreenSize: boolean;
  ScreenSize: number;
  static GetDefaultObject(): LODActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LODActor;
  static C(Other: UObject | any): LODActor;
}
declare class MaterialExpressionAbs mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionAbs;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionAbs;
  static GetDefaultObject(): MaterialExpressionAbs;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAbs;
  static C(Other: UObject | any): MaterialExpressionAbs;
}
declare class MaterialExpressionActorPositionWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionActorPositionWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionActorPositionWS;
  static GetDefaultObject(): MaterialExpressionActorPositionWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionActorPositionWS;
  static C(Other: UObject | any): MaterialExpressionActorPositionWS;
}
declare class MaterialExpressionAdd mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  ConstA: number;
  ConstB: number;
  static Load(ResourceName: string): MaterialExpressionAdd;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionAdd;
  static GetDefaultObject(): MaterialExpressionAdd;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAdd;
  static C(Other: UObject | any): MaterialExpressionAdd;
}
declare type EMaterialSamplerTypeT =
  | "SAMPLERTYPE_Color"
  | "SAMPLERTYPE_Grayscale"
  | "SAMPLERTYPE_Alpha"
  | "SAMPLERTYPE_Normal"
  | "SAMPLERTYPE_Masks"
  | "SAMPLERTYPE_DistanceFieldFont"
  | "SAMPLERTYPE_LinearColor"
  | "SAMPLERTYPE_LinearGrayscale"
  | "SAMPLERTYPE_External"
  | "SAMPLERTYPE_MAX";
declare var EMaterialSamplerType: {
  SAMPLERTYPE_Color: "SAMPLERTYPE_Color",
  SAMPLERTYPE_Grayscale: "SAMPLERTYPE_Grayscale",
  SAMPLERTYPE_Alpha: "SAMPLERTYPE_Alpha",
  SAMPLERTYPE_Normal: "SAMPLERTYPE_Normal",
  SAMPLERTYPE_Masks: "SAMPLERTYPE_Masks",
  SAMPLERTYPE_DistanceFieldFont: "SAMPLERTYPE_DistanceFieldFont",
  SAMPLERTYPE_LinearColor: "SAMPLERTYPE_LinearColor",
  SAMPLERTYPE_LinearGrayscale: "SAMPLERTYPE_LinearGrayscale",
  SAMPLERTYPE_External: "SAMPLERTYPE_External",
  SAMPLERTYPE_MAX: "SAMPLERTYPE_MAX"
};
declare class MaterialExpressionTextureBase mixins MaterialExpression {
  Texture: Texture;
  SamplerType: EMaterialSamplerTypeT;
  IsDefaultMeshpaintTexture: boolean;
  static Load(ResourceName: string): MaterialExpressionTextureBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureBase;
  static GetDefaultObject(): MaterialExpressionTextureBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureBase;
  static C(Other: UObject | any): MaterialExpressionTextureBase;
}
declare type ETextureMipValueModeT =
  | "TMVM_None"
  | "TMVM_MipLevel"
  | "TMVM_MipBias"
  | "TMVM_Derivative"
  | "TMVM_MAX";
declare var ETextureMipValueMode: {
  TMVM_None: "TMVM_None",
  TMVM_MipLevel: "TMVM_MipLevel",
  TMVM_MipBias: "TMVM_MipBias",
  TMVM_Derivative: "TMVM_Derivative",
  TMVM_MAX: "TMVM_MAX"
};
declare type ESamplerSourceModeT =
  | "SSM_FromTextureAsset"
  | "SSM_Wrap_WorldGroupSettings"
  | "SSM_Clamp_WorldGroupSettings"
  | "SSM_MAX";
declare var ESamplerSourceMode: {
  SSM_FromTextureAsset: "SSM_FromTextureAsset",
  SSM_Wrap_WorldGroupSettings: "SSM_Wrap_WorldGroupSettings",
  SSM_Clamp_WorldGroupSettings: "SSM_Clamp_WorldGroupSettings",
  SSM_MAX: "SSM_MAX"
};
declare class MaterialExpressionTextureSample
  mixins MaterialExpressionTextureBase {
  Coordinates: ExpressionInput;
  TextureObject: ExpressionInput;
  MipValue: ExpressionInput;
  CoordinatesDX: ExpressionInput;
  CoordinatesDY: ExpressionInput;
  AutomaticViewMipBiasValue: ExpressionInput;
  MipValueMode: ETextureMipValueModeT;
  SamplerSource: ESamplerSourceModeT;
  ConstCoordinate: any;
  ConstMipValue: number;
  AutomaticViewMipBias: boolean;
  static Load(ResourceName: string): MaterialExpressionTextureSample;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureSample;
  static GetDefaultObject(): MaterialExpressionTextureSample;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureSample;
  static C(Other: UObject | any): MaterialExpressionTextureSample;
}
declare class MaterialExpressionTextureSampleParameter
  mixins MaterialExpressionTextureSample {
  ParameterName: string;
  ExpressionGUID: Guid;
  Group: string;
  SortPriority: number;
  static Load(ResourceName: string): MaterialExpressionTextureSampleParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureSampleParameter;
  static GetDefaultObject(): MaterialExpressionTextureSampleParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureSampleParameter;
  static C(Other: UObject | any): MaterialExpressionTextureSampleParameter;
}
declare class MaterialExpressionTextureSampleParameter2D
  mixins MaterialExpressionTextureSampleParameter {
  static Load(ResourceName: string): MaterialExpressionTextureSampleParameter2D;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureSampleParameter2D;
  static GetDefaultObject(): MaterialExpressionTextureSampleParameter2D;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureSampleParameter2D;
  static C(Other: UObject | any): MaterialExpressionTextureSampleParameter2D;
}
declare type ETextureColorChannelT =
  | "TCC_Red"
  | "TCC_Green"
  | "TCC_Blue"
  | "TCC_Alpha"
  | "TCC_MAX";
declare var ETextureColorChannel: {
  TCC_Red: "TCC_Red",
  TCC_Green: "TCC_Green",
  TCC_Blue: "TCC_Blue",
  TCC_Alpha: "TCC_Alpha",
  TCC_MAX: "TCC_MAX"
};
declare class MaterialExpressionAntialiasedTextureMask
  mixins MaterialExpressionTextureSampleParameter2D {
  Threshold: number;
  Channel: ETextureColorChannelT;
  static Load(ResourceName: string): MaterialExpressionAntialiasedTextureMask;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionAntialiasedTextureMask;
  static GetDefaultObject(): MaterialExpressionAntialiasedTextureMask;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAntialiasedTextureMask;
  static C(Other: UObject | any): MaterialExpressionAntialiasedTextureMask;
}
declare class MaterialExpressionAppendVector mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionAppendVector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionAppendVector;
  static GetDefaultObject(): MaterialExpressionAppendVector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAppendVector;
  static C(Other: UObject | any): MaterialExpressionAppendVector;
}
declare class MaterialExpressionArccosine mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArccosine;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArccosine;
  static GetDefaultObject(): MaterialExpressionArccosine;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArccosine;
  static C(Other: UObject | any): MaterialExpressionArccosine;
}
declare class MaterialExpressionArccosineFast mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArccosineFast;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArccosineFast;
  static GetDefaultObject(): MaterialExpressionArccosineFast;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArccosineFast;
  static C(Other: UObject | any): MaterialExpressionArccosineFast;
}
declare class MaterialExpressionArcsine mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArcsine;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionArcsine;
  static GetDefaultObject(): MaterialExpressionArcsine;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArcsine;
  static C(Other: UObject | any): MaterialExpressionArcsine;
}
declare class MaterialExpressionArcsineFast mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArcsineFast;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArcsineFast;
  static GetDefaultObject(): MaterialExpressionArcsineFast;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArcsineFast;
  static C(Other: UObject | any): MaterialExpressionArcsineFast;
}
declare class MaterialExpressionArctangent mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArctangent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArctangent;
  static GetDefaultObject(): MaterialExpressionArctangent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArctangent;
  static C(Other: UObject | any): MaterialExpressionArctangent;
}
declare class MaterialExpressionArctangent2 mixins MaterialExpression {
  Y: ExpressionInput;
  X: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArctangent2;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArctangent2;
  static GetDefaultObject(): MaterialExpressionArctangent2;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArctangent2;
  static C(Other: UObject | any): MaterialExpressionArctangent2;
}
declare class MaterialExpressionArctangent2Fast mixins MaterialExpression {
  Y: ExpressionInput;
  X: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArctangent2Fast;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArctangent2Fast;
  static GetDefaultObject(): MaterialExpressionArctangent2Fast;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArctangent2Fast;
  static C(Other: UObject | any): MaterialExpressionArctangent2Fast;
}
declare class MaterialExpressionArctangentFast mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionArctangentFast;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionArctangentFast;
  static GetDefaultObject(): MaterialExpressionArctangentFast;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionArctangentFast;
  static C(Other: UObject | any): MaterialExpressionArctangentFast;
}
declare class MaterialExpressionAtmosphericFogColor mixins MaterialExpression {
  WorldPosition: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionAtmosphericFogColor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionAtmosphericFogColor;
  static GetDefaultObject(): MaterialExpressionAtmosphericFogColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAtmosphericFogColor;
  static C(Other: UObject | any): MaterialExpressionAtmosphericFogColor;
}
declare class MaterialExpressionAtmosphericLightColor
  mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionAtmosphericLightColor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionAtmosphericLightColor;
  static GetDefaultObject(): MaterialExpressionAtmosphericLightColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAtmosphericLightColor;
  static C(Other: UObject | any): MaterialExpressionAtmosphericLightColor;
}
declare class MaterialExpressionAtmosphericLightVector
  mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionAtmosphericLightVector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionAtmosphericLightVector;
  static GetDefaultObject(): MaterialExpressionAtmosphericLightVector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionAtmosphericLightVector;
  static C(Other: UObject | any): MaterialExpressionAtmosphericLightVector;
}
declare class MaterialExpressionBentNormalCustomOutput
  mixins MaterialExpressionCustomOutput {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionBentNormalCustomOutput;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionBentNormalCustomOutput;
  static GetDefaultObject(): MaterialExpressionBentNormalCustomOutput;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionBentNormalCustomOutput;
  static C(Other: UObject | any): MaterialExpressionBentNormalCustomOutput;
}
declare class MaterialExpressionBlackBody mixins MaterialExpression {
  Temp: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionBlackBody;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionBlackBody;
  static GetDefaultObject(): MaterialExpressionBlackBody;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionBlackBody;
  static C(Other: UObject | any): MaterialExpressionBlackBody;
}
declare type EMaterialAttributeBlendT =
  | "Blend"
  | "UseA"
  | "UseB"
  | "EMaterialAttributeBlend_MAX";
declare var EMaterialAttributeBlend: {
  Blend: "Blend",
  UseA: "UseA",
  UseB: "UseB",
  EMaterialAttributeBlend_MAX: "EMaterialAttributeBlend_MAX"
};
declare class MaterialExpressionBlendMaterialAttributes
  mixins MaterialExpression {
  A: MaterialAttributesInput;
  B: MaterialAttributesInput;
  Alpha: ExpressionInput;
  PixelAttributeBlendType: EMaterialAttributeBlendT;
  VertexAttributeBlendType: EMaterialAttributeBlendT;
  static Load(ResourceName: string): MaterialExpressionBlendMaterialAttributes;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionBlendMaterialAttributes;
  static GetDefaultObject(): MaterialExpressionBlendMaterialAttributes;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionBlendMaterialAttributes;
  static C(Other: UObject | any): MaterialExpressionBlendMaterialAttributes;
}
declare class MaterialExpressionBreakMaterialAttributes
  mixins MaterialExpression {
  MaterialAttributes: MaterialAttributesInput;
  static Load(ResourceName: string): MaterialExpressionBreakMaterialAttributes;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionBreakMaterialAttributes;
  static GetDefaultObject(): MaterialExpressionBreakMaterialAttributes;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionBreakMaterialAttributes;
  static C(Other: UObject | any): MaterialExpressionBreakMaterialAttributes;
}
declare class MaterialExpressionBumpOffset mixins MaterialExpression {
  Coordinate: ExpressionInput;
  Height: ExpressionInput;
  HeightRatioInput: ExpressionInput;
  HeightRatio: number;
  ReferencePlane: number;
  ConstCoordinate: any;
  static Load(ResourceName: string): MaterialExpressionBumpOffset;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionBumpOffset;
  static GetDefaultObject(): MaterialExpressionBumpOffset;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionBumpOffset;
  static C(Other: UObject | any): MaterialExpressionBumpOffset;
}
declare class MaterialExpressionCameraPositionWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionCameraPositionWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionCameraPositionWS;
  static GetDefaultObject(): MaterialExpressionCameraPositionWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCameraPositionWS;
  static C(Other: UObject | any): MaterialExpressionCameraPositionWS;
}
declare class MaterialExpressionCameraVectorWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionCameraVectorWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionCameraVectorWS;
  static GetDefaultObject(): MaterialExpressionCameraVectorWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCameraVectorWS;
  static C(Other: UObject | any): MaterialExpressionCameraVectorWS;
}
declare class MaterialExpressionCeil mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionCeil;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionCeil;
  static GetDefaultObject(): MaterialExpressionCeil;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCeil;
  static C(Other: UObject | any): MaterialExpressionCeil;
}
declare class MaterialExpressionParameter mixins MaterialExpression {
  ParameterName: string;
  ExpressionGUID: Guid;
  Group: string;
  SortPriority: number;
  static Load(ResourceName: string): MaterialExpressionParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParameter;
  static GetDefaultObject(): MaterialExpressionParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParameter;
  static C(Other: UObject | any): MaterialExpressionParameter;
}
declare class MaterialExpressionVectorParameter
  mixins MaterialExpressionParameter {
  DefaultValue: LinearColor;
  static Load(ResourceName: string): MaterialExpressionVectorParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionVectorParameter;
  static GetDefaultObject(): MaterialExpressionVectorParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionVectorParameter;
  static C(Other: UObject | any): MaterialExpressionVectorParameter;
}
declare type EChannelMaskParameterColorT =
  | "Red"
  | "Green"
  | "Blue"
  | "Alpha"
  | "EChannelMaskParameterColor_MAX";
declare var EChannelMaskParameterColor: {
  Red: "Red",
  Green: "Green",
  Blue: "Blue",
  Alpha: "Alpha",
  EChannelMaskParameterColor_MAX: "EChannelMaskParameterColor_MAX"
};
declare class MaterialExpressionChannelMaskParameter
  mixins MaterialExpressionVectorParameter {
  MaskChannel: EChannelMaskParameterColorT;
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionChannelMaskParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionChannelMaskParameter;
  static GetDefaultObject(): MaterialExpressionChannelMaskParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionChannelMaskParameter;
  static C(Other: UObject | any): MaterialExpressionChannelMaskParameter;
}
declare type EClampModeT =
  | "CMODE_Clamp"
  | "CMODE_ClampMin"
  | "CMODE_ClampMax"
  | "CMODE_MAX";
declare var EClampMode: {
  CMODE_Clamp: "CMODE_Clamp",
  CMODE_ClampMin: "CMODE_ClampMin",
  CMODE_ClampMax: "CMODE_ClampMax",
  CMODE_MAX: "CMODE_MAX"
};
declare class MaterialExpressionClamp mixins MaterialExpression {
  Input: ExpressionInput;
  Min: ExpressionInput;
  Max: ExpressionInput;
  ClampMode: EClampModeT;
  MinDefault: number;
  MaxDefault: number;
  static Load(ResourceName: string): MaterialExpressionClamp;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionClamp;
  static GetDefaultObject(): MaterialExpressionClamp;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionClamp;
  static C(Other: UObject | any): MaterialExpressionClamp;
}
declare class MaterialExpressionClearCoatNormalCustomOutput
  mixins MaterialExpressionCustomOutput {
  Input: ExpressionInput;
  static Load(
    ResourceName: string
  ): MaterialExpressionClearCoatNormalCustomOutput;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionClearCoatNormalCustomOutput;
  static GetDefaultObject(): MaterialExpressionClearCoatNormalCustomOutput;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionClearCoatNormalCustomOutput;
  static C(Other: UObject | any): MaterialExpressionClearCoatNormalCustomOutput;
}
declare class MaterialExpressionCollectionParameter mixins MaterialExpression {
  Collection: MaterialParameterCollection;
  ParameterName: string;
  ParameterId: Guid;
  static Load(ResourceName: string): MaterialExpressionCollectionParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionCollectionParameter;
  static GetDefaultObject(): MaterialExpressionCollectionParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCollectionParameter;
  static C(Other: UObject | any): MaterialExpressionCollectionParameter;
}
declare class MaterialExpressionComponentMask mixins MaterialExpression {
  Input: ExpressionInput;
  R: boolean;
  G: boolean;
  B: boolean;
  A: boolean;
  static Load(ResourceName: string): MaterialExpressionComponentMask;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionComponentMask;
  static GetDefaultObject(): MaterialExpressionComponentMask;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionComponentMask;
  static C(Other: UObject | any): MaterialExpressionComponentMask;
}
declare class MaterialExpressionConstant mixins MaterialExpression {
  R: number;
  static Load(ResourceName: string): MaterialExpressionConstant;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionConstant;
  static GetDefaultObject(): MaterialExpressionConstant;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionConstant;
  static C(Other: UObject | any): MaterialExpressionConstant;
}
declare class MaterialExpressionConstant2Vector mixins MaterialExpression {
  R: number;
  G: number;
  static Load(ResourceName: string): MaterialExpressionConstant2Vector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionConstant2Vector;
  static GetDefaultObject(): MaterialExpressionConstant2Vector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionConstant2Vector;
  static C(Other: UObject | any): MaterialExpressionConstant2Vector;
}
declare class MaterialExpressionConstant3Vector mixins MaterialExpression {
  Constant: LinearColor;
  static Load(ResourceName: string): MaterialExpressionConstant3Vector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionConstant3Vector;
  static GetDefaultObject(): MaterialExpressionConstant3Vector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionConstant3Vector;
  static C(Other: UObject | any): MaterialExpressionConstant3Vector;
}
declare class MaterialExpressionConstant4Vector mixins MaterialExpression {
  Constant: LinearColor;
  static Load(ResourceName: string): MaterialExpressionConstant4Vector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionConstant4Vector;
  static GetDefaultObject(): MaterialExpressionConstant4Vector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionConstant4Vector;
  static C(Other: UObject | any): MaterialExpressionConstant4Vector;
}
declare class MaterialExpressionConstantBiasScale mixins MaterialExpression {
  Input: ExpressionInput;
  Bias: number;
  Scale: number;
  static Load(ResourceName: string): MaterialExpressionConstantBiasScale;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionConstantBiasScale;
  static GetDefaultObject(): MaterialExpressionConstantBiasScale;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionConstantBiasScale;
  static C(Other: UObject | any): MaterialExpressionConstantBiasScale;
}
declare class MaterialExpressionCosine mixins MaterialExpression {
  Input: ExpressionInput;
  Period: number;
  static Load(ResourceName: string): MaterialExpressionCosine;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionCosine;
  static GetDefaultObject(): MaterialExpressionCosine;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCosine;
  static C(Other: UObject | any): MaterialExpressionCosine;
}
declare class MaterialExpressionCrossProduct mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionCrossProduct;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionCrossProduct;
  static GetDefaultObject(): MaterialExpressionCrossProduct;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCrossProduct;
  static C(Other: UObject | any): MaterialExpressionCrossProduct;
}
declare class MaterialExpressionScalarParameter
  mixins MaterialExpressionParameter {
  DefaultValue: number;
  SliderMin: number;
  SliderMax: number;
  static Load(ResourceName: string): MaterialExpressionScalarParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionScalarParameter;
  static GetDefaultObject(): MaterialExpressionScalarParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionScalarParameter;
  static C(Other: UObject | any): MaterialExpressionScalarParameter;
}
declare class MaterialExpressionCurveAtlasRowParameter
  mixins MaterialExpressionScalarParameter {
  Curve: CurveLinearColor;
  Atlas: CurveLinearColorAtlas;
  InputTime: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionCurveAtlasRowParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionCurveAtlasRowParameter;
  static GetDefaultObject(): MaterialExpressionCurveAtlasRowParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCurveAtlasRowParameter;
  static C(Other: UObject | any): MaterialExpressionCurveAtlasRowParameter;
}
declare type ECustomMaterialOutputTypeT =
  | "CMOT_Float1"
  | "CMOT_Float2"
  | "CMOT_Float3"
  | "CMOT_Float4"
  | "CMOT_MAX";
declare var ECustomMaterialOutputType: {
  CMOT_Float1: "CMOT_Float1",
  CMOT_Float2: "CMOT_Float2",
  CMOT_Float3: "CMOT_Float3",
  CMOT_Float4: "CMOT_Float4",
  CMOT_MAX: "CMOT_MAX"
};
declare class CustomInput {
  InputName: string;
  Input: ExpressionInput;
  clone(): CustomInput;
  static C(Other: UObject | any): CustomInput;
}
declare class MaterialExpressionCustom mixins MaterialExpression {
  Code: string;
  OutputType: ECustomMaterialOutputTypeT;
  Description: string;
  Inputs: CustomInput[];
  static Load(ResourceName: string): MaterialExpressionCustom;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionCustom;
  static GetDefaultObject(): MaterialExpressionCustom;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionCustom;
  static C(Other: UObject | any): MaterialExpressionCustom;
}
declare class MaterialExpressionDDX mixins MaterialExpression {
  Value: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDDX;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionDDX;
  static GetDefaultObject(): MaterialExpressionDDX;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDDX;
  static C(Other: UObject | any): MaterialExpressionDDX;
}
declare class MaterialExpressionDDY mixins MaterialExpression {
  Value: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDDY;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionDDY;
  static GetDefaultObject(): MaterialExpressionDDY;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDDY;
  static C(Other: UObject | any): MaterialExpressionDDY;
}
declare class MaterialExpressionDecalDerivative mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionDecalDerivative;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDecalDerivative;
  static GetDefaultObject(): MaterialExpressionDecalDerivative;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDecalDerivative;
  static C(Other: UObject | any): MaterialExpressionDecalDerivative;
}
declare class MaterialExpressionDecalLifetimeOpacity mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionDecalLifetimeOpacity;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDecalLifetimeOpacity;
  static GetDefaultObject(): MaterialExpressionDecalLifetimeOpacity;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDecalLifetimeOpacity;
  static C(Other: UObject | any): MaterialExpressionDecalLifetimeOpacity;
}
declare class MaterialExpressionDecalMipmapLevel mixins MaterialExpression {
  TextureSize: ExpressionInput;
  ConstWidth: number;
  ConstHeight: number;
  static Load(ResourceName: string): MaterialExpressionDecalMipmapLevel;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDecalMipmapLevel;
  static GetDefaultObject(): MaterialExpressionDecalMipmapLevel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDecalMipmapLevel;
  static C(Other: UObject | any): MaterialExpressionDecalMipmapLevel;
}
declare class MaterialExpressionDeltaTime mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionDeltaTime;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDeltaTime;
  static GetDefaultObject(): MaterialExpressionDeltaTime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDeltaTime;
  static C(Other: UObject | any): MaterialExpressionDeltaTime;
}
declare class MaterialExpressionDepthFade mixins MaterialExpression {
  InOpacity: ExpressionInput;
  FadeDistance: ExpressionInput;
  OpacityDefault: number;
  FadeDistanceDefault: number;
  static Load(ResourceName: string): MaterialExpressionDepthFade;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDepthFade;
  static GetDefaultObject(): MaterialExpressionDepthFade;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDepthFade;
  static C(Other: UObject | any): MaterialExpressionDepthFade;
}
declare type EDepthOfFieldFunctionValueT =
  | "TDOF_NearAndFarMask"
  | "TDOF_NearMask"
  | "TDOF_FarMask"
  | "TDOF_CircleOfConfusionRadius"
  | "TDOF_MAX";
declare var EDepthOfFieldFunctionValue: {
  TDOF_NearAndFarMask: "TDOF_NearAndFarMask",
  TDOF_NearMask: "TDOF_NearMask",
  TDOF_FarMask: "TDOF_FarMask",
  TDOF_CircleOfConfusionRadius: "TDOF_CircleOfConfusionRadius",
  TDOF_MAX: "TDOF_MAX"
};
declare class MaterialExpressionDepthOfFieldFunction mixins MaterialExpression {
  FunctionValue: EDepthOfFieldFunctionValueT;
  Depth: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDepthOfFieldFunction;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDepthOfFieldFunction;
  static GetDefaultObject(): MaterialExpressionDepthOfFieldFunction;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDepthOfFieldFunction;
  static C(Other: UObject | any): MaterialExpressionDepthOfFieldFunction;
}
declare class MaterialExpressionDeriveNormalZ mixins MaterialExpression {
  InXY: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDeriveNormalZ;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDeriveNormalZ;
  static GetDefaultObject(): MaterialExpressionDeriveNormalZ;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDeriveNormalZ;
  static C(Other: UObject | any): MaterialExpressionDeriveNormalZ;
}
declare class MaterialExpressionDesaturation mixins MaterialExpression {
  Input: ExpressionInput;
  Fraction: ExpressionInput;
  LuminanceFactors: LinearColor;
  static Load(ResourceName: string): MaterialExpressionDesaturation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDesaturation;
  static GetDefaultObject(): MaterialExpressionDesaturation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDesaturation;
  static C(Other: UObject | any): MaterialExpressionDesaturation;
}
declare class MaterialExpressionDistance mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDistance;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionDistance;
  static GetDefaultObject(): MaterialExpressionDistance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDistance;
  static C(Other: UObject | any): MaterialExpressionDistance;
}
declare class MaterialExpressionDistanceCullFade mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionDistanceCullFade;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDistanceCullFade;
  static GetDefaultObject(): MaterialExpressionDistanceCullFade;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDistanceCullFade;
  static C(Other: UObject | any): MaterialExpressionDistanceCullFade;
}
declare class MaterialExpressionDistanceFieldGradient
  mixins MaterialExpression {
  Position: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDistanceFieldGradient;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDistanceFieldGradient;
  static GetDefaultObject(): MaterialExpressionDistanceFieldGradient;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDistanceFieldGradient;
  static C(Other: UObject | any): MaterialExpressionDistanceFieldGradient;
}
declare class MaterialExpressionDistanceToNearestSurface
  mixins MaterialExpression {
  Position: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDistanceToNearestSurface;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDistanceToNearestSurface;
  static GetDefaultObject(): MaterialExpressionDistanceToNearestSurface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDistanceToNearestSurface;
  static C(Other: UObject | any): MaterialExpressionDistanceToNearestSurface;
}
declare class MaterialExpressionDivide mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  ConstA: number;
  ConstB: number;
  static Load(ResourceName: string): MaterialExpressionDivide;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionDivide;
  static GetDefaultObject(): MaterialExpressionDivide;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDivide;
  static C(Other: UObject | any): MaterialExpressionDivide;
}
declare class MaterialExpressionDotProduct mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionDotProduct;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDotProduct;
  static GetDefaultObject(): MaterialExpressionDotProduct;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDotProduct;
  static C(Other: UObject | any): MaterialExpressionDotProduct;
}
declare class MaterialExpressionDynamicParameter mixins MaterialExpression {
  ParamNames: string[];
  DefaultValue: LinearColor;
  ParameterIndex: any;
  static Load(ResourceName: string): MaterialExpressionDynamicParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionDynamicParameter;
  static GetDefaultObject(): MaterialExpressionDynamicParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionDynamicParameter;
  static C(Other: UObject | any): MaterialExpressionDynamicParameter;
}
declare class MaterialExpressionEyeAdaptation mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionEyeAdaptation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionEyeAdaptation;
  static GetDefaultObject(): MaterialExpressionEyeAdaptation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionEyeAdaptation;
  static C(Other: UObject | any): MaterialExpressionEyeAdaptation;
}
declare class MaterialExpressionFeatureLevelSwitch mixins MaterialExpression {
  Default: ExpressionInput;
  Inputs: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionFeatureLevelSwitch;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionFeatureLevelSwitch;
  static GetDefaultObject(): MaterialExpressionFeatureLevelSwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFeatureLevelSwitch;
  static C(Other: UObject | any): MaterialExpressionFeatureLevelSwitch;
}
declare class MaterialExpressionFloor mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionFloor;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionFloor;
  static GetDefaultObject(): MaterialExpressionFloor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFloor;
  static C(Other: UObject | any): MaterialExpressionFloor;
}
declare class MaterialExpressionFmod mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionFmod;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionFmod;
  static GetDefaultObject(): MaterialExpressionFmod;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFmod;
  static C(Other: UObject | any): MaterialExpressionFmod;
}
declare class MaterialExpressionFontSample mixins MaterialExpression {
  Font: Font;
  FontTexturePage: number;
  static Load(ResourceName: string): MaterialExpressionFontSample;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionFontSample;
  static GetDefaultObject(): MaterialExpressionFontSample;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFontSample;
  static C(Other: UObject | any): MaterialExpressionFontSample;
}
declare class MaterialExpressionFontSampleParameter
  mixins MaterialExpressionFontSample {
  ParameterName: string;
  ExpressionGUID: Guid;
  Group: string;
  SortPriority: number;
  static Load(ResourceName: string): MaterialExpressionFontSampleParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionFontSampleParameter;
  static GetDefaultObject(): MaterialExpressionFontSampleParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFontSampleParameter;
  static C(Other: UObject | any): MaterialExpressionFontSampleParameter;
}
declare class MaterialExpressionFrac mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionFrac;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionFrac;
  static GetDefaultObject(): MaterialExpressionFrac;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFrac;
  static C(Other: UObject | any): MaterialExpressionFrac;
}
declare class MaterialExpressionFresnel mixins MaterialExpression {
  ExponentIn: ExpressionInput;
  Exponent: number;
  BaseReflectFractionIn: ExpressionInput;
  BaseReflectFraction: number;
  Normal: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionFresnel;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionFresnel;
  static GetDefaultObject(): MaterialExpressionFresnel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFresnel;
  static C(Other: UObject | any): MaterialExpressionFresnel;
}
declare type EFunctionInputTypeT =
  | "FunctionInput_Scalar"
  | "FunctionInput_Vector2"
  | "FunctionInput_Vector3"
  | "FunctionInput_Vector4"
  | "FunctionInput_Texture2D"
  | "FunctionInput_TextureCube"
  | "FunctionInput_VolumeTexture"
  | "FunctionInput_StaticBool"
  | "FunctionInput_MaterialAttributes"
  | "FunctionInput_TextureExternal"
  | "FunctionInput_MAX";
declare var EFunctionInputType: {
  FunctionInput_Scalar: "FunctionInput_Scalar",
  FunctionInput_Vector2: "FunctionInput_Vector2",
  FunctionInput_Vector3: "FunctionInput_Vector3",
  FunctionInput_Vector4: "FunctionInput_Vector4",
  FunctionInput_Texture2D: "FunctionInput_Texture2D",
  FunctionInput_TextureCube: "FunctionInput_TextureCube",
  FunctionInput_VolumeTexture: "FunctionInput_VolumeTexture",
  FunctionInput_StaticBool: "FunctionInput_StaticBool",
  FunctionInput_MaterialAttributes: "FunctionInput_MaterialAttributes",
  FunctionInput_TextureExternal: "FunctionInput_TextureExternal",
  FunctionInput_MAX: "FunctionInput_MAX"
};
declare class MaterialExpressionFunctionInput mixins MaterialExpression {
  Preview: ExpressionInput;
  InputName: string;
  Description: string;
  ID: Guid;
  InputType: EFunctionInputTypeT;
  PreviewValue: Vector4;
  bUsePreviewValueAsDefault: boolean;
  SortPriority: number;
  bCompilingFunctionPreview: boolean;
  static Load(ResourceName: string): MaterialExpressionFunctionInput;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionFunctionInput;
  static GetDefaultObject(): MaterialExpressionFunctionInput;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFunctionInput;
  static C(Other: UObject | any): MaterialExpressionFunctionInput;
}
declare class MaterialExpressionFunctionOutput mixins MaterialExpression {
  OutputName: string;
  Description: string;
  SortPriority: number;
  A: ExpressionInput;
  bLastPreviewed: boolean;
  ID: Guid;
  static Load(ResourceName: string): MaterialExpressionFunctionOutput;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionFunctionOutput;
  static GetDefaultObject(): MaterialExpressionFunctionOutput;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionFunctionOutput;
  static C(Other: UObject | any): MaterialExpressionFunctionOutput;
}
declare class MaterialExpressionGetMaterialAttributes
  mixins MaterialExpression {
  MaterialAttributes: MaterialAttributesInput;
  AttributeGetTypes: Guid[];
  static Load(ResourceName: string): MaterialExpressionGetMaterialAttributes;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionGetMaterialAttributes;
  static GetDefaultObject(): MaterialExpressionGetMaterialAttributes;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionGetMaterialAttributes;
  static C(Other: UObject | any): MaterialExpressionGetMaterialAttributes;
}
declare class MaterialExpressionGIReplace mixins MaterialExpression {
  Default: ExpressionInput;
  StaticIndirect: ExpressionInput;
  DynamicIndirect: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionGIReplace;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionGIReplace;
  static GetDefaultObject(): MaterialExpressionGIReplace;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionGIReplace;
  static C(Other: UObject | any): MaterialExpressionGIReplace;
}
declare class MaterialExpressionIf mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  AGreaterThanB: ExpressionInput;
  AEqualsB: ExpressionInput;
  ALessThanB: ExpressionInput;
  EqualsThreshold: number;
  ConstB: number;
  ConstAEqualsB: number;
  static Load(ResourceName: string): MaterialExpressionIf;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionIf;
  static GetDefaultObject(): MaterialExpressionIf;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionIf;
  static C(Other: UObject | any): MaterialExpressionIf;
}
declare class MaterialExpressionLightmapUVs mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionLightmapUVs;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionLightmapUVs;
  static GetDefaultObject(): MaterialExpressionLightmapUVs;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionLightmapUVs;
  static C(Other: UObject | any): MaterialExpressionLightmapUVs;
}
declare class MaterialExpressionLightmassReplace mixins MaterialExpression {
  Realtime: ExpressionInput;
  Lightmass: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionLightmassReplace;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionLightmassReplace;
  static GetDefaultObject(): MaterialExpressionLightmassReplace;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionLightmassReplace;
  static C(Other: UObject | any): MaterialExpressionLightmassReplace;
}
declare class MaterialExpressionLightVector mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionLightVector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionLightVector;
  static GetDefaultObject(): MaterialExpressionLightVector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionLightVector;
  static C(Other: UObject | any): MaterialExpressionLightVector;
}
declare class MaterialExpressionLinearInterpolate mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  Alpha: ExpressionInput;
  ConstA: number;
  ConstB: number;
  ConstAlpha: number;
  static Load(ResourceName: string): MaterialExpressionLinearInterpolate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionLinearInterpolate;
  static GetDefaultObject(): MaterialExpressionLinearInterpolate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionLinearInterpolate;
  static C(Other: UObject | any): MaterialExpressionLinearInterpolate;
}
declare class MaterialExpressionLogarithm10 mixins MaterialExpression {
  X: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionLogarithm10;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionLogarithm10;
  static GetDefaultObject(): MaterialExpressionLogarithm10;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionLogarithm10;
  static C(Other: UObject | any): MaterialExpressionLogarithm10;
}
declare class MaterialExpressionLogarithm2 mixins MaterialExpression {
  X: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionLogarithm2;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionLogarithm2;
  static GetDefaultObject(): MaterialExpressionLogarithm2;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionLogarithm2;
  static C(Other: UObject | any): MaterialExpressionLogarithm2;
}
declare class MaterialExpressionMakeMaterialAttributes
  mixins MaterialExpression {
  BaseColor: ExpressionInput;
  Metallic: ExpressionInput;
  Specular: ExpressionInput;
  Roughness: ExpressionInput;
  EmissiveColor: ExpressionInput;
  Opacity: ExpressionInput;
  OpacityMask: ExpressionInput;
  Normal: ExpressionInput;
  WorldPositionOffset: ExpressionInput;
  WorldDisplacement: ExpressionInput;
  TessellationMultiplier: ExpressionInput;
  SubsurfaceColor: ExpressionInput;
  Clearcoat: ExpressionInput;
  ClearCoatRoughness: ExpressionInput;
  AmbientOcclusion: ExpressionInput;
  Refraction: ExpressionInput;
  CustomizedUVs: ExpressionInput;
  PixelDepthOffset: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionMakeMaterialAttributes;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionMakeMaterialAttributes;
  static GetDefaultObject(): MaterialExpressionMakeMaterialAttributes;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMakeMaterialAttributes;
  static C(Other: UObject | any): MaterialExpressionMakeMaterialAttributes;
}
declare class FunctionExpressionInput {
  ExpressionInput: MaterialExpressionFunctionInput;
  ExpressionInputId: Guid;
  Input: ExpressionInput;
  clone(): FunctionExpressionInput;
  static C(Other: UObject | any): FunctionExpressionInput;
}
declare class FunctionExpressionOutput {
  ExpressionOutput: MaterialExpressionFunctionOutput;
  ExpressionOutputId: Guid;
  Output: ExpressionOutput;
  clone(): FunctionExpressionOutput;
  static C(Other: UObject | any): FunctionExpressionOutput;
}
declare class MaterialExpressionMaterialFunctionCall mixins MaterialExpression {
  MaterialFunction: MaterialFunctionInterface;
  FunctionInputs: FunctionExpressionInput[];
  FunctionOutputs: FunctionExpressionOutput[];
  FunctionParameterInfo: MaterialParameterInfo;
  static Load(ResourceName: string): MaterialExpressionMaterialFunctionCall;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionMaterialFunctionCall;
  static GetDefaultObject(): MaterialExpressionMaterialFunctionCall;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMaterialFunctionCall;
  SetMaterialFunction(NewMaterialFunction: MaterialFunctionInterface): boolean;
  static C(Other: UObject | any): MaterialExpressionMaterialFunctionCall;
}
declare class MaterialExpressionMaterialAttributeLayers
  mixins MaterialExpression {
  ParameterName: string;
  ExpressionGUID: Guid;
  Input: MaterialAttributesInput;
  DefaultLayers: MaterialLayersFunctions;
  LayerCallers: MaterialExpressionMaterialFunctionCall[];
  NumActiveLayerCallers: number;
  BlendCallers: MaterialExpressionMaterialFunctionCall[];
  NumActiveBlendCallers: number;
  bIsLayerGraphBuilt: boolean;
  static Load(ResourceName: string): MaterialExpressionMaterialAttributeLayers;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionMaterialAttributeLayers;
  static GetDefaultObject(): MaterialExpressionMaterialAttributeLayers;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMaterialAttributeLayers;
  static C(Other: UObject | any): MaterialExpressionMaterialAttributeLayers;
}
declare class MaterialExpressionMaterialLayerOutput
  mixins MaterialExpressionFunctionOutput {
  static Load(ResourceName: string): MaterialExpressionMaterialLayerOutput;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionMaterialLayerOutput;
  static GetDefaultObject(): MaterialExpressionMaterialLayerOutput;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMaterialLayerOutput;
  static C(Other: UObject | any): MaterialExpressionMaterialLayerOutput;
}
declare class MaterialExpressionMaterialProxyReplace mixins MaterialExpression {
  Realtime: ExpressionInput;
  MaterialProxy: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionMaterialProxyReplace;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionMaterialProxyReplace;
  static GetDefaultObject(): MaterialExpressionMaterialProxyReplace;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMaterialProxyReplace;
  static C(Other: UObject | any): MaterialExpressionMaterialProxyReplace;
}
declare class MaterialExpressionMax mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  ConstA: number;
  ConstB: number;
  static Load(ResourceName: string): MaterialExpressionMax;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionMax;
  static GetDefaultObject(): MaterialExpressionMax;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMax;
  static C(Other: UObject | any): MaterialExpressionMax;
}
declare class MaterialExpressionMin mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  ConstA: number;
  ConstB: number;
  static Load(ResourceName: string): MaterialExpressionMin;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionMin;
  static GetDefaultObject(): MaterialExpressionMin;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMin;
  static C(Other: UObject | any): MaterialExpressionMin;
}
declare class MaterialExpressionMultiply mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  ConstA: number;
  ConstB: number;
  static Load(ResourceName: string): MaterialExpressionMultiply;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionMultiply;
  static GetDefaultObject(): MaterialExpressionMultiply;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionMultiply;
  static C(Other: UObject | any): MaterialExpressionMultiply;
}
declare type ENoiseFunctionT =
  | "NOISEFUNCTION_SimplexTex"
  | "NOISEFUNCTION_GradientTex"
  | "NOISEFUNCTION_GradientTex3D"
  | "NOISEFUNCTION_GradientALU"
  | "NOISEFUNCTION_ValueALU"
  | "NOISEFUNCTION_VoronoiALU"
  | "NOISEFUNCTION_MAX";
declare var ENoiseFunction: {
  NOISEFUNCTION_SimplexTex: "NOISEFUNCTION_SimplexTex",
  NOISEFUNCTION_GradientTex: "NOISEFUNCTION_GradientTex",
  NOISEFUNCTION_GradientTex3D: "NOISEFUNCTION_GradientTex3D",
  NOISEFUNCTION_GradientALU: "NOISEFUNCTION_GradientALU",
  NOISEFUNCTION_ValueALU: "NOISEFUNCTION_ValueALU",
  NOISEFUNCTION_VoronoiALU: "NOISEFUNCTION_VoronoiALU",
  NOISEFUNCTION_MAX: "NOISEFUNCTION_MAX"
};
declare class MaterialExpressionNoise mixins MaterialExpression {
  Position: ExpressionInput;
  FilterWidth: ExpressionInput;
  Scale: number;
  Quality: number;
  NoiseFunction: ENoiseFunctionT;
  bTurbulence: boolean;
  Levels: number;
  OutputMin: number;
  OutputMax: number;
  LevelScale: number;
  bTiling: boolean;
  RepeatSize: any;
  static Load(ResourceName: string): MaterialExpressionNoise;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionNoise;
  static GetDefaultObject(): MaterialExpressionNoise;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionNoise;
  static C(Other: UObject | any): MaterialExpressionNoise;
}
declare class MaterialExpressionNormalize mixins MaterialExpression {
  VectorInput: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionNormalize;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionNormalize;
  static GetDefaultObject(): MaterialExpressionNormalize;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionNormalize;
  static C(Other: UObject | any): MaterialExpressionNormalize;
}
declare class MaterialExpressionObjectBounds mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionObjectBounds;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionObjectBounds;
  static GetDefaultObject(): MaterialExpressionObjectBounds;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionObjectBounds;
  static C(Other: UObject | any): MaterialExpressionObjectBounds;
}
declare class MaterialExpressionObjectOrientation mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionObjectOrientation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionObjectOrientation;
  static GetDefaultObject(): MaterialExpressionObjectOrientation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionObjectOrientation;
  static C(Other: UObject | any): MaterialExpressionObjectOrientation;
}
declare class MaterialExpressionObjectPositionWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionObjectPositionWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionObjectPositionWS;
  static GetDefaultObject(): MaterialExpressionObjectPositionWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionObjectPositionWS;
  static C(Other: UObject | any): MaterialExpressionObjectPositionWS;
}
declare class MaterialExpressionObjectRadius mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionObjectRadius;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionObjectRadius;
  static GetDefaultObject(): MaterialExpressionObjectRadius;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionObjectRadius;
  static C(Other: UObject | any): MaterialExpressionObjectRadius;
}
declare class MaterialExpressionOneMinus mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionOneMinus;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionOneMinus;
  static GetDefaultObject(): MaterialExpressionOneMinus;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionOneMinus;
  static C(Other: UObject | any): MaterialExpressionOneMinus;
}
declare class MaterialExpressionPanner mixins MaterialExpression {
  Coordinate: ExpressionInput;
  Time: ExpressionInput;
  Speed: ExpressionInput;
  SpeedX: number;
  SpeedY: number;
  ConstCoordinate: any;
  bFractionalPart: boolean;
  static Load(ResourceName: string): MaterialExpressionPanner;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionPanner;
  static GetDefaultObject(): MaterialExpressionPanner;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPanner;
  static C(Other: UObject | any): MaterialExpressionPanner;
}
declare class MaterialExpressionParticleColor mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleColor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleColor;
  static GetDefaultObject(): MaterialExpressionParticleColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleColor;
  static C(Other: UObject | any): MaterialExpressionParticleColor;
}
declare class MaterialExpressionParticleDirection mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleDirection;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleDirection;
  static GetDefaultObject(): MaterialExpressionParticleDirection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleDirection;
  static C(Other: UObject | any): MaterialExpressionParticleDirection;
}
declare class MaterialExpressionParticleMacroUV mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleMacroUV;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleMacroUV;
  static GetDefaultObject(): MaterialExpressionParticleMacroUV;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleMacroUV;
  static C(Other: UObject | any): MaterialExpressionParticleMacroUV;
}
declare class MaterialExpressionParticleMotionBlurFade
  mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleMotionBlurFade;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleMotionBlurFade;
  static GetDefaultObject(): MaterialExpressionParticleMotionBlurFade;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleMotionBlurFade;
  static C(Other: UObject | any): MaterialExpressionParticleMotionBlurFade;
}
declare class MaterialExpressionParticlePositionWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticlePositionWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticlePositionWS;
  static GetDefaultObject(): MaterialExpressionParticlePositionWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticlePositionWS;
  static C(Other: UObject | any): MaterialExpressionParticlePositionWS;
}
declare class MaterialExpressionParticleRadius mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleRadius;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleRadius;
  static GetDefaultObject(): MaterialExpressionParticleRadius;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleRadius;
  static C(Other: UObject | any): MaterialExpressionParticleRadius;
}
declare class MaterialExpressionParticleRandom mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleRandom;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleRandom;
  static GetDefaultObject(): MaterialExpressionParticleRandom;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleRandom;
  static C(Other: UObject | any): MaterialExpressionParticleRandom;
}
declare class MaterialExpressionParticleRelativeTime mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleRelativeTime;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleRelativeTime;
  static GetDefaultObject(): MaterialExpressionParticleRelativeTime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleRelativeTime;
  static C(Other: UObject | any): MaterialExpressionParticleRelativeTime;
}
declare class MaterialExpressionParticleSize mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleSize;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleSize;
  static GetDefaultObject(): MaterialExpressionParticleSize;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleSize;
  static C(Other: UObject | any): MaterialExpressionParticleSize;
}
declare class MaterialExpressionParticleSpeed mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionParticleSpeed;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleSpeed;
  static GetDefaultObject(): MaterialExpressionParticleSpeed;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleSpeed;
  static C(Other: UObject | any): MaterialExpressionParticleSpeed;
}
declare class MaterialExpressionParticleSubUV
  mixins MaterialExpressionTextureSample {
  bBlend: boolean;
  static Load(ResourceName: string): MaterialExpressionParticleSubUV;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionParticleSubUV;
  static GetDefaultObject(): MaterialExpressionParticleSubUV;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionParticleSubUV;
  static C(Other: UObject | any): MaterialExpressionParticleSubUV;
}
declare class MaterialExpressionPerInstanceFadeAmount
  mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPerInstanceFadeAmount;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPerInstanceFadeAmount;
  static GetDefaultObject(): MaterialExpressionPerInstanceFadeAmount;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPerInstanceFadeAmount;
  static C(Other: UObject | any): MaterialExpressionPerInstanceFadeAmount;
}
declare class MaterialExpressionPerInstanceRandom mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPerInstanceRandom;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPerInstanceRandom;
  static GetDefaultObject(): MaterialExpressionPerInstanceRandom;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPerInstanceRandom;
  static C(Other: UObject | any): MaterialExpressionPerInstanceRandom;
}
declare class MaterialExpressionPixelDepth mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPixelDepth;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPixelDepth;
  static GetDefaultObject(): MaterialExpressionPixelDepth;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPixelDepth;
  static C(Other: UObject | any): MaterialExpressionPixelDepth;
}
declare class MaterialExpressionPixelNormalWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPixelNormalWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPixelNormalWS;
  static GetDefaultObject(): MaterialExpressionPixelNormalWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPixelNormalWS;
  static C(Other: UObject | any): MaterialExpressionPixelNormalWS;
}
declare class MaterialExpressionPower mixins MaterialExpression {
  Base: ExpressionInput;
  Exponent: ExpressionInput;
  ConstExponent: number;
  static Load(ResourceName: string): MaterialExpressionPower;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionPower;
  static GetDefaultObject(): MaterialExpressionPower;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPower;
  static C(Other: UObject | any): MaterialExpressionPower;
}
declare class MaterialExpressionPrecomputedAOMask mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPrecomputedAOMask;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPrecomputedAOMask;
  static GetDefaultObject(): MaterialExpressionPrecomputedAOMask;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPrecomputedAOMask;
  static C(Other: UObject | any): MaterialExpressionPrecomputedAOMask;
}
declare class MaterialExpressionPreSkinnedNormal mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPreSkinnedNormal;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPreSkinnedNormal;
  static GetDefaultObject(): MaterialExpressionPreSkinnedNormal;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPreSkinnedNormal;
  static C(Other: UObject | any): MaterialExpressionPreSkinnedNormal;
}
declare class MaterialExpressionPreSkinnedPosition mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionPreSkinnedPosition;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPreSkinnedPosition;
  static GetDefaultObject(): MaterialExpressionPreSkinnedPosition;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPreSkinnedPosition;
  static C(Other: UObject | any): MaterialExpressionPreSkinnedPosition;
}
declare class MaterialExpressionPreviousFrameSwitch mixins MaterialExpression {
  CurrentFrame: ExpressionInput;
  PreviousFrame: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionPreviousFrameSwitch;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionPreviousFrameSwitch;
  static GetDefaultObject(): MaterialExpressionPreviousFrameSwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionPreviousFrameSwitch;
  static C(Other: UObject | any): MaterialExpressionPreviousFrameSwitch;
}
declare class MaterialExpressionQualitySwitch mixins MaterialExpression {
  Default: ExpressionInput;
  Inputs: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionQualitySwitch;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionQualitySwitch;
  static GetDefaultObject(): MaterialExpressionQualitySwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionQualitySwitch;
  static C(Other: UObject | any): MaterialExpressionQualitySwitch;
}
declare class MaterialExpressionRayTracingQualitySwitch
  mixins MaterialExpression {
  Normal: ExpressionInput;
  RayTraced: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionRayTracingQualitySwitch;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionRayTracingQualitySwitch;
  static GetDefaultObject(): MaterialExpressionRayTracingQualitySwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionRayTracingQualitySwitch;
  static C(Other: UObject | any): MaterialExpressionRayTracingQualitySwitch;
}
declare class MaterialExpressionReflectionVectorWS mixins MaterialExpression {
  CustomWorldNormal: ExpressionInput;
  bNormalizeCustomWorldNormal: boolean;
  static Load(ResourceName: string): MaterialExpressionReflectionVectorWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionReflectionVectorWS;
  static GetDefaultObject(): MaterialExpressionReflectionVectorWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionReflectionVectorWS;
  static C(Other: UObject | any): MaterialExpressionReflectionVectorWS;
}
declare class MaterialExpressionReroute mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionReroute;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionReroute;
  static GetDefaultObject(): MaterialExpressionReroute;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionReroute;
  static C(Other: UObject | any): MaterialExpressionReroute;
}
declare class MaterialExpressionRotateAboutAxis mixins MaterialExpression {
  NormalizedRotationAxis: ExpressionInput;
  RotationAngle: ExpressionInput;
  PivotPoint: ExpressionInput;
  Position: ExpressionInput;
  Period: number;
  static Load(ResourceName: string): MaterialExpressionRotateAboutAxis;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionRotateAboutAxis;
  static GetDefaultObject(): MaterialExpressionRotateAboutAxis;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionRotateAboutAxis;
  static C(Other: UObject | any): MaterialExpressionRotateAboutAxis;
}
declare class MaterialExpressionRotator mixins MaterialExpression {
  Coordinate: ExpressionInput;
  Time: ExpressionInput;
  CenterX: number;
  CenterY: number;
  Speed: number;
  ConstCoordinate: any;
  static Load(ResourceName: string): MaterialExpressionRotator;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionRotator;
  static GetDefaultObject(): MaterialExpressionRotator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionRotator;
  static C(Other: UObject | any): MaterialExpressionRotator;
}
declare class MaterialExpressionRound mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionRound;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionRound;
  static GetDefaultObject(): MaterialExpressionRound;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionRound;
  static C(Other: UObject | any): MaterialExpressionRound;
}
declare class MaterialExpressionSaturate mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionSaturate;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionSaturate;
  static GetDefaultObject(): MaterialExpressionSaturate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSaturate;
  static C(Other: UObject | any): MaterialExpressionSaturate;
}
declare type EMaterialSceneAttributeInputModeT =
  | "Coordinates"
  | "OffsetFraction"
  | "EMaterialSceneAttributeInputMode_MAX";
declare var EMaterialSceneAttributeInputMode: {
  Coordinates: "Coordinates",
  OffsetFraction: "OffsetFraction",
  EMaterialSceneAttributeInputMode_MAX: "EMaterialSceneAttributeInputMode_MAX"
};
declare class MaterialExpressionSceneColor mixins MaterialExpression {
  InputMode: EMaterialSceneAttributeInputModeT;
  Input: ExpressionInput;
  OffsetFraction: ExpressionInput;
  ConstInput: Vector2D;
  static Load(ResourceName: string): MaterialExpressionSceneColor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSceneColor;
  static GetDefaultObject(): MaterialExpressionSceneColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSceneColor;
  static C(Other: UObject | any): MaterialExpressionSceneColor;
}
declare class MaterialExpressionSceneDepth mixins MaterialExpression {
  InputMode: EMaterialSceneAttributeInputModeT;
  Input: ExpressionInput;
  Coordinates: ExpressionInput;
  ConstInput: Vector2D;
  static Load(ResourceName: string): MaterialExpressionSceneDepth;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSceneDepth;
  static GetDefaultObject(): MaterialExpressionSceneDepth;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSceneDepth;
  static C(Other: UObject | any): MaterialExpressionSceneDepth;
}
declare class MaterialExpressionSceneTexelSize mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionSceneTexelSize;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSceneTexelSize;
  static GetDefaultObject(): MaterialExpressionSceneTexelSize;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSceneTexelSize;
  static C(Other: UObject | any): MaterialExpressionSceneTexelSize;
}
declare type ESceneTextureIdT =
  | "PPI_SceneColor"
  | "PPI_SceneDepth"
  | "PPI_DiffuseColor"
  | "PPI_SpecularColor"
  | "PPI_SubsurfaceColor"
  | "PPI_BaseColor"
  | "PPI_Specular"
  | "PPI_Metallic"
  | "PPI_WorldNormal"
  | "PPI_SeparateTranslucency"
  | "PPI_Opacity"
  | "PPI_Roughness"
  | "PPI_MaterialAO"
  | "PPI_CustomDepth"
  | "PPI_PostProcessInput0"
  | "PPI_PostProcessInput1"
  | "PPI_PostProcessInput2"
  | "PPI_PostProcessInput3"
  | "PPI_PostProcessInput4"
  | "PPI_PostProcessInput5"
  | "PPI_PostProcessInput6"
  | "PPI_DecalMask"
  | "PPI_ShadingModelColor"
  | "PPI_ShadingModelID"
  | "PPI_AmbientOcclusion"
  | "PPI_CustomStencil"
  | "PPI_StoredBaseColor"
  | "PPI_StoredSpecular"
  | "PPI_Velocity"
  | "PPI_MAX";
declare var ESceneTextureId: {
  PPI_SceneColor: "PPI_SceneColor",
  PPI_SceneDepth: "PPI_SceneDepth",
  PPI_DiffuseColor: "PPI_DiffuseColor",
  PPI_SpecularColor: "PPI_SpecularColor",
  PPI_SubsurfaceColor: "PPI_SubsurfaceColor",
  PPI_BaseColor: "PPI_BaseColor",
  PPI_Specular: "PPI_Specular",
  PPI_Metallic: "PPI_Metallic",
  PPI_WorldNormal: "PPI_WorldNormal",
  PPI_SeparateTranslucency: "PPI_SeparateTranslucency",
  PPI_Opacity: "PPI_Opacity",
  PPI_Roughness: "PPI_Roughness",
  PPI_MaterialAO: "PPI_MaterialAO",
  PPI_CustomDepth: "PPI_CustomDepth",
  PPI_PostProcessInput0: "PPI_PostProcessInput0",
  PPI_PostProcessInput1: "PPI_PostProcessInput1",
  PPI_PostProcessInput2: "PPI_PostProcessInput2",
  PPI_PostProcessInput3: "PPI_PostProcessInput3",
  PPI_PostProcessInput4: "PPI_PostProcessInput4",
  PPI_PostProcessInput5: "PPI_PostProcessInput5",
  PPI_PostProcessInput6: "PPI_PostProcessInput6",
  PPI_DecalMask: "PPI_DecalMask",
  PPI_ShadingModelColor: "PPI_ShadingModelColor",
  PPI_ShadingModelID: "PPI_ShadingModelID",
  PPI_AmbientOcclusion: "PPI_AmbientOcclusion",
  PPI_CustomStencil: "PPI_CustomStencil",
  PPI_StoredBaseColor: "PPI_StoredBaseColor",
  PPI_StoredSpecular: "PPI_StoredSpecular",
  PPI_Velocity: "PPI_Velocity",
  PPI_MAX: "PPI_MAX"
};
declare class MaterialExpressionSceneTexture mixins MaterialExpression {
  Coordinates: ExpressionInput;
  SceneTextureId: ESceneTextureIdT;
  bFiltered: boolean;
  static Load(ResourceName: string): MaterialExpressionSceneTexture;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSceneTexture;
  static GetDefaultObject(): MaterialExpressionSceneTexture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSceneTexture;
  static C(Other: UObject | any): MaterialExpressionSceneTexture;
}
declare class MaterialExpressionScreenPosition mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionScreenPosition;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionScreenPosition;
  static GetDefaultObject(): MaterialExpressionScreenPosition;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionScreenPosition;
  static C(Other: UObject | any): MaterialExpressionScreenPosition;
}
declare class MaterialExpressionSetMaterialAttributes
  mixins MaterialExpression {
  Inputs: ExpressionInput[];
  AttributeSetTypes: Guid[];
  static Load(ResourceName: string): MaterialExpressionSetMaterialAttributes;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSetMaterialAttributes;
  static GetDefaultObject(): MaterialExpressionSetMaterialAttributes;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSetMaterialAttributes;
  static C(Other: UObject | any): MaterialExpressionSetMaterialAttributes;
}
declare class MaterialExpressionShadingPathSwitch mixins MaterialExpression {
  Default: ExpressionInput;
  Inputs: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionShadingPathSwitch;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionShadingPathSwitch;
  static GetDefaultObject(): MaterialExpressionShadingPathSwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionShadingPathSwitch;
  static C(Other: UObject | any): MaterialExpressionShadingPathSwitch;
}
declare class MaterialExpressionShadowReplace mixins MaterialExpression {
  Default: ExpressionInput;
  Shadow: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionShadowReplace;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionShadowReplace;
  static GetDefaultObject(): MaterialExpressionShadowReplace;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionShadowReplace;
  static C(Other: UObject | any): MaterialExpressionShadowReplace;
}
declare class MaterialExpressionSign mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionSign;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionSign;
  static GetDefaultObject(): MaterialExpressionSign;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSign;
  static C(Other: UObject | any): MaterialExpressionSign;
}
declare class MaterialExpressionSine mixins MaterialExpression {
  Input: ExpressionInput;
  Period: number;
  static Load(ResourceName: string): MaterialExpressionSine;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionSine;
  static GetDefaultObject(): MaterialExpressionSine;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSine;
  static C(Other: UObject | any): MaterialExpressionSine;
}
declare class MaterialExpressionSobol mixins MaterialExpression {
  Cell: ExpressionInput;
  index: ExpressionInput;
  Seed: ExpressionInput;
  ConstIndex: any;
  ConstSeed: Vector2D;
  static Load(ResourceName: string): MaterialExpressionSobol;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionSobol;
  static GetDefaultObject(): MaterialExpressionSobol;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSobol;
  static C(Other: UObject | any): MaterialExpressionSobol;
}
declare type ESpeedTreeGeometryTypeT =
  | "STG_Branch"
  | "STG_Frond"
  | "STG_Leaf"
  | "STG_FacingLeaf"
  | "STG_Billboard"
  | "STG_MAX";
declare var ESpeedTreeGeometryType: {
  STG_Branch: "STG_Branch",
  STG_Frond: "STG_Frond",
  STG_Leaf: "STG_Leaf",
  STG_FacingLeaf: "STG_FacingLeaf",
  STG_Billboard: "STG_Billboard",
  STG_MAX: "STG_MAX"
};
declare type ESpeedTreeWindTypeT =
  | "STW_None"
  | "STW_Fastest"
  | "STW_Fast"
  | "STW_Better"
  | "STW_Best"
  | "STW_Palm"
  | "STW_BestPlus"
  | "STW_MAX";
declare var ESpeedTreeWindType: {
  STW_None: "STW_None",
  STW_Fastest: "STW_Fastest",
  STW_Fast: "STW_Fast",
  STW_Better: "STW_Better",
  STW_Best: "STW_Best",
  STW_Palm: "STW_Palm",
  STW_BestPlus: "STW_BestPlus",
  STW_MAX: "STW_MAX"
};
declare type ESpeedTreeLODTypeT = "STLOD_Pop" | "STLOD_Smooth" | "STLOD_MAX";
declare var ESpeedTreeLODType: {
  STLOD_Pop: "STLOD_Pop",
  STLOD_Smooth: "STLOD_Smooth",
  STLOD_MAX: "STLOD_MAX"
};
declare class MaterialExpressionSpeedTree mixins MaterialExpression {
  GeometryInput: ExpressionInput;
  WindInput: ExpressionInput;
  LODInput: ExpressionInput;
  ExtraBendWS: ExpressionInput;
  GeometryType: ESpeedTreeGeometryTypeT;
  WindType: ESpeedTreeWindTypeT;
  LODType: ESpeedTreeLODTypeT;
  BillboardThreshold: number;
  bAccurateWindVelocities: boolean;
  static Load(ResourceName: string): MaterialExpressionSpeedTree;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSpeedTree;
  static GetDefaultObject(): MaterialExpressionSpeedTree;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSpeedTree;
  static C(Other: UObject | any): MaterialExpressionSpeedTree;
}
declare class MaterialExpressionSphereMask mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  Radius: ExpressionInput;
  Hardness: ExpressionInput;
  AttenuationRadius: number;
  HardnessPercent: number;
  static Load(ResourceName: string): MaterialExpressionSphereMask;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSphereMask;
  static GetDefaultObject(): MaterialExpressionSphereMask;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSphereMask;
  static C(Other: UObject | any): MaterialExpressionSphereMask;
}
declare class MaterialExpressionSphericalParticleOpacity
  mixins MaterialExpression {
  Density: ExpressionInput;
  ConstantDensity: number;
  static Load(ResourceName: string): MaterialExpressionSphericalParticleOpacity;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSphericalParticleOpacity;
  static GetDefaultObject(): MaterialExpressionSphericalParticleOpacity;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSphericalParticleOpacity;
  static C(Other: UObject | any): MaterialExpressionSphericalParticleOpacity;
}
declare class MaterialExpressionSquareRoot mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionSquareRoot;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSquareRoot;
  static GetDefaultObject(): MaterialExpressionSquareRoot;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSquareRoot;
  static C(Other: UObject | any): MaterialExpressionSquareRoot;
}
declare class MaterialExpressionStaticBool mixins MaterialExpression {
  Value: boolean;
  static Load(ResourceName: string): MaterialExpressionStaticBool;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionStaticBool;
  static GetDefaultObject(): MaterialExpressionStaticBool;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionStaticBool;
  static C(Other: UObject | any): MaterialExpressionStaticBool;
}
declare class MaterialExpressionStaticBoolParameter
  mixins MaterialExpressionParameter {
  DefaultValue: boolean;
  static Load(ResourceName: string): MaterialExpressionStaticBoolParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionStaticBoolParameter;
  static GetDefaultObject(): MaterialExpressionStaticBoolParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionStaticBoolParameter;
  static C(Other: UObject | any): MaterialExpressionStaticBoolParameter;
}
declare class MaterialExpressionStaticComponentMaskParameter
  mixins MaterialExpressionParameter {
  Input: ExpressionInput;
  DefaultR: boolean;
  DefaultG: boolean;
  DefaultB: boolean;
  DefaultA: boolean;
  static Load(
    ResourceName: string
  ): MaterialExpressionStaticComponentMaskParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionStaticComponentMaskParameter;
  static GetDefaultObject(): MaterialExpressionStaticComponentMaskParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionStaticComponentMaskParameter;
  static C(
    Other: UObject | any
  ): MaterialExpressionStaticComponentMaskParameter;
}
declare class MaterialExpressionStaticSwitch mixins MaterialExpression {
  DefaultValue: boolean;
  A: ExpressionInput;
  B: ExpressionInput;
  Value: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionStaticSwitch;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionStaticSwitch;
  static GetDefaultObject(): MaterialExpressionStaticSwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionStaticSwitch;
  static C(Other: UObject | any): MaterialExpressionStaticSwitch;
}
declare class MaterialExpressionStaticSwitchParameter
  mixins MaterialExpressionStaticBoolParameter {
  A: ExpressionInput;
  B: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionStaticSwitchParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionStaticSwitchParameter;
  static GetDefaultObject(): MaterialExpressionStaticSwitchParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionStaticSwitchParameter;
  static C(Other: UObject | any): MaterialExpressionStaticSwitchParameter;
}
declare class MaterialExpressionSubtract mixins MaterialExpression {
  A: ExpressionInput;
  B: ExpressionInput;
  ConstA: number;
  ConstB: number;
  static Load(ResourceName: string): MaterialExpressionSubtract;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionSubtract;
  static GetDefaultObject(): MaterialExpressionSubtract;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSubtract;
  static C(Other: UObject | any): MaterialExpressionSubtract;
}
declare class MaterialExpressionTangent mixins MaterialExpression {
  Input: ExpressionInput;
  Period: number;
  static Load(ResourceName: string): MaterialExpressionTangent;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionTangent;
  static GetDefaultObject(): MaterialExpressionTangent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTangent;
  static C(Other: UObject | any): MaterialExpressionTangent;
}
declare class MaterialExpressionTangentOutput
  mixins MaterialExpressionCustomOutput {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionTangentOutput;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTangentOutput;
  static GetDefaultObject(): MaterialExpressionTangentOutput;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTangentOutput;
  static C(Other: UObject | any): MaterialExpressionTangentOutput;
}
declare class MaterialExpressionTemporalSobol mixins MaterialExpression {
  index: ExpressionInput;
  Seed: ExpressionInput;
  ConstIndex: any;
  ConstSeed: Vector2D;
  static Load(ResourceName: string): MaterialExpressionTemporalSobol;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTemporalSobol;
  static GetDefaultObject(): MaterialExpressionTemporalSobol;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTemporalSobol;
  static C(Other: UObject | any): MaterialExpressionTemporalSobol;
}
declare class MaterialExpressionTextureCoordinate mixins MaterialExpression {
  CoordinateIndex: number;
  UTiling: number;
  VTiling: number;
  UnMirrorU: boolean;
  UnMirrorV: boolean;
  static Load(ResourceName: string): MaterialExpressionTextureCoordinate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureCoordinate;
  static GetDefaultObject(): MaterialExpressionTextureCoordinate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureCoordinate;
  static C(Other: UObject | any): MaterialExpressionTextureCoordinate;
}
declare class MaterialExpressionTextureObject
  mixins MaterialExpressionTextureBase {
  static Load(ResourceName: string): MaterialExpressionTextureObject;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureObject;
  static GetDefaultObject(): MaterialExpressionTextureObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureObject;
  static C(Other: UObject | any): MaterialExpressionTextureObject;
}
declare class MaterialExpressionTextureObjectParameter
  mixins MaterialExpressionTextureSampleParameter {
  static Load(ResourceName: string): MaterialExpressionTextureObjectParameter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureObjectParameter;
  static GetDefaultObject(): MaterialExpressionTextureObjectParameter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureObjectParameter;
  static C(Other: UObject | any): MaterialExpressionTextureObjectParameter;
}
declare type EMaterialExposedTexturePropertyT =
  | "TMTM_TextureSize"
  | "TMTM_TexelSize"
  | "TMTM_MAX";
declare var EMaterialExposedTextureProperty: {
  TMTM_TextureSize: "TMTM_TextureSize",
  TMTM_TexelSize: "TMTM_TexelSize",
  TMTM_MAX: "TMTM_MAX"
};
declare class MaterialExpressionTextureProperty mixins MaterialExpression {
  TextureObject: ExpressionInput;
  Property: EMaterialExposedTexturePropertyT;
  static Load(ResourceName: string): MaterialExpressionTextureProperty;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureProperty;
  static GetDefaultObject(): MaterialExpressionTextureProperty;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureProperty;
  static C(Other: UObject | any): MaterialExpressionTextureProperty;
}
declare class MaterialExpressionTextureSampleParameterCube
  mixins MaterialExpressionTextureSampleParameter {
  static Load(
    ResourceName: string
  ): MaterialExpressionTextureSampleParameterCube;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureSampleParameterCube;
  static GetDefaultObject(): MaterialExpressionTextureSampleParameterCube;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureSampleParameterCube;
  static C(Other: UObject | any): MaterialExpressionTextureSampleParameterCube;
}
declare class MaterialExpressionTextureSampleParameterSubUV
  mixins MaterialExpressionTextureSampleParameter2D {
  bBlend: boolean;
  static Load(
    ResourceName: string
  ): MaterialExpressionTextureSampleParameterSubUV;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureSampleParameterSubUV;
  static GetDefaultObject(): MaterialExpressionTextureSampleParameterSubUV;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureSampleParameterSubUV;
  static C(Other: UObject | any): MaterialExpressionTextureSampleParameterSubUV;
}
declare class MaterialExpressionTextureSampleParameterVolume
  mixins MaterialExpressionTextureSampleParameter {
  static Load(
    ResourceName: string
  ): MaterialExpressionTextureSampleParameterVolume;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTextureSampleParameterVolume;
  static GetDefaultObject(): MaterialExpressionTextureSampleParameterVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTextureSampleParameterVolume;
  static C(
    Other: UObject | any
  ): MaterialExpressionTextureSampleParameterVolume;
}
declare class MaterialExpressionTime mixins MaterialExpression {
  bIgnorePause: boolean;
  bOverride_Period: boolean;
  Period: number;
  static Load(ResourceName: string): MaterialExpressionTime;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionTime;
  static GetDefaultObject(): MaterialExpressionTime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTime;
  static C(Other: UObject | any): MaterialExpressionTime;
}
declare type EMaterialVectorCoordTransformTSourceT =
  | "TRANSFORMSOURCE_Tangent"
  | "TRANSFORMSOURCE_Local"
  | "TRANSFORMSOURCE_World"
  | "TRANSFORMSOURCE_View"
  | "TRANSFORMSOURCE_Camera"
  | "TRANSFORMSOURCE_ParticleWorld"
  | "TRANSFORMSOURCE_MAX";
declare var EMaterialVectorCoordTransformSource: {
  TRANSFORMSOURCE_Tangent: "TRANSFORMSOURCE_Tangent",
  TRANSFORMSOURCE_Local: "TRANSFORMSOURCE_Local",
  TRANSFORMSOURCE_World: "TRANSFORMSOURCE_World",
  TRANSFORMSOURCE_View: "TRANSFORMSOURCE_View",
  TRANSFORMSOURCE_Camera: "TRANSFORMSOURCE_Camera",
  TRANSFORMSOURCE_ParticleWorld: "TRANSFORMSOURCE_ParticleWorld",
  TRANSFORMSOURCE_MAX: "TRANSFORMSOURCE_MAX"
};
declare type EMaterialVectorCoordTransformT =
  | "TRANSFORM_Tangent"
  | "TRANSFORM_Local"
  | "TRANSFORM_World"
  | "TRANSFORM_View"
  | "TRANSFORM_Camera"
  | "TRANSFORM_ParticleWorld"
  | "TRANSFORM_MAX";
declare var EMaterialVectorCoordTransform: {
  TRANSFORM_Tangent: "TRANSFORM_Tangent",
  TRANSFORM_Local: "TRANSFORM_Local",
  TRANSFORM_World: "TRANSFORM_World",
  TRANSFORM_View: "TRANSFORM_View",
  TRANSFORM_Camera: "TRANSFORM_Camera",
  TRANSFORM_ParticleWorld: "TRANSFORM_ParticleWorld",
  TRANSFORM_MAX: "TRANSFORM_MAX"
};
declare class MaterialExpressionTransform mixins MaterialExpression {
  Input: ExpressionInput;
  TransformSourceType: EMaterialVectorCoordTransformTSourceT;
  TransformType: EMaterialVectorCoordTransformT;
  static Load(ResourceName: string): MaterialExpressionTransform;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTransform;
  static GetDefaultObject(): MaterialExpressionTransform;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTransform;
  static C(Other: UObject | any): MaterialExpressionTransform;
}
declare type EMaterialPositionTransformSourceT =
  | "TRANSFORMPOSSOURCE_Local"
  | "TRANSFORMPOSSOURCE_World"
  | "TRANSFORMPOSSOURCE_TranslatedWorld"
  | "TRANSFORMPOSSOURCE_View"
  | "TRANSFORMPOSSOURCE_Camera"
  | "TRANSFORMPOSSOURCE_Particle"
  | "TRANSFORMPOSSOURCE_MAX";
declare var EMaterialPositionTransformSource: {
  TRANSFORMPOSSOURCE_Local: "TRANSFORMPOSSOURCE_Local",
  TRANSFORMPOSSOURCE_World: "TRANSFORMPOSSOURCE_World",
  TRANSFORMPOSSOURCE_TranslatedWorld: "TRANSFORMPOSSOURCE_TranslatedWorld",
  TRANSFORMPOSSOURCE_View: "TRANSFORMPOSSOURCE_View",
  TRANSFORMPOSSOURCE_Camera: "TRANSFORMPOSSOURCE_Camera",
  TRANSFORMPOSSOURCE_Particle: "TRANSFORMPOSSOURCE_Particle",
  TRANSFORMPOSSOURCE_MAX: "TRANSFORMPOSSOURCE_MAX"
};
declare class MaterialExpressionTransformPosition mixins MaterialExpression {
  Input: ExpressionInput;
  TransformSourceType: EMaterialPositionTransformSourceT;
  TransformType: EMaterialPositionTransformSourceT;
  static Load(ResourceName: string): MaterialExpressionTransformPosition;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTransformPosition;
  static GetDefaultObject(): MaterialExpressionTransformPosition;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTransformPosition;
  static C(Other: UObject | any): MaterialExpressionTransformPosition;
}
declare class MaterialExpressionTruncate mixins MaterialExpression {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionTruncate;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionTruncate;
  static GetDefaultObject(): MaterialExpressionTruncate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTruncate;
  static C(Other: UObject | any): MaterialExpressionTruncate;
}
declare class MaterialExpressionTwoSidedSign mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionTwoSidedSign;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionTwoSidedSign;
  static GetDefaultObject(): MaterialExpressionTwoSidedSign;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionTwoSidedSign;
  static C(Other: UObject | any): MaterialExpressionTwoSidedSign;
}
declare type EVectorNoiseFunctionT =
  | "VNF_CellnoiseALU"
  | "VNF_VectorALU"
  | "VNF_GradientALU"
  | "VNF_CurlALU"
  | "VNF_VoronoiALU"
  | "VNF_MAX";
declare var EVectorNoiseFunction: {
  VNF_CellnoiseALU: "VNF_CellnoiseALU",
  VNF_VectorALU: "VNF_VectorALU",
  VNF_GradientALU: "VNF_GradientALU",
  VNF_CurlALU: "VNF_CurlALU",
  VNF_VoronoiALU: "VNF_VoronoiALU",
  VNF_MAX: "VNF_MAX"
};
declare class MaterialExpressionVectorNoise mixins MaterialExpression {
  Position: ExpressionInput;
  NoiseFunction: EVectorNoiseFunctionT;
  Quality: number;
  bTiling: boolean;
  TileSize: any;
  static Load(ResourceName: string): MaterialExpressionVectorNoise;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionVectorNoise;
  static GetDefaultObject(): MaterialExpressionVectorNoise;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionVectorNoise;
  static C(Other: UObject | any): MaterialExpressionVectorNoise;
}
declare class MaterialExpressionVertexColor mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionVertexColor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionVertexColor;
  static GetDefaultObject(): MaterialExpressionVertexColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionVertexColor;
  static C(Other: UObject | any): MaterialExpressionVertexColor;
}
declare class MaterialExpressionVertexInterpolator
  mixins MaterialExpressionCustomOutput {
  Input: ExpressionInput;
  static Load(ResourceName: string): MaterialExpressionVertexInterpolator;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionVertexInterpolator;
  static GetDefaultObject(): MaterialExpressionVertexInterpolator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionVertexInterpolator;
  static C(Other: UObject | any): MaterialExpressionVertexInterpolator;
}
declare class MaterialExpressionVertexNormalWS mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionVertexNormalWS;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionVertexNormalWS;
  static GetDefaultObject(): MaterialExpressionVertexNormalWS;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionVertexNormalWS;
  static C(Other: UObject | any): MaterialExpressionVertexNormalWS;
}
declare type EMaterialExposedViewPropertyT =
  | "MEVP_BufferSize"
  | "MEVP_FieldOfView"
  | "MEVP_TanHalfFieldOfView"
  | "MEVP_ViewSize"
  | "MEVP_WorldSpaceViewPosition"
  | "MEVP_WorldSpaceCameraPosition"
  | "MEVP_ViewportOffset"
  | "MEVP_MAX";
declare var EMaterialExposedViewProperty: {
  MEVP_BufferSize: "MEVP_BufferSize",
  MEVP_FieldOfView: "MEVP_FieldOfView",
  MEVP_TanHalfFieldOfView: "MEVP_TanHalfFieldOfView",
  MEVP_ViewSize: "MEVP_ViewSize",
  MEVP_WorldSpaceViewPosition: "MEVP_WorldSpaceViewPosition",
  MEVP_WorldSpaceCameraPosition: "MEVP_WorldSpaceCameraPosition",
  MEVP_ViewportOffset: "MEVP_ViewportOffset",
  MEVP_MAX: "MEVP_MAX"
};
declare class MaterialExpressionViewProperty mixins MaterialExpression {
  Property: EMaterialExposedViewPropertyT;
  static Load(ResourceName: string): MaterialExpressionViewProperty;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionViewProperty;
  static GetDefaultObject(): MaterialExpressionViewProperty;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionViewProperty;
  static C(Other: UObject | any): MaterialExpressionViewProperty;
}
declare class MaterialExpressionViewSize mixins MaterialExpression {
  static Load(ResourceName: string): MaterialExpressionViewSize;
  static Find(Outer: UObject, ResourceName: string): MaterialExpressionViewSize;
  static GetDefaultObject(): MaterialExpressionViewSize;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionViewSize;
  static C(Other: UObject | any): MaterialExpressionViewSize;
}
declare type EWorldPositionIncludedOffsetsT =
  | "WPT_Default"
  | "WPT_ExcludeAllShaderOffsets"
  | "WPT_CameraRelative"
  | "WPT_CameraRelativeNoOffsets"
  | "WPT_MAX";
declare var EWorldPositionIncludedOffsets: {
  WPT_Default: "WPT_Default",
  WPT_ExcludeAllShaderOffsets: "WPT_ExcludeAllShaderOffsets",
  WPT_CameraRelative: "WPT_CameraRelative",
  WPT_CameraRelativeNoOffsets: "WPT_CameraRelativeNoOffsets",
  WPT_MAX: "WPT_MAX"
};
declare class MaterialExpressionWorldPosition mixins MaterialExpression {
  WorldPositionShaderOffset: EWorldPositionIncludedOffsetsT;
  static Load(ResourceName: string): MaterialExpressionWorldPosition;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionWorldPosition;
  static GetDefaultObject(): MaterialExpressionWorldPosition;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionWorldPosition;
  static C(Other: UObject | any): MaterialExpressionWorldPosition;
}
declare class MaterialFunctionMaterialLayer mixins MaterialFunction {
  static Load(ResourceName: string): MaterialFunctionMaterialLayer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialFunctionMaterialLayer;
  static GetDefaultObject(): MaterialFunctionMaterialLayer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialFunctionMaterialLayer;
  static C(Other: UObject | any): MaterialFunctionMaterialLayer;
}
declare class MaterialFunctionMaterialLayerInstance
  mixins MaterialFunctionInstance {
  static Load(ResourceName: string): MaterialFunctionMaterialLayerInstance;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialFunctionMaterialLayerInstance;
  static GetDefaultObject(): MaterialFunctionMaterialLayerInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialFunctionMaterialLayerInstance;
  static C(Other: UObject | any): MaterialFunctionMaterialLayerInstance;
}
declare class MaterialFunctionMaterialLayerBlend mixins MaterialFunction {
  static Load(ResourceName: string): MaterialFunctionMaterialLayerBlend;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialFunctionMaterialLayerBlend;
  static GetDefaultObject(): MaterialFunctionMaterialLayerBlend;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialFunctionMaterialLayerBlend;
  static C(Other: UObject | any): MaterialFunctionMaterialLayerBlend;
}
declare class MaterialFunctionMaterialLayerBlendInstance
  mixins MaterialFunctionInstance {
  static Load(ResourceName: string): MaterialFunctionMaterialLayerBlendInstance;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialFunctionMaterialLayerBlendInstance;
  static GetDefaultObject(): MaterialFunctionMaterialLayerBlendInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialFunctionMaterialLayerBlendInstance;
  static C(Other: UObject | any): MaterialFunctionMaterialLayerBlendInstance;
}
declare class MaterialInstanceActor mixins Actor {
  TargetActors: Actor[];
  static GetDefaultObject(): MaterialInstanceActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialInstanceActor;
  static C(Other: UObject | any): MaterialInstanceActor;
}
declare class MatineeActorCameraAnim mixins MatineeActor {
  CameraAnim: CameraAnim;
  static GetDefaultObject(): MatineeActorCameraAnim;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MatineeActorCameraAnim;
  static C(Other: UObject | any): MatineeActorCameraAnim;
}
declare class MatineeAnimInterface mixins Interface {
  static Load(ResourceName: string): MatineeAnimInterface;
  static Find(Outer: UObject, ResourceName: string): MatineeAnimInterface;
  static GetDefaultObject(): MatineeAnimInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MatineeAnimInterface;
  static C(Other: UObject | any): MatineeAnimInterface;
}
declare class MatineeInterface mixins Interface {
  static Load(ResourceName: string): MatineeInterface;
  static Find(Outer: UObject, ResourceName: string): MatineeInterface;
  static GetDefaultObject(): MatineeInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MatineeInterface;
  static C(Other: UObject | any): MatineeInterface;
}
declare class MeshMergeCullingVolume mixins Volume {
  static GetDefaultObject(): MeshMergeCullingVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshMergeCullingVolume;
  static C(Other: UObject | any): MeshMergeCullingVolume;
}
declare class MeshSimplificationSettings mixins DeveloperSettings {
  MeshReductionModuleName: string;
  static Load(ResourceName: string): MeshSimplificationSettings;
  static Find(Outer: UObject, ResourceName: string): MeshSimplificationSettings;
  static GetDefaultObject(): MeshSimplificationSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshSimplificationSettings;
  static C(Other: UObject | any): MeshSimplificationSettings;
}
declare class MeshVertexPainterKismetLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MeshVertexPainterKismetLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MeshVertexPainterKismetLibrary;
  static GetDefaultObject(): MeshVertexPainterKismetLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshVertexPainterKismetLibrary;
  static RemovePaintedVertices(StaticMeshComponent: StaticMeshComponent): void;
  static PaintVerticesSingleColor(
    StaticMeshComponent: StaticMeshComponent,
    FillColor: LinearColor,
    bConvertToSRGB: boolean
  ): void;
  static PaintVerticesLerpAlongAxis(
    StaticMeshComponent: StaticMeshComponent,
    StartColor: LinearColor,
    EndColor: LinearColor,
    Axis: EVertexPaintAxisT,
    bConvertToSRGB: boolean
  ): void;
  static C(Other: UObject | any): MeshVertexPainterKismetLibrary;
}
declare class PurchaseInfo {
  Identifier: string;
  DisplayName: string;
  DisplayDescription: string;
  DisplayPrice: string;
  clone(): PurchaseInfo;
  static C(Other: UObject | any): PurchaseInfo;
}
declare class MicroTransactionBase mixins PlatformInterfaceBase {
  AvailableProducts: PurchaseInfo[];
  LastError: string;
  LastErrorSolution: string;
  static Load(ResourceName: string): MicroTransactionBase;
  static Find(Outer: UObject, ResourceName: string): MicroTransactionBase;
  static GetDefaultObject(): MicroTransactionBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MicroTransactionBase;
  static C(Other: UObject | any): MicroTransactionBase;
}
declare class NavAgentInterface mixins Interface {
  static Load(ResourceName: string): NavAgentInterface;
  static Find(Outer: UObject, ResourceName: string): NavAgentInterface;
  static GetDefaultObject(): NavAgentInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NavAgentInterface;
  static C(Other: UObject | any): NavAgentInterface;
}
declare class NavEdgeProviderInterface mixins Interface {
  static Load(ResourceName: string): NavEdgeProviderInterface;
  static Find(Outer: UObject, ResourceName: string): NavEdgeProviderInterface;
  static GetDefaultObject(): NavEdgeProviderInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NavEdgeProviderInterface;
  static C(Other: UObject | any): NavEdgeProviderInterface;
}
declare class NavigationDataInterface mixins Interface {
  static Load(ResourceName: string): NavigationDataInterface;
  static Find(Outer: UObject, ResourceName: string): NavigationDataInterface;
  static GetDefaultObject(): NavigationDataInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NavigationDataInterface;
  static C(Other: UObject | any): NavigationDataInterface;
}
declare class NavigationSystem mixins UObject {
  static Load(ResourceName: string): NavigationSystem;
  static Find(Outer: UObject, ResourceName: string): NavigationSystem;
  static GetDefaultObject(): NavigationSystem;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NavigationSystem;
  static SimpleMoveToLocation(Controller: Controller, Goal: Vector): void;
  static SimpleMoveToActor(Controller: Controller, Goal: Actor): void;
  static C(Other: UObject | any): NavigationSystem;
}
declare class NullNavSysConfig mixins NavigationSystemConfig {
  static Load(ResourceName: string): NullNavSysConfig;
  static Find(Outer: UObject, ResourceName: string): NullNavSysConfig;
  static GetDefaultObject(): NullNavSysConfig;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NullNavSysConfig;
  static C(Other: UObject | any): NullNavSysConfig;
}
declare class NavPathObserverInterface mixins Interface {
  static Load(ResourceName: string): NavPathObserverInterface;
  static Find(Outer: UObject, ResourceName: string): NavPathObserverInterface;
  static GetDefaultObject(): NavPathObserverInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NavPathObserverInterface;
  static C(Other: UObject | any): NavPathObserverInterface;
}
declare class NavRelevantInterface mixins Interface {
  static Load(ResourceName: string): NavRelevantInterface;
  static Find(Outer: UObject, ResourceName: string): NavRelevantInterface;
  static GetDefaultObject(): NavRelevantInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NavRelevantInterface;
  static C(Other: UObject | any): NavRelevantInterface;
}
declare class SimulatedClientNetConnection mixins NetConnection {
  static Load(ResourceName: string): SimulatedClientNetConnection;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): SimulatedClientNetConnection;
  static GetDefaultObject(): SimulatedClientNetConnection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SimulatedClientNetConnection;
  static C(Other: UObject | any): SimulatedClientNetConnection;
}
declare class NetworkPredictionInterface mixins Interface {
  static Load(ResourceName: string): NetworkPredictionInterface;
  static Find(Outer: UObject, ResourceName: string): NetworkPredictionInterface;
  static GetDefaultObject(): NetworkPredictionInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NetworkPredictionInterface;
  static C(Other: UObject | any): NetworkPredictionInterface;
}
declare class NetworkSettings mixins DeveloperSettings {
  bVerifyPeer: boolean;
  bEnableMultiplayerWorldOriginRebasing: boolean;
  MaxRepArraySize: number;
  MaxRepArrayMemory: number;
  static Load(ResourceName: string): NetworkSettings;
  static Find(Outer: UObject, ResourceName: string): NetworkSettings;
  static GetDefaultObject(): NetworkSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NetworkSettings;
  static C(Other: UObject | any): NetworkSettings;
}
declare class NodeMappingProviderInterface mixins Interface {
  static Load(ResourceName: string): NodeMappingProviderInterface;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): NodeMappingProviderInterface;
  static GetDefaultObject(): NodeMappingProviderInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NodeMappingProviderInterface;
  static C(Other: UObject | any): NodeMappingProviderInterface;
}
declare class Note mixins Actor {
  text: string;
  SpriteComponent: BillboardComponent;
  ArrowComponent: ArrowComponent;
  static GetDefaultObject(): Note;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): Note;
  static C(Other: UObject | any): Note;
}
declare class ObjectLibrary mixins UObject {
  ObjectBaseClass: UnrealEngineClassT;
  bHasBlueprintClasses: boolean;
  Objects: UObject[];
  WeakObjects: any[];
  bUseWeakReferences: boolean;
  bIsFullyLoaded: boolean;
  static Load(ResourceName: string): ObjectLibrary;
  static Find(Outer: UObject, ResourceName: string): ObjectLibrary;
  static GetDefaultObject(): ObjectLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ObjectLibrary;
  static C(Other: UObject | any): ObjectLibrary;
}
declare class ObjectReferencer mixins UObject {
  ReferencedObjects: UObject[];
  static Load(ResourceName: string): ObjectReferencer;
  static Find(Outer: UObject, ResourceName: string): ObjectReferencer;
  static GetDefaultObject(): ObjectReferencer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ObjectReferencer;
  static C(Other: UObject | any): ObjectReferencer;
}
declare class OnlineBlueprintCallProxyBase mixins UObject {
  static Load(ResourceName: string): OnlineBlueprintCallProxyBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): OnlineBlueprintCallProxyBase;
  static GetDefaultObject(): OnlineBlueprintCallProxyBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineBlueprintCallProxyBase;
  Activate(): void;
  static C(Other: UObject | any): OnlineBlueprintCallProxyBase;
}
declare class OnlineEngineInterface mixins UObject {
  static Load(ResourceName: string): OnlineEngineInterface;
  static Find(Outer: UObject, ResourceName: string): OnlineEngineInterface;
  static GetDefaultObject(): OnlineEngineInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineEngineInterface;
  static C(Other: UObject | any): OnlineEngineInterface;
}
declare class PackageMapClient mixins PackageMap {
  static Load(ResourceName: string): PackageMapClient;
  static Find(Outer: UObject, ResourceName: string): PackageMapClient;
  static GetDefaultObject(): PackageMapClient;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PackageMapClient;
  static C(Other: UObject | any): PackageMapClient;
}
declare class PainCausingVolume mixins PhysicsVolume {
  bPainCausing: boolean;
  DamagePerSec: number;
  DamageType: UnrealEngineClassT;
  PainInterval: number;
  bEntryPain: boolean;
  BACKUP_bPainCausing: boolean;
  DamageInstigator: Controller;
  static GetDefaultObject(): PainCausingVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PainCausingVolume;
  static C(Other: UObject | any): PainCausingVolume;
}
declare class ParticleModuleAccelerationBase mixins ParticleModule {
  bAlwaysInWorldSpace: boolean;
  static Load(ResourceName: string): ParticleModuleAccelerationBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAccelerationBase;
  static GetDefaultObject(): ParticleModuleAccelerationBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAccelerationBase;
  static C(Other: UObject | any): ParticleModuleAccelerationBase;
}
declare class ParticleModuleAcceleration mixins ParticleModuleAccelerationBase {
  Acceleration: RawDistributionVector;
  bApplyOwnerScale: boolean;
  static Load(ResourceName: string): ParticleModuleAcceleration;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleAcceleration;
  static GetDefaultObject(): ParticleModuleAcceleration;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAcceleration;
  static C(Other: UObject | any): ParticleModuleAcceleration;
}
declare class ParticleModuleAccelerationConstant
  mixins ParticleModuleAccelerationBase {
  Acceleration: Vector;
  static Load(ResourceName: string): ParticleModuleAccelerationConstant;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAccelerationConstant;
  static GetDefaultObject(): ParticleModuleAccelerationConstant;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAccelerationConstant;
  static C(Other: UObject | any): ParticleModuleAccelerationConstant;
}
declare class ParticleModuleAccelerationDrag
  mixins ParticleModuleAccelerationBase {
  DragCoefficient: DistributionFloat;
  DragCoefficientRaw: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleAccelerationDrag;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAccelerationDrag;
  static GetDefaultObject(): ParticleModuleAccelerationDrag;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAccelerationDrag;
  static C(Other: UObject | any): ParticleModuleAccelerationDrag;
}
declare class ParticleModuleAccelerationDragScaleOverLife
  mixins ParticleModuleAccelerationBase {
  DragScale: DistributionFloat;
  DragScaleRaw: RawDistributionFloat;
  static Load(
    ResourceName: string
  ): ParticleModuleAccelerationDragScaleOverLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAccelerationDragScaleOverLife;
  static GetDefaultObject(): ParticleModuleAccelerationDragScaleOverLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAccelerationDragScaleOverLife;
  static C(Other: UObject | any): ParticleModuleAccelerationDragScaleOverLife;
}
declare class ParticleModuleAccelerationOverLifetime
  mixins ParticleModuleAccelerationBase {
  AccelOverLife: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleAccelerationOverLifetime;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAccelerationOverLifetime;
  static GetDefaultObject(): ParticleModuleAccelerationOverLifetime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAccelerationOverLifetime;
  static C(Other: UObject | any): ParticleModuleAccelerationOverLifetime;
}
declare class ParticleModuleAttractorBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleAttractorBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAttractorBase;
  static GetDefaultObject(): ParticleModuleAttractorBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAttractorBase;
  static C(Other: UObject | any): ParticleModuleAttractorBase;
}
declare class ParticleModuleAttractorLine mixins ParticleModuleAttractorBase {
  EndPoint0: Vector;
  EndPoint1: Vector;
  Range: RawDistributionFloat;
  Strength: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleAttractorLine;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAttractorLine;
  static GetDefaultObject(): ParticleModuleAttractorLine;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAttractorLine;
  static C(Other: UObject | any): ParticleModuleAttractorLine;
}
declare type EAttractorParticleSelectionMethodT =
  | "EAPSM_Random"
  | "EAPSM_Sequential"
  | "EAPSM_MAX";
declare var EAttractorParticleSelectionMethod: {
  EAPSM_Random: "EAPSM_Random",
  EAPSM_Sequential: "EAPSM_Sequential",
  EAPSM_MAX: "EAPSM_MAX"
};
declare class ParticleModuleAttractorParticle
  mixins ParticleModuleAttractorBase {
  EmitterName: string;
  Range: RawDistributionFloat;
  bStrengthByDistance: boolean;
  Strength: RawDistributionFloat;
  bAffectBaseVelocity: boolean;
  SelectionMethod: EAttractorParticleSelectionMethodT;
  bRenewSource: boolean;
  bInheritSourceVel: boolean;
  LastSelIndex: number;
  static Load(ResourceName: string): ParticleModuleAttractorParticle;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAttractorParticle;
  static GetDefaultObject(): ParticleModuleAttractorParticle;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAttractorParticle;
  static C(Other: UObject | any): ParticleModuleAttractorParticle;
}
declare class ParticleModuleAttractorPoint mixins ParticleModuleAttractorBase {
  Position: RawDistributionVector;
  Range: RawDistributionFloat;
  Strength: RawDistributionFloat;
  StrengthByDistance: boolean;
  bAffectBaseVelocity: boolean;
  bOverrideVelocity: boolean;
  bUseWorldSpacePosition: boolean;
  Positive_X: boolean;
  Positive_Y: boolean;
  Positive_Z: boolean;
  Negative_X: boolean;
  Negative_Y: boolean;
  Negative_Z: boolean;
  static Load(ResourceName: string): ParticleModuleAttractorPoint;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAttractorPoint;
  static GetDefaultObject(): ParticleModuleAttractorPoint;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAttractorPoint;
  static C(Other: UObject | any): ParticleModuleAttractorPoint;
}
declare class ParticleModuleAttractorPointGravity
  mixins ParticleModuleAttractorBase {
  Position: Vector;
  Radius: number;
  Strength: DistributionFloat;
  StrengthRaw: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleAttractorPointGravity;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleAttractorPointGravity;
  static GetDefaultObject(): ParticleModuleAttractorPointGravity;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleAttractorPointGravity;
  static C(Other: UObject | any): ParticleModuleAttractorPointGravity;
}
declare class ParticleModuleBeamBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleBeamBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamBase;
  static GetDefaultObject(): ParticleModuleBeamBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleBeamBase;
  static C(Other: UObject | any): ParticleModuleBeamBase;
}
declare type BeamModifierTypeT =
  | "PEB2MT_Source"
  | "PEB2MT_Target"
  | "PEB2MT_MAX";
declare var BeamModifierType: {
  PEB2MT_Source: "PEB2MT_Source",
  PEB2MT_Target: "PEB2MT_Target",
  PEB2MT_MAX: "PEB2MT_MAX"
};
declare class BeamModifierOptions {
  bModify: boolean;
  bScale: boolean;
  bLock: boolean;
  clone(): BeamModifierOptions;
  static C(Other: UObject | any): BeamModifierOptions;
}
declare class ParticleModuleBeamModifier mixins ParticleModuleBeamBase {
  ModifierType: BeamModifierTypeT;
  PositionOptions: BeamModifierOptions;
  Position: RawDistributionVector;
  TangentOptions: BeamModifierOptions;
  Tangent: RawDistributionVector;
  bAbsoluteTangent: boolean;
  StrengthOptions: BeamModifierOptions;
  Strength: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleBeamModifier;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamModifier;
  static GetDefaultObject(): ParticleModuleBeamModifier;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleBeamModifier;
  static C(Other: UObject | any): ParticleModuleBeamModifier;
}
declare class ParticleModuleBeamNoise mixins ParticleModuleBeamBase {
  bLowFreq_Enabled: boolean;
  Frequency: number;
  Frequency_LowRange: number;
  NoiseRange: RawDistributionVector;
  NoiseRangeScale: RawDistributionFloat;
  bNRScaleEmitterTime: boolean;
  NoiseSpeed: RawDistributionVector;
  bSmooth: boolean;
  NoiseLockRadius: number;
  bNoiseLock: boolean;
  bOscillate: boolean;
  NoiseLockTime: number;
  NoiseTension: number;
  bUseNoiseTangents: boolean;
  NoiseTangentStrength: RawDistributionFloat;
  NoiseTessellation: number;
  bTargetNoise: boolean;
  FrequencyDistance: number;
  bApplyNoiseScale: boolean;
  NoiseScale: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleBeamNoise;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamNoise;
  static GetDefaultObject(): ParticleModuleBeamNoise;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleBeamNoise;
  static C(Other: UObject | any): ParticleModuleBeamNoise;
}
declare type Beam2SourceTargetMethodT =
  | "PEB2STM_Default"
  | "PEB2STM_UserSet"
  | "PEB2STM_Emitter"
  | "PEB2STM_Particle"
  | "PEB2STM_Actor"
  | "PEB2STM_MAX";
declare var Beam2SourceTargetMethod: {
  PEB2STM_Default: "PEB2STM_Default",
  PEB2STM_UserSet: "PEB2STM_UserSet",
  PEB2STM_Emitter: "PEB2STM_Emitter",
  PEB2STM_Particle: "PEB2STM_Particle",
  PEB2STM_Actor: "PEB2STM_Actor",
  PEB2STM_MAX: "PEB2STM_MAX"
};
declare type Beam2SourceTargetTangentMethodT =
  | "PEB2STTM_Direct"
  | "PEB2STTM_UserSet"
  | "PEB2STTM_Distribution"
  | "PEB2STTM_Emitter"
  | "PEB2STTM_MAX";
declare var Beam2SourceTargetTangentMethod: {
  PEB2STTM_Direct: "PEB2STTM_Direct",
  PEB2STTM_UserSet: "PEB2STTM_UserSet",
  PEB2STTM_Distribution: "PEB2STTM_Distribution",
  PEB2STTM_Emitter: "PEB2STTM_Emitter",
  PEB2STTM_MAX: "PEB2STTM_MAX"
};
declare class ParticleModuleBeamSource mixins ParticleModuleBeamBase {
  SourceMethod: Beam2SourceTargetMethodT;
  SourceName: string;
  bSourceAbsolute: boolean;
  Source: RawDistributionVector;
  bLockSource: boolean;
  SourceTangentMethod: Beam2SourceTargetTangentMethodT;
  SourceTangent: RawDistributionVector;
  bLockSourceTangent: boolean;
  SourceStrength: RawDistributionFloat;
  bLockSourceStength: boolean;
  static Load(ResourceName: string): ParticleModuleBeamSource;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamSource;
  static GetDefaultObject(): ParticleModuleBeamSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleBeamSource;
  static C(Other: UObject | any): ParticleModuleBeamSource;
}
declare class ParticleModuleBeamTarget mixins ParticleModuleBeamBase {
  TargetMethod: Beam2SourceTargetMethodT;
  TargetName: string;
  Target: RawDistributionVector;
  bTargetAbsolute: boolean;
  bLockTarget: boolean;
  TargetTangentMethod: Beam2SourceTargetTangentMethodT;
  TargetTangent: RawDistributionVector;
  bLockTargetTangent: boolean;
  TargetStrength: RawDistributionFloat;
  bLockTargetStength: boolean;
  LockRadius: number;
  static Load(ResourceName: string): ParticleModuleBeamTarget;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleBeamTarget;
  static GetDefaultObject(): ParticleModuleBeamTarget;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleBeamTarget;
  static C(Other: UObject | any): ParticleModuleBeamTarget;
}
declare class ParticleModuleCameraBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleCameraBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleCameraBase;
  static GetDefaultObject(): ParticleModuleCameraBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleCameraBase;
  static C(Other: UObject | any): ParticleModuleCameraBase;
}
declare type EParticleCameraOffsetUpdateMethodT =
  | "EPCOUM_DirectSet"
  | "EPCOUM_Additive"
  | "EPCOUM_Scalar"
  | "EPCOUM_MAX";
declare var EParticleCameraOffsetUpdateMethod: {
  EPCOUM_DirectSet: "EPCOUM_DirectSet",
  EPCOUM_Additive: "EPCOUM_Additive",
  EPCOUM_Scalar: "EPCOUM_Scalar",
  EPCOUM_MAX: "EPCOUM_MAX"
};
declare class ParticleModuleCameraOffset mixins ParticleModuleCameraBase {
  CameraOffset: RawDistributionFloat;
  bSpawnTimeOnly: boolean;
  UpdateMethod: EParticleCameraOffsetUpdateMethodT;
  static Load(ResourceName: string): ParticleModuleCameraOffset;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleCameraOffset;
  static GetDefaultObject(): ParticleModuleCameraOffset;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleCameraOffset;
  static C(Other: UObject | any): ParticleModuleCameraOffset;
}
declare class ParticleModuleCollisionBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleCollisionBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleCollisionBase;
  static GetDefaultObject(): ParticleModuleCollisionBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleCollisionBase;
  static C(Other: UObject | any): ParticleModuleCollisionBase;
}
declare type EParticleCollisionCompleteT =
  | "EPCC_Kill"
  | "EPCC_Freeze"
  | "EPCC_HaltCollisions"
  | "EPCC_FreezeTranslation"
  | "EPCC_FreezeRotation"
  | "EPCC_FreezeMovement"
  | "EPCC_MAX";
declare var EParticleCollisionComplete: {
  EPCC_Kill: "EPCC_Kill",
  EPCC_Freeze: "EPCC_Freeze",
  EPCC_HaltCollisions: "EPCC_HaltCollisions",
  EPCC_FreezeTranslation: "EPCC_FreezeTranslation",
  EPCC_FreezeRotation: "EPCC_FreezeRotation",
  EPCC_FreezeMovement: "EPCC_FreezeMovement",
  EPCC_MAX: "EPCC_MAX"
};
declare class ParticleModuleCollision mixins ParticleModuleCollisionBase {
  DampingFactor: RawDistributionVector;
  DampingFactorRotation: RawDistributionVector;
  MaxCollisions: RawDistributionFloat;
  CollisionCompletionOption: EParticleCollisionCompleteT;
  CollisionTypes: EObjectTypeQueryT[];
  bApplyPhysics: boolean;
  bIgnoreTriggerVolumes: boolean;
  ParticleMass: RawDistributionFloat;
  DirScalar: number;
  bPawnsDoNotDecrementCount: boolean;
  bOnlyVerticalNormalsDecrementCount: boolean;
  VerticalFudgeFactor: number;
  DelayAmount: RawDistributionFloat;
  bDropDetail: boolean;
  bCollideOnlyIfVisible: boolean;
  bIgnoreSourceActor: boolean;
  MaxCollisionDistance: number;
  static Load(ResourceName: string): ParticleModuleCollision;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleCollision;
  static GetDefaultObject(): ParticleModuleCollision;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleCollision;
  static C(Other: UObject | any): ParticleModuleCollision;
}
declare type EParticleCollisionResponseT =
  | "Bounce"
  | "Stop"
  | "Kill"
  | "EParticleCollisionResponse_MAX";
declare var EParticleCollisionResponse: {
  Bounce: "Bounce",
  Stop: "Stop",
  Kill: "Kill",
  EParticleCollisionResponse_MAX: "EParticleCollisionResponse_MAX"
};
declare type EParticleCollisionModeT =
  | "SceneDepth"
  | "DistanceField"
  | "EParticleCollisionMode_MAX";
declare var EParticleCollisionMode: {
  SceneDepth: "SceneDepth",
  DistanceField: "DistanceField",
  EParticleCollisionMode_MAX: "EParticleCollisionMode_MAX"
};
declare class ParticleModuleCollisionGPU mixins ParticleModuleCollisionBase {
  Resilience: RawDistributionFloat;
  ResilienceScaleOverLife: RawDistributionFloat;
  Friction: number;
  RandomSpread: number;
  RandomDistribution: number;
  RadiusScale: number;
  RadiusBias: number;
  Response: EParticleCollisionResponseT;
  CollisionMode: EParticleCollisionModeT;
  static Load(ResourceName: string): ParticleModuleCollisionGPU;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleCollisionGPU;
  static GetDefaultObject(): ParticleModuleCollisionGPU;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleCollisionGPU;
  static C(Other: UObject | any): ParticleModuleCollisionGPU;
}
declare class ParticleModuleColorBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleColorBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleColorBase;
  static GetDefaultObject(): ParticleModuleColorBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleColorBase;
  static C(Other: UObject | any): ParticleModuleColorBase;
}
declare class ParticleModuleColor mixins ParticleModuleColorBase {
  StartColor: RawDistributionVector;
  StartAlpha: RawDistributionFloat;
  bClampAlpha: boolean;
  static Load(ResourceName: string): ParticleModuleColor;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleColor;
  static GetDefaultObject(): ParticleModuleColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleColor;
  static C(Other: UObject | any): ParticleModuleColor;
}
declare class ParticleRandomSeedInfo {
  ParameterName: string;
  bGetSeedFromInstance: boolean;
  bInstanceSeedIsIndex: boolean;
  bResetSeedOnEmitterLooping: boolean;
  bRandomlySelectSeedArray: boolean;
  RandomSeeds: number[];
  clone(): ParticleRandomSeedInfo;
  static C(Other: UObject | any): ParticleRandomSeedInfo;
}
declare class ParticleModuleColor_Seeded mixins ParticleModuleColor {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleColor_Seeded;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleColor_Seeded;
  static GetDefaultObject(): ParticleModuleColor_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleColor_Seeded;
  static C(Other: UObject | any): ParticleModuleColor_Seeded;
}
declare class ParticleModuleColorOverLife mixins ParticleModuleColorBase {
  ColorOverLife: RawDistributionVector;
  AlphaOverLife: RawDistributionFloat;
  bClampAlpha: boolean;
  static Load(ResourceName: string): ParticleModuleColorOverLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleColorOverLife;
  static GetDefaultObject(): ParticleModuleColorOverLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleColorOverLife;
  static C(Other: UObject | any): ParticleModuleColorOverLife;
}
declare class ParticleModuleColorScaleOverLife mixins ParticleModuleColorBase {
  ColorScaleOverLife: RawDistributionVector;
  AlphaScaleOverLife: RawDistributionFloat;
  bEmitterTime: boolean;
  static Load(ResourceName: string): ParticleModuleColorScaleOverLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleColorScaleOverLife;
  static GetDefaultObject(): ParticleModuleColorScaleOverLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleColorScaleOverLife;
  static C(Other: UObject | any): ParticleModuleColorScaleOverLife;
}
declare class ParticleModuleEventReceiverKillParticles
  mixins ParticleModuleEventReceiverBase {
  bStopSpawning: boolean;
  static Load(ResourceName: string): ParticleModuleEventReceiverKillParticles;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleEventReceiverKillParticles;
  static GetDefaultObject(): ParticleModuleEventReceiverKillParticles;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleEventReceiverKillParticles;
  static C(Other: UObject | any): ParticleModuleEventReceiverKillParticles;
}
declare class ParticleModuleEventReceiverSpawn
  mixins ParticleModuleEventReceiverBase {
  SpawnCount: RawDistributionFloat;
  bUseParticleTime: boolean;
  bUsePSysLocation: boolean;
  bInheritVelocity: boolean;
  InheritVelocityScale: RawDistributionVector;
  PhysicalMaterials: PhysicalMaterial[];
  bBanPhysicalMaterials: boolean;
  static Load(ResourceName: string): ParticleModuleEventReceiverSpawn;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleEventReceiverSpawn;
  static GetDefaultObject(): ParticleModuleEventReceiverSpawn;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleEventReceiverSpawn;
  static C(Other: UObject | any): ParticleModuleEventReceiverSpawn;
}
declare class ParticleModuleKillBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleKillBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleKillBase;
  static GetDefaultObject(): ParticleModuleKillBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleKillBase;
  static C(Other: UObject | any): ParticleModuleKillBase;
}
declare class ParticleModuleKillBox mixins ParticleModuleKillBase {
  LowerLeftCorner: RawDistributionVector;
  UpperRightCorner: RawDistributionVector;
  bAbsolute: boolean;
  bKillInside: boolean;
  bAxisAlignedAndFixedSize: boolean;
  static Load(ResourceName: string): ParticleModuleKillBox;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleKillBox;
  static GetDefaultObject(): ParticleModuleKillBox;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleKillBox;
  static C(Other: UObject | any): ParticleModuleKillBox;
}
declare class ParticleModuleKillHeight mixins ParticleModuleKillBase {
  Height: RawDistributionFloat;
  bAbsolute: boolean;
  bFloor: boolean;
  bApplyPSysScale: boolean;
  static Load(ResourceName: string): ParticleModuleKillHeight;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleKillHeight;
  static GetDefaultObject(): ParticleModuleKillHeight;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleKillHeight;
  static C(Other: UObject | any): ParticleModuleKillHeight;
}
declare class ParticleModuleLifetimeBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleLifetimeBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLifetimeBase;
  static GetDefaultObject(): ParticleModuleLifetimeBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLifetimeBase;
  static C(Other: UObject | any): ParticleModuleLifetimeBase;
}
declare class ParticleModuleLifetime mixins ParticleModuleLifetimeBase {
  LifeTime: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleLifetime;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLifetime;
  static GetDefaultObject(): ParticleModuleLifetime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLifetime;
  static C(Other: UObject | any): ParticleModuleLifetime;
}
declare class ParticleModuleLifetime_Seeded mixins ParticleModuleLifetime {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleLifetime_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLifetime_Seeded;
  static GetDefaultObject(): ParticleModuleLifetime_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLifetime_Seeded;
  static C(Other: UObject | any): ParticleModuleLifetime_Seeded;
}
declare class ParticleModuleLightBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleLightBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLightBase;
  static GetDefaultObject(): ParticleModuleLightBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLightBase;
  static C(Other: UObject | any): ParticleModuleLightBase;
}
declare class ParticleModuleLight mixins ParticleModuleLightBase {
  bUseInverseSquaredFalloff: boolean;
  bAffectsTranslucency: boolean;
  bPreviewLightRadius: boolean;
  SpawnFraction: number;
  ColorScaleOverLife: RawDistributionVector;
  BrightnessOverLife: RawDistributionFloat;
  RadiusScale: RawDistributionFloat;
  LightExponent: RawDistributionFloat;
  LightingChannels: LightingChannels;
  VolumetricScatteringIntensity: number;
  bHighQualityLights: boolean;
  bShadowCastingLights: boolean;
  static Load(ResourceName: string): ParticleModuleLight;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLight;
  static GetDefaultObject(): ParticleModuleLight;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLight;
  static C(Other: UObject | any): ParticleModuleLight;
}
declare class ParticleModuleLight_Seeded mixins ParticleModuleLight {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleLight_Seeded;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLight_Seeded;
  static GetDefaultObject(): ParticleModuleLight_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLight_Seeded;
  static C(Other: UObject | any): ParticleModuleLight_Seeded;
}
declare class ParticleModuleLocationBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleLocationBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLocationBase;
  static GetDefaultObject(): ParticleModuleLocationBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationBase;
  static C(Other: UObject | any): ParticleModuleLocationBase;
}
declare class ParticleModuleLocation mixins ParticleModuleLocationBase {
  StartLocation: RawDistributionVector;
  DistributeOverNPoints: number;
  DistributeThreshold: number;
  static Load(ResourceName: string): ParticleModuleLocation;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleLocation;
  static GetDefaultObject(): ParticleModuleLocation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocation;
  static C(Other: UObject | any): ParticleModuleLocation;
}
declare class ParticleModuleLocation_Seeded mixins ParticleModuleLocation {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleLocation_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocation_Seeded;
  static GetDefaultObject(): ParticleModuleLocation_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocation_Seeded;
  static C(Other: UObject | any): ParticleModuleLocation_Seeded;
}
declare type ELocationBoneSocketSourceT =
  | "BONESOCKETSOURCE_Bones"
  | "BONESOCKETSOURCE_Sockets"
  | "BONESOCKETSOURCE_MAX";
declare var ELocationBoneSocketSource: {
  BONESOCKETSOURCE_Bones: "BONESOCKETSOURCE_Bones",
  BONESOCKETSOURCE_Sockets: "BONESOCKETSOURCE_Sockets",
  BONESOCKETSOURCE_MAX: "BONESOCKETSOURCE_MAX"
};
declare class LocationBoneSocketInfo {
  BoneSocketName: string;
  Offset: Vector;
  clone(): LocationBoneSocketInfo;
  static C(Other: UObject | any): LocationBoneSocketInfo;
}
declare type ELocationBoneSocketSelectionMethodT =
  | "BONESOCKETSEL_Sequential"
  | "BONESOCKETSEL_Random"
  | "BONESOCKETSEL_MAX";
declare var ELocationBoneSocketSelectionMethod: {
  BONESOCKETSEL_Sequential: "BONESOCKETSEL_Sequential",
  BONESOCKETSEL_Random: "BONESOCKETSEL_Random",
  BONESOCKETSEL_MAX: "BONESOCKETSEL_MAX"
};
declare class ParticleModuleLocationBoneSocket
  mixins ParticleModuleLocationBase {
  SourceType: ELocationBoneSocketSourceT;
  UniversalOffset: Vector;
  SourceLocations: LocationBoneSocketInfo[];
  SelectionMethod: ELocationBoneSocketSelectionMethodT;
  bUpdatePositionEachFrame: boolean;
  bOrientMeshEmitters: boolean;
  bInheritBoneVelocity: boolean;
  InheritVelocityScale: number;
  SkelMeshActorParamName: string;
  NumPreSelectedIndices: number;
  EditorSkelMesh: SkeletalMesh;
  static Load(ResourceName: string): ParticleModuleLocationBoneSocket;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationBoneSocket;
  static GetDefaultObject(): ParticleModuleLocationBoneSocket;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationBoneSocket;
  static C(Other: UObject | any): ParticleModuleLocationBoneSocket;
}
declare class ParticleModuleLocationDirect mixins ParticleModuleLocationBase {
  Location: RawDistributionVector;
  LocationOffset: RawDistributionVector;
  ScaleFactor: RawDistributionVector;
  Direction: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleLocationDirect;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationDirect;
  static GetDefaultObject(): ParticleModuleLocationDirect;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationDirect;
  static C(Other: UObject | any): ParticleModuleLocationDirect;
}
declare type ELocationEmitterSelectionMethodT =
  | "ELESM_Random"
  | "ELESM_Sequential"
  | "ELESM_MAX";
declare var ELocationEmitterSelectionMethod: {
  ELESM_Random: "ELESM_Random",
  ELESM_Sequential: "ELESM_Sequential",
  ELESM_MAX: "ELESM_MAX"
};
declare class ParticleModuleLocationEmitter mixins ParticleModuleLocationBase {
  EmitterName: string;
  SelectionMethod: ELocationEmitterSelectionMethodT;
  InheritSourceVelocity: boolean;
  InheritSourceVelocityScale: number;
  bInheritSourceRotation: boolean;
  InheritSourceRotationScale: number;
  static Load(ResourceName: string): ParticleModuleLocationEmitter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationEmitter;
  static GetDefaultObject(): ParticleModuleLocationEmitter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationEmitter;
  static C(Other: UObject | any): ParticleModuleLocationEmitter;
}
declare class ParticleModuleLocationEmitterDirect
  mixins ParticleModuleLocationBase {
  EmitterName: string;
  static Load(ResourceName: string): ParticleModuleLocationEmitterDirect;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationEmitterDirect;
  static GetDefaultObject(): ParticleModuleLocationEmitterDirect;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationEmitterDirect;
  static C(Other: UObject | any): ParticleModuleLocationEmitterDirect;
}
declare class ParticleModuleLocationPrimitiveBase
  mixins ParticleModuleLocationBase {
  Positive_X: boolean;
  Positive_Y: boolean;
  Positive_Z: boolean;
  Negative_X: boolean;
  Negative_Y: boolean;
  Negative_Z: boolean;
  SurfaceOnly: boolean;
  Velocity: boolean;
  VelocityScale: RawDistributionFloat;
  StartLocation: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleLocationPrimitiveBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationPrimitiveBase;
  static GetDefaultObject(): ParticleModuleLocationPrimitiveBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationPrimitiveBase;
  static C(Other: UObject | any): ParticleModuleLocationPrimitiveBase;
}
declare type CylinderHeightAxisT =
  | "PMLPC_HEIGHTAXIS_X"
  | "PMLPC_HEIGHTAXIS_Y"
  | "PMLPC_HEIGHTAXIS_Z"
  | "PMLPC_HEIGHTAXIS_MAX";
declare var CylinderHeightAxis: {
  PMLPC_HEIGHTAXIS_X: "PMLPC_HEIGHTAXIS_X",
  PMLPC_HEIGHTAXIS_Y: "PMLPC_HEIGHTAXIS_Y",
  PMLPC_HEIGHTAXIS_Z: "PMLPC_HEIGHTAXIS_Z",
  PMLPC_HEIGHTAXIS_MAX: "PMLPC_HEIGHTAXIS_MAX"
};
declare class ParticleModuleLocationPrimitiveCylinder
  mixins ParticleModuleLocationPrimitiveBase {
  RadialVelocity: boolean;
  StartRadius: RawDistributionFloat;
  StartHeight: RawDistributionFloat;
  HeightAxis: CylinderHeightAxisT;
  static Load(ResourceName: string): ParticleModuleLocationPrimitiveCylinder;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationPrimitiveCylinder;
  static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationPrimitiveCylinder;
  static C(Other: UObject | any): ParticleModuleLocationPrimitiveCylinder;
}
declare class ParticleModuleLocationPrimitiveCylinder_Seeded
  mixins ParticleModuleLocationPrimitiveCylinder {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(
    ResourceName: string
  ): ParticleModuleLocationPrimitiveCylinder_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationPrimitiveCylinder_Seeded;
  static GetDefaultObject(): ParticleModuleLocationPrimitiveCylinder_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationPrimitiveCylinder_Seeded;
  static C(
    Other: UObject | any
  ): ParticleModuleLocationPrimitiveCylinder_Seeded;
}
declare class ParticleModuleLocationPrimitiveSphere
  mixins ParticleModuleLocationPrimitiveBase {
  StartRadius: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleLocationPrimitiveSphere;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationPrimitiveSphere;
  static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationPrimitiveSphere;
  static C(Other: UObject | any): ParticleModuleLocationPrimitiveSphere;
}
declare class ParticleModuleLocationPrimitiveSphere_Seeded
  mixins ParticleModuleLocationPrimitiveSphere {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(
    ResourceName: string
  ): ParticleModuleLocationPrimitiveSphere_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationPrimitiveSphere_Seeded;
  static GetDefaultObject(): ParticleModuleLocationPrimitiveSphere_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationPrimitiveSphere_Seeded;
  static C(Other: UObject | any): ParticleModuleLocationPrimitiveSphere_Seeded;
}
declare class ParticleModuleLocationPrimitiveTriangle
  mixins ParticleModuleLocationBase {
  StartOffset: RawDistributionVector;
  Height: RawDistributionFloat;
  Angle: RawDistributionFloat;
  Thickness: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleLocationPrimitiveTriangle;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationPrimitiveTriangle;
  static GetDefaultObject(): ParticleModuleLocationPrimitiveTriangle;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationPrimitiveTriangle;
  static C(Other: UObject | any): ParticleModuleLocationPrimitiveTriangle;
}
declare type ELocationSkelVertSurfaceSourceT =
  | "VERTSURFACESOURCE_Vert"
  | "VERTSURFACESOURCE_Surface"
  | "VERTSURFACESOURCE_MAX";
declare var ELocationSkelVertSurfaceSource: {
  VERTSURFACESOURCE_Vert: "VERTSURFACESOURCE_Vert",
  VERTSURFACESOURCE_Surface: "VERTSURFACESOURCE_Surface",
  VERTSURFACESOURCE_MAX: "VERTSURFACESOURCE_MAX"
};
declare class ParticleModuleLocationSkelVertSurface
  mixins ParticleModuleLocationBase {
  SourceType: ELocationSkelVertSurfaceSourceT;
  UniversalOffset: Vector;
  bUpdatePositionEachFrame: boolean;
  bOrientMeshEmitters: boolean;
  bInheritBoneVelocity: boolean;
  InheritVelocityScale: number;
  SkelMeshActorParamName: string;
  EditorSkelMesh: SkeletalMesh;
  ValidAssociatedBones: string[];
  bEnforceNormalCheck: boolean;
  NormalToCompare: Vector;
  NormalCheckToleranceDegrees: number;
  NormalCheckTolerance: number;
  ValidMaterialIndices: number[];
  bInheritVertexColor: boolean;
  bInheritUV: boolean;
  InheritUVChannel: any;
  static Load(ResourceName: string): ParticleModuleLocationSkelVertSurface;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationSkelVertSurface;
  static GetDefaultObject(): ParticleModuleLocationSkelVertSurface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationSkelVertSurface;
  static C(Other: UObject | any): ParticleModuleLocationSkelVertSurface;
}
declare class ParticleModuleLocationWorldOffset mixins ParticleModuleLocation {
  static Load(ResourceName: string): ParticleModuleLocationWorldOffset;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationWorldOffset;
  static GetDefaultObject(): ParticleModuleLocationWorldOffset;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationWorldOffset;
  static C(Other: UObject | any): ParticleModuleLocationWorldOffset;
}
declare class ParticleModuleLocationWorldOffset_Seeded
  mixins ParticleModuleLocationWorldOffset {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleLocationWorldOffset_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleLocationWorldOffset_Seeded;
  static GetDefaultObject(): ParticleModuleLocationWorldOffset_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleLocationWorldOffset_Seeded;
  static C(Other: UObject | any): ParticleModuleLocationWorldOffset_Seeded;
}
declare class ParticleModuleMaterialBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleMaterialBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleMaterialBase;
  static GetDefaultObject(): ParticleModuleMaterialBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMaterialBase;
  static C(Other: UObject | any): ParticleModuleMaterialBase;
}
declare class ParticleModuleMeshMaterial mixins ParticleModuleMaterialBase {
  MeshMaterials: MaterialInterface[];
  static Load(ResourceName: string): ParticleModuleMeshMaterial;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshMaterial;
  static GetDefaultObject(): ParticleModuleMeshMaterial;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshMaterial;
  static C(Other: UObject | any): ParticleModuleMeshMaterial;
}
declare class ParticleModuleRotationBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleRotationBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationBase;
  static GetDefaultObject(): ParticleModuleRotationBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotationBase;
  static C(Other: UObject | any): ParticleModuleRotationBase;
}
declare class ParticleModuleMeshRotation mixins ParticleModuleRotationBase {
  StartRotation: RawDistributionVector;
  bInheritParent: boolean;
  static Load(ResourceName: string): ParticleModuleMeshRotation;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleMeshRotation;
  static GetDefaultObject(): ParticleModuleMeshRotation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshRotation;
  static C(Other: UObject | any): ParticleModuleMeshRotation;
}
declare class ParticleModuleMeshRotation_Seeded
  mixins ParticleModuleMeshRotation {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleMeshRotation_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleMeshRotation_Seeded;
  static GetDefaultObject(): ParticleModuleMeshRotation_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshRotation_Seeded;
  static C(Other: UObject | any): ParticleModuleMeshRotation_Seeded;
}
declare class ParticleModuleRotationRateBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleRotationRateBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleRotationRateBase;
  static GetDefaultObject(): ParticleModuleRotationRateBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotationRateBase;
  static C(Other: UObject | any): ParticleModuleRotationRateBase;
}
declare class ParticleModuleMeshRotationRate
  mixins ParticleModuleRotationRateBase {
  StartRotationRate: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleMeshRotationRate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleMeshRotationRate;
  static GetDefaultObject(): ParticleModuleMeshRotationRate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshRotationRate;
  static C(Other: UObject | any): ParticleModuleMeshRotationRate;
}
declare class ParticleModuleMeshRotationRate_Seeded
  mixins ParticleModuleMeshRotationRate {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleMeshRotationRate_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleMeshRotationRate_Seeded;
  static GetDefaultObject(): ParticleModuleMeshRotationRate_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshRotationRate_Seeded;
  static C(Other: UObject | any): ParticleModuleMeshRotationRate_Seeded;
}
declare class ParticleModuleMeshRotationRateMultiplyLife
  mixins ParticleModuleRotationRateBase {
  LifeMultiplier: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleMeshRotationRateMultiplyLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleMeshRotationRateMultiplyLife;
  static GetDefaultObject(): ParticleModuleMeshRotationRateMultiplyLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshRotationRateMultiplyLife;
  static C(Other: UObject | any): ParticleModuleMeshRotationRateMultiplyLife;
}
declare class ParticleModuleMeshRotationRateOverLife
  mixins ParticleModuleRotationRateBase {
  RotRate: RawDistributionVector;
  bScaleRotRate: boolean;
  static Load(ResourceName: string): ParticleModuleMeshRotationRateOverLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleMeshRotationRateOverLife;
  static GetDefaultObject(): ParticleModuleMeshRotationRateOverLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleMeshRotationRateOverLife;
  static C(Other: UObject | any): ParticleModuleMeshRotationRateOverLife;
}
declare class ParticleModuleOrientationBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleOrientationBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleOrientationBase;
  static GetDefaultObject(): ParticleModuleOrientationBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleOrientationBase;
  static C(Other: UObject | any): ParticleModuleOrientationBase;
}
declare type EParticleAxisLockT =
  | "EPAL_NONE"
  | "EPAL_X"
  | "EPAL_Y"
  | "EPAL_Z"
  | "EPAL_NEGATIVE_X"
  | "EPAL_NEGATIVE_Y"
  | "EPAL_NEGATIVE_Z"
  | "EPAL_ROTATE_X"
  | "EPAL_ROTATE_Y"
  | "EPAL_ROTATE_Z"
  | "EPAL_MAX";
declare var EParticleAxisLock: {
  EPAL_NONE: "EPAL_NONE",
  EPAL_X: "EPAL_X",
  EPAL_Y: "EPAL_Y",
  EPAL_Z: "EPAL_Z",
  EPAL_NEGATIVE_X: "EPAL_NEGATIVE_X",
  EPAL_NEGATIVE_Y: "EPAL_NEGATIVE_Y",
  EPAL_NEGATIVE_Z: "EPAL_NEGATIVE_Z",
  EPAL_ROTATE_X: "EPAL_ROTATE_X",
  EPAL_ROTATE_Y: "EPAL_ROTATE_Y",
  EPAL_ROTATE_Z: "EPAL_ROTATE_Z",
  EPAL_MAX: "EPAL_MAX"
};
declare class ParticleModuleOrientationAxisLock
  mixins ParticleModuleOrientationBase {
  LockAxisFlags: EParticleAxisLockT;
  static Load(ResourceName: string): ParticleModuleOrientationAxisLock;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleOrientationAxisLock;
  static GetDefaultObject(): ParticleModuleOrientationAxisLock;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleOrientationAxisLock;
  static C(Other: UObject | any): ParticleModuleOrientationAxisLock;
}
declare class ParticleModuleParameterBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleParameterBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleParameterBase;
  static GetDefaultObject(): ParticleModuleParameterBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleParameterBase;
  static C(Other: UObject | any): ParticleModuleParameterBase;
}
declare type EEmitterDynamicParameterValueT =
  | "EDPV_UserSet"
  | "EDPV_AutoSet"
  | "EDPV_VelocityX"
  | "EDPV_VelocityY"
  | "EDPV_VelocityZ"
  | "EDPV_VelocityMag"
  | "EDPV_MAX";
declare var EEmitterDynamicParameterValue: {
  EDPV_UserSet: "EDPV_UserSet",
  EDPV_AutoSet: "EDPV_AutoSet",
  EDPV_VelocityX: "EDPV_VelocityX",
  EDPV_VelocityY: "EDPV_VelocityY",
  EDPV_VelocityZ: "EDPV_VelocityZ",
  EDPV_VelocityMag: "EDPV_VelocityMag",
  EDPV_MAX: "EDPV_MAX"
};
declare class EmitterDynamicParameter {
  ParamName: string;
  bUseEmitterTime: boolean;
  bSpawnTimeOnly: boolean;
  ValueMethod: EEmitterDynamicParameterValueT;
  bScaleVelocityByParamValue: boolean;
  ParamValue: RawDistributionFloat;
  clone(): EmitterDynamicParameter;
  static C(Other: UObject | any): EmitterDynamicParameter;
}
declare class ParticleModuleParameterDynamic
  mixins ParticleModuleParameterBase {
  DynamicParams: EmitterDynamicParameter[];
  UpdateFlags: number;
  bUsesVelocity: boolean;
  static Load(ResourceName: string): ParticleModuleParameterDynamic;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleParameterDynamic;
  static GetDefaultObject(): ParticleModuleParameterDynamic;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleParameterDynamic;
  static C(Other: UObject | any): ParticleModuleParameterDynamic;
}
declare class ParticleModuleParameterDynamic_Seeded
  mixins ParticleModuleParameterDynamic {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleParameterDynamic_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleParameterDynamic_Seeded;
  static GetDefaultObject(): ParticleModuleParameterDynamic_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleParameterDynamic_Seeded;
  static C(Other: UObject | any): ParticleModuleParameterDynamic_Seeded;
}
declare class ParticleModulePivotOffset mixins ParticleModuleLocationBase {
  PivotOffset: Vector2D;
  static Load(ResourceName: string): ParticleModulePivotOffset;
  static Find(Outer: UObject, ResourceName: string): ParticleModulePivotOffset;
  static GetDefaultObject(): ParticleModulePivotOffset;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModulePivotOffset;
  static C(Other: UObject | any): ParticleModulePivotOffset;
}
declare class ParticleModuleRotation mixins ParticleModuleRotationBase {
  StartRotation: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleRotation;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleRotation;
  static GetDefaultObject(): ParticleModuleRotation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotation;
  static C(Other: UObject | any): ParticleModuleRotation;
}
declare class ParticleModuleRotation_Seeded mixins ParticleModuleRotation {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleRotation_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleRotation_Seeded;
  static GetDefaultObject(): ParticleModuleRotation_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotation_Seeded;
  static C(Other: UObject | any): ParticleModuleRotation_Seeded;
}
declare class ParticleModuleRotationOverLifetime
  mixins ParticleModuleRotationBase {
  RotationOverLife: RawDistributionFloat;
  Scale: boolean;
  static Load(ResourceName: string): ParticleModuleRotationOverLifetime;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleRotationOverLifetime;
  static GetDefaultObject(): ParticleModuleRotationOverLifetime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotationOverLifetime;
  static C(Other: UObject | any): ParticleModuleRotationOverLifetime;
}
declare class ParticleModuleRotationRate mixins ParticleModuleRotationRateBase {
  StartRotationRate: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleRotationRate;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleRotationRate;
  static GetDefaultObject(): ParticleModuleRotationRate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotationRate;
  static C(Other: UObject | any): ParticleModuleRotationRate;
}
declare class ParticleModuleRotationRate_Seeded
  mixins ParticleModuleRotationRate {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleRotationRate_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleRotationRate_Seeded;
  static GetDefaultObject(): ParticleModuleRotationRate_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotationRate_Seeded;
  static C(Other: UObject | any): ParticleModuleRotationRate_Seeded;
}
declare class ParticleModuleRotationRateMultiplyLife
  mixins ParticleModuleRotationRateBase {
  LifeMultiplier: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleRotationRateMultiplyLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleRotationRateMultiplyLife;
  static GetDefaultObject(): ParticleModuleRotationRateMultiplyLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleRotationRateMultiplyLife;
  static C(Other: UObject | any): ParticleModuleRotationRateMultiplyLife;
}
declare class ParticleModuleSizeBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleSizeBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSizeBase;
  static GetDefaultObject(): ParticleModuleSizeBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSizeBase;
  static C(Other: UObject | any): ParticleModuleSizeBase;
}
declare class ParticleModuleSize mixins ParticleModuleSizeBase {
  StartSize: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleSize;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSize;
  static GetDefaultObject(): ParticleModuleSize;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSize;
  static C(Other: UObject | any): ParticleModuleSize;
}
declare class ParticleModuleSize_Seeded mixins ParticleModuleSize {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleSize_Seeded;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSize_Seeded;
  static GetDefaultObject(): ParticleModuleSize_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSize_Seeded;
  static C(Other: UObject | any): ParticleModuleSize_Seeded;
}
declare class ParticleModuleSizeMultiplyLife mixins ParticleModuleSizeBase {
  LifeMultiplier: RawDistributionVector;
  MultiplyX: boolean;
  MultiplyY: boolean;
  MultiplyZ: boolean;
  static Load(ResourceName: string): ParticleModuleSizeMultiplyLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleSizeMultiplyLife;
  static GetDefaultObject(): ParticleModuleSizeMultiplyLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSizeMultiplyLife;
  static C(Other: UObject | any): ParticleModuleSizeMultiplyLife;
}
declare class ParticleModuleSizeScale mixins ParticleModuleSizeBase {
  SizeScale: RawDistributionVector;
  EnableX: boolean;
  EnableY: boolean;
  EnableZ: boolean;
  static Load(ResourceName: string): ParticleModuleSizeScale;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSizeScale;
  static GetDefaultObject(): ParticleModuleSizeScale;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSizeScale;
  static C(Other: UObject | any): ParticleModuleSizeScale;
}
declare class ParticleModuleSizeScaleBySpeed mixins ParticleModuleSizeBase {
  SpeedScale: Vector2D;
  MaxScale: Vector2D;
  static Load(ResourceName: string): ParticleModuleSizeScaleBySpeed;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleSizeScaleBySpeed;
  static GetDefaultObject(): ParticleModuleSizeScaleBySpeed;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSizeScaleBySpeed;
  static C(Other: UObject | any): ParticleModuleSizeScaleBySpeed;
}
declare class ParticleModuleSourceMovement mixins ParticleModuleLocationBase {
  SourceMovementScale: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleSourceMovement;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleSourceMovement;
  static GetDefaultObject(): ParticleModuleSourceMovement;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSourceMovement;
  static C(Other: UObject | any): ParticleModuleSourceMovement;
}
declare class ParticleModuleSpawnPerUnit mixins ParticleModuleSpawnBase {
  UnitScalar: number;
  SpawnPerUnit: RawDistributionFloat;
  bIgnoreSpawnRateWhenMoving: boolean;
  MovementTolerance: number;
  MaxFrameDistance: number;
  bIgnoreMovementAlongX: boolean;
  bIgnoreMovementAlongY: boolean;
  bIgnoreMovementAlongZ: boolean;
  static Load(ResourceName: string): ParticleModuleSpawnPerUnit;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSpawnPerUnit;
  static GetDefaultObject(): ParticleModuleSpawnPerUnit;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSpawnPerUnit;
  static C(Other: UObject | any): ParticleModuleSpawnPerUnit;
}
declare class ParticleModuleSubUVBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleSubUVBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUVBase;
  static GetDefaultObject(): ParticleModuleSubUVBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSubUVBase;
  static C(Other: UObject | any): ParticleModuleSubUVBase;
}
declare class SubUVAnimation mixins UObject {
  SubUVTexture: Texture2D;
  SubImages_Horizontal: number;
  SubImages_Vertical: number;
  BoundingMode: ESubUVBoundingVertexCountT;
  OpacitySourceMode: EOpacitySourceModeT;
  AlphaThreshold: number;
  static Load(ResourceName: string): SubUVAnimation;
  static Find(Outer: UObject, ResourceName: string): SubUVAnimation;
  static GetDefaultObject(): SubUVAnimation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SubUVAnimation;
  static C(Other: UObject | any): SubUVAnimation;
}
declare class ParticleModuleSubUV mixins ParticleModuleSubUVBase {
  Animation: SubUVAnimation;
  SubImageIndex: RawDistributionFloat;
  bUseRealTime: boolean;
  static Load(ResourceName: string): ParticleModuleSubUV;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUV;
  static GetDefaultObject(): ParticleModuleSubUV;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSubUV;
  static C(Other: UObject | any): ParticleModuleSubUV;
}
declare class ParticleModuleSubUVMovie mixins ParticleModuleSubUV {
  bUseEmitterTime: boolean;
  FrameRate: RawDistributionFloat;
  StartingFrame: number;
  static Load(ResourceName: string): ParticleModuleSubUVMovie;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleSubUVMovie;
  static GetDefaultObject(): ParticleModuleSubUVMovie;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleSubUVMovie;
  static C(Other: UObject | any): ParticleModuleSubUVMovie;
}
declare class ParticleModuleTrailBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleTrailBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleTrailBase;
  static GetDefaultObject(): ParticleModuleTrailBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTrailBase;
  static C(Other: UObject | any): ParticleModuleTrailBase;
}
declare type ETrail2SourceMethodT =
  | "PET2SRCM_Default"
  | "PET2SRCM_Particle"
  | "PET2SRCM_Actor"
  | "PET2SRCM_MAX";
declare var ETrail2SourceMethod: {
  PET2SRCM_Default: "PET2SRCM_Default",
  PET2SRCM_Particle: "PET2SRCM_Particle",
  PET2SRCM_Actor: "PET2SRCM_Actor",
  PET2SRCM_MAX: "PET2SRCM_MAX"
};
declare type EParticleSourceSelectionMethodT =
  | "EPSSM_Random"
  | "EPSSM_Sequential"
  | "EPSSM_MAX";
declare var EParticleSourceSelectionMethod: {
  EPSSM_Random: "EPSSM_Random",
  EPSSM_Sequential: "EPSSM_Sequential",
  EPSSM_MAX: "EPSSM_MAX"
};
declare class ParticleModuleTrailSource mixins ParticleModuleTrailBase {
  SourceMethod: ETrail2SourceMethodT;
  SourceName: string;
  SourceStrength: RawDistributionFloat;
  bLockSourceStength: boolean;
  SourceOffsetCount: number;
  SourceOffsetDefaults: Vector[];
  SelectionMethod: EParticleSourceSelectionMethodT;
  bInheritRotation: boolean;
  static Load(ResourceName: string): ParticleModuleTrailSource;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleTrailSource;
  static GetDefaultObject(): ParticleModuleTrailSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTrailSource;
  static C(Other: UObject | any): ParticleModuleTrailSource;
}
declare class ParticleModuleTypeDataAnimTrail
  mixins ParticleModuleTypeDataBase {
  bDeadTrailsOnDeactivate: boolean;
  bEnablePreviousTangentRecalculation: boolean;
  bTangentRecalculationEveryFrame: boolean;
  TilingDistance: number;
  DistanceTessellationStepSize: number;
  TangentTessellationStepSize: number;
  WidthTessellationStepSize: number;
  static Load(ResourceName: string): ParticleModuleTypeDataAnimTrail;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleTypeDataAnimTrail;
  static GetDefaultObject(): ParticleModuleTypeDataAnimTrail;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTypeDataAnimTrail;
  static C(Other: UObject | any): ParticleModuleTypeDataAnimTrail;
}
declare type EBeam2MethodT =
  | "PEB2M_Distance"
  | "PEB2M_Target"
  | "PEB2M_Branch"
  | "PEB2M_MAX";
declare var EBeam2Method: {
  PEB2M_Distance: "PEB2M_Distance",
  PEB2M_Target: "PEB2M_Target",
  PEB2M_Branch: "PEB2M_Branch",
  PEB2M_MAX: "PEB2M_MAX"
};
declare type EBeamTaperMethodT =
  | "PEBTM_None"
  | "PEBTM_Full"
  | "PEBTM_Partial"
  | "PEBTM_MAX";
declare var EBeamTaperMethod: {
  PEBTM_None: "PEBTM_None",
  PEBTM_Full: "PEBTM_Full",
  PEBTM_Partial: "PEBTM_Partial",
  PEBTM_MAX: "PEBTM_MAX"
};
declare class ParticleModuleTypeDataBeam2 mixins ParticleModuleTypeDataBase {
  BeamMethod: EBeam2MethodT;
  TextureTile: number;
  TextureTileDistance: number;
  Sheets: number;
  MaxBeamCount: number;
  Speed: number;
  InterpolationPoints: number;
  bAlwaysOn: boolean;
  UpVectorStepSize: number;
  BranchParentName: string;
  Distance: RawDistributionFloat;
  TaperMethod: EBeamTaperMethodT;
  TaperFactor: RawDistributionFloat;
  TaperScale: RawDistributionFloat;
  RenderGeometry: boolean;
  RenderDirectLine: boolean;
  RenderLines: boolean;
  RenderTessellation: boolean;
  static Load(ResourceName: string): ParticleModuleTypeDataBeam2;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleTypeDataBeam2;
  static GetDefaultObject(): ParticleModuleTypeDataBeam2;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTypeDataBeam2;
  static C(Other: UObject | any): ParticleModuleTypeDataBeam2;
}
declare class VectorField mixins UObject {
  Bounds: Box;
  Intensity: number;
  static Load(ResourceName: string): VectorField;
  static Find(Outer: UObject, ResourceName: string): VectorField;
  static GetDefaultObject(): VectorField;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VectorField;
  static C(Other: UObject | any): VectorField;
}
declare class GPUSpriteLocalVectorFieldInfo {
  Field: VectorField;
  Transform: Transform;
  MinInitialRotation: Rotator;
  MaxInitialRotation: Rotator;
  RotationRate: Rotator;
  Intensity: number;
  Tightness: number;
  bIgnoreComponentTransform: boolean;
  bTileX: boolean;
  bTileY: boolean;
  bTileZ: boolean;
  bUseFixDT: boolean;
  clone(): GPUSpriteLocalVectorFieldInfo;
  static C(Other: UObject | any): GPUSpriteLocalVectorFieldInfo;
}
declare class FloatDistribution {
  Table: DistributionLookupTable;
  clone(): FloatDistribution;
  static C(Other: UObject | any): FloatDistribution;
}
declare class GPUSpriteEmitterInfo {
  RequiredModule: ParticleModuleRequired;
  SpawnModule: ParticleModuleSpawn;
  SpawnPerUnitModule: ParticleModuleSpawnPerUnit;
  SpawnModules: ParticleModule[];
  LocalVectorField: GPUSpriteLocalVectorFieldInfo;
  VectorFieldScale: FloatDistribution;
  DragCoefficient: FloatDistribution;
  PointAttractorStrength: FloatDistribution;
  Resilience: FloatDistribution;
  ConstantAcceleration: Vector;
  PointAttractorPosition: Vector;
  PointAttractorRadiusSq: number;
  OrbitOffsetBase: Vector;
  OrbitOffsetRange: Vector;
  InvMaxSize: Vector2D;
  InvRotationRateScale: number;
  MaxLifetime: number;
  MaxParticleCount: number;
  ScreenAlignment: EParticleScreenAlignmentT;
  LockAxisFlag: EParticleAxisLockT;
  bEnableCollision: boolean;
  CollisionMode: EParticleCollisionModeT;
  bRemoveHMDRoll: boolean;
  MinFacingCameraBlendDistance: number;
  MaxFacingCameraBlendDistance: number;
  DynamicColor: RawDistributionVector;
  DynamicAlpha: RawDistributionFloat;
  DynamicColorScale: RawDistributionVector;
  DynamicAlphaScale: RawDistributionFloat;
  clone(): GPUSpriteEmitterInfo;
  static C(Other: UObject | any): GPUSpriteEmitterInfo;
}
declare class GPUSpriteResourceData {
  QuantizedColorSamples: Color[];
  QuantizedMiscSamples: Color[];
  QuantizedSimulationAttrSamples: Color[];
  ColorScale: Vector4;
  ColorBias: Vector4;
  MiscScale: Vector4;
  MiscBias: Vector4;
  SimulationAttrCurveScale: Vector4;
  SimulationAttrCurveBias: Vector4;
  SubImageSize: Vector4;
  SizeBySpeed: Vector4;
  ConstantAcceleration: Vector;
  OrbitOffsetBase: Vector;
  OrbitOffsetRange: Vector;
  OrbitFrequencyBase: Vector;
  OrbitFrequencyRange: Vector;
  OrbitPhaseBase: Vector;
  OrbitPhaseRange: Vector;
  GlobalVectorFieldScale: number;
  GlobalVectorFieldTightness: number;
  PerParticleVectorFieldScale: number;
  PerParticleVectorFieldBias: number;
  DragCoefficientScale: number;
  DragCoefficientBias: number;
  ResilienceScale: number;
  ResilienceBias: number;
  CollisionRadiusScale: number;
  CollisionRadiusBias: number;
  CollisionTimeBias: number;
  CollisionRandomSpread: number;
  CollisionRandomDistribution: number;
  OneMinusFriction: number;
  RotationRateScale: number;
  CameraMotionBlurAmount: number;
  ScreenAlignment: EParticleScreenAlignmentT;
  LockAxisFlag: EParticleAxisLockT;
  PivotOffset: Vector2D;
  bRemoveHMDRoll: boolean;
  MinFacingCameraBlendDistance: number;
  MaxFacingCameraBlendDistance: number;
  clone(): GPUSpriteResourceData;
  static C(Other: UObject | any): GPUSpriteResourceData;
}
declare class ParticleModuleTypeDataGpu mixins ParticleModuleTypeDataBase {
  EmitterInfo: GPUSpriteEmitterInfo;
  ResourceData: GPUSpriteResourceData;
  CameraMotionBlurAmount: number;
  bClearExistingParticlesOnInit: boolean;
  static Load(ResourceName: string): ParticleModuleTypeDataGpu;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataGpu;
  static GetDefaultObject(): ParticleModuleTypeDataGpu;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTypeDataGpu;
  static C(Other: UObject | any): ParticleModuleTypeDataGpu;
}
declare type EMeshScreenAlignmentT =
  | "PSMA_MeshFaceCameraWithRoll"
  | "PSMA_MeshFaceCameraWithSpin"
  | "PSMA_MeshFaceCameraWithLockedAxis"
  | "PSMA_MAX";
declare var EMeshScreenAlignment: {
  PSMA_MeshFaceCameraWithRoll: "PSMA_MeshFaceCameraWithRoll",
  PSMA_MeshFaceCameraWithSpin: "PSMA_MeshFaceCameraWithSpin",
  PSMA_MeshFaceCameraWithLockedAxis: "PSMA_MeshFaceCameraWithLockedAxis",
  PSMA_MAX: "PSMA_MAX"
};
declare type EMeshCameraFacingUpAxisT =
  | "CameraFacing_NoneUP"
  | "CameraFacing_ZUp"
  | "CameraFacing_NegativeZUp"
  | "CameraFacing_YUp"
  | "CameraFacing_NegativeYUp"
  | "CameraFacing_MAX";
declare var EMeshCameraFacingUpAxis: {
  CameraFacing_NoneUP: "CameraFacing_NoneUP",
  CameraFacing_ZUp: "CameraFacing_ZUp",
  CameraFacing_NegativeZUp: "CameraFacing_NegativeZUp",
  CameraFacing_YUp: "CameraFacing_YUp",
  CameraFacing_NegativeYUp: "CameraFacing_NegativeYUp",
  CameraFacing_MAX: "CameraFacing_MAX"
};
declare type EMeshCameraFacingOptionsT =
  | "XAxisFacing_NoUp"
  | "XAxisFacing_ZUp"
  | "XAxisFacing_NegativeZUp"
  | "XAxisFacing_YUp"
  | "XAxisFacing_NegativeYUp"
  | "LockedAxis_ZAxisFacing"
  | "LockedAxis_NegativeZAxisFacing"
  | "LockedAxis_YAxisFacing"
  | "LockedAxis_NegativeYAxisFacing"
  | "VelocityAligned_ZAxisFacing"
  | "VelocityAligned_NegativeZAxisFacing"
  | "VelocityAligned_YAxisFacing"
  | "VelocityAligned_NegativeYAxisFacing"
  | "EMeshCameraFacingOptions_MAX";
declare var EMeshCameraFacingOptions: {
  XAxisFacing_NoUp: "XAxisFacing_NoUp",
  XAxisFacing_ZUp: "XAxisFacing_ZUp",
  XAxisFacing_NegativeZUp: "XAxisFacing_NegativeZUp",
  XAxisFacing_YUp: "XAxisFacing_YUp",
  XAxisFacing_NegativeYUp: "XAxisFacing_NegativeYUp",
  LockedAxis_ZAxisFacing: "LockedAxis_ZAxisFacing",
  LockedAxis_NegativeZAxisFacing: "LockedAxis_NegativeZAxisFacing",
  LockedAxis_YAxisFacing: "LockedAxis_YAxisFacing",
  LockedAxis_NegativeYAxisFacing: "LockedAxis_NegativeYAxisFacing",
  VelocityAligned_ZAxisFacing: "VelocityAligned_ZAxisFacing",
  VelocityAligned_NegativeZAxisFacing: "VelocityAligned_NegativeZAxisFacing",
  VelocityAligned_YAxisFacing: "VelocityAligned_YAxisFacing",
  VelocityAligned_NegativeYAxisFacing: "VelocityAligned_NegativeYAxisFacing",
  EMeshCameraFacingOptions_MAX: "EMeshCameraFacingOptions_MAX"
};
declare class ParticleModuleTypeDataMesh mixins ParticleModuleTypeDataBase {
  Mesh: StaticMesh;
  bUseStaticMeshLODs: boolean;
  LODSizeScale: number;
  CastShadows: boolean;
  DoCollisions: boolean;
  MeshAlignment: EMeshScreenAlignmentT;
  bOverrideMaterial: boolean;
  bOverrideDefaultMotionBlurSettings: boolean;
  bEnableMotionBlur: boolean;
  Pitch: number;
  Roll: number;
  Yaw: number;
  RollPitchYawRange: RawDistributionVector;
  AxisLockOption: EParticleAxisLockT;
  bCameraFacing: boolean;
  CameraFacingUpAxisOption: EMeshCameraFacingUpAxisT;
  CameraFacingOption: EMeshCameraFacingOptionsT;
  bApplyParticleRotationAsSpin: boolean;
  bFaceCameraDirectionRatherThanPosition: boolean;
  bCollisionsConsiderPartilceSize: boolean;
  static Load(ResourceName: string): ParticleModuleTypeDataMesh;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleTypeDataMesh;
  static GetDefaultObject(): ParticleModuleTypeDataMesh;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTypeDataMesh;
  static C(Other: UObject | any): ParticleModuleTypeDataMesh;
}
declare type ETrailsRenderAxisOptionT =
  | "Trails_CameraUp"
  | "Trails_SourceUp"
  | "Trails_WorldUp"
  | "Trails_MAX";
declare var ETrailsRenderAxisOption: {
  Trails_CameraUp: "Trails_CameraUp",
  Trails_SourceUp: "Trails_SourceUp",
  Trails_WorldUp: "Trails_WorldUp",
  Trails_MAX: "Trails_MAX"
};
declare class ParticleModuleTypeDataRibbon mixins ParticleModuleTypeDataBase {
  MaxTessellationBetweenParticles: number;
  SheetsPerTrail: number;
  MaxTrailCount: number;
  MaxParticleInTrailCount: number;
  bDeadTrailsOnDeactivate: boolean;
  bDeadTrailsOnSourceLoss: boolean;
  bClipSourceSegement: boolean;
  bEnablePreviousTangentRecalculation: boolean;
  bTangentRecalculationEveryFrame: boolean;
  bSpawnInitialParticle: boolean;
  RenderAxis: ETrailsRenderAxisOptionT;
  TangentSpawningScalar: number;
  bRenderGeometry: boolean;
  bRenderSpawnPoints: boolean;
  bRenderTangents: boolean;
  bRenderTessellation: boolean;
  TilingDistance: number;
  DistanceTessellationStepSize: number;
  bEnableTangentDiffInterpScale: boolean;
  TangentTessellationScalar: number;
  static Load(ResourceName: string): ParticleModuleTypeDataRibbon;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleTypeDataRibbon;
  static GetDefaultObject(): ParticleModuleTypeDataRibbon;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleTypeDataRibbon;
  static C(Other: UObject | any): ParticleModuleTypeDataRibbon;
}
declare class ParticleModuleVectorFieldBase mixins ParticleModule {
  static Load(ResourceName: string): ParticleModuleVectorFieldBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldBase;
  static GetDefaultObject(): ParticleModuleVectorFieldBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldBase;
  static C(Other: UObject | any): ParticleModuleVectorFieldBase;
}
declare class ParticleModuleVectorFieldGlobal
  mixins ParticleModuleVectorFieldBase {
  bOverrideGlobalVectorFieldTightness: boolean;
  GlobalVectorFieldScale: number;
  GlobalVectorFieldTightness: number;
  static Load(ResourceName: string): ParticleModuleVectorFieldGlobal;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldGlobal;
  static GetDefaultObject(): ParticleModuleVectorFieldGlobal;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldGlobal;
  static C(Other: UObject | any): ParticleModuleVectorFieldGlobal;
}
declare class ParticleModuleVectorFieldLocal
  mixins ParticleModuleVectorFieldBase {
  VectorField: VectorField;
  RelativeTranslation: Vector;
  RelativeRotation: Rotator;
  RelativeScale3D: Vector;
  Intensity: number;
  Tightness: number;
  bIgnoreComponentTransform: boolean;
  bTileX: boolean;
  bTileY: boolean;
  bTileZ: boolean;
  bUseFixDT: boolean;
  static Load(ResourceName: string): ParticleModuleVectorFieldLocal;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldLocal;
  static GetDefaultObject(): ParticleModuleVectorFieldLocal;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldLocal;
  static C(Other: UObject | any): ParticleModuleVectorFieldLocal;
}
declare class ParticleModuleVectorFieldRotation
  mixins ParticleModuleVectorFieldBase {
  MinInitialRotation: Vector;
  MaxInitialRotation: Vector;
  static Load(ResourceName: string): ParticleModuleVectorFieldRotation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldRotation;
  static GetDefaultObject(): ParticleModuleVectorFieldRotation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldRotation;
  static C(Other: UObject | any): ParticleModuleVectorFieldRotation;
}
declare class ParticleModuleVectorFieldRotationRate
  mixins ParticleModuleVectorFieldBase {
  RotationRate: Vector;
  static Load(ResourceName: string): ParticleModuleVectorFieldRotationRate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldRotationRate;
  static GetDefaultObject(): ParticleModuleVectorFieldRotationRate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldRotationRate;
  static C(Other: UObject | any): ParticleModuleVectorFieldRotationRate;
}
declare class ParticleModuleVectorFieldScale
  mixins ParticleModuleVectorFieldBase {
  VectorFieldScale: DistributionFloat;
  VectorFieldScaleRaw: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleVectorFieldScale;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldScale;
  static GetDefaultObject(): ParticleModuleVectorFieldScale;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldScale;
  static C(Other: UObject | any): ParticleModuleVectorFieldScale;
}
declare class ParticleModuleVectorFieldScaleOverLife
  mixins ParticleModuleVectorFieldBase {
  VectorFieldScaleOverLife: DistributionFloat;
  VectorFieldScaleOverLifeRaw: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleVectorFieldScaleOverLife;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVectorFieldScaleOverLife;
  static GetDefaultObject(): ParticleModuleVectorFieldScaleOverLife;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVectorFieldScaleOverLife;
  static C(Other: UObject | any): ParticleModuleVectorFieldScaleOverLife;
}
declare class ParticleModuleVelocityBase mixins ParticleModule {
  bInWorldSpace: boolean;
  bApplyOwnerScale: boolean;
  static Load(ResourceName: string): ParticleModuleVelocityBase;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityBase;
  static GetDefaultObject(): ParticleModuleVelocityBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVelocityBase;
  static C(Other: UObject | any): ParticleModuleVelocityBase;
}
declare class ParticleModuleVelocity mixins ParticleModuleVelocityBase {
  StartVelocity: RawDistributionVector;
  StartVelocityRadial: RawDistributionFloat;
  static Load(ResourceName: string): ParticleModuleVelocity;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocity;
  static GetDefaultObject(): ParticleModuleVelocity;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVelocity;
  static C(Other: UObject | any): ParticleModuleVelocity;
}
declare class ParticleModuleVelocity_Seeded mixins ParticleModuleVelocity {
  RandomSeedInfo: ParticleRandomSeedInfo;
  static Load(ResourceName: string): ParticleModuleVelocity_Seeded;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVelocity_Seeded;
  static GetDefaultObject(): ParticleModuleVelocity_Seeded;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVelocity_Seeded;
  static C(Other: UObject | any): ParticleModuleVelocity_Seeded;
}
declare class ParticleModuleVelocityCone mixins ParticleModuleVelocityBase {
  Angle: RawDistributionFloat;
  Velocity: RawDistributionFloat;
  Direction: Vector;
  static Load(ResourceName: string): ParticleModuleVelocityCone;
  static Find(Outer: UObject, ResourceName: string): ParticleModuleVelocityCone;
  static GetDefaultObject(): ParticleModuleVelocityCone;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVelocityCone;
  static C(Other: UObject | any): ParticleModuleVelocityCone;
}
declare class ParticleModuleVelocityInheritParent
  mixins ParticleModuleVelocityBase {
  Scale: RawDistributionVector;
  static Load(ResourceName: string): ParticleModuleVelocityInheritParent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVelocityInheritParent;
  static GetDefaultObject(): ParticleModuleVelocityInheritParent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVelocityInheritParent;
  static C(Other: UObject | any): ParticleModuleVelocityInheritParent;
}
declare class ParticleModuleVelocityOverLifetime
  mixins ParticleModuleVelocityBase {
  VelOverLife: RawDistributionVector;
  Absolute: boolean;
  static Load(ResourceName: string): ParticleModuleVelocityOverLifetime;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ParticleModuleVelocityOverLifetime;
  static GetDefaultObject(): ParticleModuleVelocityOverLifetime;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleModuleVelocityOverLifetime;
  static C(Other: UObject | any): ParticleModuleVelocityOverLifetime;
}
declare class ParticleSpriteEmitter mixins ParticleEmitter {
  static Load(ResourceName: string): ParticleSpriteEmitter;
  static Find(Outer: UObject, ResourceName: string): ParticleSpriteEmitter;
  static GetDefaultObject(): ParticleSpriteEmitter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ParticleSpriteEmitter;
  static C(Other: UObject | any): ParticleSpriteEmitter;
}
declare class PathFollowingAgentInterface mixins Interface {
  static Load(ResourceName: string): PathFollowingAgentInterface;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PathFollowingAgentInterface;
  static GetDefaultObject(): PathFollowingAgentInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PathFollowingAgentInterface;
  static C(Other: UObject | any): PathFollowingAgentInterface;
}
declare class PawnNoiseEmitterComponent mixins ActorComponent {
  bAIPerceptionSystemCompatibilityMode: boolean;
  LastRemoteNoisePosition: Vector;
  NoiseLifetime: number;
  LastRemoteNoiseVolume: number;
  LastRemoteNoiseTime: number;
  LastLocalNoiseVolume: number;
  LastLocalNoiseTime: number;
  static Load(ResourceName: string): PawnNoiseEmitterComponent;
  static Find(Outer: UObject, ResourceName: string): PawnNoiseEmitterComponent;
  static GetDefaultObject(): PawnNoiseEmitterComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PawnNoiseEmitterComponent;
  MakeNoise(NoiseMaker: Actor, Loudness: number, NoiseLocation: Vector): void;
  static C(Other: UObject | any): PawnNoiseEmitterComponent;
}
declare class PhysicalAnimationComponent mixins ActorComponent {
  StrengthMultiplyer: number;
  SkeletalMeshComponent: SkeletalMeshComponent;
  static Load(ResourceName: string): PhysicalAnimationComponent;
  static Find(Outer: UObject, ResourceName: string): PhysicalAnimationComponent;
  static GetDefaultObject(): PhysicalAnimationComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicalAnimationComponent;
  SetStrengthMultiplyer(InStrengthMultiplyer: number): void;
  SetSkeletalMeshComponent(
    InSkeletalMeshComponent: SkeletalMeshComponent
  ): void;
  GetBodyTargetTransform(BodyName: string): Transform;
  ApplyPhysicalAnimationSettingsBelow(
    BodyName: string,
    PhysicalAnimationData: PhysicalAnimationData,
    bIncludeSelf: boolean
  ): void;
  ApplyPhysicalAnimationSettings(
    BodyName: string,
    PhysicalAnimationData: PhysicalAnimationData
  ): void;
  ApplyPhysicalAnimationProfileBelow(
    BodyName: string,
    ProfileName: string,
    bIncludeSelf: boolean,
    bClearNotFound: boolean
  ): void;
  static C(Other: UObject | any): PhysicalAnimationComponent;
}
declare class RigidBodyBase mixins Actor {
  static GetDefaultObject(): RigidBodyBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RigidBodyBase;
  static C(Other: UObject | any): RigidBodyBase;
}
declare class ConstrainComponentPropName {
  ComponentName: string;
  clone(): ConstrainComponentPropName;
  static C(Other: UObject | any): ConstrainComponentPropName;
}
declare type EConstraintFrameT = "Frame1" | "Frame2" | "EConstraintFrame_MAX";
declare var EConstraintFrame: {
  Frame1: "Frame1",
  Frame2: "Frame2",
  EConstraintFrame_MAX: "EConstraintFrame_MAX"
};
declare class PhysicsConstraintComponent mixins SceneComponent {
  ConstraintActor1: Actor;
  ComponentName1: ConstrainComponentPropName;
  ConstraintActor2: Actor;
  ComponentName2: ConstrainComponentPropName;
  ConstraintSetup: PhysicsConstraintTemplate;
  OnConstraintBroken: UnrealEngineMulticastDelegate<
    (ConstraintIndex: number) => void
  >;
  ConstraintInstance: ConstraintInstance;
  static Load(ResourceName: string): PhysicsConstraintComponent;
  static Find(Outer: UObject, ResourceName: string): PhysicsConstraintComponent;
  static GetDefaultObject(): PhysicsConstraintComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsConstraintComponent;
  SetOrientationDriveTwistAndSwing(
    bEnableTwistDrive: boolean,
    bEnableSwingDrive: boolean
  ): void;
  SetOrientationDriveSLERP(bEnableSLERP: boolean): void;
  SetLinearZLimit(
    ConstraintType: ELinearConstraintMotionT,
    LimitSize: number
  ): void;
  SetLinearYLimit(
    ConstraintType: ELinearConstraintMotionT,
    LimitSize: number
  ): void;
  SetLinearXLimit(
    ConstraintType: ELinearConstraintMotionT,
    LimitSize: number
  ): void;
  SetLinearVelocityTarget(InVelTarget: Vector): void;
  SetLinearVelocityDrive(
    bEnableDriveX: boolean,
    bEnableDriveY: boolean,
    bEnableDriveZ: boolean
  ): void;
  SetLinearPositionTarget(InPosTarget: Vector): void;
  SetLinearPositionDrive(
    bEnableDriveX: boolean,
    bEnableDriveY: boolean,
    bEnableDriveZ: boolean
  ): void;
  SetLinearDriveParams(
    PositionStrength: number,
    VelocityStrength: number,
    InForceLimit: number
  ): void;
  SetLinearBreakable(
    bLinearBreakable: boolean,
    LinearBreakThreshold: number
  ): void;
  SetDisableCollision(bDisableCollision: boolean): void;
  SetConstraintReferencePosition(
    Frame: EConstraintFrameT,
    RefPosition: Vector
  ): void;
  SetConstraintReferenceOrientation(
    Frame: EConstraintFrameT,
    PriAxis: Vector,
    SecAxis: Vector
  ): void;
  SetConstraintReferenceFrame(
    Frame: EConstraintFrameT,
    RefFrame: Transform
  ): void;
  SetConstrainedComponents(
    Component1: PrimitiveComponent,
    BoneName1: string,
    Component2: PrimitiveComponent,
    BoneName2: string
  ): void;
  SetAngularVelocityTarget(InVelTarget: Vector): void;
  SetAngularVelocityDriveTwistAndSwing(
    bEnableTwistDrive: boolean,
    bEnableSwingDrive: boolean
  ): void;
  SetAngularVelocityDriveSLERP(bEnableSLERP: boolean): void;
  SetAngularVelocityDrive(
    bEnableSwingDrive: boolean,
    bEnableTwistDrive: boolean
  ): void;
  SetAngularTwistLimit(
    ConstraintType: EAngularConstraintMotionT,
    TwistLimitAngle: number
  ): void;
  SetAngularSwing2Limit(
    MotionType: EAngularConstraintMotionT,
    Swing2LimitAngle: number
  ): void;
  SetAngularSwing1Limit(
    MotionType: EAngularConstraintMotionT,
    Swing1LimitAngle: number
  ): void;
  SetAngularOrientationTarget(InPosTarget: Rotator): void;
  SetAngularOrientationDrive(
    bEnableSwingDrive: boolean,
    bEnableTwistDrive: boolean
  ): void;
  SetAngularDriveParams(
    PositionStrength: number,
    VelocityStrength: number,
    InForceLimit: number
  ): void;
  SetAngularDriveMode(DriveMode: EAngularDriveModeT): void;
  SetAngularBreakable(
    bAngularBreakable: boolean,
    AngularBreakThreshold: number
  ): void;
  IsBroken(): boolean;
  GetCurrentTwist(): number;
  GetCurrentSwing2(): number;
  GetCurrentSwing1(): number;
  GetConstraintForce(
    OutLinearForce?: Vector,
    OutAngularForce?: Vector
  ): {
    OutLinearForce: Vector,
    OutAngularForce: Vector
  };
  BreakConstraint(): void;
  static C(Other: UObject | any): PhysicsConstraintComponent;
}
declare class PhysicsConstraintActor mixins RigidBodyBase {
  ConstraintComp: PhysicsConstraintComponent;
  ConstraintActor1: Actor;
  ConstraintActor2: Actor;
  bDisableCollision: boolean;
  static GetDefaultObject(): PhysicsConstraintActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsConstraintActor;
  static C(Other: UObject | any): PhysicsConstraintActor;
}
declare class PhysicsHandleComponent mixins ActorComponent {
  GrabbedComponent: PrimitiveComponent;
  bSoftAngularConstraint: boolean;
  bSoftLinearConstraint: boolean;
  bInterpolateTarget: boolean;
  LinearDamping: number;
  LinearStiffness: number;
  AngularDamping: number;
  AngularStiffness: number;
  InterpolationSpeed: number;
  static Load(ResourceName: string): PhysicsHandleComponent;
  static Find(Outer: UObject, ResourceName: string): PhysicsHandleComponent;
  static GetDefaultObject(): PhysicsHandleComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsHandleComponent;
  SetTargetRotation(NewRotation: Rotator): void;
  SetTargetLocationAndRotation(NewLocation: Vector, NewRotation: Rotator): void;
  SetTargetLocation(NewLocation: Vector): void;
  SetLinearStiffness(NewLinearStiffness: number): void;
  SetLinearDamping(NewLinearDamping: number): void;
  SetInterpolationSpeed(NewInterpolationSpeed: number): void;
  SetAngularStiffness(NewAngularStiffness: number): void;
  SetAngularDamping(NewAngularDamping: number): void;
  ReleaseComponent(): void;
  GrabComponentAtLocationWithRotation(
    Component: PrimitiveComponent,
    InBoneName: string,
    Location: Vector,
    Rotation: Rotator
  ): void;
  GrabComponentAtLocation(
    Component: PrimitiveComponent,
    InBoneName: string,
    GrabLocation: Vector
  ): void;
  GrabComponent(
    Component: PrimitiveComponent,
    InBoneName: string,
    GrabLocation: Vector,
    bConstrainRotation: boolean
  ): void;
  GetTargetLocationAndRotation(
    TargetLocation?: Vector,
    TargetRotation?: Rotator
  ): {
    TargetLocation: Vector,
    TargetRotation: Rotator
  };
  GetGrabbedComponent(): PrimitiveComponent;
  static C(Other: UObject | any): PhysicsHandleComponent;
}
declare class RigidBodyErrorCorrection {
  PingExtrapolation: number;
  PingLimit: number;
  ErrorPerLinearDifference: number;
  ErrorPerAngularDifference: number;
  MaxRestoredStateError: number;
  MaxLinearHardSnapDistance: number;
  PositionLerp: number;
  AngleLerp: number;
  LinearVelocityCoefficient: number;
  AngularVelocityCoefficient: number;
  ErrorAccumulationSeconds: number;
  ErrorAccumulationDistanceSq: number;
  ErrorAccumulationSimilarity: number;
  clone(): RigidBodyErrorCorrection;
  static C(Other: UObject | any): RigidBodyErrorCorrection;
}
declare type ESettingsLockedAxisT =
  | "None"
  | "X"
  | "Y"
  | "Z"
  | "Invalid"
  | "ESettingsLockedAxis_MAX";
declare var ESettingsLockedAxis: {
  None: "None",
  X: "X",
  Y: "Y",
  Z: "Z",
  Invalid: "Invalid",
  ESettingsLockedAxis_MAX: "ESettingsLockedAxis_MAX"
};
declare type ESettingsDOFT =
  | "Full3D"
  | "YZPlane"
  | "XZPlane"
  | "XYPlane"
  | "ESettingsDOF_MAX";
declare var ESettingsDOF: {
  Full3D: "Full3D",
  YZPlane: "YZPlane",
  XZPlane: "XZPlane",
  XYPlane: "XYPlane",
  ESettingsDOF_MAX: "ESettingsDOF_MAX"
};
declare class PhysicalSurfaceName {
  Type: EPhysicalSurfaceT;
  Name: string;
  clone(): PhysicalSurfaceName;
  static C(Other: UObject | any): PhysicalSurfaceName;
}
declare class PhysicsSettings mixins DeveloperSettings {
  DefaultGravityZ: number;
  DefaultTerminalVelocity: number;
  DefaultFluidFriction: number;
  SimulateScratchMemorySize: number;
  RagdollAggregateThreshold: number;
  TriangleMeshTriangleMinAreaThreshold: number;
  bEnableShapeSharing: boolean;
  bEnablePCM: boolean;
  bEnableStabilization: boolean;
  bWarnMissingLocks: boolean;
  bEnable2DPhysics: boolean;
  PhysicErrorCorrection: RigidBodyErrorCorrection;
  LockedAxis: ESettingsLockedAxisT;
  DefaultDegreesOfFreedom: ESettingsDOFT;
  BounceThresholdVelocity: number;
  FrictionCombineMode: EFrictionCombineModeT;
  RestitutionCombineMode: EFrictionCombineModeT;
  MaxAngularVelocity: number;
  MaxDepenetrationVelocity: number;
  ContactOffsetMultiplier: number;
  MinContactOffset: number;
  MaxContactOffset: number;
  bSimulateSkeletalMeshOnDedicatedServer: boolean;
  DefaultShapeComplexity: ECollisionTraceFlagT;
  bDefaultHasComplexCollision: boolean;
  bSuppressFaceRemapTable: boolean;
  bSupportUVFromHitResults: boolean;
  bDisableActiveActors: boolean;
  bDisableKinematicStaticPairs: boolean;
  bDisableKinematicKinematicPairs: boolean;
  bDisableCCD: boolean;
  bEnableEnhancedDeterminism: boolean;
  MaxPhysicsDeltaTime: number;
  bSubstepping: boolean;
  bSubsteppingAsync: boolean;
  MaxSubstepDeltaTime: number;
  MaxSubsteps: number;
  SyncSceneSmoothingFactor: number;
  InitialAverageFrameRate: number;
  PhysXTreeRebuildRate: number;
  PhysicalSurfaces: PhysicalSurfaceName[];
  DefaultBroadphaseSettings: BroadphaseSettings;
  static Load(ResourceName: string): PhysicsSettings;
  static Find(Outer: UObject, ResourceName: string): PhysicsSettings;
  static GetDefaultObject(): PhysicsSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsSettings;
  static C(Other: UObject | any): PhysicsSettings;
}
declare class PhysicsSpringComponent mixins SceneComponent {
  SpringStiffness: number;
  SpringDamping: number;
  SpringLengthAtRest: number;
  SpringRadius: number;
  SpringChannel: ECollisionChannelT;
  bIgnoreSelf: boolean;
  SpringCompression: number;
  static Load(ResourceName: string): PhysicsSpringComponent;
  static Find(Outer: UObject, ResourceName: string): PhysicsSpringComponent;
  static GetDefaultObject(): PhysicsSpringComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsSpringComponent;
  GetSpringRestingPoint(): Vector;
  GetSpringDirection(): Vector;
  GetSpringCurrentEndPoint(): Vector;
  GetNormalizedCompressionScalar(): number;
  static C(Other: UObject | any): PhysicsSpringComponent;
}
declare class PhysicsThrusterComponent mixins SceneComponent {
  ThrustStrength: number;
  static Load(ResourceName: string): PhysicsThrusterComponent;
  static Find(Outer: UObject, ResourceName: string): PhysicsThrusterComponent;
  static GetDefaultObject(): PhysicsThrusterComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsThrusterComponent;
  static C(Other: UObject | any): PhysicsThrusterComponent;
}
declare class PhysicsThruster mixins RigidBodyBase {
  ThrusterComponent: PhysicsThrusterComponent;
  ArrowComponent: ArrowComponent;
  static GetDefaultObject(): PhysicsThruster;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PhysicsThruster;
  static C(Other: UObject | any): PhysicsThruster;
}
declare class SceneCapture mixins Actor {
  MeshComp: StaticMeshComponent;
  SceneComponent: SceneComponent;
  static GetDefaultObject(): SceneCapture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SceneCapture;
  static C(Other: UObject | any): SceneCapture;
}
declare type ESceneCapturePrimitiveRenderModeT =
  | "PRM_LegacySceneCapture"
  | "PRM_RenderScenePrimitives"
  | "PRM_UseShowOnlyList"
  | "PRM_MAX";
declare var ESceneCapturePrimitiveRenderMode: {
  PRM_LegacySceneCapture: "PRM_LegacySceneCapture",
  PRM_RenderScenePrimitives: "PRM_RenderScenePrimitives",
  PRM_UseShowOnlyList: "PRM_UseShowOnlyList",
  PRM_MAX: "PRM_MAX"
};
declare class EngineShowFlagsSetting {
  ShowFlagName: string;
  Enabled: boolean;
  clone(): EngineShowFlagsSetting;
  static C(Other: UObject | any): EngineShowFlagsSetting;
}
declare class SceneCaptureComponent mixins SceneComponent {
  PrimitiveRenderMode: ESceneCapturePrimitiveRenderModeT;
  HiddenComponents: any[];
  HiddenActors: Actor[];
  ShowOnlyComponents: any[];
  ShowOnlyActors: Actor[];
  bCaptureEveryFrame: boolean;
  bCaptureOnMovement: boolean;
  bAlwaysPersistRenderingState: boolean;
  LODDistanceFactor: number;
  MaxViewDistanceOverride: number;
  CaptureSortPriority: number;
  ShowFlagSettings: EngineShowFlagsSetting[];
  ProfilingEventName: string;
  CaptureMesh: StaticMesh;
  static Load(ResourceName: string): SceneCaptureComponent;
  static Find(Outer: UObject, ResourceName: string): SceneCaptureComponent;
  static GetDefaultObject(): SceneCaptureComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SceneCaptureComponent;
  ShowOnlyComponent(InComponent: PrimitiveComponent): void;
  ShowOnlyActorComponents(InActor: Actor): void;
  SetCaptureSortPriority(NewCaptureSortPriority: number): void;
  RemoveShowOnlyComponent(InComponent: PrimitiveComponent): void;
  RemoveShowOnlyActorComponents(InActor: Actor): void;
  HideComponent(InComponent: PrimitiveComponent): void;
  HideActorComponents(InActor: Actor): void;
  ClearShowOnlyComponents(): void;
  ClearHiddenComponents(): void;
  static C(Other: UObject | any): SceneCaptureComponent;
}
declare class PlanarReflectionComponent mixins SceneCaptureComponent {
  PreviewBox: BoxComponent;
  NormalDistortionStrength: number;
  PrefilterRoughness: number;
  PrefilterRoughnessDistance: number;
  ScreenPercentage: number;
  ExtraFOV: number;
  DistanceFromPlaneFadeStart: number;
  DistanceFromPlaneFadeEnd: number;
  DistanceFromPlaneFadeoutStart: number;
  DistanceFromPlaneFadeoutEnd: number;
  AngleFromPlaneFadeStart: number;
  AngleFromPlaneFadeEnd: number;
  bShowPreviewPlane: boolean;
  bRenderSceneTwoSided: boolean;
  CaptureMaterial: Material;
  static Load(ResourceName: string): PlanarReflectionComponent;
  static Find(Outer: UObject, ResourceName: string): PlanarReflectionComponent;
  static GetDefaultObject(): PlanarReflectionComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlanarReflectionComponent;
  static C(Other: UObject | any): PlanarReflectionComponent;
}
declare class PlanarReflection mixins SceneCapture {
  PlanarReflectionComponent: PlanarReflectionComponent;
  SpriteComponent: BillboardComponent;
  bShowPreviewPlane: boolean;
  static GetDefaultObject(): PlanarReflection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlanarReflection;
  OnInterpToggle(bEnable: boolean): void;
  static C(Other: UObject | any): PlanarReflection;
}
declare class PlaneReflectionCapture mixins ReflectionCapture {
  static GetDefaultObject(): PlaneReflectionCapture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlaneReflectionCapture;
  static C(Other: UObject | any): PlaneReflectionCapture;
}
declare class PlaneReflectionCaptureComponent
  mixins ReflectionCaptureComponent {
  InfluenceRadiusScale: number;
  PreviewInfluenceRadius: DrawSphereComponent;
  PreviewCaptureBox: BoxComponent;
  static Load(ResourceName: string): PlaneReflectionCaptureComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PlaneReflectionCaptureComponent;
  static GetDefaultObject(): PlaneReflectionCaptureComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlaneReflectionCaptureComponent;
  static C(Other: UObject | any): PlaneReflectionCaptureComponent;
}
declare class PlatformEventsComponent mixins ActorComponent {
  PlatformChangedToLaptopModeDelegate: UnrealEngineMulticastDelegate<
    () => void
  >;
  PlatformChangedToTabletModeDelegate: UnrealEngineMulticastDelegate<
    () => void
  >;
  static Load(ResourceName: string): PlatformEventsComponent;
  static Find(Outer: UObject, ResourceName: string): PlatformEventsComponent;
  static GetDefaultObject(): PlatformEventsComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlatformEventsComponent;
  SupportsConvertibleLaptops(): boolean;
  IsInTabletMode(): boolean;
  IsInLaptopMode(): boolean;
  static C(Other: UObject | any): PlatformEventsComponent;
}
declare class PlatformInterfaceWebResponse mixins UObject {
  OriginalURL: string;
  ResponseCode: number;
  Tag: number;
  StringResponse: string;
  BinaryResponse: number[];
  static Load(ResourceName: string): PlatformInterfaceWebResponse;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PlatformInterfaceWebResponse;
  static GetDefaultObject(): PlatformInterfaceWebResponse;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlatformInterfaceWebResponse;
  GetNumHeaders(): number;
  GetHeaderValue(HeaderName: string): string;
  GetHeader(
    HeaderIndex: number,
    Header?: string,
    Value?: string
  ): {
    Header: string,
    Value: string
  };
  static C(Other: UObject | any): PlatformInterfaceWebResponse;
}
declare class PlayerStart mixins NavigationObjectBase {
  PlayerStartTag: string;
  ArrowComponent: ArrowComponent;
  static GetDefaultObject(): PlayerStart;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlayerStart;
  static C(Other: UObject | any): PlayerStart;
}
declare class PlayerStartPIE mixins PlayerStart {
  static GetDefaultObject(): PlayerStartPIE;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlayerStartPIE;
  static C(Other: UObject | any): PlayerStartPIE;
}
declare class PluginCommandlet mixins Commandlet {
  static Load(ResourceName: string): PluginCommandlet;
  static Find(Outer: UObject, ResourceName: string): PluginCommandlet;
  static GetDefaultObject(): PluginCommandlet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PluginCommandlet;
  static C(Other: UObject | any): PluginCommandlet;
}
declare class PointLight mixins Light {
  PointLightComponent: PointLightComponent;
  static GetDefaultObject(): PointLight;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PointLight;
  SetRadius(NewRadius: number): void;
  SetLightFalloffExponent(NewLightFalloffExponent: number): void;
  static C(Other: UObject | any): PointLight;
}
declare class Polys mixins UObject {
  static Load(ResourceName: string): Polys;
  static Find(Outer: UObject, ResourceName: string): Polys;
  static GetDefaultObject(): Polys;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): Polys;
  static C(Other: UObject | any): Polys;
}
declare type EBoneSpacesT = "WorldSpace" | "ComponentSpace" | "EBoneSpaces_MAX";
declare var EBoneSpaces: {
  WorldSpace: "WorldSpace",
  ComponentSpace: "ComponentSpace",
  EBoneSpaces_MAX: "EBoneSpaces_MAX"
};
declare class PoseableMeshComponent mixins SkinnedMeshComponent {
  static Load(ResourceName: string): PoseableMeshComponent;
  static Find(Outer: UObject, ResourceName: string): PoseableMeshComponent;
  static GetDefaultObject(): PoseableMeshComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PoseableMeshComponent;
  SetBoneTransformByName(
    BoneName: string,
    InTransform: Transform,
    BoneSpace: EBoneSpacesT
  ): void;
  SetBoneScaleByName(
    BoneName: string,
    InScale3D: Vector,
    BoneSpace: EBoneSpacesT
  ): void;
  SetBoneRotationByName(
    BoneName: string,
    InRotation: Rotator,
    BoneSpace: EBoneSpacesT
  ): void;
  SetBoneLocationByName(
    BoneName: string,
    InLocation: Vector,
    BoneSpace: EBoneSpacesT
  ): void;
  ResetBoneTransformByName(BoneName: string): void;
  GetBoneTransformByName(BoneName: string, BoneSpace: EBoneSpacesT): Transform;
  GetBoneScaleByName(BoneName: string, BoneSpace: EBoneSpacesT): Vector;
  GetBoneRotationByName(BoneName: string, BoneSpace: EBoneSpacesT): Rotator;
  GetBoneLocationByName(BoneName: string, BoneSpace: EBoneSpacesT): Vector;
  CopyPoseFromSkeletalComponent(InComponentToCopy: SkeletalMeshComponent): void;
  static C(Other: UObject | any): PoseableMeshComponent;
}
declare class PostProcessVolume mixins Volume {
  Settings: PostProcessSettings;
  Priority: number;
  BlendRadius: number;
  BlendWeight: number;
  bEnabled: boolean;
  bUnbound: boolean;
  static GetDefaultObject(): PostProcessVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PostProcessVolume;
  static C(Other: UObject | any): PostProcessVolume;
}
declare class PrecomputedVisibilityOverrideVolume mixins Volume {
  OverrideVisibleActors: Actor[];
  OverrideInvisibleActors: Actor[];
  OverrideInvisibleLevels: string[];
  static GetDefaultObject(): PrecomputedVisibilityOverrideVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PrecomputedVisibilityOverrideVolume;
  static C(Other: UObject | any): PrecomputedVisibilityOverrideVolume;
}
declare class PrecomputedVisibilityVolume mixins Volume {
  static GetDefaultObject(): PrecomputedVisibilityVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PrecomputedVisibilityVolume;
  static C(Other: UObject | any): PrecomputedVisibilityVolume;
}
declare class PreviewCollectionInterface mixins Interface {
  static Load(ResourceName: string): PreviewCollectionInterface;
  static Find(Outer: UObject, ResourceName: string): PreviewCollectionInterface;
  static GetDefaultObject(): PreviewCollectionInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PreviewCollectionInterface;
  static C(Other: UObject | any): PreviewCollectionInterface;
}
declare class CollectionReference {
  CollectionName: string;
  clone(): CollectionReference;
  static C(Other: UObject | any): CollectionReference;
}
declare class PrimaryAssetLabel mixins PrimaryDataAsset {
  Rules: PrimaryAssetRules;
  bLabelAssetsInMyDirectory: boolean;
  bIsRuntimeLabel: boolean;
  ExplicitAssets: UObject[];
  ExplicitBlueprints: Class<any>[];
  AssetCollection: CollectionReference;
  static Load(ResourceName: string): PrimaryAssetLabel;
  static Find(Outer: UObject, ResourceName: string): PrimaryAssetLabel;
  static GetDefaultObject(): PrimaryAssetLabel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PrimaryAssetLabel;
  static C(Other: UObject | any): PrimaryAssetLabel;
}
declare class ProjectileMovementComponent mixins MovementComponent {
  InitialSpeed: number;
  MaxSpeed: number;
  bRotationFollowsVelocity: boolean;
  bShouldBounce: boolean;
  bInitialVelocityInLocalSpace: boolean;
  bForceSubStepping: boolean;
  bSimulationEnabled: boolean;
  bSweepCollision: boolean;
  bIsHomingProjectile: boolean;
  bBounceAngleAffectsFriction: boolean;
  bIsSliding: boolean;
  bInterpMovement: boolean;
  bInterpRotation: boolean;
  PreviousHitTime: number;
  PreviousHitNormal: Vector;
  ProjectileGravityScale: number;
  Buoyancy: number;
  Bounciness: number;
  Friction: number;
  BounceVelocityStopSimulatingThreshold: number;
  MinFrictionFraction: number;
  OnProjectileBounce: UnrealEngineMulticastDelegate<
    (ImpactResult: HitResult, ImpactVelocity: Vector) => void
  >;
  OnProjectileStop: UnrealEngineMulticastDelegate<
    (ImpactResult: HitResult) => void
  >;
  HomingAccelerationMagnitude: number;
  HomingTargetComponent: any;
  MaxSimulationTimeStep: number;
  MaxSimulationIterations: number;
  BounceAdditionalIterations: number;
  InterpLocationTime: number;
  InterpRotationTime: number;
  InterpLocationMaxLagDistance: number;
  InterpLocationSnapToTargetDistance: number;
  static Load(ResourceName: string): ProjectileMovementComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ProjectileMovementComponent;
  static GetDefaultObject(): ProjectileMovementComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ProjectileMovementComponent;
  StopSimulating(HitResult: HitResult): void;
  SetVelocityInLocalSpace(NewVelocity: Vector): void;
  SetInterpolatedComponent(Component: SceneComponent): void;
  ResetInterpolation(): void;
  MoveInterpolationTarget(NewLocation: Vector, NewRotation: Rotator): void;
  LimitVelocity(NewVelocity: Vector): Vector;
  IsVelocityUnderSimulationThreshold(): boolean;
  IsInterpolationComplete(): boolean;
  static C(Other: UObject | any): ProjectileMovementComponent;
}
declare class ProxyLODMeshSimplificationSettings mixins DeveloperSettings {
  ProxyLODMeshReductionModuleName: string;
  static Load(ResourceName: string): ProxyLODMeshSimplificationSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ProxyLODMeshSimplificationSettings;
  static GetDefaultObject(): ProxyLODMeshSimplificationSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ProxyLODMeshSimplificationSettings;
  static C(Other: UObject | any): ProxyLODMeshSimplificationSettings;
}
declare class RadialForceComponent mixins SceneComponent {
  Radius: number;
  Falloff: ERadialImpulseFalloffT;
  ImpulseStrength: number;
  bImpulseVelChange: boolean;
  bIgnoreOwningActor: boolean;
  ForceStrength: number;
  DestructibleDamage: number;
  ObjectTypesToAffect: EObjectTypeQueryT[];
  static Load(ResourceName: string): RadialForceComponent;
  static Find(Outer: UObject, ResourceName: string): RadialForceComponent;
  static GetDefaultObject(): RadialForceComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RadialForceComponent;
  RemoveObjectTypeToAffect(ObjectType: EObjectTypeQueryT): void;
  FireImpulse(): void;
  AddObjectTypeToAffect(ObjectType: EObjectTypeQueryT): void;
  static C(Other: UObject | any): RadialForceComponent;
}
declare class RadialForceActor mixins RigidBodyBase {
  ForceComponent: RadialForceComponent;
  SpriteComponent: BillboardComponent;
  static GetDefaultObject(): RadialForceActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RadialForceActor;
  ToggleForce(): void;
  FireImpulse(): void;
  EnableForce(): void;
  DisableForce(): void;
  static C(Other: UObject | any): RadialForceActor;
}
declare class RectLightComponent mixins LocalLightComponent {
  SourceWidth: number;
  SourceHeight: number;
  BarnDoorAngle: number;
  BarnDoorLength: number;
  SourceTexture: Texture;
  static Load(ResourceName: string): RectLightComponent;
  static Find(Outer: UObject, ResourceName: string): RectLightComponent;
  static GetDefaultObject(): RectLightComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RectLightComponent;
  SetSourceWidth(bNewValue: number): void;
  SetSourceTexture(bNewValue: Texture): void;
  SetSourceHeight(NewValue: number): void;
  SetBarnDoorLength(NewValue: number): void;
  SetBarnDoorAngle(NewValue: number): void;
  static C(Other: UObject | any): RectLightComponent;
}
declare class RectLight mixins Light {
  RectLightComponent: RectLightComponent;
  static GetDefaultObject(): RectLight;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RectLight;
  static C(Other: UObject | any): RectLight;
}
declare type EMobileMSAASampleCountT =
  | "One"
  | "Two"
  | "Four"
  | "Eight"
  | "EMobileMSAASampleCount_MAX";
declare var EMobileMSAASampleCount: {
  One: "One",
  Two: "Two",
  Four: "Four",
  Eight: "Eight",
  EMobileMSAASampleCount_MAX: "EMobileMSAASampleCount_MAX"
};
declare type ETranslucentSortPolicyT =
  | "SortByDistance"
  | "SortByProjectedZ"
  | "SortAlongAxis"
  | "ETranslucentSortPolicy_MAX";
declare var ETranslucentSortPolicy: {
  SortByDistance: "SortByDistance",
  SortByProjectedZ: "SortByProjectedZ",
  SortAlongAxis: "SortAlongAxis",
  ETranslucentSortPolicy_MAX: "ETranslucentSortPolicy_MAX"
};
declare type ECustomDepthStencilT =
  | "Disabled"
  | "Enabled"
  | "EnabledOnDemand"
  | "EnabledWithStencil"
  | "ECustomDepthStencil_MAX";
declare var ECustomDepthStencil: {
  Disabled: "Disabled",
  Enabled: "Enabled",
  EnabledOnDemand: "EnabledOnDemand",
  EnabledWithStencil: "EnabledWithStencil",
  ECustomDepthStencil_MAX: "ECustomDepthStencil_MAX"
};
declare type EAlphaChannelModeT =
  | "Disabled"
  | "LinearColorSpaceOnly"
  | "AllowThroughTonemapper"
  | "EAlphaChannelMode_MAX";
declare var EAlphaChannelMode: {
  Disabled: "Disabled",
  LinearColorSpaceOnly: "LinearColorSpaceOnly",
  AllowThroughTonemapper: "AllowThroughTonemapper",
  EAlphaChannelMode_MAX: "EAlphaChannelMode_MAX"
};
declare type EAutoExposureMethodTUI =
  | "AEM_Histogram"
  | "AEM_Basic"
  | "AEM_Manual"
  | "AEM_MAX";
declare var EAutoExposureMethodUI: {
  AEM_Histogram: "AEM_Histogram",
  AEM_Basic: "AEM_Basic",
  AEM_Manual: "AEM_Manual",
  AEM_MAX: "AEM_MAX"
};
declare type EAntiAliasingMethodT =
  | "AAM_None"
  | "AAM_FXAA"
  | "AAM_TemporalAA"
  | "AAM_MSAA"
  | "AAM_MAX";
declare var EAntiAliasingMethod: {
  AAM_None: "AAM_None",
  AAM_FXAA: "AAM_FXAA",
  AAM_TemporalAA: "AAM_TemporalAA",
  AAM_MSAA: "AAM_MSAA",
  AAM_MAX: "AAM_MAX"
};
declare type EDefaultBackBufferPixelFormatT =
  | "DBBPF_B8G8R8A8"
  | "DBBPF_A16B16G16R16_DEPRECATED"
  | "DBBPF_FloatRGB_DEPRECATED"
  | "DBBPF_FloatRGBA"
  | "DBBPF_A2B10G10R10"
  | "DBBPF_MAX";
declare var EDefaultBackBufferPixelFormat: {
  DBBPF_B8G8R8A8: "DBBPF_B8G8R8A8",
  DBBPF_A16B16G16R16_DEPRECATED: "DBBPF_A16B16G16R16_DEPRECATED",
  DBBPF_FloatRGB_DEPRECATED: "DBBPF_FloatRGB_DEPRECATED",
  DBBPF_FloatRGBA: "DBBPF_FloatRGBA",
  DBBPF_A2B10G10R10: "DBBPF_A2B10G10R10",
  DBBPF_MAX: "DBBPF_MAX"
};
declare type EEarlyZPassT =
  | "None"
  | "OpaqueOnly"
  | "OpaqueAndMasked"
  | "Auto"
  | "EEarlyZPass_MAX";
declare var EEarlyZPass: {
  None: "None",
  OpaqueOnly: "OpaqueOnly",
  OpaqueAndMasked: "OpaqueAndMasked",
  Auto: "Auto",
  EEarlyZPass_MAX: "EEarlyZPass_MAX"
};
declare type EClearSceneOptionsT =
  | "NoClear"
  | "HardwareClear"
  | "QuadAtMaxZ"
  | "EClearSceneOptions_MAX";
declare var EClearSceneOptions: {
  NoClear: "NoClear",
  HardwareClear: "HardwareClear",
  QuadAtMaxZ: "QuadAtMaxZ",
  EClearSceneOptions_MAX: "EClearSceneOptions_MAX"
};
declare type EGBufferFormatT =
  | "Force8BitsPerChannel"
  | "Default"
  | "HighPrecisionNormals"
  | "Force16BitsPerChannel"
  | "EGBufferFormat_MAX";
declare var EGBufferFormat: {
  Force8BitsPerChannel: "Force8BitsPerChannel",
  Default: "Default",
  HighPrecisionNormals: "HighPrecisionNormals",
  Force16BitsPerChannel: "Force16BitsPerChannel",
  EGBufferFormat_MAX: "EGBufferFormat_MAX"
};
declare class RendererSettings mixins DeveloperSettings {
  bMobileHDR: boolean;
  bMobileDisableVertexFog: boolean;
  MaxMobileCascades: number;
  MobileMSAASampleCount: EMobileMSAASampleCountT;
  bMobileUseLegacyShadingModel: boolean;
  bMobileUseHWsRGBEncoding: boolean;
  bMobileAllowDitheredLODTransition: boolean;
  bMobileAllowSoftwareOcclusionCulling: boolean;
  bDiscardUnusedQualityLevels: boolean;
  bOcclusionCulling: boolean;
  MinScreenRadiusForLights: number;
  MinScreenRadiusForEarlyZPass: number;
  MinScreenRadiusForCSMdepth: number;
  bPrecomputedVisibilityWarning: boolean;
  bTextureStreaming: boolean;
  bUseDXT5NormalMaps: boolean;
  bClearCoatEnableSecondNormal: boolean;
  ReflectionCaptureResolution: number;
  ReflectionEnvironmentLightmapMixBasedOnRoughness: boolean;
  bForwardShading: boolean;
  bVertexFoggingForOpaque: boolean;
  bAllowStaticLighting: boolean;
  bUseNormalMapsForStaticLighting: boolean;
  bGenerateMeshDistanceFields: boolean;
  bEightBitMeshDistanceFields: boolean;
  bGenerateLandscapeGIData: boolean;
  bCompressMeshDistanceFields: boolean;
  TessellationAdaptivePixelsPerTriangle: number;
  bSeparateTranslucency: boolean;
  TranslucentSortPolicy: ETranslucentSortPolicyT;
  TranslucentSortAxis: Vector;
  CustomDepthStencil: ECustomDepthStencilT;
  bCustomDepthTaaJitter: boolean;
  bEnableAlphaChannelInPostProcessing: EAlphaChannelModeT;
  bUseNewAlgorithm: boolean;
  bDefaultFeatureBloom: boolean;
  bDefaultFeatureAmbientOcclusion: boolean;
  bDefaultFeatureAmbientOcclusionStaticFraction: boolean;
  bDefaultFeatureAutoExposure: boolean;
  DefaultFeatureAutoExposure: EAutoExposureMethodTUI;
  bExtendDefaultLuminanceRangeInAutoExposureSettings: boolean;
  bUsePreExposure: boolean;
  bDefaultFeatureMotionBlur: boolean;
  bDefaultFeatureLensFlare: boolean;
  bTemporalUpsampling: boolean;
  DefaultFeatureAntiAliasing: EAntiAliasingMethodT;
  DefaultLightUnits: ELightUnitsT;
  DefaultBackBufferPixelFormat: EDefaultBackBufferPixelFormatT;
  bRenderUnbuiltPreviewShadowsInGame: boolean;
  bStencilForLODDither: boolean;
  EarlyZPass: EEarlyZPassT;
  bEarlyZPassOnlyMaterialMasking: boolean;
  bDBuffer: boolean;
  ClearSceneMethod: EClearSceneOptionsT;
  bBasePassOutputsVelocity: boolean;
  bSelectiveBasePassOutputs: boolean;
  bDefaultParticleCutouts: boolean;
  GPUSimulationTextureSizeX: number;
  GPUSimulationTextureSizeY: number;
  bGlobalClipPlane: boolean;
  GBufferFormat: EGBufferFormatT;
  bUseGPUMorphTargets: boolean;
  bNvidiaAftermathEnabled: boolean;
  bInstancedStereo: boolean;
  bMultiView: boolean;
  bMobileMultiView: boolean;
  bMobileMultiViewDirect: boolean;
  bRoundRobinOcclusion: boolean;
  bODSCapture: boolean;
  WireframeCullThreshold: number;
  bEnableRayTracing: boolean;
  bSupportStationarySkylight: boolean;
  bSupportLowQualityLightmaps: boolean;
  bSupportPointLightWholeSceneShadows: boolean;
  bSupportAtmosphericFog: boolean;
  bSupportSkinCacheShaders: boolean;
  bMobileEnableStaticAndCSMShadowReceivers: boolean;
  bMobileEnableMovableLightCSMShaderCulling: boolean;
  bMobileAllowDistanceFieldShadows: boolean;
  bMobileAllowMovableDirectionalLights: boolean;
  MobileNumDynamicPointLights: any;
  bMobileDynamicPointLightsUseStaticBranch: boolean;
  bMobileAllowMovableSpotlights: boolean;
  SkinCacheSceneMemoryLimitInMB: number;
  bGPUSkinLimit2BoneInfluences: boolean;
  bSupportDepthOnlyIndexBuffers: boolean;
  bSupportReversedIndexBuffers: boolean;
  bSupportMaterialLayers: boolean;
  static Load(ResourceName: string): RendererSettings;
  static Find(Outer: UObject, ResourceName: string): RendererSettings;
  static GetDefaultObject(): RendererSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RendererSettings;
  static C(Other: UObject | any): RendererSettings;
}
declare class RendererOverrideSettings mixins DeveloperSettings {
  bSupportAllShaderPermutations: boolean;
  bForceRecomputeTangents: boolean;
  static Load(ResourceName: string): RendererOverrideSettings;
  static Find(Outer: UObject, ResourceName: string): RendererOverrideSettings;
  static GetDefaultObject(): RendererOverrideSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RendererOverrideSettings;
  static C(Other: UObject | any): RendererOverrideSettings;
}
declare class ReplicationConnectionDriver mixins UObject {
  static Load(ResourceName: string): ReplicationConnectionDriver;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ReplicationConnectionDriver;
  static GetDefaultObject(): ReplicationConnectionDriver;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ReplicationConnectionDriver;
  static C(Other: UObject | any): ReplicationConnectionDriver;
}
declare class RotatingMovementComponent mixins MovementComponent {
  RotationRate: Rotator;
  PivotTranslation: Vector;
  bRotationInLocalSpace: boolean;
  static Load(ResourceName: string): RotatingMovementComponent;
  static Find(Outer: UObject, ResourceName: string): RotatingMovementComponent;
  static GetDefaultObject(): RotatingMovementComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RotatingMovementComponent;
  static C(Other: UObject | any): RotatingMovementComponent;
}
declare class RVOAvoidanceInterface mixins Interface {
  static Load(ResourceName: string): RVOAvoidanceInterface;
  static Find(Outer: UObject, ResourceName: string): RVOAvoidanceInterface;
  static GetDefaultObject(): RVOAvoidanceInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RVOAvoidanceInterface;
  static C(Other: UObject | any): RVOAvoidanceInterface;
}
declare class Scene mixins UObject {
  static Load(ResourceName: string): Scene;
  static Find(Outer: UObject, ResourceName: string): Scene;
  static GetDefaultObject(): Scene;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): Scene;
  static C(Other: UObject | any): Scene;
}
declare type ESceneCaptureSourceT =
  | "SCS_SceneColorHDR"
  | "SCS_SceneColorHDRNoAlpha"
  | "SCS_FinalColorLDR"
  | "SCS_SceneColorSceneDepth"
  | "SCS_SceneDepth"
  | "SCS_DeviceDepth"
  | "SCS_Normal"
  | "SCS_BaseColor"
  | "SCS_MAX";
declare var ESceneCaptureSource: {
  SCS_SceneColorHDR: "SCS_SceneColorHDR",
  SCS_SceneColorHDRNoAlpha: "SCS_SceneColorHDRNoAlpha",
  SCS_FinalColorLDR: "SCS_FinalColorLDR",
  SCS_SceneColorSceneDepth: "SCS_SceneColorSceneDepth",
  SCS_SceneDepth: "SCS_SceneDepth",
  SCS_DeviceDepth: "SCS_DeviceDepth",
  SCS_Normal: "SCS_Normal",
  SCS_BaseColor: "SCS_BaseColor",
  SCS_MAX: "SCS_MAX"
};
declare type ESceneCaptureCompositeModeT =
  | "SCCM_Overwrite"
  | "SCCM_Additive"
  | "SCCM_Composite"
  | "SCCM_MAX";
declare var ESceneCaptureCompositeMode: {
  SCCM_Overwrite: "SCCM_Overwrite",
  SCCM_Additive: "SCCM_Additive",
  SCCM_Composite: "SCCM_Composite",
  SCCM_MAX: "SCCM_MAX"
};
declare class SceneCaptureComponent2D mixins SceneCaptureComponent {
  ProjectionType: ECameraProjectionModeT;
  FOVAngle: number;
  OrthoWidth: number;
  TextureTarget: TextureRenderTarget2D;
  CaptureSource: ESceneCaptureSourceT;
  CompositeMode: ESceneCaptureCompositeModeT;
  PostProcessSettings: PostProcessSettings;
  PostProcessBlendWeight: number;
  bUseCustomProjectionMatrix: boolean;
  CustomProjectionMatrix: Matrix;
  bEnableClipPlane: boolean;
  ClipPlaneBase: Vector;
  ClipPlaneNormal: Vector;
  bCameraCutThisFrame: boolean;
  bConsiderUnrenderedOpaquePixelAsFullyTranslucent: boolean;
  static Load(ResourceName: string): SceneCaptureComponent2D;
  static Find(Outer: UObject, ResourceName: string): SceneCaptureComponent2D;
  static GetDefaultObject(): SceneCaptureComponent2D;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SceneCaptureComponent2D;
  CaptureScene(): void;
  static C(Other: UObject | any): SceneCaptureComponent2D;
}
declare class SceneCapture2D mixins SceneCapture {
  CaptureComponent2D: SceneCaptureComponent2D;
  static GetDefaultObject(): SceneCapture2D;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SceneCapture2D;
  OnInterpToggle(bEnable: boolean): void;
  static C(Other: UObject | any): SceneCapture2D;
}
declare class TextureRenderTargetCube mixins TextureRenderTarget {
  SizeX: number;
  ClearColor: LinearColor;
  OverrideFormat: EPixelFormatT;
  bHDR: boolean;
  bForceLinearGamma: boolean;
  static Load(ResourceName: string): TextureRenderTargetCube;
  static Find(Outer: UObject, ResourceName: string): TextureRenderTargetCube;
  static GetDefaultObject(): TextureRenderTargetCube;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TextureRenderTargetCube;
  static C(Other: UObject | any): TextureRenderTargetCube;
}
declare class SceneCaptureComponentCube mixins SceneCaptureComponent {
  TextureTarget: TextureRenderTargetCube;
  TextureTargetLeft: TextureRenderTargetCube;
  TextureTargetRight: TextureRenderTargetCube;
  TextureTargetODS: TextureRenderTarget2D;
  IPD: number;
  static Load(ResourceName: string): SceneCaptureComponentCube;
  static Find(Outer: UObject, ResourceName: string): SceneCaptureComponentCube;
  static GetDefaultObject(): SceneCaptureComponentCube;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SceneCaptureComponentCube;
  CaptureScene(): void;
  static C(Other: UObject | any): SceneCaptureComponentCube;
}
declare class SceneCaptureCube mixins SceneCapture {
  CaptureComponentCube: SceneCaptureComponentCube;
  static GetDefaultObject(): SceneCaptureCube;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SceneCaptureCube;
  OnInterpToggle(bEnable: boolean): void;
  static C(Other: UObject | any): SceneCaptureCube;
}
declare type EShadowMapFlagsT = "SMF_None" | "SMF_Streamed" | "SMF_MAX";
declare var EShadowMapFlags: {
  SMF_None: "SMF_None",
  SMF_Streamed: "SMF_Streamed",
  SMF_MAX: "SMF_MAX"
};
declare class ShadowMapTexture2D mixins Texture2D {
  ShadowmapFlags: EShadowMapFlagsT;
  static Load(ResourceName: string): ShadowMapTexture2D;
  static Find(Outer: UObject, ResourceName: string): ShadowMapTexture2D;
  static GetDefaultObject(): ShadowMapTexture2D;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ShadowMapTexture2D;
  static C(Other: UObject | any): ShadowMapTexture2D;
}
declare class SkeletalMeshSimplificationSettings mixins DeveloperSettings {
  SkeletalMeshReductionModuleName: string;
  static Load(ResourceName: string): SkeletalMeshSimplificationSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): SkeletalMeshSimplificationSettings;
  static GetDefaultObject(): SkeletalMeshSimplificationSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SkeletalMeshSimplificationSettings;
  static C(Other: UObject | any): SkeletalMeshSimplificationSettings;
}
declare class SlateTextureAtlasInterface mixins Interface {
  static Load(ResourceName: string): SlateTextureAtlasInterface;
  static Find(Outer: UObject, ResourceName: string): SlateTextureAtlasInterface;
  static GetDefaultObject(): SlateTextureAtlasInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SlateTextureAtlasInterface;
  static C(Other: UObject | any): SlateTextureAtlasInterface;
}
declare class SmokeTestCommandlet mixins Commandlet {
  static Load(ResourceName: string): SmokeTestCommandlet;
  static Find(Outer: UObject, ResourceName: string): SmokeTestCommandlet;
  static GetDefaultObject(): SmokeTestCommandlet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SmokeTestCommandlet;
  static C(Other: UObject | any): SmokeTestCommandlet;
}
declare class SoundGroup {
  SoundGroup: ESoundGroupT;
  DisplayName: string;
  bAlwaysDecompressOnLoad: boolean;
  DecompressedDuration: number;
  clone(): SoundGroup;
  static C(Other: UObject | any): SoundGroup;
}
declare class SoundGroups mixins UObject {
  SoundGroupProfiles: SoundGroup[];
  static Load(ResourceName: string): SoundGroups;
  static Find(Outer: UObject, ResourceName: string): SoundGroups;
  static GetDefaultObject(): SoundGroups;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundGroups;
  static C(Other: UObject | any): SoundGroups;
}
declare class SoundNodeAssetReferencer mixins SoundNode {
  static Load(ResourceName: string): SoundNodeAssetReferencer;
  static Find(Outer: UObject, ResourceName: string): SoundNodeAssetReferencer;
  static GetDefaultObject(): SoundNodeAssetReferencer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeAssetReferencer;
  static C(Other: UObject | any): SoundNodeAssetReferencer;
}
declare class SoundNodeAttenuation mixins SoundNode {
  AttenuationSettings: SoundAttenuation;
  AttenuationOverrides: SoundAttenuationSettings;
  bOverrideAttenuation: boolean;
  static Load(ResourceName: string): SoundNodeAttenuation;
  static Find(Outer: UObject, ResourceName: string): SoundNodeAttenuation;
  static GetDefaultObject(): SoundNodeAttenuation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeAttenuation;
  static C(Other: UObject | any): SoundNodeAttenuation;
}
declare class SoundNodeBranch mixins SoundNode {
  BoolParameterName: string;
  static Load(ResourceName: string): SoundNodeBranch;
  static Find(Outer: UObject, ResourceName: string): SoundNodeBranch;
  static GetDefaultObject(): SoundNodeBranch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeBranch;
  static C(Other: UObject | any): SoundNodeBranch;
}
declare class SoundNodeConcatenator mixins SoundNode {
  InputVolume: number[];
  static Load(ResourceName: string): SoundNodeConcatenator;
  static Find(Outer: UObject, ResourceName: string): SoundNodeConcatenator;
  static GetDefaultObject(): SoundNodeConcatenator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeConcatenator;
  static C(Other: UObject | any): SoundNodeConcatenator;
}
declare class SoundNodeDelay mixins SoundNode {
  DelayMin: number;
  DelayMax: number;
  static Load(ResourceName: string): SoundNodeDelay;
  static Find(Outer: UObject, ResourceName: string): SoundNodeDelay;
  static GetDefaultObject(): SoundNodeDelay;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeDelay;
  static C(Other: UObject | any): SoundNodeDelay;
}
declare class DialogueWaveParameter {
  DialogueWave: DialogueWave;
  Context: DialogueContext;
  clone(): DialogueWaveParameter;
  static C(Other: UObject | any): DialogueWaveParameter;
}
declare class SoundNodeDialoguePlayer mixins SoundNode {
  DialogueWaveParameter: DialogueWaveParameter;
  bLooping: boolean;
  static Load(ResourceName: string): SoundNodeDialoguePlayer;
  static Find(Outer: UObject, ResourceName: string): SoundNodeDialoguePlayer;
  static GetDefaultObject(): SoundNodeDialoguePlayer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeDialoguePlayer;
  static C(Other: UObject | any): SoundNodeDialoguePlayer;
}
declare class DistanceDatum {
  FadeInDistanceStart: number;
  FadeInDistanceEnd: number;
  FadeOutDistanceStart: number;
  FadeOutDistanceEnd: number;
  Volume: number;
  clone(): DistanceDatum;
  static C(Other: UObject | any): DistanceDatum;
}
declare class SoundNodeDistanceCrossFade mixins SoundNode {
  CrossFadeInput: DistanceDatum[];
  static Load(ResourceName: string): SoundNodeDistanceCrossFade;
  static Find(Outer: UObject, ResourceName: string): SoundNodeDistanceCrossFade;
  static GetDefaultObject(): SoundNodeDistanceCrossFade;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeDistanceCrossFade;
  static C(Other: UObject | any): SoundNodeDistanceCrossFade;
}
declare class SoundNodeDoppler mixins SoundNode {
  DopplerIntensity: number;
  bUseSmoothing: boolean;
  SmoothingInterpSpeed: number;
  static Load(ResourceName: string): SoundNodeDoppler;
  static Find(Outer: UObject, ResourceName: string): SoundNodeDoppler;
  static GetDefaultObject(): SoundNodeDoppler;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeDoppler;
  static C(Other: UObject | any): SoundNodeDoppler;
}
declare class SoundNodeEnveloper mixins SoundNode {
  LoopStart: number;
  LoopEnd: number;
  DurationAfterLoop: number;
  LoopCount: number;
  bLoopIndefinitely: boolean;
  bLoop: boolean;
  VolumeInterpCurve: DistributionFloatConstantCurve;
  PitchInterpCurve: DistributionFloatConstantCurve;
  VolumeCurve: RuntimeFloatCurve;
  PitchCurve: RuntimeFloatCurve;
  PitchMin: number;
  PitchMax: number;
  VolumeMin: number;
  VolumeMax: number;
  static Load(ResourceName: string): SoundNodeEnveloper;
  static Find(Outer: UObject, ResourceName: string): SoundNodeEnveloper;
  static GetDefaultObject(): SoundNodeEnveloper;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeEnveloper;
  static C(Other: UObject | any): SoundNodeEnveloper;
}
declare class SoundNodeGroupControl mixins SoundNode {
  GroupSizes: number[];
  static Load(ResourceName: string): SoundNodeGroupControl;
  static Find(Outer: UObject, ResourceName: string): SoundNodeGroupControl;
  static GetDefaultObject(): SoundNodeGroupControl;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeGroupControl;
  static C(Other: UObject | any): SoundNodeGroupControl;
}
declare class SoundNodeLooping mixins SoundNode {
  LoopCount: number;
  bLoopIndefinitely: boolean;
  static Load(ResourceName: string): SoundNodeLooping;
  static Find(Outer: UObject, ResourceName: string): SoundNodeLooping;
  static GetDefaultObject(): SoundNodeLooping;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeLooping;
  static C(Other: UObject | any): SoundNodeLooping;
}
declare class SoundNodeMature mixins SoundNode {
  static Load(ResourceName: string): SoundNodeMature;
  static Find(Outer: UObject, ResourceName: string): SoundNodeMature;
  static GetDefaultObject(): SoundNodeMature;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeMature;
  static C(Other: UObject | any): SoundNodeMature;
}
declare class SoundNodeMixer mixins SoundNode {
  InputVolume: number[];
  static Load(ResourceName: string): SoundNodeMixer;
  static Find(Outer: UObject, ResourceName: string): SoundNodeMixer;
  static GetDefaultObject(): SoundNodeMixer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeMixer;
  static C(Other: UObject | any): SoundNodeMixer;
}
declare class SoundNodeModulator mixins SoundNode {
  PitchMin: number;
  PitchMax: number;
  VolumeMin: number;
  VolumeMax: number;
  static Load(ResourceName: string): SoundNodeModulator;
  static Find(Outer: UObject, ResourceName: string): SoundNodeModulator;
  static GetDefaultObject(): SoundNodeModulator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeModulator;
  static C(Other: UObject | any): SoundNodeModulator;
}
declare type ModulationParamModeT =
  | "MPM_Normal"
  | "MPM_Abs"
  | "MPM_Direct"
  | "MPM_MAX";
declare var ModulationParamMode: {
  MPM_Normal: "MPM_Normal",
  MPM_Abs: "MPM_Abs",
  MPM_Direct: "MPM_Direct",
  MPM_MAX: "MPM_MAX"
};
declare class ModulatorContinuousParams {
  ParameterName: string;
  Default: number;
  MinInput: number;
  MaxInput: number;
  MinOutput: number;
  MaxOutput: number;
  ParamMode: ModulationParamModeT;
  clone(): ModulatorContinuousParams;
  static C(Other: UObject | any): ModulatorContinuousParams;
}
declare class SoundNodeModulatorContinuous mixins SoundNode {
  PitchModulationParams: ModulatorContinuousParams;
  VolumeModulationParams: ModulatorContinuousParams;
  static Load(ResourceName: string): SoundNodeModulatorContinuous;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): SoundNodeModulatorContinuous;
  static GetDefaultObject(): SoundNodeModulatorContinuous;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeModulatorContinuous;
  static C(Other: UObject | any): SoundNodeModulatorContinuous;
}
declare class SoundNodeOscillator mixins SoundNode {
  bModulateVolume: boolean;
  bModulatePitch: boolean;
  AmplitudeMin: number;
  AmplitudeMax: number;
  FrequencyMin: number;
  FrequencyMax: number;
  OffsetMin: number;
  OffsetMax: number;
  CenterMin: number;
  CenterMax: number;
  static Load(ResourceName: string): SoundNodeOscillator;
  static Find(Outer: UObject, ResourceName: string): SoundNodeOscillator;
  static GetDefaultObject(): SoundNodeOscillator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeOscillator;
  static C(Other: UObject | any): SoundNodeOscillator;
}
declare class SoundNodeParamCrossFade mixins SoundNodeDistanceCrossFade {
  ParamName: string;
  static Load(ResourceName: string): SoundNodeParamCrossFade;
  static Find(Outer: UObject, ResourceName: string): SoundNodeParamCrossFade;
  static GetDefaultObject(): SoundNodeParamCrossFade;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeParamCrossFade;
  static C(Other: UObject | any): SoundNodeParamCrossFade;
}
declare class SoundNodeQualityLevel mixins SoundNode {
  static Load(ResourceName: string): SoundNodeQualityLevel;
  static Find(Outer: UObject, ResourceName: string): SoundNodeQualityLevel;
  static GetDefaultObject(): SoundNodeQualityLevel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeQualityLevel;
  static C(Other: UObject | any): SoundNodeQualityLevel;
}
declare class SoundNodeRandom mixins SoundNode {
  Weights: number[];
  PreselectAtLevelLoad: number;
  bShouldExcludeFromBranchCulling: boolean;
  bSoundCueExcludedFromBranchCulling: boolean;
  bRandomizeWithoutReplacement: boolean;
  HasBeenUsed: boolean[];
  NumRandomUsed: number;
  PIEHiddenNodes: number[];
  static Load(ResourceName: string): SoundNodeRandom;
  static Find(Outer: UObject, ResourceName: string): SoundNodeRandom;
  static GetDefaultObject(): SoundNodeRandom;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeRandom;
  static C(Other: UObject | any): SoundNodeRandom;
}
declare class SoundNodeSoundClass mixins SoundNode {
  SoundClassOverride: SoundClass<any>;
  static Load(ResourceName: string): SoundNodeSoundClass<any>;
  static Find(Outer: UObject, ResourceName: string): SoundNodeSoundClass<any>;
  static GetDefaultObject(): SoundNodeSoundClass<any>;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeSoundClass<any>;
  static C(Other: UObject | any): SoundNodeSoundClass;
}
declare class SoundNodeSwitch mixins SoundNode {
  IntParameterName: string;
  static Load(ResourceName: string): SoundNodeSwitch;
  static Find(Outer: UObject, ResourceName: string): SoundNodeSwitch;
  static GetDefaultObject(): SoundNodeSwitch;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeSwitch;
  static C(Other: UObject | any): SoundNodeSwitch;
}
declare class SoundNodeWaveParam mixins SoundNode {
  WaveParameterName: string;
  static Load(ResourceName: string): SoundNodeWaveParam;
  static Find(Outer: UObject, ResourceName: string): SoundNodeWaveParam;
  static GetDefaultObject(): SoundNodeWaveParam;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeWaveParam;
  static C(Other: UObject | any): SoundNodeWaveParam;
}
declare class SoundNodeWavePlayer mixins SoundNodeAssetReferencer {
  SoundWaveAssetPtr: SoundWave;
  SoundWave: SoundWave;
  bLooping: boolean;
  static Load(ResourceName: string): SoundNodeWavePlayer;
  static Find(Outer: UObject, ResourceName: string): SoundNodeWavePlayer;
  static GetDefaultObject(): SoundNodeWavePlayer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SoundNodeWavePlayer;
  static C(Other: UObject | any): SoundNodeWavePlayer;
}
declare class SpectatorPawnMovement mixins FloatingPawnMovement {
  bIgnoreTimeDilation: boolean;
  static Load(ResourceName: string): SpectatorPawnMovement;
  static Find(Outer: UObject, ResourceName: string): SpectatorPawnMovement;
  static GetDefaultObject(): SpectatorPawnMovement;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SpectatorPawnMovement;
  static C(Other: UObject | any): SpectatorPawnMovement;
}
declare class SphereReflectionCapture mixins ReflectionCapture {
  DrawCaptureRadius: DrawSphereComponent;
  static GetDefaultObject(): SphereReflectionCapture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SphereReflectionCapture;
  static C(Other: UObject | any): SphereReflectionCapture;
}
declare class SphereReflectionCaptureComponent
  mixins ReflectionCaptureComponent {
  InfluenceRadius: number;
  CaptureDistanceScale: number;
  PreviewInfluenceRadius: DrawSphereComponent;
  static Load(ResourceName: string): SphereReflectionCaptureComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): SphereReflectionCaptureComponent;
  static GetDefaultObject(): SphereReflectionCaptureComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SphereReflectionCaptureComponent;
  static C(Other: UObject | any): SphereReflectionCaptureComponent;
}
declare class SplineMeshActor mixins Actor {
  SplineMeshComponent: SplineMeshComponent;
  static GetDefaultObject(): SplineMeshActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SplineMeshActor;
  static C(Other: UObject | any): SplineMeshActor;
}
declare class SpringArmComponent mixins SceneComponent {
  TargetArmLength: number;
  SocketOffset: Vector;
  TargetOffset: Vector;
  ProbeSize: number;
  ProbeChannel: ECollisionChannelT;
  bDoCollisionTest: boolean;
  bUsePawnControlRotation: boolean;
  bInheritPitch: boolean;
  bInheritYaw: boolean;
  bInheritRoll: boolean;
  bEnableCameraLag: boolean;
  bEnableCameraRotationLag: boolean;
  bUseCameraLagSubstepping: boolean;
  bDrawDebugLagMarkers: boolean;
  CameraLagSpeed: number;
  CameraRotationLagSpeed: number;
  CameraLagMaxTimeStep: number;
  CameraLagMaxDistance: number;
  static Load(ResourceName: string): SpringArmComponent;
  static Find(Outer: UObject, ResourceName: string): SpringArmComponent;
  static GetDefaultObject(): SpringArmComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SpringArmComponent;
  IsCollisionFixApplied(): boolean;
  GetUnfixedCameraPosition(): Vector;
  GetTargetRotation(): Rotator;
  static C(Other: UObject | any): SpringArmComponent;
}
declare type EStereoLayerTypeT =
  | "SLT_WorldLocked"
  | "SLT_TrackerLocked"
  | "SLT_FaceLocked"
  | "SLT_MAX";
declare var EStereoLayerType: {
  SLT_WorldLocked: "SLT_WorldLocked",
  SLT_TrackerLocked: "SLT_TrackerLocked",
  SLT_FaceLocked: "SLT_FaceLocked",
  SLT_MAX: "SLT_MAX"
};
declare type EStereoLayerShapeT =
  | "SLSH_QuadLayer"
  | "SLSH_CylinderLayer"
  | "SLSH_CubemapLayer"
  | "SLSH_MAX";
declare var EStereoLayerShape: {
  SLSH_QuadLayer: "SLSH_QuadLayer",
  SLSH_CylinderLayer: "SLSH_CylinderLayer",
  SLSH_CubemapLayer: "SLSH_CubemapLayer",
  SLSH_MAX: "SLSH_MAX"
};
declare class StereoLayerComponent mixins SceneComponent {
  bLiveTexture: boolean;
  bSupportsDepth: boolean;
  bNoAlphaChannel: boolean;
  Texture: Texture;
  LeftTexture: Texture;
  bQuadPreserveTextureRatio: boolean;
  QuadSize: Vector2D;
  UVRect: Box2D;
  CylinderRadius: number;
  CylinderOverlayArc: number;
  CylinderHeight: number;
  StereoLayerType: EStereoLayerTypeT;
  StereoLayerShape: EStereoLayerShapeT;
  Priority: number;
  static Load(ResourceName: string): StereoLayerComponent;
  static Find(Outer: UObject, ResourceName: string): StereoLayerComponent;
  static GetDefaultObject(): StereoLayerComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): StereoLayerComponent;
  SetUVRect(InUVRect: Box2D): void;
  SetTexture(InTexture: Texture): void;
  SetQuadSize(InQuadSize: Vector2D): void;
  SetPriority(InPriority: number): void;
  MarkTextureForUpdate(): void;
  GetUVRect(): Box2D;
  GetTexture(): Texture;
  GetQuadSize(): Vector2D;
  GetPriority(): number;
  static C(Other: UObject | any): StereoLayerComponent;
}
declare class StereoLayerFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): StereoLayerFunctionLibrary;
  static Find(Outer: UObject, ResourceName: string): StereoLayerFunctionLibrary;
  static GetDefaultObject(): StereoLayerFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): StereoLayerFunctionLibrary;
  static ShowSplashScreen(): void;
  static SetSplashScreen(
    Texture: Texture,
    Scale: Vector2D,
    Offset: Vector,
    bShowLoadingMovie: boolean,
    bShowOnSet: boolean
  ): void;
  static HideSplashScreen(): void;
  static EnableAutoLoadingSplashScreen(InAutoShowEnabled: boolean): void;
  static C(Other: UObject | any): StereoLayerFunctionLibrary;
}
declare class StringTable mixins UObject {
  static Load(ResourceName: string): StringTable;
  static Find(Outer: UObject, ResourceName: string): StringTable;
  static GetDefaultObject(): StringTable;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): StringTable;
  static C(Other: UObject | any): StringTable;
}
declare class SubsystemBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): SubsystemBlueprintLibrary;
  static Find(Outer: UObject, ResourceName: string): SubsystemBlueprintLibrary;
  static GetDefaultObject(): SubsystemBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SubsystemBlueprintLibrary;
  static GetLocalPlayerSubSystemFromPlayerController(
    PlayerController: PlayerController,
    Class: UnrealEngineClassT
  ): LocalPlayerSubsystem;
  static GetLocalPlayerSubsystem(
    ContextObject: UObject,
    Class: UnrealEngineClassT
  ): LocalPlayerSubsystem;
  static GetGameInstanceSubsystem(
    ContextObject: UObject,
    Class: UnrealEngineClassT
  ): GameInstanceSubsystem;
  static GetEngineSubsystem(Class: UnrealEngineClassT): EngineSubsystem;
  static C(Other: UObject | any): SubsystemBlueprintLibrary;
}
declare class SystemTimeTimecodeProvider mixins TimecodeProvider {
  FrameRate: FrameRate;
  static Load(ResourceName: string): SystemTimeTimecodeProvider;
  static Find(Outer: UObject, ResourceName: string): SystemTimeTimecodeProvider;
  static GetDefaultObject(): SystemTimeTimecodeProvider;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SystemTimeTimecodeProvider;
  SetFrameRate(InFrameRate: FrameRate): void;
  static C(Other: UObject | any): SystemTimeTimecodeProvider;
}
declare class TargetPoint mixins Actor {
  SpriteComponent: BillboardComponent;
  ArrowComponent: ArrowComponent;
  static GetDefaultObject(): TargetPoint;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TargetPoint;
  static C(Other: UObject | any): TargetPoint;
}
declare class TextPropertyTestObject mixins UObject {
  DefaultedText: string;
  UndefaultedText: string;
  TransientText: string;
  static Load(ResourceName: string): TextPropertyTestObject;
  static Find(Outer: UObject, ResourceName: string): TextPropertyTestObject;
  static GetDefaultObject(): TextPropertyTestObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TextPropertyTestObject;
  static C(Other: UObject | any): TextPropertyTestObject;
}
declare class TextRenderActor mixins Actor {
  TextRender: TextRenderComponent;
  SpriteComponent: BillboardComponent;
  static GetDefaultObject(): TextRenderActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TextRenderActor;
  static C(Other: UObject | any): TextRenderActor;
}
declare class TimelineEventEntry {
  Time: number;
  EventFunc: UnrealEngineDelegate<() => void>;
  clone(): TimelineEventEntry;
  static C(Other: UObject | any): TimelineEventEntry;
}
declare class TimelineVectorTrack {
  VectorCurve: CurveVector;
  InterpFunc: UnrealEngineDelegate<(Output: Vector) => void>;
  TrackName: string;
  VectorPropertyName: string;
  VectorProperty: StructProperty;
  clone(): TimelineVectorTrack;
  static C(Other: UObject | any): TimelineVectorTrack;
}
declare class TimelineFloatTrack {
  FloatCurve: CurveFloat;
  InterpFunc: UnrealEngineDelegate<(Output: number) => void>;
  TrackName: string;
  FloatPropertyName: string;
  FloatProperty: FloatProperty;
  clone(): TimelineFloatTrack;
  static C(Other: UObject | any): TimelineFloatTrack;
}
declare class TimelineLinearColorTrack {
  LinearColorCurve: CurveLinearColor;
  InterpFunc: UnrealEngineDelegate<(Output: LinearColor) => void>;
  TrackName: string;
  LinearColorPropertyName: string;
  LinearColorProperty: StructProperty;
  clone(): TimelineLinearColorTrack;
  static C(Other: UObject | any): TimelineLinearColorTrack;
}
declare class Timeline {
  LengthMode: ETimelineLengthModeT;
  bLooping: boolean;
  bReversePlayback: boolean;
  bPlaying: boolean;
  Length: number;
  PlayRate: number;
  Position: number;
  Events: TimelineEventEntry[];
  InterpVectors: TimelineVectorTrack[];
  InterpFloats: TimelineFloatTrack[];
  InterpLinearColors: TimelineLinearColorTrack[];
  TimelinePostUpdateFunc: UnrealEngineDelegate<() => void>;
  TimelineFinishedFunc: UnrealEngineDelegate<() => void>;
  PropertySetObject: any;
  DirectionPropertyName: string;
  DirectionProperty: Property;
  clone(): Timeline;
  static C(Other: UObject | any): Timeline;
}
declare class TimelineComponent mixins ActorComponent {
  TheTimeline: Timeline;
  bIgnoreTimeDilation: boolean;
  static Load(ResourceName: string): TimelineComponent;
  static Find(Outer: UObject, ResourceName: string): TimelineComponent;
  static GetDefaultObject(): TimelineComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TimelineComponent;
  Stop(): void;
  SetVectorCurve(NewVectorCurve: CurveVector, VectorTrackName: string): void;
  SetTimelineLengthMode(NewLengthMode: ETimelineLengthModeT): void;
  SetTimelineLength(NewLength: number): void;
  SetPlayRate(NewRate: number): void;
  SetPlaybackPosition(
    NewPosition: number,
    bFireEvents: boolean,
    bFireUpdate: boolean
  ): void;
  SetNewTime(NewTime: number): void;
  SetLooping(bNewLooping: boolean): void;
  SetLinearColorCurve(
    NewLinearColorCurve: CurveLinearColor,
    LinearColorTrackName: string
  ): void;
  SetIgnoreTimeDilation(bNewIgnoreTimeDilation: boolean): void;
  SetFloatCurve(NewFloatCurve: CurveFloat, FloatTrackName: string): void;
  ReverseFromEnd(): void;
  Reverse(): void;
  PlayFromStart(): void;
  Play(): void;
  OnRep_Timeline(): void;
  IsReversing(): boolean;
  IsPlaying(): boolean;
  IsLooping(): boolean;
  GetTimelineLength(): number;
  GetPlayRate(): number;
  GetPlaybackPosition(): number;
  GetIgnoreTimeDilation(): boolean;
  static C(Other: UObject | any): TimelineComponent;
}
declare class TriggerBase mixins Actor {
  CollisionComponent: ShapeComponent;
  SpriteComponent: BillboardComponent;
  static GetDefaultObject(): TriggerBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TriggerBase;
  static C(Other: UObject | any): TriggerBase;
}
declare class TriggerBox mixins TriggerBase {
  static GetDefaultObject(): TriggerBox;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TriggerBox;
  static C(Other: UObject | any): TriggerBox;
}
declare class TriggerCapsule mixins TriggerBase {
  static GetDefaultObject(): TriggerCapsule;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TriggerCapsule;
  static C(Other: UObject | any): TriggerCapsule;
}
declare class TriggerSphere mixins TriggerBase {
  static GetDefaultObject(): TriggerSphere;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TriggerSphere;
  static C(Other: UObject | any): TriggerSphere;
}
declare class TriggerVolume mixins Volume {
  static GetDefaultObject(): TriggerVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TriggerVolume;
  static C(Other: UObject | any): TriggerVolume;
}
declare type ETwitterRequestMethodT =
  | "TRM_Get"
  | "TRM_Post"
  | "TRM_Delete"
  | "TRM_MAX";
declare var ETwitterRequestMethod: {
  TRM_Get: "TRM_Get",
  TRM_Post: "TRM_Post",
  TRM_Delete: "TRM_Delete",
  TRM_MAX: "TRM_MAX"
};
declare class TwitterIntegrationBase mixins PlatformInterfaceBase {
  static Load(ResourceName: string): TwitterIntegrationBase;
  static Find(Outer: UObject, ResourceName: string): TwitterIntegrationBase;
  static GetDefaultObject(): TwitterIntegrationBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TwitterIntegrationBase;
  TwitterRequest(
    URL: string,
    ParamKeysAndValues: string[],
    RequestMethod: ETwitterRequestMethodT,
    AccountIndex: number
  ): boolean;
  ShowTweetUI(InitialMessage: string, URL: string, Picture: string): boolean;
  Init(): void;
  GetNumAccounts(): number;
  GetAccountName(AccountIndex: number): string;
  CanShowTweetUI(): boolean;
  AuthorizeAccounts(): boolean;
  static C(Other: UObject | any): TwitterIntegrationBase;
}
declare class UserDefinedEnum mixins Enum {
  UniqueNameIndex: any;
  EnumDescription: string;
  DisplayNameMap: any;
  static Load(ResourceName: string): UserDefinedEnum;
  static Find(Outer: UObject, ResourceName: string): UserDefinedEnum;
  static GetDefaultObject(): UserDefinedEnum;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): UserDefinedEnum;
  static C(Other: UObject | any): UserDefinedEnum;
}
declare type ERenderFocusRuleT =
  | "Always"
  | "NonPointer"
  | "NavigationOnly"
  | "Never"
  | "ERenderFocusRule_MAX";
declare var ERenderFocusRule: {
  Always: "Always",
  NonPointer: "NonPointer",
  NavigationOnly: "NavigationOnly",
  Never: "Never",
  ERenderFocusRule_MAX: "ERenderFocusRule_MAX"
};
declare type EUIScalingRuleT =
  | "ShortestSide"
  | "LongestSide"
  | "Horizontal"
  | "Vertical"
  | "Custom"
  | "EUIScalingRule_MAX";
declare var EUIScalingRule: {
  ShortestSide: "ShortestSide",
  LongestSide: "LongestSide",
  Horizontal: "Horizontal",
  Vertical: "Vertical",
  Custom: "Custom",
  EUIScalingRule_MAX: "EUIScalingRule_MAX"
};
declare class UserInterfaceSettings mixins DeveloperSettings {
  RenderFocusRule: ERenderFocusRuleT;
  HardwareCursors: any;
  SoftwareCursors: any;
  DefaultCursor: SoftClassPath;
  TextEditBeamCursor: SoftClassPath;
  CrosshairsCursor: SoftClassPath;
  HandCursor: SoftClassPath;
  GrabHandCursor: SoftClassPath;
  GrabHandClosedCursor: SoftClassPath;
  SlashedCircleCursor: SoftClassPath;
  ApplicationScale: number;
  UIScaleRule: EUIScalingRuleT;
  CustomScalingRuleClass: SoftClassPath;
  UIScaleCurve: RuntimeFloatCurve;
  bAllowHighDPIInGameMode: boolean;
  bLoadWidgetsOnDedicatedServer: boolean;
  CursorClasses: UObject[];
  CustomScalingRuleClassInstance: UnrealEngineClassT;
  CustomScalingRule: DPICustomScalingRule;
  static Load(ResourceName: string): UserInterfaceSettings;
  static Find(Outer: UObject, ResourceName: string): UserInterfaceSettings;
  static GetDefaultObject(): UserInterfaceSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): UserInterfaceSettings;
  static C(Other: UObject | any): UserInterfaceSettings;
}
declare type EVectorFieldConstructionOpT =
  | "VFCO_Extrude"
  | "VFCO_Revolve"
  | "VFCO_MAX";
declare var EVectorFieldConstructionOp: {
  VFCO_Extrude: "VFCO_Extrude",
  VFCO_Revolve: "VFCO_Revolve",
  VFCO_MAX: "VFCO_MAX"
};
declare class VectorFieldStatic mixins VectorField {
  SizeX: number;
  SizeY: number;
  SizeZ: number;
  bAllowCPUAccess: boolean;
  CPUData: Vector4[];
  SourceFilePath: string;
  AssetImportData: AssetImportData;
  static Load(ResourceName: string): VectorFieldStatic;
  static Find(Outer: UObject, ResourceName: string): VectorFieldStatic;
  static GetDefaultObject(): VectorFieldStatic;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VectorFieldStatic;
  static C(Other: UObject | any): VectorFieldStatic;
}
declare class VectorFieldAnimated mixins VectorField {
  Texture: Texture2D;
  ConstructionOp: EVectorFieldConstructionOpT;
  VolumeSizeX: number;
  VolumeSizeY: number;
  VolumeSizeZ: number;
  SubImagesX: number;
  SubImagesY: number;
  FrameCount: number;
  FramesPerSecond: number;
  bLoop: boolean;
  NoiseField: VectorFieldStatic;
  NoiseScale: number;
  NoiseMax: number;
  static Load(ResourceName: string): VectorFieldAnimated;
  static Find(Outer: UObject, ResourceName: string): VectorFieldAnimated;
  static GetDefaultObject(): VectorFieldAnimated;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VectorFieldAnimated;
  static C(Other: UObject | any): VectorFieldAnimated;
}
declare class VectorFieldComponent mixins PrimitiveComponent {
  VectorField: VectorField;
  Intensity: number;
  Tightness: number;
  bPreviewVectorField: boolean;
  static Load(ResourceName: string): VectorFieldComponent;
  static Find(Outer: UObject, ResourceName: string): VectorFieldComponent;
  static GetDefaultObject(): VectorFieldComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VectorFieldComponent;
  SetIntensity(NewIntensity: number): void;
  static C(Other: UObject | any): VectorFieldComponent;
}
declare class VectorFieldVolume mixins Actor {
  VectorFieldComponent: VectorFieldComponent;
  SpriteComponent: BillboardComponent;
  static GetDefaultObject(): VectorFieldVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VectorFieldVolume;
  static C(Other: UObject | any): VectorFieldVolume;
}
declare class VirtualTextureLayer {
  Format: ETextureSourceFormatT;
  bCompressed: boolean;
  bHasAlpha: boolean;
  CompressionSettings: TextureCompressionSettingsT;
  clone(): VirtualTextureLayer;
  static C(Other: UObject | any): VirtualTextureLayer;
}
declare type PageTableFormatT = "PTF_16" | "PTF_32" | "PTF_MAX";
declare var PageTableFormat: {
  PTF_16: "PTF_16",
  PTF_32: "PTF_32",
  PTF_MAX: "PTF_MAX"
};
declare class VirtualTextureSpace mixins UObject {
  Layers: VirtualTextureLayer[];
  TileSize: number;
  BorderWidth: number;
  Size: number;
  Dimensions: number;
  Format: PageTableFormatT;
  PoolSize: number;
  static Load(ResourceName: string): VirtualTextureSpace;
  static Find(Outer: UObject, ResourceName: string): VirtualTextureSpace;
  static GetDefaultObject(): VirtualTextureSpace;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VirtualTextureSpace;
  static C(Other: UObject | any): VirtualTextureSpace;
}
declare class VirtualTexture mixins UObject {
  Layers: Texture[];
  Space: VirtualTextureSpace;
  Rebuild: boolean;
  static Load(ResourceName: string): VirtualTexture;
  static Find(Outer: UObject, ResourceName: string): VirtualTexture;
  static GetDefaultObject(): VirtualTexture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VirtualTexture;
  static C(Other: UObject | any): VirtualTexture;
}
declare class LightMapVirtualTexture mixins VirtualTexture {
  LayerFlags: number;
  static Load(ResourceName: string): LightMapVirtualTexture;
  static Find(Outer: UObject, ResourceName: string): LightMapVirtualTexture;
  static GetDefaultObject(): LightMapVirtualTexture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightMapVirtualTexture;
  static C(Other: UObject | any): LightMapVirtualTexture;
}
declare class LightMapVirtualTextureSpace mixins VirtualTextureSpace {
  static Load(ResourceName: string): LightMapVirtualTextureSpace;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LightMapVirtualTextureSpace;
  static GetDefaultObject(): LightMapVirtualTextureSpace;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightMapVirtualTextureSpace;
  static C(Other: UObject | any): LightMapVirtualTextureSpace;
}
declare class VisualLoggerAutomationTests mixins UObject {
  static Load(ResourceName: string): VisualLoggerAutomationTests;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): VisualLoggerAutomationTests;
  static GetDefaultObject(): VisualLoggerAutomationTests;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VisualLoggerAutomationTests;
  static C(Other: UObject | any): VisualLoggerAutomationTests;
}
declare class VisualLoggerDebugSnapshotInterface mixins Interface {
  static Load(ResourceName: string): VisualLoggerDebugSnapshotInterface;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): VisualLoggerDebugSnapshotInterface;
  static GetDefaultObject(): VisualLoggerDebugSnapshotInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VisualLoggerDebugSnapshotInterface;
  static C(Other: UObject | any): VisualLoggerDebugSnapshotInterface;
}
declare class VisualLoggerKismetLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): VisualLoggerKismetLibrary;
  static Find(Outer: UObject, ResourceName: string): VisualLoggerKismetLibrary;
  static GetDefaultObject(): VisualLoggerKismetLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VisualLoggerKismetLibrary;
  static RedirectVislog(SourceOwner: UObject, DestinationOwner: UObject): void;
  static LogText(
    WorldContextObject: UObject,
    text: string,
    LogCategory: string,
    bAddToMessageLog: boolean
  ): void;
  static LogSegment(
    WorldContextObject: UObject,
    SegmentStart: Vector,
    SegmentEnd: Vector,
    text: string,
    ObjectColor: LinearColor,
    Thickness: number,
    CategoryName: string,
    bAddToMessageLog: boolean
  ): void;
  static LogLocation(
    WorldContextObject: UObject,
    Location: Vector,
    text: string,
    ObjectColor: LinearColor,
    Radius: number,
    LogCategory: string,
    bAddToMessageLog: boolean
  ): void;
  static LogBox(
    WorldContextObject: UObject,
    BoxShape: Box,
    text: string,
    ObjectColor: LinearColor,
    LogCategory: string,
    bAddToMessageLog: boolean
  ): void;
  static EnableRecording(bEnabled: boolean): void;
  static C(Other: UObject | any): VisualLoggerKismetLibrary;
}
declare class VoiceChannel mixins Channel {
  static Load(ResourceName: string): VoiceChannel;
  static Find(Outer: UObject, ResourceName: string): VoiceChannel;
  static GetDefaultObject(): VoiceChannel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VoiceChannel;
  static C(Other: UObject | any): VoiceChannel;
}
declare class VoiceSettings {
  ComponentToAttachTo: SceneComponent;
  AttenuationSettings: SoundAttenuation;
  SourceEffectChain: SoundEffectSourcePresetChain;
  clone(): VoiceSettings;
  static C(Other: UObject | any): VoiceSettings;
}
declare class VOIPTalker mixins ActorComponent {
  Settings: VoiceSettings;
  static Load(ResourceName: string): VOIPTalker;
  static Find(Outer: UObject, ResourceName: string): VOIPTalker;
  static GetDefaultObject(): VOIPTalker;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VOIPTalker;
  RegisterWithPlayerState(OwningState: PlayerState): void;
  GetVoiceLevel(): number;
  static CreateTalkerForPlayer(OwningState: PlayerState): VOIPTalker;
  BPOnTalkingEnd(): void;
  BPOnTalkingBegin(AudioComponent: AudioComponent): void;
  static C(Other: UObject | any): VOIPTalker;
}
declare class VOIPStatics mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): VOIPStatics;
  static Find(Outer: UObject, ResourceName: string): VOIPStatics;
  static GetDefaultObject(): VOIPStatics;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VOIPStatics;
  static SetMicThreshold(InThreshold: number): void;
  static C(Other: UObject | any): VOIPStatics;
}
declare class VolumeTexture mixins Texture {
  Source2DTexture: Texture2D;
  SourceLightingGuid: Guid;
  Source2DTileSizeX: number;
  Source2DTileSizeY: number;
  static Load(ResourceName: string): VolumeTexture;
  static Find(Outer: UObject, ResourceName: string): VolumeTexture;
  static GetDefaultObject(): VolumeTexture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VolumeTexture;
  static C(Other: UObject | any): VolumeTexture;
}
declare class VolumetricLightmapDensityVolume mixins Volume {
  AllowedMipLevelRange: Int32Interval;
  static GetDefaultObject(): VolumetricLightmapDensityVolume;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VolumetricLightmapDensityVolume;
  static C(Other: UObject | any): VolumetricLightmapDensityVolume;
}
declare type EWindSourceTypeT = "Directional" | "Point" | "EWindSourceType_MAX";
declare var EWindSourceType: {
  Directional: "Directional",
  Point: "Point",
  EWindSourceType_MAX: "EWindSourceType_MAX"
};
declare class WindDirectionalSourceComponent mixins SceneComponent {
  Strength: number;
  Speed: number;
  MinGustAmount: number;
  MaxGustAmount: number;
  Radius: number;
  bPointWind: boolean;
  static Load(ResourceName: string): WindDirectionalSourceComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): WindDirectionalSourceComponent;
  static GetDefaultObject(): WindDirectionalSourceComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WindDirectionalSourceComponent;
  SetWindType(InNewType: EWindSourceTypeT): void;
  SetStrength(InNewStrength: number): void;
  SetSpeed(InNewSpeed: number): void;
  SetRadius(InNewRadius: number): void;
  SetMinimumGustAmount(InNewMinGust: number): void;
  SetMaximumGustAmount(InNewMaxGust: number): void;
  static C(Other: UObject | any): WindDirectionalSourceComponent;
}
declare class WindDirectionalSource mixins Info {
  Component: WindDirectionalSourceComponent;
  ArrowComponent: ArrowComponent;
  static GetDefaultObject(): WindDirectionalSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WindDirectionalSource;
  static C(Other: UObject | any): WindDirectionalSource;
}
declare class HierarchicalLODSetup mixins UObject {
  HierarchicalLODSetup: HierarchicalSimplification[];
  OverrideBaseMaterial: MaterialInterface;
  static Load(ResourceName: string): HierarchicalLODSetup;
  static Find(Outer: UObject, ResourceName: string): HierarchicalLODSetup;
  static GetDefaultObject(): HierarchicalLODSetup;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): HierarchicalLODSetup;
  static C(Other: UObject | any): HierarchicalLODSetup;
}
declare class Overlays mixins UObject {
  static Load(ResourceName: string): Overlays;
  static Find(Outer: UObject, ResourceName: string): Overlays;
  static GetDefaultObject(): Overlays;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): Overlays;
  static C(Other: UObject | any): Overlays;
}
declare class OverlayItem {
  StartTime: Timespan;
  EndTime: Timespan;
  text: string;
  Position: Vector2D;
  clone(): OverlayItem;
  static C(Other: UObject | any): OverlayItem;
}
declare class BasicOverlays mixins Overlays {
  Overlays: OverlayItem[];
  AssetImportData: AssetImportData;
  static Load(ResourceName: string): BasicOverlays;
  static Find(Outer: UObject, ResourceName: string): BasicOverlays;
  static GetDefaultObject(): BasicOverlays;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BasicOverlays;
  static C(Other: UObject | any): BasicOverlays;
}
declare class LocalizedOverlays mixins Overlays {
  DefaultOverlays: BasicOverlays;
  LocaleToOverlaysMap: any;
  AssetImportData: AssetImportData;
  static Load(ResourceName: string): LocalizedOverlays;
  static Find(Outer: UObject, ResourceName: string): LocalizedOverlays;
  static GetDefaultObject(): LocalizedOverlays;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LocalizedOverlays;
  static C(Other: UObject | any): LocalizedOverlays;
}
declare class SHAHashData {
  Hash: number;
  clone(): SHAHashData;
  static C(Other: UObject | any): SHAHashData;
}
declare class ChunkPartData {
  Guid: Guid;
  Offset: any;
  Size: any;
  clone(): ChunkPartData;
  static C(Other: UObject | any): ChunkPartData;
}
declare class FileManifestData {
  Filename: string;
  FileHash: SHAHashData;
  FileChunkParts: ChunkPartData[];
  InstallTags: string[];
  bIsUnixExecutable: boolean;
  SymlinkTarget: string;
  bIsReadOnly: boolean;
  bIsCompressed: boolean;
  clone(): FileManifestData;
  static C(Other: UObject | any): FileManifestData;
}
declare class ChunkInfoData {
  Guid: Guid;
  Hash: any;
  ShaHash: SHAHashData;
  FileSize: any;
  GroupNumber: number;
  clone(): ChunkInfoData;
  static C(Other: UObject | any): ChunkInfoData;
}
declare class CustomFieldData {
  Key: string;
  Value: string;
  clone(): CustomFieldData;
  static C(Other: UObject | any): CustomFieldData;
}
declare class BuildPatchManifest mixins UObject {
  ManifestFileVersion: number;
  bIsFileData: boolean;
  AppID: any;
  AppName: string;
  BuildVersion: string;
  LaunchExe: string;
  LaunchCommand: string;
  PrereqIds: any;
  PrereqName: string;
  PrereqPath: string;
  PrereqArgs: string;
  FileManifestList: FileManifestData[];
  ChunkList: ChunkInfoData[];
  CustomFields: CustomFieldData[];
  static Load(ResourceName: string): BuildPatchManifest;
  static Find(Outer: UObject, ResourceName: string): BuildPatchManifest;
  static GetDefaultObject(): BuildPatchManifest;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BuildPatchManifest;
  static C(Other: UObject | any): BuildPatchManifest;
}
declare class MRMeshComponent mixins PrimitiveComponent {
  Material: MaterialInterface;
  bCreateMeshProxySections: boolean;
  bUpdateNavMeshOnMeshUpdate: boolean;
  bNeverCreateCollisionMesh: boolean;
  CachedBodySetup: BodySetup;
  BodySetups: BodySetup[];
  static Load(ResourceName: string): MRMeshComponent;
  static Find(Outer: UObject, ResourceName: string): MRMeshComponent;
  static GetDefaultObject(): MRMeshComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MRMeshComponent;
  IsConnected(): boolean;
  ForceNavMeshUpdate(): void;
  Clear(): void;
  static C(Other: UObject | any): MRMeshComponent;
}
declare class MeshReconstructorBase mixins UObject {
  static Load(ResourceName: string): MeshReconstructorBase;
  static Find(Outer: UObject, ResourceName: string): MeshReconstructorBase;
  static GetDefaultObject(): MeshReconstructorBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshReconstructorBase;
  StopReconstruction(): void;
  StartReconstruction(): void;
  PauseReconstruction(): void;
  IsReconstructionStarted(): boolean;
  IsReconstructionPaused(): boolean;
  DisconnectMRMesh(): void;
  ConnectMRMesh(Mesh: MRMeshComponent): void;
  static C(Other: UObject | any): MeshReconstructorBase;
}
declare type EMeshTrackerVertexColorModeT =
  | "None"
  | "Confidence"
  | "Block"
  | "EMeshTrackerVertexColorMode_MAX";
declare var EMeshTrackerVertexColorMode: {
  None: "None",
  Confidence: "Confidence",
  Block: "Block",
  EMeshTrackerVertexColorMode_MAX: "EMeshTrackerVertexColorMode_MAX"
};
declare class MockDataMeshTrackerComponent mixins SceneComponent {
  OnMeshTrackerUpdated: UnrealEngineMulticastDelegate<
    (
      index: number,
      Vertices: Vector[],
      Triangles: number[],
      Normals: Vector[],
      Confidence: number[]
    ) => void
  >;
  ScanWorld: boolean;
  RequestNormals: boolean;
  RequestVertexConfidence: boolean;
  VertexColorMode: EMeshTrackerVertexColorModeT;
  BlockVertexColors: Color[];
  VertexColorFromConfidenceZero: LinearColor;
  VertexColorFromConfidenceOne: LinearColor;
  UpdateInterval: number;
  MRMesh: MRMeshComponent;
  static Load(ResourceName: string): MockDataMeshTrackerComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MockDataMeshTrackerComponent;
  static GetDefaultObject(): MockDataMeshTrackerComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MockDataMeshTrackerComponent;
  DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): void;
  ConnectMRMesh(InMRMeshPtr: MRMeshComponent): void;
  static C(Other: UObject | any): MockDataMeshTrackerComponent;
}
declare class MacTargetSettings mixins UObject {
  TargetedRHIs: string[];
  MaxShaderLanguageVersion: number;
  UseFastIntrinsics: boolean;
  ForceFloats: boolean;
  EnableMathOptimisations: boolean;
  AudioSampleRate: number;
  AudioCallbackBufferFrameSize: number;
  AudioNumBuffersToEnqueue: number;
  AudioMaxChannels: number;
  AudioNumSourceWorkers: number;
  SpatializationPlugin: string;
  ReverbPlugin: string;
  OcclusionPlugin: string;
  static Load(ResourceName: string): MacTargetSettings;
  static Find(Outer: UObject, ResourceName: string): MacTargetSettings;
  static GetDefaultObject(): MacTargetSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MacTargetSettings;
  static C(Other: UObject | any): MacTargetSettings;
}
declare class AnimationBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): AnimationBlueprintLibrary;
  static Find(Outer: UObject, ResourceName: string): AnimationBlueprintLibrary;
  static GetDefaultObject(): AnimationBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationBlueprintLibrary;
  static SetRootMotionLockType(
    AnimationSequence: AnimSequence,
    RootMotionLockType: ERootMotionRootLockT
  ): void;
  static SetRootMotionEnabled(
    AnimationSequence: AnimSequence,
    bEnabled: boolean
  ): void;
  static SetRateScale(AnimationSequence: AnimSequence, RateScale: number): void;
  static SetIsRootMotionLockForced(
    AnimationSequence: AnimSequence,
    bForced: boolean
  ): void;
  static SetCompressionScheme(
    AnimationSequence: AnimSequence,
    CompressionScheme: AnimCompress
  ): void;
  static SetAnimationInterpolationType(
    AnimationSequence: AnimSequence,
    InterpolationType: EAnimInterpolationTypeT
  ): void;
  static SetAdditiveBasePoseType(
    AnimationSequence: AnimSequence,
    AdditiveBasePoseType: EAdditiveBasePoseTypeT
  ): void;
  static SetAdditiveAnimationType(
    AnimationSequence: AnimSequence,
    AdditiveAnimationType: EAdditiveAnimationTypeT
  ): void;
  static RemoveVirtualBones(
    AnimationSequence: AnimSequence,
    VirtualBoneNames: string[]
  ): void;
  static RemoveVirtualBone(
    AnimationSequence: AnimSequence,
    VirtualBoneName: string
  ): void;
  static RemoveMetaDataOfClass(
    AnimationSequence: AnimSequence,
    MetaDataClass: UnrealEngineClassT
  ): void;
  static RemoveMetaData(
    AnimationSequence: AnimSequence,
    MetaDataObject: AnimMetaData
  ): void;
  static RemoveCurve(
    AnimationSequence: AnimSequence,
    CurveName: string,
    bRemoveNameFromSkeleton: boolean
  ): void;
  static RemoveBoneAnimation(
    AnimationSequence: AnimSequence,
    BoneName: string,
    bIncludeChildren: boolean,
    bFinalize: boolean
  ): void;
  static RemoveAnimationSyncMarkersByTrack(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string
  ): number;
  static RemoveAnimationSyncMarkersByName(
    AnimationSequence: AnimSequence,
    MarkerName: string
  ): number;
  static RemoveAnimationNotifyTrack(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string
  ): void;
  static RemoveAnimationNotifyEventsByTrack(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string
  ): number;
  static RemoveAnimationNotifyEventsByName(
    AnimationSequence: AnimSequence,
    NotifyName: string
  ): number;
  static RemoveAllVirtualBones(AnimationSequence: AnimSequence): void;
  static RemoveAllMetaData(AnimationSequence: AnimSequence): void;
  static RemoveAllCurveData(AnimationSequence: AnimSequence): void;
  static RemoveAllBoneAnimation(AnimationSequence: AnimSequence): void;
  static RemoveAllAnimationSyncMarkers(AnimationSequence: AnimSequence): void;
  static RemoveAllAnimationNotifyTracks(AnimationSequence: AnimSequence): void;
  static IsValidTime(
    AnimationSequence: AnimSequence,
    Time: number,
    IsValid?: boolean
  ): {
    IsValid: boolean
  };
  static IsValidRawAnimationTrackName(
    AnimationSequence: AnimSequence,
    TrackName: string
  ): boolean;
  static IsValidAnimNotifyTrackName(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string
  ): boolean;
  static IsValidAnimationSyncMarkerName(
    AnimationSequence: AnimSequence,
    MarkerName: string
  ): boolean;
  static IsRootMotionLockForced(AnimationSequence: AnimSequence): boolean;
  static IsRootMotionEnabled(AnimationSequence: AnimSequence): boolean;
  static GetVectorKeys(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Times?: number[],
    Values?: Vector[]
  ): {
    Times: number[],
    Values: Vector[]
  };
  static GetUniqueMarkerNames(
    AnimationSequence: AnimSequence,
    MarkerNames?: string[]
  ): {
    MarkerNames: string[]
  };
  static GetTransformationKeys(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Times?: number[],
    Values?: Transform[]
  ): {
    Times: number[],
    Values: Transform[]
  };
  static GetTimeAtFrame(
    AnimationSequence: AnimSequence,
    Frame: number,
    Time?: number
  ): {
    Time: number
  };
  static GetSequenceLength(
    AnimationSequence: AnimSequence,
    Length?: number
  ): {
    Length: number
  };
  static GetRootMotionLockType(
    AnimationSequence: AnimSequence,
    LockType?: ERootMotionRootLockT
  ): {
    LockType: ERootMotionRootLockT
  };
  static GetRawTrackScaleData(
    AnimationSequence: AnimSequence,
    TrackName: string,
    ScaleData?: Vector[]
  ): {
    ScaleData: Vector[]
  };
  static GetRawTrackRotationData(
    AnimationSequence: AnimSequence,
    TrackName: string,
    RotationData?: Quat[]
  ): {
    RotationData: Quat[]
  };
  static GetRawTrackPositionData(
    AnimationSequence: AnimSequence,
    TrackName: string,
    PositionData?: Vector[]
  ): {
    PositionData: Vector[]
  };
  static GetRawTrackData(
    AnimationSequence: AnimSequence,
    TrackName: string,
    PositionKeys?: Vector[],
    RotationKeys?: Quat[],
    ScalingKeys?: Vector[]
  ): {
    PositionKeys: Vector[],
    RotationKeys: Quat[],
    ScalingKeys: Vector[]
  };
  static GetRateScale(
    AnimationSequence: AnimSequence,
    RateScale?: number
  ): {
    RateScale: number
  };
  static GetNumFrames(
    AnimationSequence: AnimSequence,
    NumFrames?: number
  ): {
    NumFrames: number
  };
  static GetMetaDataOfClass(
    AnimationSequence: AnimSequence,
    MetaDataClass: UnrealEngineClassT,
    MetaDataOfClass: AnimMetaData[]
  ): void;
  static GetMetaData(
    AnimationSequence: AnimSequence,
    MetaData: AnimMetaData[]
  ): void;
  static GetFrameAtTime(
    AnimationSequence: AnimSequence,
    Time: number,
    Frame?: number
  ): {
    Frame: number
  };
  static GetFloatKeys(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Times?: number[],
    Values?: number[]
  ): {
    Times: number[],
    Values: number[]
  };
  static GetCompressionScheme(
    AnimationSequence: AnimSequence,
    CompressionScheme?: AnimCompress
  ): {
    CompressionScheme: AnimCompress
  };
  static GetBonePosesForTime(
    AnimationSequence: AnimSequence,
    BoneNames: string[],
    Time: number,
    bExtractRootMotion: boolean,
    Poses?: Transform[],
    PreviewMesh?: SkeletalMesh
  ): {
    Poses: Transform[]
  };
  static GetBonePosesForFrame(
    AnimationSequence: AnimSequence,
    BoneNames: string[],
    Frame: number,
    bExtractRootMotion: boolean,
    Poses?: Transform[],
    PreviewMesh?: SkeletalMesh
  ): {
    Poses: Transform[]
  };
  static GetBonePoseForTime(
    AnimationSequence: AnimSequence,
    BoneName: string,
    Time: number,
    bExtractRootMotion: boolean,
    Pose?: Transform
  ): {
    Pose: Transform
  };
  static GetBonePoseForFrame(
    AnimationSequence: AnimSequence,
    BoneName: string,
    Frame: number,
    bExtractRootMotion: boolean,
    Pose?: Transform
  ): {
    Pose: Transform
  };
  static GetAnimNotifyEventTriggerTime(NotifyEvent: AnimNotifyEvent): number;
  static GetAnimationTrackNames(
    AnimationSequence: AnimSequence,
    TrackNames?: string[]
  ): {
    TrackNames: string[]
  };
  static GetAnimationSyncMarkersForTrack(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string,
    Markers?: AnimSyncMarker[]
  ): {
    Markers: AnimSyncMarker[]
  };
  static GetAnimationSyncMarkers(
    AnimationSequence: AnimSequence,
    Markers?: AnimSyncMarker[]
  ): {
    Markers: AnimSyncMarker[]
  };
  static GetAnimationNotifyTrackNames(
    AnimationSequence: AnimSequence,
    TrackNames?: string[]
  ): {
    TrackNames: string[]
  };
  static GetAnimationNotifyEventsForTrack(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string,
    Events?: AnimNotifyEvent[]
  ): {
    Events: AnimNotifyEvent[]
  };
  static GetAnimationNotifyEvents(
    AnimationSequence: AnimSequence,
    NotifyEvents?: AnimNotifyEvent[]
  ): {
    NotifyEvents: AnimNotifyEvent[]
  };
  static GetAnimationNotifyEventNames(
    AnimationSequence: AnimSequence,
    EventNames?: string[]
  ): {
    EventNames: string[]
  };
  static GetAnimationInterpolationType(
    AnimationSequence: AnimSequence,
    InterpolationType?: EAnimInterpolationTypeT
  ): {
    InterpolationType: EAnimInterpolationTypeT
  };
  static GetAdditiveBasePoseType(
    AnimationSequence: AnimSequence,
    AdditiveBasePoseType?: EAdditiveBasePoseTypeT
  ): {
    AdditiveBasePoseType: EAdditiveBasePoseTypeT
  };
  static GetAdditiveAnimationType(
    AnimationSequence: AnimSequence,
    AdditiveAnimationType?: EAdditiveAnimationTypeT
  ): {
    AdditiveAnimationType: EAdditiveAnimationTypeT
  };
  static FindBonePathToRoot(
    AnimationSequence: AnimSequence,
    BoneName: string,
    BonePath?: string[]
  ): {
    BonePath: string[]
  };
  static FinalizeBoneAnimation(AnimationSequence: AnimSequence): void;
  static DoesCurveExist(
    AnimationSequence: AnimSequence,
    CurveName: string,
    CurveType: ERawCurveTrackTypesT
  ): boolean;
  static DoesBoneNameExist(
    AnimationSequence: AnimSequence,
    BoneName: string,
    bExists?: boolean
  ): {
    bExists: boolean
  };
  static CopyAnimNotifiesFromSequence(
    SrcAnimSequence: AnimSequence,
    DestAnimSequence: AnimSequence
  ): void;
  static ContainsMetaDataOfClass(
    AnimationSequence: AnimSequence,
    MetaDataClass: UnrealEngineClassT
  ): boolean;
  static AddVirtualBone(
    AnimationSequence: AnimSequence,
    SourceBoneName: string,
    TargetBoneName: string,
    VirtualBoneName?: string
  ): {
    VirtualBoneName: string
  };
  static AddVectorCurveKeys(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Times: number[],
    Vectors: Vector[]
  ): void;
  static AddVectorCurveKey(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Time: number,
    Vector: Vector
  ): void;
  static AddTransformationCurveKeys(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Times: number[],
    Transforms: Transform[]
  ): void;
  static AddTransformationCurveKey(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Time: number,
    Transform: Transform
  ): void;
  static AddMetaDataObject(
    AnimationSequence: AnimSequence,
    MetaDataObject: AnimMetaData
  ): void;
  static AddMetaData(
    AnimationSequence: AnimSequence,
    MetaDataClass: UnrealEngineClassT,
    MetaDataInstance: AnimMetaData
  ): void;
  static AddFloatCurveKeys(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Times: number[],
    Values: number[]
  ): void;
  static AddFloatCurveKey(
    AnimationSequence: AnimSequence,
    CurveName: string,
    Time: number,
    Value: number
  ): void;
  static AddCurve(
    AnimationSequence: AnimSequence,
    CurveName: string,
    CurveType: ERawCurveTrackTypesT,
    bMetaDataCurve: boolean
  ): void;
  static AddAnimationSyncMarker(
    AnimationSequence: AnimSequence,
    MarkerName: string,
    Time: number,
    NotifyTrackName: string
  ): void;
  static AddAnimationNotifyTrack(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string,
    TrackColor: LinearColor
  ): void;
  static AddAnimationNotifyEventObject(
    AnimationSequence: AnimSequence,
    StartTime: number,
    Notify: AnimNotify,
    NotifyTrackName: string
  ): void;
  static AddAnimationNotifyEvent(
    AnimationSequence: AnimSequence,
    NotifyTrackName: string,
    StartTime: number,
    Duration: number,
    NotifyClass: UnrealEngineClassT
  ): AnimNotify;
  static C(Other: UObject | any): AnimationBlueprintLibrary;
}
declare class AnimationModifier mixins UObject {
  RevisionGuid: Guid;
  AppliedGuid: Guid;
  StoredNativeRevision: number;
  static Load(ResourceName: string): AnimationModifier;
  static Find(Outer: UObject, ResourceName: string): AnimationModifier;
  static GetDefaultObject(): AnimationModifier;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationModifier;
  OnRevert(AnimationSequence: AnimSequence): void;
  OnApply(AnimationSequence: AnimSequence): void;
  static C(Other: UObject | any): AnimationModifier;
}
declare class AnimationModifiersAssetUserData mixins AssetUserData {
  AnimationModifierInstances: AnimationModifier[];
  static Load(ResourceName: string): AnimationModifiersAssetUserData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AnimationModifiersAssetUserData;
  static GetDefaultObject(): AnimationModifiersAssetUserData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationModifiersAssetUserData;
  static C(Other: UObject | any): AnimationModifiersAssetUserData;
}
declare class DatasmithObjectTemplate mixins UObject {
  static Load(ResourceName: string): DatasmithObjectTemplate;
  static Find(Outer: UObject, ResourceName: string): DatasmithObjectTemplate;
  static GetDefaultObject(): DatasmithObjectTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithObjectTemplate;
  static C(Other: UObject | any): DatasmithObjectTemplate;
}
declare class DatasmithActorTemplate mixins DatasmithObjectTemplate {
  Layers: any;
  Tags: any;
  static Load(ResourceName: string): DatasmithActorTemplate;
  static Find(Outer: UObject, ResourceName: string): DatasmithActorTemplate;
  static GetDefaultObject(): DatasmithActorTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithActorTemplate;
  static C(Other: UObject | any): DatasmithActorTemplate;
}
declare type EDatasmithAreaLightActorTypeT =
  | "Point"
  | "Spot"
  | "Rect"
  | "EDatasmithAreaLightActorType_MAX";
declare var EDatasmithAreaLightActorType: {
  Point: "Point",
  Spot: "Spot",
  Rect: "Rect",
  EDatasmithAreaLightActorType_MAX: "EDatasmithAreaLightActorType_MAX"
};
declare type EDatasmithAreaLightActorShapeT =
  | "Rectangle"
  | "Disc"
  | "Sphere"
  | "Cylinder"
  | "None"
  | "EDatasmithAreaLightActorShape_MAX";
declare var EDatasmithAreaLightActorShape: {
  Rectangle: "Rectangle",
  Disc: "Disc",
  Sphere: "Sphere",
  Cylinder: "Cylinder",
  None: "None",
  EDatasmithAreaLightActorShape_MAX: "EDatasmithAreaLightActorShape_MAX"
};
declare class DatasmithAreaLightActor mixins Actor {
  LightType: EDatasmithAreaLightActorTypeT;
  LightShape: EDatasmithAreaLightActorShapeT;
  Dimensions: Vector2D;
  Intensity: number;
  IntensityUnits: ELightUnitsT;
  Color: LinearColor;
  Temperature: number;
  IESTexture: TextureLightProfile;
  bUseIESBrightness: boolean;
  IESBrightnessScale: number;
  Rotation: Rotator;
  SourceRadius: number;
  SourceLength: number;
  AttenuationRadius: number;
  SpotlightInnerAngle: number;
  SpotlightOuterAngle: number;
  static GetDefaultObject(): DatasmithAreaLightActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithAreaLightActor;
  static C(Other: UObject | any): DatasmithAreaLightActor;
}
declare class DatasmithAreaLightActorTemplate mixins DatasmithObjectTemplate {
  LightType: EDatasmithAreaLightActorTypeT;
  LightShape: EDatasmithAreaLightActorShapeT;
  Dimensions: Vector2D;
  Color: LinearColor;
  Intensity: number;
  IntensityUnits: ELightUnitsT;
  Temperature: number;
  IESTexture: TextureLightProfile;
  bUseIESBrightness: boolean;
  IESBrightnessScale: number;
  Rotation: Rotator;
  SourceRadius: number;
  SourceLength: number;
  AttenuationRadius: number;
  static Load(ResourceName: string): DatasmithAreaLightActorTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithAreaLightActorTemplate;
  static GetDefaultObject(): DatasmithAreaLightActorTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithAreaLightActorTemplate;
  static C(Other: UObject | any): DatasmithAreaLightActorTemplate;
}
declare class DatasmithAssetImportOptions {
  PackagePath: string;
  clone(): DatasmithAssetImportOptions;
  static C(Other: UObject | any): DatasmithAssetImportOptions;
}
declare class DatasmithAssetImportData mixins AssetImportData {
  AssetImportOptions: DatasmithAssetImportOptions;
  static Load(ResourceName: string): DatasmithAssetImportData;
  static Find(Outer: UObject, ResourceName: string): DatasmithAssetImportData;
  static GetDefaultObject(): DatasmithAssetImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithAssetImportData;
  static C(Other: UObject | any): DatasmithAssetImportData;
}
declare type EDatasmithImportLightmapMinT =
  | "LIGHTMAP_16"
  | "LIGHTMAP_32"
  | "LIGHTMAP_64"
  | "LIGHTMAP_128"
  | "LIGHTMAP_256"
  | "LIGHTMAP_512"
  | "LIGHTMAP_MAX";
declare var EDatasmithImportLightmapMin: {
  LIGHTMAP_16: "LIGHTMAP_16",
  LIGHTMAP_32: "LIGHTMAP_32",
  LIGHTMAP_64: "LIGHTMAP_64",
  LIGHTMAP_128: "LIGHTMAP_128",
  LIGHTMAP_256: "LIGHTMAP_256",
  LIGHTMAP_512: "LIGHTMAP_512",
  LIGHTMAP_MAX: "LIGHTMAP_MAX"
};
declare type EDatasmithImportLightmapMaxT =
  | "LIGHTMAP_64"
  | "LIGHTMAP_128"
  | "LIGHTMAP_256"
  | "LIGHTMAP_512"
  | "LIGHTMAP_1024"
  | "LIGHTMAP_2048"
  | "LIGHTMAP_4096"
  | "LIGHTMAP_MAX";
declare var EDatasmithImportLightmapMax: {
  LIGHTMAP_64: "LIGHTMAP_64",
  LIGHTMAP_128: "LIGHTMAP_128",
  LIGHTMAP_256: "LIGHTMAP_256",
  LIGHTMAP_512: "LIGHTMAP_512",
  LIGHTMAP_1024: "LIGHTMAP_1024",
  LIGHTMAP_2048: "LIGHTMAP_2048",
  LIGHTMAP_4096: "LIGHTMAP_4096",
  LIGHTMAP_MAX: "LIGHTMAP_MAX"
};
declare class DatasmithStaticMeshImportOptions {
  MinLightmapResolution: EDatasmithImportLightmapMinT;
  MaxLightmapResolution: EDatasmithImportLightmapMaxT;
  bGenerateLightmapUVs: boolean;
  bRemoveDegenerates: boolean;
  clone(): DatasmithStaticMeshImportOptions;
  static C(Other: UObject | any): DatasmithStaticMeshImportOptions;
}
declare class DatasmithStaticMeshImportData mixins DatasmithAssetImportData {
  ImportOptions: DatasmithStaticMeshImportOptions;
  static Load(ResourceName: string): DatasmithStaticMeshImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithStaticMeshImportData;
  static GetDefaultObject(): DatasmithStaticMeshImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithStaticMeshImportData;
  static C(Other: UObject | any): DatasmithStaticMeshImportData;
}
declare type EDatasmithCADStitchingTechniqueT =
  | "StitchingNone"
  | "StitchingHeal"
  | "StitchingSew"
  | "EDatasmithCADStitchingTechnique_MAX";
declare var EDatasmithCADStitchingTechnique: {
  StitchingNone: "StitchingNone",
  StitchingHeal: "StitchingHeal",
  StitchingSew: "StitchingSew",
  EDatasmithCADStitchingTechnique_MAX: "EDatasmithCADStitchingTechnique_MAX"
};
declare class DatasmithTessellationOptions {
  ChordTolerance: number;
  MaxEdgeLength: number;
  NormalTolerance: number;
  StitchingTechnique: EDatasmithCADStitchingTechniqueT;
  clone(): DatasmithTessellationOptions;
  static C(Other: UObject | any): DatasmithTessellationOptions;
}
declare class DatasmithStaticMeshCADImportData
  mixins DatasmithStaticMeshImportData {
  TessellationOptions: DatasmithTessellationOptions;
  ModelUnit: any;
  ModelTolerance: any;
  ResourcePath: string;
  ResourceFilename: string;
  AuxiliaryFilenames: string[];
  static Load(ResourceName: string): DatasmithStaticMeshCADImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithStaticMeshCADImportData;
  static GetDefaultObject(): DatasmithStaticMeshCADImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithStaticMeshCADImportData;
  static C(Other: UObject | any): DatasmithStaticMeshCADImportData;
}
declare type EDatasmithImportSceneT =
  | "NewLevel"
  | "CurrentLevel"
  | "AssetsOnly"
  | "EDatasmithImportScene_MAX";
declare var EDatasmithImportScene: {
  NewLevel: "NewLevel",
  CurrentLevel: "CurrentLevel",
  AssetsOnly: "AssetsOnly",
  EDatasmithImportScene_MAX: "EDatasmithImportScene_MAX"
};
declare class DatasmithImportBaseOptions {
  SceneHandling: EDatasmithImportSceneT;
  bIncludeGeometry: boolean;
  bIncludeMaterial: boolean;
  bIncludeLight: boolean;
  bIncludeCamera: boolean;
  bIncludeAnimation: boolean;
  AssetOptions: DatasmithAssetImportOptions;
  StaticMeshOptions: DatasmithStaticMeshImportOptions;
  clone(): DatasmithImportBaseOptions;
  static C(Other: UObject | any): DatasmithImportBaseOptions;
}
declare class DatasmithSceneImportData mixins AssetImportData {
  BaseOptions: DatasmithImportBaseOptions;
  static Load(ResourceName: string): DatasmithSceneImportData;
  static Find(Outer: UObject, ResourceName: string): DatasmithSceneImportData;
  static GetDefaultObject(): DatasmithSceneImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithSceneImportData;
  static C(Other: UObject | any): DatasmithSceneImportData;
}
declare class DatasmithCADImportSceneData mixins DatasmithSceneImportData {
  TessellationOptions: DatasmithTessellationOptions;
  static Load(ResourceName: string): DatasmithCADImportSceneData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithCADImportSceneData;
  static GetDefaultObject(): DatasmithCADImportSceneData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithCADImportSceneData;
  static C(Other: UObject | any): DatasmithCADImportSceneData;
}
declare class DatasmithMDLSceneImportData mixins DatasmithSceneImportData {
  static Load(ResourceName: string): DatasmithMDLSceneImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithMDLSceneImportData;
  static GetDefaultObject(): DatasmithMDLSceneImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithMDLSceneImportData;
  static C(Other: UObject | any): DatasmithMDLSceneImportData;
}
declare class DatasmithGLTFSceneImportData mixins DatasmithSceneImportData {
  Generator: string;
  Version: number;
  Author: string;
  License: string;
  Source: string;
  static Load(ResourceName: string): DatasmithGLTFSceneImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithGLTFSceneImportData;
  static GetDefaultObject(): DatasmithGLTFSceneImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithGLTFSceneImportData;
  static C(Other: UObject | any): DatasmithGLTFSceneImportData;
}
declare class DatasmithStaticMeshGLTFImportData
  mixins DatasmithStaticMeshImportData {
  SourceMeshName: string;
  static Load(ResourceName: string): DatasmithStaticMeshGLTFImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithStaticMeshGLTFImportData;
  static GetDefaultObject(): DatasmithStaticMeshGLTFImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithStaticMeshGLTFImportData;
  static C(Other: UObject | any): DatasmithStaticMeshGLTFImportData;
}
declare class DatasmithDeltaGenAssetImportData mixins DatasmithAssetImportData {
  static Load(ResourceName: string): DatasmithDeltaGenAssetImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithDeltaGenAssetImportData;
  static GetDefaultObject(): DatasmithDeltaGenAssetImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithDeltaGenAssetImportData;
  static C(Other: UObject | any): DatasmithDeltaGenAssetImportData;
}
declare class DatasmithDeltaGenSceneImportData mixins DatasmithSceneImportData {
  static Load(ResourceName: string): DatasmithDeltaGenSceneImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithDeltaGenSceneImportData;
  static GetDefaultObject(): DatasmithDeltaGenSceneImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithDeltaGenSceneImportData;
  static C(Other: UObject | any): DatasmithDeltaGenSceneImportData;
}
declare class DatasmithVREDAssetImportData mixins DatasmithAssetImportData {
  static Load(ResourceName: string): DatasmithVREDAssetImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithVREDAssetImportData;
  static GetDefaultObject(): DatasmithVREDAssetImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithVREDAssetImportData;
  static C(Other: UObject | any): DatasmithVREDAssetImportData;
}
declare class DatasmithVREDSceneImportData mixins DatasmithSceneImportData {
  static Load(ResourceName: string): DatasmithVREDSceneImportData;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithVREDSceneImportData;
  static GetDefaultObject(): DatasmithVREDSceneImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithVREDSceneImportData;
  static C(Other: UObject | any): DatasmithVREDSceneImportData;
}
declare class DatasmithCameraLookatTrackingSettingsTemplate {
  bEnableLookAtTracking: boolean;
  ActorToTrack: Actor;
  clone(): DatasmithCameraLookatTrackingSettingsTemplate;
  static C(Other: UObject | any): DatasmithCameraLookatTrackingSettingsTemplate;
}
declare class DatasmithCineCameraActorTemplate mixins DatasmithObjectTemplate {
  LookatTrackingSettings: DatasmithCameraLookatTrackingSettingsTemplate;
  static Load(ResourceName: string): DatasmithCineCameraActorTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithCineCameraActorTemplate;
  static GetDefaultObject(): DatasmithCineCameraActorTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithCineCameraActorTemplate;
  static C(Other: UObject | any): DatasmithCineCameraActorTemplate;
}
declare class DatasmithCameraFilmbackSettingsTemplate {
  SensorWidth: number;
  SensorHeight: number;
  clone(): DatasmithCameraFilmbackSettingsTemplate;
  static C(Other: UObject | any): DatasmithCameraFilmbackSettingsTemplate;
}
declare class DatasmithCameraLensSettingsTemplate {
  MaxFStop: number;
  clone(): DatasmithCameraLensSettingsTemplate;
  static C(Other: UObject | any): DatasmithCameraLensSettingsTemplate;
}
declare class DatasmithCameraFocusSettingsTemplate {
  FocusMethod: ECameraFocusMethodT;
  ManualFocusDistance: number;
  clone(): DatasmithCameraFocusSettingsTemplate;
  static C(Other: UObject | any): DatasmithCameraFocusSettingsTemplate;
}
declare class DatasmithPostProcessSettingsTemplate {
  bOverride_WhiteTemp: boolean;
  bOverride_ColorSaturation: boolean;
  bOverride_VignetteIntensity: boolean;
  bOverride_FilmWhitePoint: boolean;
  bOverride_AutoExposureMethod: boolean;
  bOverride_CameraISO: boolean;
  bOverride_CameraShutterSpeed: boolean;
  bOverride_DepthOfFieldFstop: boolean;
  WhiteTemp: number;
  VignetteIntensity: number;
  FilmWhitePoint: LinearColor;
  ColorSaturation: Vector4;
  AutoExposureMethod: EAutoExposureMethodT;
  CameraISO: number;
  CameraShutterSpeed: number;
  DepthOfFieldFstop: number;
  clone(): DatasmithPostProcessSettingsTemplate;
  static C(Other: UObject | any): DatasmithPostProcessSettingsTemplate;
}
declare class DatasmithCineCameraComponentTemplate
  mixins DatasmithObjectTemplate {
  FilmbackSettings: DatasmithCameraFilmbackSettingsTemplate;
  LensSettings: DatasmithCameraLensSettingsTemplate;
  FocusSettings: DatasmithCameraFocusSettingsTemplate;
  CurrentFocalLength: number;
  CurrentAperture: number;
  PostProcessSettings: DatasmithPostProcessSettingsTemplate;
  static Load(ResourceName: string): DatasmithCineCameraComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithCineCameraComponentTemplate;
  static GetDefaultObject(): DatasmithCineCameraComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithCineCameraComponentTemplate;
  static C(Other: UObject | any): DatasmithCineCameraComponentTemplate;
}
declare class DatasmithContentBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): DatasmithContentBlueprintLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithContentBlueprintLibrary;
  static GetDefaultObject(): DatasmithContentBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithContentBlueprintLibrary;
  static GetDatasmithUserDataValueForKey(UObject: UObject, Key: string): string;
  static GetDatasmithUserDataKeysAndValuesForValue(
    UObject: UObject,
    StringToMatch: string,
    OutKeys?: string[],
    OutValues?: string[]
  ): {
    OutKeys: string[],
    OutValues: string[]
  };
  static GetDatasmithUserData(UObject: UObject): DatasmithAssetUserData;
  static GetAllObjectsAndValuesForKey(
    Key: string,
    ObjectClass: UnrealEngineClassT,
    OutObjects?: UObject[],
    OutValues?: string[]
  ): {
    OutObjects: UObject[],
    OutValues: string[]
  };
  static GetAllDatasmithUserData(
    ObjectClass: UnrealEngineClassT,
    OutUserData?: DatasmithAssetUserData[]
  ): {
    OutUserData: DatasmithAssetUserData[]
  };
  static C(Other: UObject | any): DatasmithContentBlueprintLibrary;
}
declare type EDatasmithImportSearchPackagePolicyT =
  | "Current"
  | "All"
  | "EDatasmithImportSearchPackagePolicy_MAX";
declare var EDatasmithImportSearchPackagePolicy: {
  Current: "Current",
  All: "All",
  EDatasmithImportSearchPackagePolicy_MAX: "EDatasmithImportSearchPackagePolicy_MAX"
};
declare type EDatasmithImportAssetConflictPolicyT =
  | "Replace"
  | "Update"
  | "Use"
  | "Ignore"
  | "EDatasmithImportAssetConflictPolicy_MAX";
declare var EDatasmithImportAssetConflictPolicy: {
  Replace: "Replace",
  Update: "Update",
  Use: "Use",
  Ignore: "Ignore",
  EDatasmithImportAssetConflictPolicy_MAX: "EDatasmithImportAssetConflictPolicy_MAX"
};
declare type EDatasmithImportActorPolicyT =
  | "Update"
  | "Full"
  | "Ignore"
  | "EDatasmithImportActorPolicy_MAX";
declare var EDatasmithImportActorPolicy: {
  Update: "Update",
  Full: "Full",
  Ignore: "Ignore",
  EDatasmithImportActorPolicy_MAX: "EDatasmithImportActorPolicy_MAX"
};
declare type EDatasmithImportMaterialQualityT =
  | "UseNoFresnelCurves"
  | "UseSimplifierFresnelCurves"
  | "UseRealFresnelCurves"
  | "EDatasmithImportMaterialQuality_MAX";
declare var EDatasmithImportMaterialQuality: {
  UseNoFresnelCurves: "UseNoFresnelCurves",
  UseSimplifierFresnelCurves: "UseSimplifierFresnelCurves",
  UseRealFresnelCurves: "UseRealFresnelCurves",
  EDatasmithImportMaterialQuality_MAX: "EDatasmithImportMaterialQuality_MAX"
};
declare class DatasmithReimportOptions {
  bUpdateActors: boolean;
  bRespawnDeletedActors: boolean;
  clone(): DatasmithReimportOptions;
  static C(Other: UObject | any): DatasmithReimportOptions;
}
declare class DatasmithImportOptions mixins UObject {
  SearchPackagePolicy: EDatasmithImportSearchPackagePolicyT;
  MaterialConflictPolicy: EDatasmithImportAssetConflictPolicyT;
  TextureConflictPolicy: EDatasmithImportAssetConflictPolicyT;
  StaticMeshActorImportPolicy: EDatasmithImportActorPolicyT;
  LightImportPolicy: EDatasmithImportActorPolicyT;
  CameraImportPolicy: EDatasmithImportActorPolicyT;
  OtherActorImportPolicy: EDatasmithImportActorPolicyT;
  MaterialQuality: EDatasmithImportMaterialQualityT;
  BaseOptions: DatasmithImportBaseOptions;
  TessellationOptions: DatasmithTessellationOptions;
  ReimportOptions: DatasmithReimportOptions;
  Filename: string;
  FilePath: string;
  static Load(ResourceName: string): DatasmithImportOptions;
  static Find(Outer: UObject, ResourceName: string): DatasmithImportOptions;
  static GetDefaultObject(): DatasmithImportOptions;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithImportOptions;
  static C(Other: UObject | any): DatasmithImportOptions;
}
declare class DatasmithLandscapeTemplate mixins DatasmithObjectTemplate {
  LandscapeMaterial: MaterialInterface;
  StaticLightingLOD: number;
  static Load(ResourceName: string): DatasmithLandscapeTemplate;
  static Find(Outer: UObject, ResourceName: string): DatasmithLandscapeTemplate;
  static GetDefaultObject(): DatasmithLandscapeTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithLandscapeTemplate;
  static C(Other: UObject | any): DatasmithLandscapeTemplate;
}
declare class DatasmithLightComponentTemplate mixins DatasmithObjectTemplate {
  bVisible: boolean;
  CastShadows: boolean;
  bUseTemperature: boolean;
  bUseIESBrightness: boolean;
  Intensity: number;
  Temperature: number;
  IESBrightnessScale: number;
  LightColor: LinearColor;
  LightFunctionMaterial: MaterialInterface;
  IESTexture: TextureLightProfile;
  static Load(ResourceName: string): DatasmithLightComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithLightComponentTemplate;
  static GetDefaultObject(): DatasmithLightComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithLightComponentTemplate;
  static C(Other: UObject | any): DatasmithLightComponentTemplate;
}
declare class DatasmithStaticParameterSetTemplate {
  StaticSwitchParameters: any;
  clone(): DatasmithStaticParameterSetTemplate;
  static C(Other: UObject | any): DatasmithStaticParameterSetTemplate;
}
declare class DatasmithMaterialInstanceTemplate mixins DatasmithObjectTemplate {
  ScalarParameterValues: any;
  VectorParameterValues: any;
  TextureParameterValues: any;
  StaticParameters: DatasmithStaticParameterSetTemplate;
  static Load(ResourceName: string): DatasmithMaterialInstanceTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithMaterialInstanceTemplate;
  static GetDefaultObject(): DatasmithMaterialInstanceTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithMaterialInstanceTemplate;
  static C(Other: UObject | any): DatasmithMaterialInstanceTemplate;
}
declare class DatasmithPointLightComponentTemplate
  mixins DatasmithObjectTemplate {
  IntensityUnits: ELightUnitsT;
  SourceRadius: number;
  SourceLength: number;
  AttenuationRadius: number;
  static Load(ResourceName: string): DatasmithPointLightComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithPointLightComponentTemplate;
  static GetDefaultObject(): DatasmithPointLightComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithPointLightComponentTemplate;
  static C(Other: UObject | any): DatasmithPointLightComponentTemplate;
}
declare class DatasmithPostProcessVolumeTemplate
  mixins DatasmithObjectTemplate {
  Settings: DatasmithPostProcessSettingsTemplate;
  bEnabled: boolean;
  bUnbound: boolean;
  static Load(ResourceName: string): DatasmithPostProcessVolumeTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithPostProcessVolumeTemplate;
  static GetDefaultObject(): DatasmithPostProcessVolumeTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithPostProcessVolumeTemplate;
  static C(Other: UObject | any): DatasmithPostProcessVolumeTemplate;
}
declare class DatasmithScene mixins UObject {
  DataPrepRecipeBP: Blueprint;
  AssetImportData: DatasmithSceneImportData;
  BulkDataVersion: number;
  StaticMeshes: any;
  Textures: any;
  Materials: any;
  LevelSequences: any;
  static Load(ResourceName: string): DatasmithScene;
  static Find(Outer: UObject, ResourceName: string): DatasmithScene;
  static GetDefaultObject(): DatasmithScene;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithScene;
  static C(Other: UObject | any): DatasmithScene;
}
declare class DatasmithSceneActor mixins Actor {
  Scene: DatasmithScene;
  RelatedActors: any;
  static GetDefaultObject(): DatasmithSceneActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithSceneActor;
  static C(Other: UObject | any): DatasmithSceneActor;
}
declare class DatasmithSceneComponentTemplate mixins DatasmithObjectTemplate {
  RelativeTransform: Transform;
  Mobility: EComponentMobilityT;
  AttachParent: SceneComponent;
  Tags: any;
  static Load(ResourceName: string): DatasmithSceneComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithSceneComponentTemplate;
  static GetDefaultObject(): DatasmithSceneComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithSceneComponentTemplate;
  static C(Other: UObject | any): DatasmithSceneComponentTemplate;
}
declare class DatasmithSkyLightComponentTemplate
  mixins DatasmithObjectTemplate {
  SourceType: ESkyLightSourceTypeT;
  CubemapResolution: number;
  Cubemap: TextureCube;
  static Load(ResourceName: string): DatasmithSkyLightComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithSkyLightComponentTemplate;
  static GetDefaultObject(): DatasmithSkyLightComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithSkyLightComponentTemplate;
  static C(Other: UObject | any): DatasmithSkyLightComponentTemplate;
}
declare class DatasmithSpotLightComponentTemplate
  mixins DatasmithObjectTemplate {
  InnerConeAngle: number;
  OuterConeAngle: number;
  static Load(ResourceName: string): DatasmithSpotLightComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithSpotLightComponentTemplate;
  static GetDefaultObject(): DatasmithSpotLightComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithSpotLightComponentTemplate;
  static C(Other: UObject | any): DatasmithSpotLightComponentTemplate;
}
declare class DatasmithStaticMeshComponentTemplate
  mixins DatasmithSceneComponentTemplate {
  StaticMesh: StaticMesh;
  OverrideMaterials: MaterialInterface[];
  static Load(ResourceName: string): DatasmithStaticMeshComponentTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithStaticMeshComponentTemplate;
  static GetDefaultObject(): DatasmithStaticMeshComponentTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithStaticMeshComponentTemplate;
  static C(Other: UObject | any): DatasmithStaticMeshComponentTemplate;
}
declare class DatasmithMeshSectionInfoMapTemplate {
  Map: any;
  clone(): DatasmithMeshSectionInfoMapTemplate;
  static C(Other: UObject | any): DatasmithMeshSectionInfoMapTemplate;
}
declare class DatasmithMeshBuildSettingsTemplate {
  bUseMikkTSpace: boolean;
  bRecomputeNormals: boolean;
  bRecomputeTangents: boolean;
  bRemoveDegenerates: boolean;
  bBuildAdjacencyBuffer: boolean;
  bUseHighPrecisionTangentBasis: boolean;
  bUseFullPrecisionUVs: boolean;
  bGenerateLightmapUVs: boolean;
  MinLightmapResolution: number;
  SrcLightmapIndex: number;
  DstLightmapIndex: number;
  clone(): DatasmithMeshBuildSettingsTemplate;
  static C(Other: UObject | any): DatasmithMeshBuildSettingsTemplate;
}
declare class DatasmithStaticMaterialTemplate {
  MaterialSlotName: string;
  MaterialInterface: MaterialInterface;
  clone(): DatasmithStaticMaterialTemplate;
  static C(Other: UObject | any): DatasmithStaticMaterialTemplate;
}
declare class DatasmithStaticMeshTemplate mixins DatasmithObjectTemplate {
  SectionInfoMap: DatasmithMeshSectionInfoMapTemplate;
  LightMapCoordinateIndex: number;
  LightMapResolution: number;
  BuildSettings: DatasmithMeshBuildSettingsTemplate[];
  StaticMaterials: DatasmithStaticMaterialTemplate[];
  static Load(ResourceName: string): DatasmithStaticMeshTemplate;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DatasmithStaticMeshTemplate;
  static GetDefaultObject(): DatasmithStaticMeshTemplate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithStaticMeshTemplate;
  static C(Other: UObject | any): DatasmithStaticMeshTemplate;
}
declare type ELuminFrameTimingHintT =
  | "Unspecified"
  | "Maximum"
  | "FPS_60"
  | "FPS_120"
  | "ELuminFrameTimingHint_MAX";
declare var ELuminFrameTimingHint: {
  Unspecified: "Unspecified",
  Maximum: "Maximum",
  FPS_60: "FPS_60",
  FPS_120: "FPS_120",
  ELuminFrameTimingHint_MAX: "ELuminFrameTimingHint_MAX"
};
declare type ELuminPrivilegeT =
  | "Invalid"
  | "AudioRecognizer"
  | "BatteryInfo"
  | "CameraCapture"
  | "WorldReconstruction"
  | "InAppPurchase"
  | "AudioCaptureMic"
  | "DrmCertificates"
  | "Occlusion"
  | "LowLatencyLightwear"
  | "Internet"
  | "IdentityRead"
  | "BackgroundDownload"
  | "BackgroundUpload"
  | "MediaDrm"
  | "Media"
  | "MediaMetadata"
  | "PowerInfo"
  | "LocalAreaNetwork"
  | "VoiceInput"
  | "Documents"
  | "ConnectBackgroundMusicService"
  | "RegisterBackgroundMusicService"
  | "PwFoundObjRead"
  | "NormalNotificationsUsage"
  | "MusicService"
  | "ControllerPose"
  | "ScreensProvider"
  | "GesturesSubscribe"
  | "GesturesConfig"
  | "ELuminPrivilege_MAX";
declare var ELuminPrivilege: {
  Invalid: "Invalid",
  AudioRecognizer: "AudioRecognizer",
  BatteryInfo: "BatteryInfo",
  CameraCapture: "CameraCapture",
  WorldReconstruction: "WorldReconstruction",
  InAppPurchase: "InAppPurchase",
  AudioCaptureMic: "AudioCaptureMic",
  DrmCertificates: "DrmCertificates",
  Occlusion: "Occlusion",
  LowLatencyLightwear: "LowLatencyLightwear",
  Internet: "Internet",
  IdentityRead: "IdentityRead",
  BackgroundDownload: "BackgroundDownload",
  BackgroundUpload: "BackgroundUpload",
  MediaDrm: "MediaDrm",
  Media: "Media",
  MediaMetadata: "MediaMetadata",
  PowerInfo: "PowerInfo",
  LocalAreaNetwork: "LocalAreaNetwork",
  VoiceInput: "VoiceInput",
  Documents: "Documents",
  ConnectBackgroundMusicService: "ConnectBackgroundMusicService",
  RegisterBackgroundMusicService: "RegisterBackgroundMusicService",
  PwFoundObjRead: "PwFoundObjRead",
  NormalNotificationsUsage: "NormalNotificationsUsage",
  MusicService: "MusicService",
  ControllerPose: "ControllerPose",
  ScreensProvider: "ScreensProvider",
  GesturesSubscribe: "GesturesSubscribe",
  GesturesConfig: "GesturesConfig",
  ELuminPrivilege_MAX: "ELuminPrivilege_MAX"
};
declare class LuminRuntimeSettings mixins UObject {
  PackageName: string;
  ApplicationDisplayName: string;
  bIsScreensApp: boolean;
  FrameTimingHint: ELuminFrameTimingHintT;
  bProtectedContent: boolean;
  bUseMobileRendering: boolean;
  bUseVulkan: boolean;
  bBuildWithNvTegraGfxDebugger: boolean;
  Certificate: FilePath;
  IconModelPath: DirectoryPath;
  IconPortalPath: DirectoryPath;
  VersionCode: number;
  MinimumAPILevel: number;
  AppPrivileges: ELuminPrivilegeT[];
  ExtraApplicationNodes: string[];
  ExtraComponentNodes: string[];
  SpatializationPlugin: string;
  ReverbPlugin: string;
  OcclusionPlugin: string;
  bRemoveDebugInfo: boolean;
  static Load(ResourceName: string): LuminRuntimeSettings;
  static Find(Outer: UObject, ResourceName: string): LuminRuntimeSettings;
  static GetDefaultObject(): LuminRuntimeSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LuminRuntimeSettings;
  static C(Other: UObject | any): LuminRuntimeSettings;
}
declare class MagicLeapSecureStorage mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MagicLeapSecureStorage;
  static Find(Outer: UObject, ResourceName: string): MagicLeapSecureStorage;
  static GetDefaultObject(): MagicLeapSecureStorage;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapSecureStorage;
  static PutSecureVector(Key: string, DataToStore: Vector): boolean;
  static PutSecureTransform(Key: string, DataToStore: Transform): boolean;
  static PutSecureString(Key: string, DataToStore: string): boolean;
  static PutSecureRotator(Key: string, DataToStore: Rotator): boolean;
  static PutSecureInt(Key: string, DataToStore: number): boolean;
  static PutSecureFloat(Key: string, DataToStore: number): boolean;
  static PutSecureByte(Key: string, DataToStore: number): boolean;
  static PutSecureBool(Key: string, DataToStore: boolean): boolean;
  static GetSecureVector(
    Key: string,
    DataToRetrieve?: Vector
  ): {
    DataToRetrieve: Vector,
    $: boolean
  };
  static GetSecureTransform(
    Key: string,
    DataToRetrieve?: Transform
  ): {
    DataToRetrieve: Transform,
    $: boolean
  };
  static GetSecureString(
    Key: string,
    DataToRetrieve?: string
  ): {
    DataToRetrieve: string,
    $: boolean
  };
  static GetSecureRotator(
    Key: string,
    DataToRetrieve?: Rotator
  ): {
    DataToRetrieve: Rotator,
    $: boolean
  };
  static GetSecureInt(
    Key: string,
    DataToRetrieve?: number
  ): {
    DataToRetrieve: number,
    $: boolean
  };
  static GetSecureFloat(
    Key: string,
    DataToRetrieve?: number
  ): {
    DataToRetrieve: number,
    $: boolean
  };
  static GetSecureByte(
    Key: string,
    DataToRetrieve?: number
  ): {
    DataToRetrieve: number,
    $: boolean
  };
  static GetSecureBool(
    Key: string,
    DataToRetrieve?: boolean
  ): {
    DataToRetrieve: boolean,
    $: boolean
  };
  static DeleteSecureData(Key: string): boolean;
  static C(Other: UObject | any): MagicLeapSecureStorage;
}
declare class KismetProceduralMeshLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): KismetProceduralMeshLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): KismetProceduralMeshLibrary;
  static GetDefaultObject(): KismetProceduralMeshLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): KismetProceduralMeshLibrary;
  static SliceProceduralMesh(
    InProcMesh: ProceduralMeshComponent,
    PlanePosition: Vector,
    PlaneNormal: Vector,
    bCreateOtherHalf: boolean,
    OutOtherHalfProcMesh?: ProceduralMeshComponent,
    CapOption?: EProcMeshSliceCapOptionT,
    CapMaterial?: MaterialInterface
  ): {
    OutOtherHalfProcMesh: ProceduralMeshComponent
  };
  static GetSectionFromStaticMesh(
    InMesh: StaticMesh,
    LODIndex: number,
    SectionIndex: number,
    Vertices?: Vector[],
    Triangles?: number[],
    Normals?: Vector[],
    UVs?: Vector2D[],
    Tangents?: ProcMeshTangent[]
  ): {
    Vertices: Vector[],
    Triangles: number[],
    Normals: Vector[],
    UVs: Vector2D[],
    Tangents: ProcMeshTangent[]
  };
  static GetSectionFromProceduralMesh(
    InProcMesh: ProceduralMeshComponent,
    SectionIndex: number,
    Vertices?: Vector[],
    Triangles?: number[],
    Normals?: Vector[],
    UVs?: Vector2D[],
    Tangents?: ProcMeshTangent[]
  ): {
    Vertices: Vector[],
    Triangles: number[],
    Normals: Vector[],
    UVs: Vector2D[],
    Tangents: ProcMeshTangent[]
  };
  static GenerateBoxMesh(
    BoxRadius: Vector,
    Vertices?: Vector[],
    Triangles?: number[],
    Normals?: Vector[],
    UVs?: Vector2D[],
    Tangents?: ProcMeshTangent[]
  ): {
    Vertices: Vector[],
    Triangles: number[],
    Normals: Vector[],
    UVs: Vector2D[],
    Tangents: ProcMeshTangent[]
  };
  static CreateGridMeshWelded(
    NumX: number,
    NumY: number,
    Triangles?: number[],
    Vertices?: Vector[],
    UVs?: Vector2D[],
    GridSpacing?: number
  ): {
    Triangles: number[],
    Vertices: Vector[],
    UVs: Vector2D[]
  };
  static CreateGridMeshTriangles(
    NumX: number,
    NumY: number,
    bWinding: boolean,
    Triangles?: number[]
  ): {
    Triangles: number[]
  };
  static CreateGridMeshSplit(
    NumX: number,
    NumY: number,
    Triangles?: number[],
    Vertices?: Vector[],
    UVs?: Vector2D[],
    UV1s?: Vector2D[],
    GridSpacing?: number
  ): {
    Triangles: number[],
    Vertices: Vector[],
    UVs: Vector2D[],
    UV1s: Vector2D[]
  };
  static CopyProceduralMeshFromStaticMeshComponent(
    StaticMeshComponent: StaticMeshComponent,
    LODIndex: number,
    ProcMeshComponent: ProceduralMeshComponent,
    bCreateCollision: boolean
  ): void;
  static ConvertQuadToTriangles(
    Triangles?: number[],
    Vert0?: number,
    Vert1?: number,
    Vert2?: number,
    Vert3?: number
  ): {
    Triangles: number[]
  };
  static CalculateTangentsForMesh(
    Vertices: Vector[],
    Triangles: number[],
    UVs: Vector2D[],
    Normals?: Vector[],
    Tangents?: ProcMeshTangent[]
  ): {
    Normals: Vector[],
    Tangents: ProcMeshTangent[]
  };
  static C(Other: UObject | any): KismetProceduralMeshLibrary;
}
declare class CameraCaptureComponent mixins ActorComponent {
  CaptureLogMessage: UnrealEngineMulticastDelegate<
    (LogMessage: string) => void
  >;
  static Load(ResourceName: string): CameraCaptureComponent;
  static Find(Outer: UObject, ResourceName: string): CameraCaptureComponent;
  static GetDefaultObject(): CameraCaptureComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CameraCaptureComponent;
  IsCapturing(): boolean;
  static C(Other: UObject | any): CameraCaptureComponent;
}
declare class ImageTrackerComponent mixins SceneComponent {
  OnSetImageTargetSucceeded: UnrealEngineMulticastDelegate<() => void>;
  OnSetImageTargetFailed: UnrealEngineMulticastDelegate<() => void>;
  OnImageTargetFound: UnrealEngineMulticastDelegate<() => void>;
  OnImageTargetLost: UnrealEngineMulticastDelegate<() => void>;
  OnImageTargetUnreliableTracking: UnrealEngineMulticastDelegate<
    (
      LastTrackedLocation: Vector,
      LastTrackedRotation: Rotator,
      NewUnreliableLocation: Vector,
      NewUnreliableRotation: Rotator
    ) => void
  >;
  TargetImageTexture: Texture2D;
  Name: string;
  LongerDimension: number;
  bIsStationary: boolean;
  bUseUnreliablePose: boolean;
  static Load(ResourceName: string): ImageTrackerComponent;
  static Find(Outer: UObject, ResourceName: string): ImageTrackerComponent;
  static GetDefaultObject(): ImageTrackerComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ImageTrackerComponent;
  SetTargetAsync(ImageTarget: Texture2D): boolean;
  static C(Other: UObject | any): ImageTrackerComponent;
}
declare class ImageTrackerFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): ImageTrackerFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ImageTrackerFunctionLibrary;
  static GetDefaultObject(): ImageTrackerFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ImageTrackerFunctionLibrary;
  static SetMaxSimultaneousTargets(MaxSimultaneousTargets: number): void;
  static IsImageTrackingEnabled(): boolean;
  static GetMaxSimultaneousTargets(): number;
  static EnableImageTracking(bEnable: boolean): void;
  static C(Other: UObject | any): ImageTrackerFunctionLibrary;
}
declare type PurchaseTypeT =
  | "Consumable"
  | "Nonconsumable"
  | "Undefined"
  | "PurchaseType_MAX";
declare var PurchaseType: {
  Consumable: "Consumable",
  Nonconsumable: "Nonconsumable",
  Undefined: "Undefined",
  PurchaseType_MAX: "PurchaseType_MAX"
};
declare class PurchaseItemDetails {
  Price: string;
  Name: string;
  Type: PurchaseTypeT;
  clone(): PurchaseItemDetails;
  static C(Other: UObject | any): PurchaseItemDetails;
}
declare class PurchaseConfirmation {
  PackageName: string;
  Type: PurchaseTypeT;
  clone(): PurchaseConfirmation;
  static C(Other: UObject | any): PurchaseConfirmation;
}
declare class InAppPurchaseComponent mixins ActorComponent {
  InAppPurchaseLogMessage: UnrealEngineMulticastDelegate<
    (LogMessage: string) => void
  >;
  GetItemsDetailsSuccess: UnrealEngineMulticastDelegate<
    (ItemsDetails: PurchaseItemDetails[]) => void
  >;
  GetItemsDetailsFailure: UnrealEngineMulticastDelegate<() => void>;
  PurchaseConfirmationSuccess: UnrealEngineMulticastDelegate<
    (PurchaseConfirmations: PurchaseConfirmation) => void
  >;
  PurchaseConfirmationFailure: UnrealEngineMulticastDelegate<() => void>;
  GetPurchaseHistorySuccess: UnrealEngineMulticastDelegate<
    (PurchaseHistory: PurchaseConfirmation[]) => void
  >;
  GetPurchaseHistoryFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): InAppPurchaseComponent;
  static Find(Outer: UObject, ResourceName: string): InAppPurchaseComponent;
  static GetDefaultObject(): InAppPurchaseComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): InAppPurchaseComponent;
  TryPurchaseItemAsync(ItemDetails: PurchaseItemDetails): boolean;
  TryGetPurchaseHistoryAsync(InNumPages: number): boolean;
  TryGetItemsDetailsAsync(ItemIDs: string[]): boolean;
  static C(Other: UObject | any): InAppPurchaseComponent;
}
declare class LightingTrackingComponent mixins ActorComponent {
  UseGlobalAmbience: boolean;
  UseColorTemp: boolean;
  static Load(ResourceName: string): LightingTrackingComponent;
  static Find(Outer: UObject, ResourceName: string): LightingTrackingComponent;
  static GetDefaultObject(): LightingTrackingComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightingTrackingComponent;
  static C(Other: UObject | any): LightingTrackingComponent;
}
declare class MagicLeapARPinFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MagicLeapARPinFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MagicLeapARPinFunctionLibrary;
  static GetDefaultObject(): MagicLeapARPinFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapARPinFunctionLibrary;
  static GetNumAvailableARPins(
    Count?: number
  ): {
    Count: number,
    $: EPassableWorldErrorT
  };
  static GetClosestARPin(
    SearchPoint: Vector,
    PinID?: Guid
  ): {
    PinID: Guid,
    $: EPassableWorldErrorT
  };
  static GetAvailableARPins(
    NumRequested: number,
    Pins?: Guid[]
  ): {
    Pins: Guid[],
    $: EPassableWorldErrorT
  };
  static GetARPinPositionAndOrientation(
    PinID: Guid,
    Position?: Vector,
    Orientation?: Rotator,
    PinFoundInEnvironment?: boolean
  ): {
    Position: Vector,
    Orientation: Rotator,
    PinFoundInEnvironment: boolean,
    $: boolean
  };
  static C(Other: UObject | any): MagicLeapARPinFunctionLibrary;
}
declare type EAutoPinTypeT =
  | "OnlyOnDataRestoration"
  | "Always"
  | "Never"
  | "EAutoPinType_MAX";
declare var EAutoPinType: {
  OnlyOnDataRestoration: "OnlyOnDataRestoration",
  Always: "Always",
  Never: "Never",
  EAutoPinType_MAX: "EAutoPinType_MAX"
};
declare class MagicLeapARPinComponent mixins SceneComponent {
  ObjectUID: string;
  AutoPinType: EAutoPinTypeT;
  bShouldPinActor: boolean;
  OnPersistentEntityPinned: UnrealEngineMulticastDelegate<
    (bRestoredOrSynced: boolean) => void
  >;
  PinnedCFUID: Guid;
  PinnedSceneComponent: SceneComponent;
  static Load(ResourceName: string): MagicLeapARPinComponent;
  static Find(Outer: UObject, ResourceName: string): MagicLeapARPinComponent;
  static GetDefaultObject(): MagicLeapARPinComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapARPinComponent;
  UnPin(): void;
  PinSceneComponent(ComponentToPin: SceneComponent): boolean;
  PinRestoredOrSynced(): boolean;
  PinActor(ActorToPin: Actor): boolean;
  IsPinned(): boolean;
  GetPinnedPinID(
    PinID?: Guid
  ): {
    PinID: Guid,
    $: boolean
  };
  static C(Other: UObject | any): MagicLeapARPinComponent;
}
declare type EHeadTrackingModeT =
  | "PositionAndOrientation"
  | "OrientationOnly"
  | "Unknown"
  | "EHeadTrackingMode_MAX";
declare var EHeadTrackingMode: {
  PositionAndOrientation: "PositionAndOrientation",
  OrientationOnly: "OrientationOnly",
  Unknown: "Unknown",
  EHeadTrackingMode_MAX: "EHeadTrackingMode_MAX"
};
declare type EHeadTrackingErrorT =
  | "None"
  | "NotEnoughFeatures"
  | "LowLight"
  | "Unknown"
  | "EHeadTrackingError_MAX";
declare var EHeadTrackingError: {
  None: "None",
  NotEnoughFeatures: "NotEnoughFeatures",
  LowLight: "LowLight",
  Unknown: "Unknown",
  EHeadTrackingError_MAX: "EHeadTrackingError_MAX"
};
declare class HeadTrackingState {
  Mode: EHeadTrackingModeT;
  Error: EHeadTrackingErrorT;
  Confidence: number;
  clone(): HeadTrackingState;
  static C(Other: UObject | any): HeadTrackingState;
  GetHeadTrackingState(): {
    State: HeadTrackingState,
    $: boolean
  };
  static GetHeadTrackingState(
    State?: HeadTrackingState
  ): {
    State: HeadTrackingState,
    $: boolean
  };
}
declare class MagicLeapHMDFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MagicLeapHMDFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MagicLeapHMDFunctionLibrary;
  static GetDefaultObject(): MagicLeapHMDFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapHMDFunctionLibrary;
  static SetFocusActor(InFocusActor: Actor): void;
  static SetBaseRotation(InBaseRotation: Rotator): void;
  static SetBasePosition(InBasePosition: Vector): void;
  static SetBaseOrientation(InBaseOrientation: Quat): void;
  static IsRunningOnMagicLeapHMD(): boolean;
  static GetMLSDKVersionRevision(): number;
  static GetMLSDKVersionMinor(): number;
  static GetMLSDKVersionMajor(): number;
  static GetMLSDKVersion(): string;
  static GetHeadTrackingState(
    State?: HeadTrackingState
  ): {
    State: HeadTrackingState,
    $: boolean
  };
  static C(Other: UObject | any): MagicLeapHMDFunctionLibrary;
}
declare type EMagicLeapPrivilegeT =
  | "Invalid"
  | "AudioRecognizer"
  | "BatteryInfo"
  | "CameraCapture"
  | "WorldReconstruction"
  | "InAppPurchase"
  | "AudioCaptureMic"
  | "DrmCertificates"
  | "Occlusion"
  | "LowLatencyLightwear"
  | "Internet"
  | "IdentityRead"
  | "BackgroundDownload"
  | "BackgroundUpload"
  | "MediaDrm"
  | "Media"
  | "MediaMetadata"
  | "PowerInfo"
  | "LocalAreaNetwork"
  | "VoiceInput"
  | "Documents"
  | "ConnectBackgroundMusicService"
  | "RegisterBackgroundMusicService"
  | "PwFoundObjRead"
  | "NormalNotificationsUsage"
  | "MusicService"
  | "ControllerPose"
  | "ScreensProvider"
  | "GesturesSubscribe"
  | "GesturesConfig"
  | "EMagicLeapPrivilege_MAX";
declare var EMagicLeapPrivilege: {
  Invalid: "Invalid",
  AudioRecognizer: "AudioRecognizer",
  BatteryInfo: "BatteryInfo",
  CameraCapture: "CameraCapture",
  WorldReconstruction: "WorldReconstruction",
  InAppPurchase: "InAppPurchase",
  AudioCaptureMic: "AudioCaptureMic",
  DrmCertificates: "DrmCertificates",
  Occlusion: "Occlusion",
  LowLatencyLightwear: "LowLatencyLightwear",
  Internet: "Internet",
  IdentityRead: "IdentityRead",
  BackgroundDownload: "BackgroundDownload",
  BackgroundUpload: "BackgroundUpload",
  MediaDrm: "MediaDrm",
  Media: "Media",
  MediaMetadata: "MediaMetadata",
  PowerInfo: "PowerInfo",
  LocalAreaNetwork: "LocalAreaNetwork",
  VoiceInput: "VoiceInput",
  Documents: "Documents",
  ConnectBackgroundMusicService: "ConnectBackgroundMusicService",
  RegisterBackgroundMusicService: "RegisterBackgroundMusicService",
  PwFoundObjRead: "PwFoundObjRead",
  NormalNotificationsUsage: "NormalNotificationsUsage",
  MusicService: "MusicService",
  ControllerPose: "ControllerPose",
  ScreensProvider: "ScreensProvider",
  GesturesSubscribe: "GesturesSubscribe",
  GesturesConfig: "GesturesConfig",
  EMagicLeapPrivilege_MAX: "EMagicLeapPrivilege_MAX"
};
declare class MagicLeapPrivileges mixins ActorComponent {
  static Load(ResourceName: string): MagicLeapPrivileges;
  static Find(Outer: UObject, ResourceName: string): MagicLeapPrivileges;
  static GetDefaultObject(): MagicLeapPrivileges;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapPrivileges;
  RequestPrivilege(Privilege: EMagicLeapPrivilegeT): boolean;
  CheckPrivilege(Privilege: EMagicLeapPrivilegeT): boolean;
  static C(Other: UObject | any): MagicLeapPrivileges;
}
declare class MagicLeapSettings mixins UObject {
  bEnableZI: boolean;
  bUseVulkanForZI: boolean;
  static Load(ResourceName: string): MagicLeapSettings;
  static Find(Outer: UObject, ResourceName: string): MagicLeapSettings;
  static GetDefaultObject(): MagicLeapSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapSettings;
  static C(Other: UObject | any): MagicLeapSettings;
}
declare type EMeshStateT =
  | "New"
  | "Updated"
  | "Deleted"
  | "Unchanged"
  | "EMeshState_MAX";
declare var EMeshState: {
  New: "New",
  Updated: "Updated",
  Deleted: "Deleted",
  Unchanged: "Unchanged",
  EMeshState_MAX: "EMeshState_MAX"
};
declare class MeshBlockInfo {
  BlockID: Guid;
  BlockPosition: Vector;
  BlockOrientation: Rotator;
  BlockDimensions: Vector;
  Timestamp: Timespan;
  BlockState: EMeshStateT;
  clone(): MeshBlockInfo;
  static C(Other: UObject | any): MeshBlockInfo;
}
declare class MLTrackingMeshInfo {
  Timestamp: Timespan;
  BlockData: MeshBlockInfo[];
  clone(): MLTrackingMeshInfo;
  static C(Other: UObject | any): MLTrackingMeshInfo;
}
declare type EMeshLODT = "Minimum" | "Medium" | "Maximum" | "EMeshLOD_MAX";
declare var EMeshLOD: {
  Minimum: "Minimum",
  Medium: "Medium",
  Maximum: "Maximum",
  EMeshLOD_MAX: "EMeshLOD_MAX"
};
declare class MeshBlockRequest {
  BlockID: Guid;
  LevelOfDetail: EMeshLODT;
  clone(): MeshBlockRequest;
  static C(Other: UObject | any): MeshBlockRequest;
}
declare class MeshBlockSelectorInterface mixins Interface {
  static Load(ResourceName: string): MeshBlockSelectorInterface;
  static Find(Outer: UObject, ResourceName: string): MeshBlockSelectorInterface;
  static GetDefaultObject(): MeshBlockSelectorInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshBlockSelectorInterface;
  SelectMeshBlocks(
    NewMeshInfo: MLTrackingMeshInfo,
    RequestedMesh?: MeshBlockRequest[]
  ): {
    RequestedMesh: MeshBlockRequest[]
  };
  static C(Other: UObject | any): MeshBlockSelectorInterface;
}
declare type EMeshTypeT = "Triangles" | "PointCloud" | "EMeshType_MAX";
declare var EMeshType: {
  Triangles: "Triangles",
  PointCloud: "PointCloud",
  EMeshType_MAX: "EMeshType_MAX"
};
declare type EMLMeshVertexColorModeT =
  | "None"
  | "Confidence"
  | "Block"
  | "LOD"
  | "EMLMeshVertexColorMode_MAX";
declare var EMLMeshVertexColorMode: {
  None: "None",
  Confidence: "Confidence",
  Block: "Block",
  LOD: "LOD",
  EMLMeshVertexColorMode_MAX: "EMLMeshVertexColorMode_MAX"
};
declare class MeshTrackerComponent mixins SceneComponent {
  OnMeshTrackerUpdated: UnrealEngineMulticastDelegate<
    (
      ID: Guid,
      Vertices: Vector[],
      Triangles: number[],
      Normals: Vector[],
      Confidence: number[]
    ) => void
  >;
  ScanWorld: boolean;
  MeshType: EMeshTypeT;
  BoundingVolume: BoxComponent;
  LevelOfDetail: EMeshLODT;
  PerimeterOfGapsToFill: number;
  Planarize: boolean;
  DisconnectedSectionArea: number;
  RequestNormals: boolean;
  RequestVertexConfidence: boolean;
  VertexColorMode: EMLMeshVertexColorModeT;
  BlockVertexColors: Color[];
  VertexColorFromConfidenceZero: LinearColor;
  VertexColorFromConfidenceOne: LinearColor;
  RemoveOverlappingTriangles: boolean;
  MRMesh: MRMeshComponent;
  static Load(ResourceName: string): MeshTrackerComponent;
  static Find(Outer: UObject, ResourceName: string): MeshTrackerComponent;
  static GetDefaultObject(): MeshTrackerComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshTrackerComponent;
  SelectMeshBlocks(
    NewMeshInfo: MLTrackingMeshInfo,
    RequestedMesh?: MeshBlockRequest[]
  ): {
    RequestedMesh: MeshBlockRequest[]
  };
  DisconnectMRMesh(InMRMeshPtr: MRMeshComponent): void;
  DisconnectBlockSelector(): void;
  ConnectMRMesh(InMRMeshPtr: MRMeshComponent): void;
  static C(Other: UObject | any): MeshTrackerComponent;
}
declare class PlanesComponent mixins SceneComponent {
  QueryFlags: EPlaneQueryFlagsT[];
  SearchVolume: BoxComponent;
  MaxResults: number;
  MinHolePerimeter: number;
  MinPlaneArea: number;
  IgnoreBoundingVolume: boolean;
  static Load(ResourceName: string): PlanesComponent;
  static Find(Outer: UObject, ResourceName: string): PlanesComponent;
  static GetDefaultObject(): PlanesComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlanesComponent;
  static C(Other: UObject | any): PlanesComponent;
}
declare class RaycastComponent mixins ActorComponent {
  static Load(ResourceName: string): RaycastComponent;
  static Find(Outer: UObject, ResourceName: string): RaycastComponent;
  static GetDefaultObject(): RaycastComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): RaycastComponent;
  static C(Other: UObject | any): RaycastComponent;
}
declare class SteamVRChaperoneComponent mixins ActorComponent {
  OnLeaveBounds: UnrealEngineMulticastDelegate<() => void>;
  OnReturnToBounds: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): SteamVRChaperoneComponent;
  static Find(Outer: UObject, ResourceName: string): SteamVRChaperoneComponent;
  static GetDefaultObject(): SteamVRChaperoneComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SteamVRChaperoneComponent;
  GetBounds(): Vector[];
  static C(Other: UObject | any): SteamVRChaperoneComponent;
}
declare type ESteamVRTrackedDeviceTypeT =
  | "Controller"
  | "TrackingReference"
  | "Other"
  | "Invalid"
  | "ESteamVRTrackedDeviceType_MAX";
declare var ESteamVRTrackedDeviceType: {
  Controller: "Controller",
  TrackingReference: "TrackingReference",
  Other: "Other",
  Invalid: "Invalid",
  ESteamVRTrackedDeviceType_MAX: "ESteamVRTrackedDeviceType_MAX"
};
declare class SteamVRFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): SteamVRFunctionLibrary;
  static Find(Outer: UObject, ResourceName: string): SteamVRFunctionLibrary;
  static GetDefaultObject(): SteamVRFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SteamVRFunctionLibrary;
  static GetValidTrackedDeviceIds(
    DeviceType: ESteamVRTrackedDeviceTypeT,
    OutTrackedDeviceIds?: number[]
  ): {
    OutTrackedDeviceIds: number[]
  };
  static GetTrackedDevicePositionAndOrientation(
    DeviceID: number,
    OutPosition?: Vector,
    OutOrientation?: Rotator
  ): {
    OutPosition: Vector,
    OutOrientation: Rotator,
    $: boolean
  };
  static GetHandPositionAndOrientation(
    ControllerIndex: number,
    Hand: EControllerHandT,
    OutPosition?: Vector,
    OutOrientation?: Rotator
  ): {
    OutPosition: Vector,
    OutOrientation: Rotator,
    $: boolean
  };
  static C(Other: UObject | any): SteamVRFunctionLibrary;
}
declare class NamedInterface {
  InterfaceName: string;
  InterfaceObject: UObject;
  clone(): NamedInterface;
  static C(Other: UObject | any): NamedInterface;
}
declare class NamedInterfaceDef {
  InterfaceName: string;
  InterfaceClassName: string;
  clone(): NamedInterfaceDef;
  static C(Other: UObject | any): NamedInterfaceDef;
}
declare class NamedInterfaces mixins UObject {
  NamedInterfaces: NamedInterface[];
  NamedInterfaceDefs: NamedInterfaceDef[];
  static Load(ResourceName: string): NamedInterfaces;
  static Find(Outer: UObject, ResourceName: string): NamedInterfaces;
  static GetDefaultObject(): NamedInterfaces;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NamedInterfaces;
  static C(Other: UObject | any): NamedInterfaces;
}
declare class TurnBasedMatchInterface mixins Interface {
  static Load(ResourceName: string): TurnBasedMatchInterface;
  static Find(Outer: UObject, ResourceName: string): TurnBasedMatchInterface;
  static GetDefaultObject(): TurnBasedMatchInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TurnBasedMatchInterface;
  OnMatchReceivedTurn(Match: string, bDidBecomeActive: boolean): void;
  OnMatchEnded(Match: string): void;
  static C(Other: UObject | any): TurnBasedMatchInterface;
}
declare class AchievementBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): AchievementBlueprintLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AchievementBlueprintLibrary;
  static GetDefaultObject(): AchievementBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AchievementBlueprintLibrary;
  static GetCachedAchievementProgress(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    AchievementID: string,
    bFoundID?: boolean,
    Progress?: number
  ): {
    bFoundID: boolean,
    Progress: number
  };
  static GetCachedAchievementDescription(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    AchievementID: string,
    bFoundID?: boolean,
    Title?: string,
    LockedDescription?: string,
    UnlockedDescription?: string,
    bHidden?: boolean
  ): {
    bFoundID: boolean,
    Title: string,
    LockedDescription: string,
    UnlockedDescription: string,
    bHidden: boolean
  };
  static C(Other: UObject | any): AchievementBlueprintLibrary;
}
declare class AchievementQueryCallbackProxy
  mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): AchievementQueryCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AchievementQueryCallbackProxy;
  static GetDefaultObject(): AchievementQueryCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AchievementQueryCallbackProxy;
  static CacheAchievements(
    WorldContextObject: UObject,
    PlayerController: PlayerController
  ): AchievementQueryCallbackProxy;
  static CacheAchievementDescriptions(
    WorldContextObject: UObject,
    PlayerController: PlayerController
  ): AchievementQueryCallbackProxy;
  static C(Other: UObject | any): AchievementQueryCallbackProxy;
}
declare class AchievementWriteCallbackProxy
  mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<
    (
      WrittenAchievementName: string,
      WrittenProgress: number,
      WrittenUserTag: number
    ) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (
      WrittenAchievementName: string,
      WrittenProgress: number,
      WrittenUserTag: number
    ) => void
  >;
  static Load(ResourceName: string): AchievementWriteCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AchievementWriteCallbackProxy;
  static GetDefaultObject(): AchievementWriteCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AchievementWriteCallbackProxy;
  static WriteAchievementProgress(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    AchievementName: string,
    Progress: number,
    UserTag: number
  ): AchievementWriteCallbackProxy;
  static C(Other: UObject | any): AchievementWriteCallbackProxy;
}
declare class ConnectionCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
  OnFailure: UnrealEngineMulticastDelegate<(ErrorCode: number) => void>;
  static Load(ResourceName: string): ConnectionCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): ConnectionCallbackProxy;
  static GetDefaultObject(): ConnectionCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ConnectionCallbackProxy;
  static ConnectToService(
    WorldContextObject: UObject,
    PlayerController: PlayerController
  ): ConnectionCallbackProxy;
  static C(Other: UObject | any): ConnectionCallbackProxy;
}
declare class CreateSessionCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): CreateSessionCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): CreateSessionCallbackProxy;
  static GetDefaultObject(): CreateSessionCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CreateSessionCallbackProxy;
  static CreateSession(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    PublicConnections: number,
    bUseLAN: boolean
  ): CreateSessionCallbackProxy;
  static C(Other: UObject | any): CreateSessionCallbackProxy;
}
declare class DestroySessionCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): DestroySessionCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DestroySessionCallbackProxy;
  static GetDefaultObject(): DestroySessionCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DestroySessionCallbackProxy;
  static DestroySession(
    WorldContextObject: UObject,
    PlayerController: PlayerController
  ): DestroySessionCallbackProxy;
  static C(Other: UObject | any): DestroySessionCallbackProxy;
}
declare class EndMatchCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): EndMatchCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): EndMatchCallbackProxy;
  static GetDefaultObject(): EndMatchCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EndMatchCallbackProxy;
  static C(Other: UObject | any): EndMatchCallbackProxy;
}
declare class EndTurnCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): EndTurnCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): EndTurnCallbackProxy;
  static GetDefaultObject(): EndTurnCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EndTurnCallbackProxy;
  static C(Other: UObject | any): EndTurnCallbackProxy;
}
declare class BlueprintSessionResult {
  clone(): BlueprintSessionResult;
  static C(Other: UObject | any): BlueprintSessionResult;
}
declare class FindSessionsCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<
    (Results: BlueprintSessionResult[]) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (Results: BlueprintSessionResult[]) => void
  >;
  static Load(ResourceName: string): FindSessionsCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): FindSessionsCallbackProxy;
  static GetDefaultObject(): FindSessionsCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FindSessionsCallbackProxy;
  static GetServerName(Result: BlueprintSessionResult): string;
  static GetPingInMs(Result: BlueprintSessionResult): number;
  static GetMaxPlayers(Result: BlueprintSessionResult): number;
  static GetCurrentPlayers(Result: BlueprintSessionResult): number;
  static FindSessions(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    MaxResults: number,
    bUseLAN: boolean
  ): FindSessionsCallbackProxy;
  static C(Other: UObject | any): FindSessionsCallbackProxy;
}
declare class FindTurnBasedMatchCallbackProxy
  mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
  OnFailure: UnrealEngineMulticastDelegate<(MatchID: string) => void>;
  static Load(ResourceName: string): FindTurnBasedMatchCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): FindTurnBasedMatchCallbackProxy;
  static GetDefaultObject(): FindTurnBasedMatchCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FindTurnBasedMatchCallbackProxy;
  static C(Other: UObject | any): FindTurnBasedMatchCallbackProxy;
}
declare type EInAppPurchaseStateT =
  | "Unknown"
  | "Success"
  | "Failed"
  | "Cancelled"
  | "Invalid"
  | "NotAllowed"
  | "Restored"
  | "AlreadyOwned"
  | "EInAppPurchaseState_MAX";
declare var EInAppPurchaseState: {
  Unknown: "Unknown",
  Success: "Success",
  Failed: "Failed",
  Cancelled: "Cancelled",
  Invalid: "Invalid",
  NotAllowed: "NotAllowed",
  Restored: "Restored",
  AlreadyOwned: "AlreadyOwned",
  EInAppPurchaseState_MAX: "EInAppPurchaseState_MAX"
};
declare class InAppPurchaseProductInfo {
  Identifier: string;
  TransactionIdentifier: string;
  DisplayName: string;
  DisplayDescription: string;
  DisplayPrice: string;
  RawPrice: number;
  CurrencyCode: string;
  CurrencySymbol: string;
  DecimalSeparator: string;
  GroupingSeparator: string;
  ReceiptData: string;
  clone(): InAppPurchaseProductInfo;
  static C(Other: UObject | any): InAppPurchaseProductInfo;
}
declare class InAppPurchaseProductRequest {
  ProductIdentifier: string;
  bIsConsumable: boolean;
  clone(): InAppPurchaseProductRequest;
  static C(Other: UObject | any): InAppPurchaseProductRequest;
}
declare class InAppPurchaseCallbackProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<
    (
      CompletionStatus: EInAppPurchaseStateT,
      InAppPurchaseInformation: InAppPurchaseProductInfo
    ) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (
      CompletionStatus: EInAppPurchaseStateT,
      InAppPurchaseInformation: InAppPurchaseProductInfo
    ) => void
  >;
  static Load(ResourceName: string): InAppPurchaseCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): InAppPurchaseCallbackProxy;
  static GetDefaultObject(): InAppPurchaseCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): InAppPurchaseCallbackProxy;
  static CreateProxyObjectForInAppPurchase(
    PlayerController: PlayerController,
    ProductRequest: InAppPurchaseProductRequest
  ): InAppPurchaseCallbackProxy;
  static C(Other: UObject | any): InAppPurchaseCallbackProxy;
}
declare class InAppPurchaseQueryCallbackProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<
    (InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (InAppPurchaseInformation: InAppPurchaseProductInfo[]) => void
  >;
  static Load(ResourceName: string): InAppPurchaseQueryCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): InAppPurchaseQueryCallbackProxy;
  static GetDefaultObject(): InAppPurchaseQueryCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): InAppPurchaseQueryCallbackProxy;
  static CreateProxyObjectForInAppPurchaseQuery(
    PlayerController: PlayerController,
    ProductIdentifiers: string[]
  ): InAppPurchaseQueryCallbackProxy;
  static C(Other: UObject | any): InAppPurchaseQueryCallbackProxy;
}
declare class InAppPurchaseRestoreInfo {
  Identifier: string;
  ReceiptData: string;
  TransactionIdentifier: string;
  clone(): InAppPurchaseRestoreInfo;
  static C(Other: UObject | any): InAppPurchaseRestoreInfo;
}
declare class InAppPurchaseRestoreCallbackProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<
    (
      CompletionStatus: EInAppPurchaseStateT,
      InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]
    ) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (
      CompletionStatus: EInAppPurchaseStateT,
      InAppRestorePurchaseInformation: InAppPurchaseRestoreInfo[]
    ) => void
  >;
  static Load(ResourceName: string): InAppPurchaseRestoreCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): InAppPurchaseRestoreCallbackProxy;
  static GetDefaultObject(): InAppPurchaseRestoreCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): InAppPurchaseRestoreCallbackProxy;
  static CreateProxyObjectForInAppPurchaseRestore(
    ConsumableProductFlags: InAppPurchaseProductRequest[],
    PlayerController: PlayerController
  ): InAppPurchaseRestoreCallbackProxy;
  static C(Other: UObject | any): InAppPurchaseRestoreCallbackProxy;
}
declare class IpConnection mixins NetConnection {
  static Load(ResourceName: string): IpConnection;
  static Find(Outer: UObject, ResourceName: string): IpConnection;
  static GetDefaultObject(): IpConnection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): IpConnection;
  static C(Other: UObject | any): IpConnection;
}
declare class IpNetDriver mixins NetDriver {
  LogPortUnreach: boolean;
  AllowPlayerPortUnreach: boolean;
  MaxPortCountToTry: any;
  ServerDesiredSocketReceiveBufferBytes: any;
  ServerDesiredSocketSendBufferBytes: any;
  ClientDesiredSocketReceiveBufferBytes: any;
  ClientDesiredSocketSendBufferBytes: any;
  static Load(ResourceName: string): IpNetDriver;
  static Find(Outer: UObject, ResourceName: string): IpNetDriver;
  static GetDefaultObject(): IpNetDriver;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): IpNetDriver;
  static C(Other: UObject | any): IpNetDriver;
}
declare class JoinSessionCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): JoinSessionCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): JoinSessionCallbackProxy;
  static GetDefaultObject(): JoinSessionCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JoinSessionCallbackProxy;
  static JoinSession(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    SearchResult: BlueprintSessionResult
  ): JoinSessionCallbackProxy;
  static C(Other: UObject | any): JoinSessionCallbackProxy;
}
declare class LeaderboardBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): LeaderboardBlueprintLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LeaderboardBlueprintLibrary;
  static GetDefaultObject(): LeaderboardBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LeaderboardBlueprintLibrary;
  static WriteLeaderboardInteger(
    PlayerController: PlayerController,
    StatName: string,
    StatValue: number
  ): boolean;
  static C(Other: UObject | any): LeaderboardBlueprintLibrary;
}
declare class LeaderboardFlushCallbackProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
  OnFailure: UnrealEngineMulticastDelegate<(SessionName: string) => void>;
  static Load(ResourceName: string): LeaderboardFlushCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LeaderboardFlushCallbackProxy;
  static GetDefaultObject(): LeaderboardFlushCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LeaderboardFlushCallbackProxy;
  static CreateProxyObjectForFlush(
    PlayerController: PlayerController,
    SessionName: string
  ): LeaderboardFlushCallbackProxy;
  static C(Other: UObject | any): LeaderboardFlushCallbackProxy;
}
declare class LeaderboardQueryCallbackProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
  OnFailure: UnrealEngineMulticastDelegate<(LeaderboardValue: number) => void>;
  static Load(ResourceName: string): LeaderboardQueryCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LeaderboardQueryCallbackProxy;
  static GetDefaultObject(): LeaderboardQueryCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LeaderboardQueryCallbackProxy;
  static CreateProxyObjectForIntQuery(
    PlayerController: PlayerController,
    StatName: string
  ): LeaderboardQueryCallbackProxy;
  static C(Other: UObject | any): LeaderboardQueryCallbackProxy;
}
declare class LogoutCallbackProxy mixins BlueprintAsyncActionBase {
  OnSuccess: UnrealEngineMulticastDelegate<
    (PlayerController: PlayerController) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (PlayerController: PlayerController) => void
  >;
  static Load(ResourceName: string): LogoutCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): LogoutCallbackProxy;
  static GetDefaultObject(): LogoutCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LogoutCallbackProxy;
  static Logout(
    WorldContextObject: UObject,
    PlayerController: PlayerController
  ): LogoutCallbackProxy;
  static C(Other: UObject | any): LogoutCallbackProxy;
}
declare class OnlineBeacon mixins Actor {
  BeaconConnectionInitialTimeout: number;
  BeaconConnectionTimeout: number;
  NetDriver: NetDriver;
  static GetDefaultObject(): OnlineBeacon;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineBeacon;
  static C(Other: UObject | any): OnlineBeacon;
}
declare class OnlineBeaconHostObject mixins Actor {
  BeaconTypeName: string;
  ClientBeaconActorClass: UnrealEngineClassT;
  ClientActors: OnlineBeaconClient[];
  static GetDefaultObject(): OnlineBeaconHostObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineBeaconHostObject;
  static C(Other: UObject | any): OnlineBeaconHostObject;
}
declare type EBeaconConnectionStateT =
  | "Invalid"
  | "Closed"
  | "Pending"
  | "Open"
  | "EBeaconConnectionState_MAX";
declare var EBeaconConnectionState: {
  Invalid: "Invalid",
  Closed: "Closed",
  Pending: "Pending",
  Open: "Open",
  EBeaconConnectionState_MAX: "EBeaconConnectionState_MAX"
};
declare class OnlineBeaconClient mixins OnlineBeacon {
  BeaconOwner: OnlineBeaconHostObject;
  BeaconConnection: NetConnection;
  ConnectionState: EBeaconConnectionStateT;
  static GetDefaultObject(): OnlineBeaconClient;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineBeaconClient;
  ClientOnConnected(): void;
  static C(Other: UObject | any): OnlineBeaconClient;
}
declare class OnlineBeaconHost mixins OnlineBeacon {
  ListenPort: number;
  ClientActors: OnlineBeaconClient[];
  static GetDefaultObject(): OnlineBeaconHost;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineBeaconHost;
  static C(Other: UObject | any): OnlineBeaconHost;
}
declare class OnlineEngineInterfaceImpl mixins OnlineEngineInterface {
  VoiceSubsystemNameOverride: string;
  static Load(ResourceName: string): OnlineEngineInterfaceImpl;
  static Find(Outer: UObject, ResourceName: string): OnlineEngineInterfaceImpl;
  static GetDefaultObject(): OnlineEngineInterfaceImpl;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineEngineInterfaceImpl;
  static C(Other: UObject | any): OnlineEngineInterfaceImpl;
}
declare class PIELoginSettingsInternal {
  ID: string;
  Token: string;
  Type: string;
  TokenBytes: number[];
  clone(): PIELoginSettingsInternal;
  static C(Other: UObject | any): PIELoginSettingsInternal;
}
declare class OnlinePIESettings mixins DeveloperSettings {
  bOnlinePIEEnabled: boolean;
  Logins: PIELoginSettingsInternal[];
  static Load(ResourceName: string): OnlinePIESettings;
  static Find(Outer: UObject, ResourceName: string): OnlinePIESettings;
  static GetDefaultObject(): OnlinePIESettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlinePIESettings;
  static C(Other: UObject | any): OnlinePIESettings;
}
declare class OnlineSessionClient mixins OnlineSession {
  bIsFromInvite: boolean;
  bHandlingDisconnect: boolean;
  static Load(ResourceName: string): OnlineSessionClient;
  static Find(Outer: UObject, ResourceName: string): OnlineSessionClient;
  static GetDefaultObject(): OnlineSessionClient;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): OnlineSessionClient;
  static C(Other: UObject | any): OnlineSessionClient;
}
declare class PlayerReservation {
  UniqueId: UniqueNetIdRepl;
  ValidationStr: string;
  Platform: string;
  bAllowCrossplay: boolean;
  ElapsedTime: number;
  clone(): PlayerReservation;
  static C(Other: UObject | any): PlayerReservation;
}
declare class PartyReservation {
  TeamNum: number;
  PartyLeader: UniqueNetIdRepl;
  PartyMembers: PlayerReservation[];
  clone(): PartyReservation;
  static C(Other: UObject | any): PartyReservation;
}
declare type EClientRequestTypeT =
  | "NonePending"
  | "ExistingSessionReservation"
  | "ReservationUpdate"
  | "EmptyServerReservation"
  | "Reconnect"
  | "Abandon"
  | "EClientRequestType_MAX";
declare var EClientRequestType: {
  NonePending: "NonePending",
  ExistingSessionReservation: "ExistingSessionReservation",
  ReservationUpdate: "ReservationUpdate",
  EmptyServerReservation: "EmptyServerReservation",
  Reconnect: "Reconnect",
  Abandon: "Abandon",
  EClientRequestType_MAX: "EClientRequestType_MAX"
};
declare type EPartyReservationResultT =
  | "NoResult"
  | "RequestPending"
  | "GeneralError"
  | "PartyLimitReached"
  | "IncorrectPlayerCount"
  | "RequestTimedOut"
  | "ReservationDuplicate"
  | "ReservationNotFound"
  | "ReservationAccepted"
  | "ReservationDenied"
  | "ReservationDenied_CrossPlayRestriction"
  | "ReservationDenied_Banned"
  | "ReservationRequestCanceled"
  | "ReservationInvalid"
  | "BadSessionId"
  | "ReservationDenied_ContainsExistingPlayers"
  | "EPartyReservationResult_MAX";
declare var EPartyReservationResult: {
  NoResult: "NoResult",
  RequestPending: "RequestPending",
  GeneralError: "GeneralError",
  PartyLimitReached: "PartyLimitReached",
  IncorrectPlayerCount: "IncorrectPlayerCount",
  RequestTimedOut: "RequestTimedOut",
  ReservationDuplicate: "ReservationDuplicate",
  ReservationNotFound: "ReservationNotFound",
  ReservationAccepted: "ReservationAccepted",
  ReservationDenied: "ReservationDenied",
  ReservationDenied_CrossPlayRestriction: "ReservationDenied_CrossPlayRestriction",
  ReservationDenied_Banned: "ReservationDenied_Banned",
  ReservationRequestCanceled: "ReservationRequestCanceled",
  ReservationInvalid: "ReservationInvalid",
  BadSessionId: "BadSessionId",
  ReservationDenied_ContainsExistingPlayers: "ReservationDenied_ContainsExistingPlayers",
  EPartyReservationResult_MAX: "EPartyReservationResult_MAX"
};
declare class PartyBeaconClient mixins OnlineBeaconClient {
  DestSessionId: string;
  PendingReservation: PartyReservation;
  RequestType: EClientRequestTypeT;
  bPendingReservationSent: boolean;
  bCancelReservation: boolean;
  static GetDefaultObject(): PartyBeaconClient;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PartyBeaconClient;
  ServerUpdateReservationRequest(
    SessionId: string,
    ReservationUpdate: PartyReservation
  ): void;
  ServerReservationRequest(
    SessionId: string,
    Reservation: PartyReservation
  ): void;
  ServerCancelReservationRequest(PartyLeader: UniqueNetIdRepl): void;
  ClientSendReservationUpdates(NumRemainingReservations: number): void;
  ClientSendReservationFull(): void;
  ClientReservationResponse(
    ReservationResponse: EPartyReservationResultT
  ): void;
  ClientCancelReservationResponse(
    ReservationResponse: EPartyReservationResultT
  ): void;
  static C(Other: UObject | any): PartyBeaconClient;
}
declare class PartyBeaconState mixins UObject {
  SessionName: string;
  NumConsumedReservations: number;
  MaxReservations: number;
  NumTeams: number;
  NumPlayersPerTeam: number;
  TeamAssignmentMethod: string;
  ReservedHostTeamNum: number;
  ForceTeamNum: number;
  bRestrictCrossConsole: boolean;
  Reservations: PartyReservation[];
  static Load(ResourceName: string): PartyBeaconState;
  static Find(Outer: UObject, ResourceName: string): PartyBeaconState;
  static GetDefaultObject(): PartyBeaconState;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PartyBeaconState;
  static C(Other: UObject | any): PartyBeaconState;
}
declare class PartyBeaconHost mixins OnlineBeaconHostObject {
  State: PartyBeaconState;
  bLogoutOnSessionTimeout: boolean;
  SessionTimeoutSecs: number;
  TravelSessionTimeoutSecs: number;
  static GetDefaultObject(): PartyBeaconHost;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PartyBeaconHost;
  static C(Other: UObject | any): PartyBeaconHost;
}
declare type EMPMatchOutcomeT =
  | "None"
  | "Quit"
  | "Won"
  | "Lost"
  | "Tied"
  | "TimeExpired"
  | "First"
  | "Second"
  | "Third"
  | "Fourth"
  | "EMPMatchOutcome_MAX";
declare var EMPMatchOutcome: {
  None: "None",
  Quit: "Quit",
  Won: "Won",
  Lost: "Lost",
  Tied: "Tied",
  TimeExpired: "TimeExpired",
  First: "First",
  Second: "Second",
  Third: "Third",
  Fourth: "Fourth",
  EMPMatchOutcome_MAX: "EMPMatchOutcome_MAX"
};
declare class QuitMatchCallbackProxy mixins OnlineBlueprintCallProxyBase {
  OnSuccess: UnrealEngineMulticastDelegate<() => void>;
  OnFailure: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): QuitMatchCallbackProxy;
  static Find(Outer: UObject, ResourceName: string): QuitMatchCallbackProxy;
  static GetDefaultObject(): QuitMatchCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): QuitMatchCallbackProxy;
  static QuitMatch(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    MatchID: string,
    Outcome: EMPMatchOutcomeT,
    TurnTimeoutInSeconds: number
  ): QuitMatchCallbackProxy;
  static C(Other: UObject | any): QuitMatchCallbackProxy;
}
declare class ShowLoginUICallbackProxy mixins BlueprintAsyncActionBase {
  OnSuccess: UnrealEngineMulticastDelegate<
    (PlayerController: PlayerController) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (PlayerController: PlayerController) => void
  >;
  static Load(ResourceName: string): ShowLoginUICallbackProxy;
  static Find(Outer: UObject, ResourceName: string): ShowLoginUICallbackProxy;
  static GetDefaultObject(): ShowLoginUICallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ShowLoginUICallbackProxy;
  static ShowExternalLoginUI(
    WorldContextObject: UObject,
    InPlayerController: PlayerController
  ): ShowLoginUICallbackProxy;
  static C(Other: UObject | any): ShowLoginUICallbackProxy;
}
declare class TestBeaconClient mixins OnlineBeaconClient {
  static GetDefaultObject(): TestBeaconClient;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TestBeaconClient;
  ServerPong(): void;
  ClientPing(): void;
  static C(Other: UObject | any): TestBeaconClient;
}
declare class TestBeaconHost mixins OnlineBeaconHostObject {
  static GetDefaultObject(): TestBeaconHost;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TestBeaconHost;
  static C(Other: UObject | any): TestBeaconHost;
}
declare class TurnBasedBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): TurnBasedBlueprintLibrary;
  static Find(Outer: UObject, ResourceName: string): TurnBasedBlueprintLibrary;
  static GetDefaultObject(): TurnBasedBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TurnBasedBlueprintLibrary;
  static RegisterTurnBasedMatchInterfaceObject(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    UObject: UObject
  ): void;
  static GetPlayerDisplayName(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    MatchID: string,
    PlayerIndex: number,
    PlayerDisplayName?: string
  ): {
    PlayerDisplayName: string
  };
  static GetMyPlayerIndex(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    MatchID: string,
    PlayerIndex?: number
  ): {
    PlayerIndex: number
  };
  static GetIsMyTurn(
    WorldContextObject: UObject,
    PlayerController: PlayerController,
    MatchID: string,
    bIsMyTurn?: boolean
  ): {
    bIsMyTurn: boolean
  };
  static C(Other: UObject | any): TurnBasedBlueprintLibrary;
}
declare class VoipListenerSynthComponent mixins SynthComponent {
  static Load(ResourceName: string): VoipListenerSynthComponent;
  static Find(Outer: UObject, ResourceName: string): VoipListenerSynthComponent;
  static GetDefaultObject(): VoipListenerSynthComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VoipListenerSynthComponent;
  IsIdling(): boolean;
  static C(Other: UObject | any): VoipListenerSynthComponent;
}
declare class K2Node_InAppPurchase mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_InAppPurchase;
  static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchase;
  static GetDefaultObject(): K2Node_InAppPurchase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_InAppPurchase;
  static C(Other: UObject | any): K2Node_InAppPurchase;
}
declare class K2Node_InAppPurchaseQuery mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_InAppPurchaseQuery;
  static Find(Outer: UObject, ResourceName: string): K2Node_InAppPurchaseQuery;
  static GetDefaultObject(): K2Node_InAppPurchaseQuery;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_InAppPurchaseQuery;
  static C(Other: UObject | any): K2Node_InAppPurchaseQuery;
}
declare class K2Node_InAppPurchaseRestore mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_InAppPurchaseRestore;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): K2Node_InAppPurchaseRestore;
  static GetDefaultObject(): K2Node_InAppPurchaseRestore;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_InAppPurchaseRestore;
  static C(Other: UObject | any): K2Node_InAppPurchaseRestore;
}
declare class K2Node_LatentOnlineCall mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_LatentOnlineCall;
  static Find(Outer: UObject, ResourceName: string): K2Node_LatentOnlineCall;
  static GetDefaultObject(): K2Node_LatentOnlineCall;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_LatentOnlineCall;
  static C(Other: UObject | any): K2Node_LatentOnlineCall;
}
declare class K2Node_LeaderboardFlush mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_LeaderboardFlush;
  static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardFlush;
  static GetDefaultObject(): K2Node_LeaderboardFlush;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_LeaderboardFlush;
  static C(Other: UObject | any): K2Node_LeaderboardFlush;
}
declare class K2Node_LeaderboardQuery mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_LeaderboardQuery;
  static Find(Outer: UObject, ResourceName: string): K2Node_LeaderboardQuery;
  static GetDefaultObject(): K2Node_LeaderboardQuery;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_LeaderboardQuery;
  static C(Other: UObject | any): K2Node_LeaderboardQuery;
}
declare class AIGraph mixins EdGraph {
  GraphVersion: number;
  static Load(ResourceName: string): AIGraph;
  static Find(Outer: UObject, ResourceName: string): AIGraph;
  static GetDefaultObject(): AIGraph;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AIGraph;
  static C(Other: UObject | any): AIGraph;
}
declare class GraphNodeClassData {
  AssetName: string;
  GeneratedClassPackage: string;
  ClassName: string;
  Category: string;
  clone(): GraphNodeClassData;
  static C(Other: UObject | any): GraphNodeClassData;
}
declare class AIGraphNode mixins EdGraphNode {
  ClassData: GraphNodeClassData;
  NodeInstance: UObject;
  ParentNode: AIGraphNode;
  SubNodes: AIGraphNode[];
  CopySubNodeIndex: number;
  bIsReadOnly: boolean;
  bIsSubNode: boolean;
  ErrorMessage: string;
  static Load(ResourceName: string): AIGraphNode;
  static Find(Outer: UObject, ResourceName: string): AIGraphNode;
  static GetDefaultObject(): AIGraphNode;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AIGraphNode;
  static C(Other: UObject | any): AIGraphNode;
}
declare class AIGraphSchema mixins EdGraphSchema {
  static Load(ResourceName: string): AIGraphSchema;
  static Find(Outer: UObject, ResourceName: string): AIGraphSchema;
  static GetDefaultObject(): AIGraphSchema;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AIGraphSchema;
  static C(Other: UObject | any): AIGraphSchema;
}
declare class K2Node_AIMoveTo mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_AIMoveTo;
  static Find(Outer: UObject, ResourceName: string): K2Node_AIMoveTo;
  static GetDefaultObject(): K2Node_AIMoveTo;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_AIMoveTo;
  static C(Other: UObject | any): K2Node_AIMoveTo;
}
declare class BehaviorTreeDecoratorGraph mixins EdGraph {
  static Load(ResourceName: string): BehaviorTreeDecoratorGraph;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeDecoratorGraph;
  static GetDefaultObject(): BehaviorTreeDecoratorGraph;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeDecoratorGraph;
  static C(Other: UObject | any): BehaviorTreeDecoratorGraph;
}
declare class BehaviorTreeDecoratorGraphNode mixins EdGraphNode {
  static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeDecoratorGraphNode;
  static GetDefaultObject(): BehaviorTreeDecoratorGraphNode;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeDecoratorGraphNode;
  static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode;
}
declare class BehaviorTreeDecoratorGraphNode_Decorator
  mixins BehaviorTreeDecoratorGraphNode {
  NodeInstance: UObject;
  ClassData: GraphNodeClassData;
  static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Decorator;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeDecoratorGraphNode_Decorator;
  static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Decorator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeDecoratorGraphNode_Decorator;
  static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode_Decorator;
}
declare type EDecoratorLogicModeT =
  | "Sink"
  | "And"
  | "Or"
  | "Not"
  | "EDecoratorLogicMode_MAX";
declare var EDecoratorLogicMode: {
  Sink: "Sink",
  And: "And",
  Or: "Or",
  Not: "Not",
  EDecoratorLogicMode_MAX: "EDecoratorLogicMode_MAX"
};
declare class BehaviorTreeDecoratorGraphNode_Logic
  mixins BehaviorTreeDecoratorGraphNode {
  LogicMode: EDecoratorLogicModeT;
  static Load(ResourceName: string): BehaviorTreeDecoratorGraphNode_Logic;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeDecoratorGraphNode_Logic;
  static GetDefaultObject(): BehaviorTreeDecoratorGraphNode_Logic;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeDecoratorGraphNode_Logic;
  static C(Other: UObject | any): BehaviorTreeDecoratorGraphNode_Logic;
}
declare class BehaviorTreeEditorTypes mixins UObject {
  static Load(ResourceName: string): BehaviorTreeEditorTypes;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeEditorTypes;
  static GetDefaultObject(): BehaviorTreeEditorTypes;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeEditorTypes;
  static C(Other: UObject | any): BehaviorTreeEditorTypes;
}
declare class BehaviorTreeFactory mixins Factory {
  static Load(ResourceName: string): BehaviorTreeFactory;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeFactory;
  static GetDefaultObject(): BehaviorTreeFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeFactory;
  static C(Other: UObject | any): BehaviorTreeFactory;
}
declare class BehaviorTreeGraph mixins AIGraph {
  ModCounter: number;
  bIsUsingModCounter: boolean;
  static Load(ResourceName: string): BehaviorTreeGraph;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraph;
  static GetDefaultObject(): BehaviorTreeGraph;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraph;
  static C(Other: UObject | any): BehaviorTreeGraph;
}
declare class BehaviorTreeGraphNode mixins AIGraphNode {
  Decorators: BehaviorTreeGraphNode[];
  Services: BehaviorTreeGraphNode[];
  bInjectedNode: boolean;
  static Load(ResourceName: string): BehaviorTreeGraphNode;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode;
  static GetDefaultObject(): BehaviorTreeGraphNode;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode;
  static C(Other: UObject | any): BehaviorTreeGraphNode;
}
declare class BehaviorTreeGraphNode_Composite mixins BehaviorTreeGraphNode {
  static Load(ResourceName: string): BehaviorTreeGraphNode_Composite;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeGraphNode_Composite;
  static GetDefaultObject(): BehaviorTreeGraphNode_Composite;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_Composite;
  static C(Other: UObject | any): BehaviorTreeGraphNode_Composite;
}
declare class BehaviorTreeGraphNode_CompositeDecorator
  mixins BehaviorTreeGraphNode {
  BoundGraph: EdGraph;
  CompositeName: string;
  bShowOperations: boolean;
  bCanAbortFlow: boolean;
  ParentNodeInstance: BTCompositeNode;
  CachedDescription: string;
  static Load(ResourceName: string): BehaviorTreeGraphNode_CompositeDecorator;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeGraphNode_CompositeDecorator;
  static GetDefaultObject(): BehaviorTreeGraphNode_CompositeDecorator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_CompositeDecorator;
  static C(Other: UObject | any): BehaviorTreeGraphNode_CompositeDecorator;
}
declare class BehaviorTreeGraphNode_Decorator mixins BehaviorTreeGraphNode {
  static Load(ResourceName: string): BehaviorTreeGraphNode_Decorator;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeGraphNode_Decorator;
  static GetDefaultObject(): BehaviorTreeGraphNode_Decorator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_Decorator;
  static C(Other: UObject | any): BehaviorTreeGraphNode_Decorator;
}
declare class BehaviorTreeGraphNode_Root mixins BehaviorTreeGraphNode {
  BlackboardAsset: BlackboardData;
  static Load(ResourceName: string): BehaviorTreeGraphNode_Root;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Root;
  static GetDefaultObject(): BehaviorTreeGraphNode_Root;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_Root;
  static C(Other: UObject | any): BehaviorTreeGraphNode_Root;
}
declare class BehaviorTreeGraphNode_Service mixins BehaviorTreeGraphNode {
  static Load(ResourceName: string): BehaviorTreeGraphNode_Service;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeGraphNode_Service;
  static GetDefaultObject(): BehaviorTreeGraphNode_Service;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_Service;
  static C(Other: UObject | any): BehaviorTreeGraphNode_Service;
}
declare class BehaviorTreeGraphNode_SimpleParallel
  mixins BehaviorTreeGraphNode_Composite {
  static Load(ResourceName: string): BehaviorTreeGraphNode_SimpleParallel;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeGraphNode_SimpleParallel;
  static GetDefaultObject(): BehaviorTreeGraphNode_SimpleParallel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_SimpleParallel;
  static C(Other: UObject | any): BehaviorTreeGraphNode_SimpleParallel;
}
declare class BehaviorTreeGraphNode_Task mixins BehaviorTreeGraphNode {
  static Load(ResourceName: string): BehaviorTreeGraphNode_Task;
  static Find(Outer: UObject, ResourceName: string): BehaviorTreeGraphNode_Task;
  static GetDefaultObject(): BehaviorTreeGraphNode_Task;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_Task;
  static C(Other: UObject | any): BehaviorTreeGraphNode_Task;
}
declare class BehaviorTreeGraphNode_SubtreeTask
  mixins BehaviorTreeGraphNode_Task {
  static Load(ResourceName: string): BehaviorTreeGraphNode_SubtreeTask;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): BehaviorTreeGraphNode_SubtreeTask;
  static GetDefaultObject(): BehaviorTreeGraphNode_SubtreeTask;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BehaviorTreeGraphNode_SubtreeTask;
  static C(Other: UObject | any): BehaviorTreeGraphNode_SubtreeTask;
}
declare class BlackboardDataFactory mixins Factory {
  static Load(ResourceName: string): BlackboardDataFactory;
  static Find(Outer: UObject, ResourceName: string): BlackboardDataFactory;
  static GetDefaultObject(): BlackboardDataFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BlackboardDataFactory;
  static C(Other: UObject | any): BlackboardDataFactory;
}
declare class EdGraphSchema_BehaviorTree mixins AIGraphSchema {
  static Load(ResourceName: string): EdGraphSchema_BehaviorTree;
  static Find(Outer: UObject, ResourceName: string): EdGraphSchema_BehaviorTree;
  static GetDefaultObject(): EdGraphSchema_BehaviorTree;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EdGraphSchema_BehaviorTree;
  static C(Other: UObject | any): EdGraphSchema_BehaviorTree;
}
declare class EdGraphSchema_BehaviorTreeDecorator mixins EdGraphSchema {
  PC_Boolean: string;
  static Load(ResourceName: string): EdGraphSchema_BehaviorTreeDecorator;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EdGraphSchema_BehaviorTreeDecorator;
  static GetDefaultObject(): EdGraphSchema_BehaviorTreeDecorator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EdGraphSchema_BehaviorTreeDecorator;
  static C(Other: UObject | any): EdGraphSchema_BehaviorTreeDecorator;
}
declare class K2Node_LatentGameplayTaskCall mixins K2Node_BaseAsyncTask {
  SpawnParamPins: string[];
  static Load(ResourceName: string): K2Node_LatentGameplayTaskCall;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): K2Node_LatentGameplayTaskCall;
  static GetDefaultObject(): K2Node_LatentGameplayTaskCall;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_LatentGameplayTaskCall;
  static C(Other: UObject | any): K2Node_LatentGameplayTaskCall;
}
declare class BasicOverlaysFactory mixins Factory {
  static Load(ResourceName: string): BasicOverlaysFactory;
  static Find(Outer: UObject, ResourceName: string): BasicOverlaysFactory;
  static GetDefaultObject(): BasicOverlaysFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BasicOverlaysFactory;
  static C(Other: UObject | any): BasicOverlaysFactory;
}
declare class BasicOverlaysFactoryNew mixins Factory {
  static Load(ResourceName: string): BasicOverlaysFactoryNew;
  static Find(Outer: UObject, ResourceName: string): BasicOverlaysFactoryNew;
  static GetDefaultObject(): BasicOverlaysFactoryNew;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BasicOverlaysFactoryNew;
  static C(Other: UObject | any): BasicOverlaysFactoryNew;
}
declare class LocalizedOverlaysFactoryNew mixins Factory {
  static Load(ResourceName: string): LocalizedOverlaysFactoryNew;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LocalizedOverlaysFactoryNew;
  static GetDefaultObject(): LocalizedOverlaysFactoryNew;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LocalizedOverlaysFactoryNew;
  static C(Other: UObject | any): LocalizedOverlaysFactoryNew;
}
declare class ReimportBasicOverlaysFactory mixins BasicOverlaysFactory {
  static Load(ResourceName: string): ReimportBasicOverlaysFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ReimportBasicOverlaysFactory;
  static GetDefaultObject(): ReimportBasicOverlaysFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ReimportBasicOverlaysFactory;
  static C(Other: UObject | any): ReimportBasicOverlaysFactory;
}
declare class MediaSource mixins UObject {
  static Load(ResourceName: string): MediaSource;
  static Find(Outer: UObject, ResourceName: string): MediaSource;
  static GetDefaultObject(): MediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MediaSource;
  Validate(): boolean;
  GetUrl(): string;
  static C(Other: UObject | any): MediaSource;
}
declare class BaseMediaSource mixins MediaSource {
  PlatformPlayerNames: any;
  PlayerName: string;
  static Load(ResourceName: string): BaseMediaSource;
  static Find(Outer: UObject, ResourceName: string): BaseMediaSource;
  static GetDefaultObject(): BaseMediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): BaseMediaSource;
  static C(Other: UObject | any): BaseMediaSource;
}
declare class FileMediaSource mixins BaseMediaSource {
  FilePath: string;
  PrecacheFile: boolean;
  static Load(ResourceName: string): FileMediaSource;
  static Find(Outer: UObject, ResourceName: string): FileMediaSource;
  static GetDefaultObject(): FileMediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FileMediaSource;
  SetFilePath(Path: string): void;
  static C(Other: UObject | any): FileMediaSource;
}
declare class MediaCaptureDevice {
  DisplayName: string;
  URL: string;
  clone(): MediaCaptureDevice;
  static C(Other: UObject | any): MediaCaptureDevice;
}
declare class MediaBlueprintFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MediaBlueprintFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MediaBlueprintFunctionLibrary;
  static GetDefaultObject(): MediaBlueprintFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MediaBlueprintFunctionLibrary;
  static EnumerateWebcamCaptureDevices(
    OutDevices?: MediaCaptureDevice[],
    Filter?: number
  ): {
    OutDevices: MediaCaptureDevice[]
  };
  static EnumerateVideoCaptureDevices(
    OutDevices?: MediaCaptureDevice[],
    Filter?: number
  ): {
    OutDevices: MediaCaptureDevice[]
  };
  static EnumerateAudioCaptureDevices(
    OutDevices?: MediaCaptureDevice[],
    Filter?: number
  ): {
    OutDevices: MediaCaptureDevice[]
  };
  static C(Other: UObject | any): MediaBlueprintFunctionLibrary;
}
declare class MediaPlaylist mixins UObject {
  Items: MediaSource[];
  static Load(ResourceName: string): MediaPlaylist;
  static Find(Outer: UObject, ResourceName: string): MediaPlaylist;
  static GetDefaultObject(): MediaPlaylist;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MediaPlaylist;
  Replace(index: number, Replacement: MediaSource): boolean;
  RemoveAt(index: number): boolean;
  Remove(MediaSource: MediaSource): boolean;
  Num(): number;
  Insert(MediaSource: MediaSource, index: number): void;
  GetRandom(
    OutIndex?: number
  ): {
    OutIndex: number,
    $: MediaSource
  };
  GetPrevious(
    InOutIndex?: number
  ): {
    InOutIndex: number,
    $: MediaSource
  };
  GetNext(
    InOutIndex?: number
  ): {
    InOutIndex: number,
    $: MediaSource
  };
  Get(index: number): MediaSource;
  AddUrl(URL: string): boolean;
  AddFile(FilePath: string): boolean;
  Add(MediaSource: MediaSource): boolean;
  static C(Other: UObject | any): MediaPlaylist;
}
declare type EMediaPlayerTrackT =
  | "Audio"
  | "Caption"
  | "Metadata"
  | "Script"
  | "Subtitle"
  | "Text"
  | "Video"
  | "EMediaPlayerTrack_MAX";
declare var EMediaPlayerTrack: {
  Audio: "Audio",
  Caption: "Caption",
  Metadata: "Metadata",
  Script: "Script",
  Subtitle: "Subtitle",
  Text: "Text",
  Video: "Video",
  EMediaPlayerTrack_MAX: "EMediaPlayerTrack_MAX"
};
declare class MediaPlayerTrackOptions {
  Audio: number;
  Caption: number;
  MetaData: number;
  Script: number;
  Subtitle: number;
  text: number;
  Video: number;
  clone(): MediaPlayerTrackOptions;
  static C(Other: UObject | any): MediaPlayerTrackOptions;
}
declare type EMediaPlayerOptionBooleanOverrideT =
  | "UseMediaPlayerSetting"
  | "Enabled"
  | "Disabled"
  | "EMediaPlayerOptionBooleanOverride_MAX";
declare var EMediaPlayerOptionBooleanOverride: {
  UseMediaPlayerSetting: "UseMediaPlayerSetting",
  Enabled: "Enabled",
  Disabled: "Disabled",
  EMediaPlayerOptionBooleanOverride_MAX: "EMediaPlayerOptionBooleanOverride_MAX"
};
declare class MediaPlayerOptions {
  Tracks: MediaPlayerTrackOptions;
  SeekTime: Timespan;
  PlayOnOpen: EMediaPlayerOptionBooleanOverrideT;
  loop: EMediaPlayerOptionBooleanOverrideT;
  clone(): MediaPlayerOptions;
  static C(Other: UObject | any): MediaPlayerOptions;
}
declare class MediaPlayer mixins UObject {
  OnEndReached: UnrealEngineMulticastDelegate<() => void>;
  OnMediaClosed: UnrealEngineMulticastDelegate<() => void>;
  OnMediaOpened: UnrealEngineMulticastDelegate<(OpenedUrl: string) => void>;
  OnMediaOpenFailed: UnrealEngineMulticastDelegate<(FailedUrl: string) => void>;
  OnPlaybackResumed: UnrealEngineMulticastDelegate<() => void>;
  OnPlaybackSuspended: UnrealEngineMulticastDelegate<() => void>;
  OnSeekCompleted: UnrealEngineMulticastDelegate<() => void>;
  OnTracksChanged: UnrealEngineMulticastDelegate<() => void>;
  CacheAhead: Timespan;
  CacheBehind: Timespan;
  CacheBehindGame: Timespan;
  NativeAudioOut: boolean;
  PlayOnOpen: boolean;
  Shuffle: boolean;
  loop: boolean;
  Playlist: MediaPlaylist;
  PlaylistIndex: number;
  TimeDelay: Timespan;
  HorizontalFieldOfView: number;
  VerticalFieldOfView: number;
  ViewRotation: Rotator;
  PlayerGuid: Guid;
  AffectedByPIEHandling: boolean;
  static Load(ResourceName: string): MediaPlayer;
  static Find(Outer: UObject, ResourceName: string): MediaPlayer;
  static GetDefaultObject(): MediaPlayer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MediaPlayer;
  SupportsSeeking(): boolean;
  SupportsScrubbing(): boolean;
  SupportsRate(Rate: number, Unthinned: boolean): boolean;
  SetViewRotation(Rotation: Rotator, Absolute: boolean): boolean;
  SetViewField(
    Horizontal: number,
    Vertical: number,
    Absolute: boolean
  ): boolean;
  SetVideoTrackFrameRate(
    TrackIndex: number,
    FormatIndex: number,
    FrameRate: number
  ): boolean;
  SetTrackFormat(
    TrackType: EMediaPlayerTrackT,
    TrackIndex: number,
    FormatIndex: number
  ): boolean;
  SetTimeDelay(TimeDelay: Timespan): void;
  SetRate(Rate: number): boolean;
  SetNativeVolume(Volume: number): boolean;
  SetLooping(Looping: boolean): boolean;
  SetDesiredPlayerName(PlayerName: string): void;
  SetBlockOnTime(Time: Timespan): void;
  SelectTrack(TrackType: EMediaPlayerTrackT, TrackIndex: number): boolean;
  Seek(Time: Timespan): boolean;
  Rewind(): boolean;
  Reopen(): boolean;
  Previous(): boolean;
  Play(): boolean;
  Pause(): boolean;
  OpenUrl(URL: string): boolean;
  OpenSourceWithOptions(
    MediaSource: MediaSource,
    Options: MediaPlayerOptions
  ): boolean;
  OpenSourceLatent(
    WorldContextObject: UObject,
    LatentInfo: LatentActionInfo,
    MediaSource: MediaSource,
    Options: MediaPlayerOptions,
    bSuccess?: boolean
  ): {
    bSuccess: boolean
  };
  OpenSource(MediaSource: MediaSource): boolean;
  OpenPlaylistIndex(InPlaylist: MediaPlaylist, index: number): boolean;
  OpenPlaylist(InPlaylist: MediaPlaylist): boolean;
  OpenFile(FilePath: string): boolean;
  Next(): boolean;
  IsReady(): boolean;
  IsPreparing(): boolean;
  IsPlaying(): boolean;
  IsPaused(): boolean;
  IsLooping(): boolean;
  IsConnecting(): boolean;
  IsClosed(): boolean;
  IsBuffering(): boolean;
  HasError(): boolean;
  GetViewRotation(): Rotator;
  GetVideoTrackType(TrackIndex: number, FormatIndex: number): string;
  GetVideoTrackFrameRates(TrackIndex: number, FormatIndex: number): FloatRange;
  GetVideoTrackFrameRate(TrackIndex: number, FormatIndex: number): number;
  GetVideoTrackDimensions(TrackIndex: number, FormatIndex: number): IntPoint;
  GetVideoTrackAspectRatio(TrackIndex: number, FormatIndex: number): number;
  GetVerticalFieldOfView(): number;
  GetUrl(): string;
  GetTrackLanguage(TrackType: EMediaPlayerTrackT, TrackIndex: number): string;
  GetTrackFormat(TrackType: EMediaPlayerTrackT, TrackIndex: number): number;
  GetTrackDisplayName(
    TrackType: EMediaPlayerTrackT,
    TrackIndex: number
  ): string;
  GetTimeDelay(): Timespan;
  GetTime(): Timespan;
  GetSupportedRates(
    OutRates?: FloatRange[],
    Unthinned?: boolean
  ): {
    OutRates: FloatRange[]
  };
  GetSelectedTrack(TrackType: EMediaPlayerTrackT): number;
  GetRate(): number;
  GetPlaylistIndex(): number;
  GetPlaylist(): MediaPlaylist;
  GetPlayerName(): string;
  GetNumTracks(TrackType: EMediaPlayerTrackT): number;
  GetNumTrackFormats(TrackType: EMediaPlayerTrackT, TrackIndex: number): number;
  GetMediaName(): string;
  GetLastVideoSampleProcessedTime(): Timespan;
  GetLastAudioSampleProcessedTime(): Timespan;
  GetHorizontalFieldOfView(): number;
  GetDuration(): Timespan;
  GetDesiredPlayerName(): string;
  GetAudioTrackType(TrackIndex: number, FormatIndex: number): string;
  GetAudioTrackSampleRate(TrackIndex: number, FormatIndex: number): number;
  GetAudioTrackChannels(TrackIndex: number, FormatIndex: number): number;
  Close(): void;
  CanPlayUrl(URL: string): boolean;
  CanPlaySource(MediaSource: MediaSource): boolean;
  CanPause(): boolean;
  static C(Other: UObject | any): MediaPlayer;
}
declare type EMediaSoundChannelsT =
  | "Mono"
  | "Stereo"
  | "Surround"
  | "EMediaSoundChannels_MAX";
declare var EMediaSoundChannels: {
  Mono: "Mono",
  Stereo: "Stereo",
  Surround: "Surround",
  EMediaSoundChannels_MAX: "EMediaSoundChannels_MAX"
};
declare type EMediaSoundComponentFFTSizeT =
  | "Min_64"
  | "Small_256"
  | "Medium_512"
  | "Large_1024"
  | "EMediaSoundComponentFFTSize_MAX";
declare var EMediaSoundComponentFFTSize: {
  Min_64: "Min_64",
  Small_256: "Small_256",
  Medium_512: "Medium_512",
  Large_1024: "Large_1024",
  EMediaSoundComponentFFTSize_MAX: "EMediaSoundComponentFFTSize_MAX"
};
declare class MediaSoundComponentSpectralData {
  FrequencyHz: number;
  Magnitude: number;
  clone(): MediaSoundComponentSpectralData;
  static C(Other: UObject | any): MediaSoundComponentSpectralData;
}
declare class MediaSoundComponent mixins SynthComponent {
  Channels: EMediaSoundChannelsT;
  DynamicRateAdjustment: boolean;
  RateAdjustmentFactor: number;
  RateAdjustmentRange: FloatRange;
  MediaPlayer: MediaPlayer;
  static Load(ResourceName: string): MediaSoundComponent;
  static Find(Outer: UObject, ResourceName: string): MediaSoundComponent;
  static GetDefaultObject(): MediaSoundComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MediaSoundComponent;
  SetSpectralAnalysisSettings(
    InFrequenciesToAnalyze: number[],
    InFFTSize: EMediaSoundComponentFFTSizeT
  ): void;
  SetMediaPlayer(NewMediaPlayer: MediaPlayer): void;
  SetEnvelopeFollowingsettings(
    AttackTimeMsec: number,
    ReleaseTimeMsec: number
  ): void;
  SetEnableSpectralAnalysis(bInSpectralAnalysisEnabled: boolean): void;
  SetEnableEnvelopeFollowing(bInEnvelopeFollowing: boolean): void;
  GetSpectralData(): MediaSoundComponentSpectralData[];
  GetMediaPlayer(): MediaPlayer;
  GetEnvelopeValue(): number;
  BP_GetAttenuationSettingsToApply(
    OutAttenuationSettings?: SoundAttenuationSettings
  ): {
    OutAttenuationSettings: SoundAttenuationSettings,
    $: boolean
  };
  static C(Other: UObject | any): MediaSoundComponent;
}
declare class MediaTexture mixins Texture {
  AddressX: TextureAddressT;
  AddressY: TextureAddressT;
  AutoClear: boolean;
  ClearColor: LinearColor;
  MediaPlayer: MediaPlayer;
  static Load(ResourceName: string): MediaTexture;
  static Find(Outer: UObject, ResourceName: string): MediaTexture;
  static GetDefaultObject(): MediaTexture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MediaTexture;
  SetMediaPlayer(NewMediaPlayer: MediaPlayer): void;
  GetWidth(): number;
  GetMediaPlayer(): MediaPlayer;
  GetHeight(): number;
  GetAspectRatio(): number;
  static C(Other: UObject | any): MediaTexture;
}
declare class PlatformMediaSource mixins MediaSource {
  PlatformMediaSources: any;
  MediaSource: MediaSource;
  static Load(ResourceName: string): PlatformMediaSource;
  static Find(Outer: UObject, ResourceName: string): PlatformMediaSource;
  static GetDefaultObject(): PlatformMediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlatformMediaSource;
  static C(Other: UObject | any): PlatformMediaSource;
}
declare class StreamMediaSource mixins BaseMediaSource {
  StreamUrl: string;
  static Load(ResourceName: string): StreamMediaSource;
  static Find(Outer: UObject, ResourceName: string): StreamMediaSource;
  static GetDefaultObject(): StreamMediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): StreamMediaSource;
  static C(Other: UObject | any): StreamMediaSource;
}
declare class TimeSynchronizableMediaSource mixins BaseMediaSource {
  bUseTimeSynchronization: boolean;
  static Load(ResourceName: string): TimeSynchronizableMediaSource;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): TimeSynchronizableMediaSource;
  static GetDefaultObject(): TimeSynchronizableMediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TimeSynchronizableMediaSource;
  static C(Other: UObject | any): TimeSynchronizableMediaSource;
}
declare class AvfMediaSettings mixins UObject {
  NativeAudioOut: boolean;
  static Load(ResourceName: string): AvfMediaSettings;
  static Find(Outer: UObject, ResourceName: string): AvfMediaSettings;
  static GetDefaultObject(): AvfMediaSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AvfMediaSettings;
  static C(Other: UObject | any): AvfMediaSettings;
}
declare class SignificanceManager mixins UObject {
  SignificanceManagerClassName: SoftClassPath;
  static Load(ResourceName: string): SignificanceManager;
  static Find(Outer: UObject, ResourceName: string): SignificanceManager;
  static GetDefaultObject(): SignificanceManager;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SignificanceManager;
  static C(Other: UObject | any): SignificanceManager;
}
declare class AnimSharingStateInstance mixins AnimInstance {
  AnimationToPlay: AnimSequence;
  PermutationTimeOffset: number;
  PlayRate: number;
  bStateBool: boolean;
  static Load(ResourceName: string): AnimSharingStateInstance;
  static Find(Outer: UObject, ResourceName: string): AnimSharingStateInstance;
  static GetDefaultObject(): AnimSharingStateInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimSharingStateInstance;
  GetInstancedActors(
    Actors?: Actor[]
  ): {
    Actors: Actor[]
  };
  static C(Other: UObject | any): AnimSharingStateInstance;
}
declare class AnimSharingTransitionInstance mixins AnimInstance {
  FromComponent: any;
  ToComponent: any;
  BlendTime: number;
  bBlendBool: boolean;
  static Load(ResourceName: string): AnimSharingTransitionInstance;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AnimSharingTransitionInstance;
  static GetDefaultObject(): AnimSharingTransitionInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimSharingTransitionInstance;
  static C(Other: UObject | any): AnimSharingTransitionInstance;
}
declare class AnimSharingAdditiveInstance mixins AnimInstance {
  BaseComponent: any;
  AdditiveAnimation: any;
  Alpha: number;
  bStateBool: boolean;
  static Load(ResourceName: string): AnimSharingAdditiveInstance;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AnimSharingAdditiveInstance;
  static GetDefaultObject(): AnimSharingAdditiveInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimSharingAdditiveInstance;
  static C(Other: UObject | any): AnimSharingAdditiveInstance;
}
declare class AnimationSharingStateProcessor mixins UObject {
  AnimationStateEnum: Enum;
  static Load(ResourceName: string): AnimationSharingStateProcessor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AnimationSharingStateProcessor;
  static GetDefaultObject(): AnimationSharingStateProcessor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationSharingStateProcessor;
  ProcessActorState(
    OutState?: number,
    InActor?: Actor,
    CurrentState?: number,
    OnDemandState?: number,
    bShouldProcess?: boolean
  ): {
    OutState: number,
    bShouldProcess: boolean
  };
  GetAnimationStateEnum(): Enum;
  static C(Other: UObject | any): AnimationSharingStateProcessor;
}
declare class AnimSharingInstance mixins UObject {
  RegisteredActors: Actor[];
  StateProcessor: AnimationSharingStateProcessor;
  UsedAnimationSequences: AnimSequence[];
  StateEnum: Enum;
  SharingActor: Actor;
  static Load(ResourceName: string): AnimSharingInstance;
  static Find(Outer: UObject, ResourceName: string): AnimSharingInstance;
  static GetDefaultObject(): AnimSharingInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimSharingInstance;
  static C(Other: UObject | any): AnimSharingInstance;
}
declare class PerPlatformBool {
  Default: boolean;
  PerPlatform: any;
  clone(): PerPlatformBool;
  static C(Other: UObject | any): PerPlatformBool;
}
declare class AnimationSetup {
  AnimSequence: AnimSequence;
  AnimBlueprint: UnrealEngineClassT;
  NumRandomizedInstances: PerPlatformInt;
  Enabled: PerPlatformBool;
  clone(): AnimationSetup;
  static C(Other: UObject | any): AnimationSetup;
}
declare class AnimationStateEntry {
  State: number;
  AnimationSetups: AnimationSetup[];
  bOnDemand: boolean;
  bAdditive: boolean;
  BlendTime: number;
  bReturnToPreviousState: boolean;
  bSetNextState: boolean;
  NextState: number;
  MaximumNumberOfConcurrentInstances: PerPlatformInt;
  WiggleTimePercentage: number;
  bRequiresCurves: boolean;
  clone(): AnimationStateEntry;
  static C(Other: UObject | any): AnimationStateEntry;
}
declare class PerSkeletonAnimationSharingSetup {
  Skeleton: Skeleton;
  SkeletalMesh: SkeletalMesh;
  BlendAnimBlueprint: UnrealEngineClassT;
  AdditiveAnimBlueprint: UnrealEngineClassT;
  StateProcessorClass: UnrealEngineClassT;
  AnimationStates: AnimationStateEntry[];
  clone(): PerSkeletonAnimationSharingSetup;
  static C(Other: UObject | any): PerSkeletonAnimationSharingSetup;
}
declare class AnimationSharingScalability {
  UseBlendTransitions: PerPlatformBool;
  BlendSignificanceValue: PerPlatformFloat;
  MaximumNumberConcurrentBlends: PerPlatformInt;
  TickSignificanceValue: PerPlatformFloat;
  clone(): AnimationSharingScalability;
  static C(Other: UObject | any): AnimationSharingScalability;
}
declare class AnimationSharingSetup mixins UObject {
  SkeletonSetups: PerSkeletonAnimationSharingSetup[];
  ScalabilitySettings: AnimationSharingScalability;
  static Load(ResourceName: string): AnimationSharingSetup;
  static Find(Outer: UObject, ResourceName: string): AnimationSharingSetup;
  static GetDefaultObject(): AnimationSharingSetup;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationSharingSetup;
  static C(Other: UObject | any): AnimationSharingSetup;
}
declare class AnimationSharingManager mixins UObject {
  PerSkeletonData: AnimSharingInstance[];
  static Load(ResourceName: string): AnimationSharingManager;
  static Find(Outer: UObject, ResourceName: string): AnimationSharingManager;
  static GetDefaultObject(): AnimationSharingManager;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationSharingManager;
  RegisterActorWithSkeletonBP(InActor: Actor, SharingSkeleton: Skeleton): void;
  static GetAnimationSharingManager(
    WorldContextObject: UObject
  ): AnimationSharingManager;
  static CreateAnimationSharingManager(
    WorldContextObject: UObject,
    Setup: AnimationSharingSetup
  ): boolean;
  static AnimationSharingEnabled(): boolean;
  static C(Other: UObject | any): AnimationSharingManager;
}
declare class LightPropagationVolumeSettings {
  bOverride_LPVIntensity: boolean;
  bOverride_LPVDirectionalOcclusionIntensity: boolean;
  bOverride_LPVDirectionalOcclusionRadius: boolean;
  bOverride_LPVDiffuseOcclusionExponent: boolean;
  bOverride_LPVSpecularOcclusionExponent: boolean;
  bOverride_LPVDiffuseOcclusionIntensity: boolean;
  bOverride_LPVSpecularOcclusionIntensity: boolean;
  bOverride_LPVSize: boolean;
  bOverride_LPVSecondaryOcclusionIntensity: boolean;
  bOverride_LPVSecondaryBounceIntensity: boolean;
  bOverride_LPVGeometryVolumeBias: boolean;
  bOverride_LPVVplInjectionBias: boolean;
  bOverride_LPVEmissiveInjectionIntensity: boolean;
  LPVIntensity: number;
  LPVVplInjectionBias: number;
  LPVSize: number;
  LPVSecondaryOcclusionIntensity: number;
  LPVSecondaryBounceIntensity: number;
  LPVGeometryVolumeBias: number;
  LPVEmissiveInjectionIntensity: number;
  LPVDirectionalOcclusionIntensity: number;
  LPVDirectionalOcclusionRadius: number;
  LPVDiffuseOcclusionExponent: number;
  LPVSpecularOcclusionExponent: number;
  LPVDiffuseOcclusionIntensity: number;
  LPVSpecularOcclusionIntensity: number;
  LPVFadeRange: number;
  LPVDirectionalOcclusionFadeRange: number;
  clone(): LightPropagationVolumeSettings;
  static C(Other: UObject | any): LightPropagationVolumeSettings;
}
declare class LightPropagationVolumeBlendable mixins UObject {
  Settings: LightPropagationVolumeSettings;
  BlendWeight: number;
  static Load(ResourceName: string): LightPropagationVolumeBlendable;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LightPropagationVolumeBlendable;
  static GetDefaultObject(): LightPropagationVolumeBlendable;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightPropagationVolumeBlendable;
  static C(Other: UObject | any): LightPropagationVolumeBlendable;
}
declare type EActorSequenceObjectReferenceTypeT =
  | "ContextActor"
  | "ExternalActor"
  | "Component"
  | "EActorSequenceObjectReferenceType_MAX";
declare var EActorSequenceObjectReferenceType: {
  ContextActor: "ContextActor",
  ExternalActor: "ExternalActor",
  Component: "Component",
  EActorSequenceObjectReferenceType_MAX: "EActorSequenceObjectReferenceType_MAX"
};
declare class ActorSequenceObjectReference {
  Type: EActorSequenceObjectReferenceTypeT;
  ActorId: Guid;
  PathToComponent: string;
  clone(): ActorSequenceObjectReference;
  static C(Other: UObject | any): ActorSequenceObjectReference;
}
declare class ActorSequenceObjectReferences {
  Array: ActorSequenceObjectReference[];
  clone(): ActorSequenceObjectReferences;
  static C(Other: UObject | any): ActorSequenceObjectReferences;
}
declare class ActorSequenceObjectReferenceMap {
  BindingIds: Guid[];
  References: ActorSequenceObjectReferences[];
  clone(): ActorSequenceObjectReferenceMap;
  static C(Other: UObject | any): ActorSequenceObjectReferenceMap;
}
declare class ActorSequence mixins MovieSceneSequence {
  MovieScene: MovieScene;
  ObjectReferences: ActorSequenceObjectReferenceMap;
  bHasBeenInitialized: boolean;
  static Load(ResourceName: string): ActorSequence;
  static Find(Outer: UObject, ResourceName: string): ActorSequence;
  static GetDefaultObject(): ActorSequence;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ActorSequence;
  static C(Other: UObject | any): ActorSequence;
}
declare class ActorSequencePlayer mixins MovieSceneSequencePlayer {
  static Load(ResourceName: string): ActorSequencePlayer;
  static Find(Outer: UObject, ResourceName: string): ActorSequencePlayer;
  static GetDefaultObject(): ActorSequencePlayer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ActorSequencePlayer;
  static C(Other: UObject | any): ActorSequencePlayer;
}
declare class ActorSequenceComponent mixins ActorComponent {
  PlaybackSettings: MovieSceneSequencePlaybackSettings;
  Sequence: ActorSequence;
  SequencePlayer: ActorSequencePlayer;
  static Load(ResourceName: string): ActorSequenceComponent;
  static Find(Outer: UObject, ResourceName: string): ActorSequenceComponent;
  static GetDefaultObject(): ActorSequenceComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ActorSequenceComponent;
  static C(Other: UObject | any): ActorSequenceComponent;
}
declare class LuminARUObjectManager mixins UObject {
  AllAnchors: ARPin[];
  static Load(ResourceName: string): LuminARUObjectManager;
  static Find(Outer: UObject, ResourceName: string): LuminARUObjectManager;
  static GetDefaultObject(): LuminARUObjectManager;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LuminARUObjectManager;
  static C(Other: UObject | any): LuminARUObjectManager;
}
declare class LuminARSessionFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): LuminARSessionFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LuminARSessionFunctionLibrary;
  static GetDefaultObject(): LuminARSessionFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LuminARSessionFunctionLibrary;
  static StartLuminARSession(
    WorldContextObject: UObject,
    LatentInfo: LatentActionInfo,
    Configuration: LuminARSessionConfig
  ): void;
  static C(Other: UObject | any): LuminARSessionFunctionLibrary;
}
declare type ELuminARTrackingStateT =
  | "Tracking"
  | "NotTracking"
  | "StoppedTracking"
  | "ELuminARTrackingState_MAX";
declare var ELuminARTrackingState: {
  Tracking: "Tracking",
  NotTracking: "NotTracking",
  StoppedTracking: "StoppedTracking",
  ELuminARTrackingState_MAX: "ELuminARTrackingState_MAX"
};
declare class LuminARLightEstimate {
  bIsValid: boolean;
  PixelIntensity: number;
  RGBScaleFactor: Vector;
  clone(): LuminARLightEstimate;
  static C(Other: UObject | any): LuminARLightEstimate;
  GetLightEstimation(): {
    OutLightEstimate: LuminARLightEstimate
  };
  static GetLightEstimation(
    OutLightEstimate?: LuminARLightEstimate
  ): {
    OutLightEstimate: LuminARLightEstimate
  };
}
declare class LuminARFrameFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): LuminARFrameFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LuminARFrameFunctionLibrary;
  static GetDefaultObject(): LuminARFrameFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LuminARFrameFunctionLibrary;
  static LuminARLineTrace(
    WorldContextObject: UObject,
    ScreenPosition: Vector2D,
    TraceChannels: any,
    OutHitResults?: ARTraceResult[]
  ): {
    OutHitResults: ARTraceResult[],
    $: boolean
  };
  static GetTrackingState(): ELuminARTrackingStateT;
  static GetLightEstimation(
    OutLightEstimate?: LuminARLightEstimate
  ): {
    OutLightEstimate: LuminARLightEstimate
  };
  static C(Other: UObject | any): LuminARFrameFunctionLibrary;
}
declare type EMLControllerTrackingModeT =
  | "InputService"
  | "CoordinateFrameUID"
  | "EMLControllerTrackingMode_MAX";
declare var EMLControllerTrackingMode: {
  InputService: "InputService",
  CoordinateFrameUID: "CoordinateFrameUID",
  EMLControllerTrackingMode_MAX: "EMLControllerTrackingMode_MAX"
};
declare type EMLControllerLEDPatternT =
  | "None"
  | "Clock01"
  | "Clock02"
  | "Clock03"
  | "Clock04"
  | "Clock05"
  | "Clock06"
  | "Clock07"
  | "Clock08"
  | "Clock09"
  | "Clock10"
  | "Clock11"
  | "Clock12"
  | "Clock01_07"
  | "Clock02_08"
  | "Clock03_09"
  | "Clock04_10"
  | "Clock05_11"
  | "Clock06_12"
  | "EMLControllerLEDPattern_MAX";
declare var EMLControllerLEDPattern: {
  None: "None",
  Clock01: "Clock01",
  Clock02: "Clock02",
  Clock03: "Clock03",
  Clock04: "Clock04",
  Clock05: "Clock05",
  Clock06: "Clock06",
  Clock07: "Clock07",
  Clock08: "Clock08",
  Clock09: "Clock09",
  Clock10: "Clock10",
  Clock11: "Clock11",
  Clock12: "Clock12",
  Clock01_07: "Clock01_07",
  Clock02_08: "Clock02_08",
  Clock03_09: "Clock03_09",
  Clock04_10: "Clock04_10",
  Clock05_11: "Clock05_11",
  Clock06_12: "Clock06_12",
  EMLControllerLEDPattern_MAX: "EMLControllerLEDPattern_MAX"
};
declare type EMLControllerLEDColorT =
  | "BrightMissionRed"
  | "PastelMissionRed"
  | "BrightFloridaOrange"
  | "PastelFloridaOrange"
  | "BrightLunaYellow"
  | "PastelLunaYellow"
  | "BrightNebulaPink"
  | "PastelNebulaPink"
  | "BrightCosmicPurple"
  | "PastelCosmicPurple"
  | "BrightMysticBlue"
  | "PastelMysticBlue"
  | "BrightCelestialBlue"
  | "PastelCelestialBlue"
  | "BrightShaggleGreen"
  | "PastelShaggleGreen"
  | "EMLControllerLEDColor_MAX";
declare var EMLControllerLEDColor: {
  BrightMissionRed: "BrightMissionRed",
  PastelMissionRed: "PastelMissionRed",
  BrightFloridaOrange: "BrightFloridaOrange",
  PastelFloridaOrange: "PastelFloridaOrange",
  BrightLunaYellow: "BrightLunaYellow",
  PastelLunaYellow: "PastelLunaYellow",
  BrightNebulaPink: "BrightNebulaPink",
  PastelNebulaPink: "PastelNebulaPink",
  BrightCosmicPurple: "BrightCosmicPurple",
  PastelCosmicPurple: "PastelCosmicPurple",
  BrightMysticBlue: "BrightMysticBlue",
  PastelMysticBlue: "PastelMysticBlue",
  BrightCelestialBlue: "BrightCelestialBlue",
  PastelCelestialBlue: "PastelCelestialBlue",
  BrightShaggleGreen: "BrightShaggleGreen",
  PastelShaggleGreen: "PastelShaggleGreen",
  EMLControllerLEDColor_MAX: "EMLControllerLEDColor_MAX"
};
declare type EMLControllerLEDEffectT =
  | "RotateCW"
  | "RotateCCW"
  | "Pulse"
  | "PaintCW"
  | "PaintCCW"
  | "Blink"
  | "EMLControllerLEDEffect_MAX";
declare var EMLControllerLEDEffect: {
  RotateCW: "RotateCW",
  RotateCCW: "RotateCCW",
  Pulse: "Pulse",
  PaintCW: "PaintCW",
  PaintCCW: "PaintCCW",
  Blink: "Blink",
  EMLControllerLEDEffect_MAX: "EMLControllerLEDEffect_MAX"
};
declare type EMLControllerLEDSpeedT =
  | "Slow"
  | "Medium"
  | "Fast"
  | "EMLControllerLEDSpeed_MAX";
declare var EMLControllerLEDSpeed: {
  Slow: "Slow",
  Medium: "Medium",
  Fast: "Fast",
  EMLControllerLEDSpeed_MAX: "EMLControllerLEDSpeed_MAX"
};
declare type EMLControllerHapticPatternT =
  | "None"
  | "Click"
  | "Bump"
  | "DoubleClick"
  | "Buzz"
  | "Tick"
  | "ForceDown"
  | "ForceUp"
  | "ForceDwell"
  | "SecondForceDown"
  | "EMLControllerHapticPattern_MAX";
declare var EMLControllerHapticPattern: {
  None: "None",
  Click: "Click",
  Bump: "Bump",
  DoubleClick: "DoubleClick",
  Buzz: "Buzz",
  Tick: "Tick",
  ForceDown: "ForceDown",
  ForceUp: "ForceUp",
  ForceDwell: "ForceDwell",
  SecondForceDown: "SecondForceDown",
  EMLControllerHapticPattern_MAX: "EMLControllerHapticPattern_MAX"
};
declare type EMLControllerHapticIntensityT =
  | "Low"
  | "Medium"
  | "High"
  | "EMLControllerHapticIntensity_MAX";
declare var EMLControllerHapticIntensity: {
  Low: "Low",
  Medium: "Medium",
  High: "High",
  EMLControllerHapticIntensity_MAX: "EMLControllerHapticIntensity_MAX"
};
declare type EMLControllerTypeT =
  | "None"
  | "Device"
  | "MobileApp"
  | "EMLControllerType_MAX";
declare var EMLControllerType: {
  None: "None",
  Device: "Device",
  MobileApp: "MobileApp",
  EMLControllerType_MAX: "EMLControllerType_MAX"
};
declare class MagicLeapControllerFunctionLibrary
  mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MagicLeapControllerFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MagicLeapControllerFunctionLibrary;
  static GetDefaultObject(): MagicLeapControllerFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapControllerFunctionLibrary;
  static SetMotionSourceForHand(
    Hand: EControllerHandT,
    MotionSource: string
  ): boolean;
  static SetControllerTrackingMode(
    TrackingMode: EMLControllerTrackingModeT
  ): boolean;
  static PlayLEDPattern(
    MotionSource: string,
    LEDPattern: EMLControllerLEDPatternT,
    LEDColor: EMLControllerLEDColorT,
    DurationInSec: number
  ): boolean;
  static PlayLEDEffect(
    MotionSource: string,
    LEDEffect: EMLControllerLEDEffectT,
    LEDSpeed: EMLControllerLEDSpeedT,
    LEDPattern: EMLControllerLEDPatternT,
    LEDColor: EMLControllerLEDColorT,
    DurationInSec: number
  ): boolean;
  static PlayHapticPattern(
    MotionSource: string,
    HapticPattern: EMLControllerHapticPatternT,
    Intensity: EMLControllerHapticIntensityT
  ): boolean;
  static PlayControllerLEDEffect(
    Hand: EControllerHandT,
    LEDEffect: EMLControllerLEDEffectT,
    LEDSpeed: EMLControllerLEDSpeedT,
    LEDPattern: EMLControllerLEDPatternT,
    LEDColor: EMLControllerLEDColorT,
    DurationInSec: number
  ): boolean;
  static PlayControllerLED(
    Hand: EControllerHandT,
    LEDPattern: EMLControllerLEDPatternT,
    LEDColor: EMLControllerLEDColorT,
    DurationInSec: number
  ): boolean;
  static PlayControllerHapticFeedback(
    Hand: EControllerHandT,
    HapticPattern: EMLControllerHapticPatternT,
    Intensity: EMLControllerHapticIntensityT
  ): boolean;
  static MaxSupportedMagicLeapControllers(): number;
  static InvertControllerMapping(): void;
  static GetMotionSourceForHand(Hand: EControllerHandT): string;
  static GetMLControllerType(Hand: EControllerHandT): EMLControllerTypeT;
  static GetHandForMotionSource(MotionSource: string): EControllerHandT;
  static GetControllerType(MotionSource: string): EMLControllerTypeT;
  static GetControllerTrackingMode(): EMLControllerTrackingModeT;
  static GetControllerMapping(
    ControllerIndex: number,
    Hand?: EControllerHandT
  ): {
    Hand: EControllerHandT,
    $: boolean
  };
  static C(Other: UObject | any): MagicLeapControllerFunctionLibrary;
}
declare type EMagicLeapTouchpadGestureTypeT =
  | "None"
  | "Tap"
  | "ForceTapDown"
  | "ForceTapUp"
  | "ForceDwell"
  | "SecondForceDown"
  | "LongHold"
  | "RadialScroll"
  | "Swipe"
  | "Scroll"
  | "Pinch"
  | "EMagicLeapTouchpadGestureType_MAX";
declare var EMagicLeapTouchpadGestureType: {
  None: "None",
  Tap: "Tap",
  ForceTapDown: "ForceTapDown",
  ForceTapUp: "ForceTapUp",
  ForceDwell: "ForceDwell",
  SecondForceDown: "SecondForceDown",
  LongHold: "LongHold",
  RadialScroll: "RadialScroll",
  Swipe: "Swipe",
  Scroll: "Scroll",
  Pinch: "Pinch",
  EMagicLeapTouchpadGestureType_MAX: "EMagicLeapTouchpadGestureType_MAX"
};
declare type EMagicLeapTouchpadGestureDirectionT =
  | "None"
  | "Up"
  | "Down"
  | "Left"
  | "Right"
  | "In"
  | "Out"
  | "Clockwise"
  | "CounterClockwise"
  | "EMagicLeapTouchpadGestureDirection_MAX";
declare var EMagicLeapTouchpadGestureDirection: {
  None: "None",
  Up: "Up",
  Down: "Down",
  Left: "Left",
  Right: "Right",
  In: "In",
  Out: "Out",
  Clockwise: "Clockwise",
  CounterClockwise: "CounterClockwise",
  EMagicLeapTouchpadGestureDirection_MAX: "EMagicLeapTouchpadGestureDirection_MAX"
};
declare class MagicLeapTouchpadGesture {
  Hand: EControllerHandT;
  MotionSource: string;
  Type: EMagicLeapTouchpadGestureTypeT;
  Direction: EMagicLeapTouchpadGestureDirectionT;
  PositionAndForce: Vector;
  Speed: number;
  Distance: number;
  FingerGap: number;
  Radius: number;
  Angle: number;
  clone(): MagicLeapTouchpadGesture;
  static C(Other: UObject | any): MagicLeapTouchpadGesture;
}
declare class TouchpadGesturesComponent mixins ActorComponent {
  OnTouchpadGestureStart: UnrealEngineMulticastDelegate<
    (GestureData: MagicLeapTouchpadGesture) => void
  >;
  OnTouchpadGestureContinue: UnrealEngineMulticastDelegate<
    (GestureData: MagicLeapTouchpadGesture) => void
  >;
  OnTouchpadGestureEnd: UnrealEngineMulticastDelegate<
    (GestureData: MagicLeapTouchpadGesture) => void
  >;
  static Load(ResourceName: string): TouchpadGesturesComponent;
  static Find(Outer: UObject, ResourceName: string): TouchpadGesturesComponent;
  static GetDefaultObject(): TouchpadGesturesComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TouchpadGesturesComponent;
  static C(Other: UObject | any): TouchpadGesturesComponent;
}
declare class EyeTrackerStereoGazeData {
  LeftEyeOrigin: Vector;
  LeftEyeDirection: Vector;
  RightEyeOrigin: Vector;
  RightEyeDirection: Vector;
  FixationPoint: Vector;
  ConfidenceValue: number;
  clone(): EyeTrackerStereoGazeData;
  static C(Other: UObject | any): EyeTrackerStereoGazeData;
  GetStereoGazeData(): {
    OutGazeData: EyeTrackerStereoGazeData,
    $: boolean
  };
  static GetStereoGazeData(
    OutGazeData?: EyeTrackerStereoGazeData
  ): {
    OutGazeData: EyeTrackerStereoGazeData,
    $: boolean
  };
}
declare class EyeTrackerGazeData {
  GazeOrigin: Vector;
  GazeDirection: Vector;
  FixationPoint: Vector;
  ConfidenceValue: number;
  clone(): EyeTrackerGazeData;
  static C(Other: UObject | any): EyeTrackerGazeData;
  GetGazeData(): {
    OutGazeData: EyeTrackerGazeData,
    $: boolean
  };
  static GetGazeData(
    OutGazeData?: EyeTrackerGazeData
  ): {
    OutGazeData: EyeTrackerGazeData,
    $: boolean
  };
}
declare class EyeTrackerFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): EyeTrackerFunctionLibrary;
  static Find(Outer: UObject, ResourceName: string): EyeTrackerFunctionLibrary;
  static GetDefaultObject(): EyeTrackerFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EyeTrackerFunctionLibrary;
  static SetEyeTrackedPlayer(PlayerController: PlayerController): void;
  static IsStereoGazeDataAvailable(): boolean;
  static IsEyeTrackerConnected(): boolean;
  static GetStereoGazeData(
    OutGazeData?: EyeTrackerStereoGazeData
  ): {
    OutGazeData: EyeTrackerStereoGazeData,
    $: boolean
  };
  static GetGazeData(
    OutGazeData?: EyeTrackerGazeData
  ): {
    OutGazeData: EyeTrackerGazeData,
    $: boolean
  };
  static C(Other: UObject | any): EyeTrackerFunctionLibrary;
}
declare class MagicLeapFixationComfort {
  FixationDepthIsUncomfortable: boolean;
  FixationDepthViolationHasOccurred: boolean;
  RemainingTimeAtUncomfortableDepth: number;
  clone(): MagicLeapFixationComfort;
  static C(Other: UObject | any): MagicLeapFixationComfort;
  GetFixationComfort(): {
    FixationComfort: MagicLeapFixationComfort,
    $: boolean
  };
  static GetFixationComfort(
    FixationComfort?: MagicLeapFixationComfort
  ): {
    FixationComfort: MagicLeapFixationComfort,
    $: boolean
  };
}
declare class MagicLeapEyeBlinkState {
  LeftEyeBlinked: boolean;
  RightEyeBlinked: boolean;
  clone(): MagicLeapEyeBlinkState;
  static C(Other: UObject | any): MagicLeapEyeBlinkState;
  GetEyeBlinkState(): {
    BlinkState: MagicLeapEyeBlinkState,
    $: boolean
  };
  static GetEyeBlinkState(
    BlinkState?: MagicLeapEyeBlinkState
  ): {
    BlinkState: MagicLeapEyeBlinkState,
    $: boolean
  };
}
declare type EMagicLeapEyeTrackingCalibrationStatusT =
  | "None"
  | "Bad"
  | "Good"
  | "EMagicLeapEyeTrackingCalibrationStatus_MAX";
declare var EMagicLeapEyeTrackingCalibrationStatus: {
  None: "None",
  Bad: "Bad",
  Good: "Good",
  EMagicLeapEyeTrackingCalibrationStatus_MAX: "EMagicLeapEyeTrackingCalibrationStatus_MAX"
};
declare class MagicLeapEyeTrackerFunctionLibrary
  mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MagicLeapEyeTrackerFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MagicLeapEyeTrackerFunctionLibrary;
  static GetDefaultObject(): MagicLeapEyeTrackerFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapEyeTrackerFunctionLibrary;
  static IsEyeTrackerCalibrated(): boolean;
  static GetFixationComfort(
    FixationComfort?: MagicLeapFixationComfort
  ): {
    FixationComfort: MagicLeapFixationComfort,
    $: boolean
  };
  static GetEyeBlinkState(
    BlinkState?: MagicLeapEyeBlinkState
  ): {
    BlinkState: MagicLeapEyeBlinkState,
    $: boolean
  };
  static GetCalibrationStatus(): EMagicLeapEyeTrackingCalibrationStatusT;
  static C(Other: UObject | any): MagicLeapEyeTrackerFunctionLibrary;
}
declare class LiveLinkMagicLeapHandTrackingSourceFactory
  mixins LiveLinkSourceFactory {
  static Load(ResourceName: string): LiveLinkMagicLeapHandTrackingSourceFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LiveLinkMagicLeapHandTrackingSourceFactory;
  static GetDefaultObject(): LiveLinkMagicLeapHandTrackingSourceFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LiveLinkMagicLeapHandTrackingSourceFactory;
  static C(Other: UObject | any): LiveLinkMagicLeapHandTrackingSourceFactory;
}
declare type EHandTrackingGestureT =
  | "Finger"
  | "Fist"
  | "Pinch"
  | "Thumb"
  | "L"
  | "OpenHandBack"
  | "Ok"
  | "C"
  | "NoPose"
  | "NoHand"
  | "EHandTrackingGesture_MAX";
declare var EHandTrackingGesture: {
  Finger: "Finger",
  Fist: "Fist",
  Pinch: "Pinch",
  Thumb: "Thumb",
  L: "L",
  OpenHandBack: "OpenHandBack",
  Ok: "Ok",
  C: "C",
  NoPose: "NoPose",
  NoHand: "NoHand",
  EHandTrackingGesture_MAX: "EHandTrackingGesture_MAX"
};
declare type EHandTrackingKeypointTFilterLevelT =
  | "NoFilter"
  | "SimpleSmoothing"
  | "PredictiveSmoothing"
  | "EHandTrackingKeypointFilterLevel_MAX";
declare var EHandTrackingKeypointFilterLevel: {
  NoFilter: "NoFilter",
  SimpleSmoothing: "SimpleSmoothing",
  PredictiveSmoothing: "PredictiveSmoothing",
  EHandTrackingKeypointFilterLevel_MAX: "EHandTrackingKeypointFilterLevel_MAX"
};
declare type EHandTrackingGestureTFilterLevel =
  | "NoFilter"
  | "SlightRobustnessToFlicker"
  | "MoreRobustnessToFlicker"
  | "EHandTrackingGestureFilterLevel_MAX";
declare var EHandTrackingGestureFilterLevel: {
  NoFilter: "NoFilter",
  SlightRobustnessToFlicker: "SlightRobustnessToFlicker",
  MoreRobustnessToFlicker: "MoreRobustnessToFlicker",
  EHandTrackingGestureFilterLevel_MAX: "EHandTrackingGestureFilterLevel_MAX"
};
declare class LiveLinkSourceHandle {
  clone(): LiveLinkSourceHandle;
  static C(Other: UObject | any): LiveLinkSourceHandle;
  GetMagicLeapHandTrackingLiveLinkSource(): {
    SourceHandle: LiveLinkSourceHandle,
    $: boolean
  };
  static GetMagicLeapHandTrackingLiveLinkSource(
    SourceHandle?: LiveLinkSourceHandle
  ): {
    SourceHandle: LiveLinkSourceHandle,
    $: boolean
  };
}
declare type EGestureTransformSpaceT =
  | "World"
  | "Hand"
  | "Tracking"
  | "EGestureTransformSpace_MAX";
declare var EGestureTransformSpace: {
  World: "World",
  Hand: "Hand",
  Tracking: "Tracking",
  EGestureTransformSpace_MAX: "EGestureTransformSpace_MAX"
};
declare type EHandTrackingKeypointT =
  | "Thumb_Tip"
  | "Thumb_IP"
  | "Thumb_MCP"
  | "Thumb_CMC"
  | "Index_Tip"
  | "Index_DIP"
  | "Index_PIP"
  | "Index_MCP"
  | "Middle_Tip"
  | "Middle_DIP"
  | "Middle_PIP"
  | "Middle_MCP"
  | "Ring_Tip"
  | "Ring_DIP"
  | "Ring_PIP"
  | "Ring_MCP"
  | "Pinky_Tip"
  | "Pinky_DIP"
  | "Pinky_PIP"
  | "Pinky_MCP"
  | "Wrist_Center"
  | "Wrist_Ulnar"
  | "Wrist_Radial"
  | "Hand_Center"
  | "EHandTrackingKeypoint_MAX";
declare var EHandTrackingKeypoint: {
  Thumb_Tip: "Thumb_Tip",
  Thumb_IP: "Thumb_IP",
  Thumb_MCP: "Thumb_MCP",
  Thumb_CMC: "Thumb_CMC",
  Index_Tip: "Index_Tip",
  Index_DIP: "Index_DIP",
  Index_PIP: "Index_PIP",
  Index_MCP: "Index_MCP",
  Middle_Tip: "Middle_Tip",
  Middle_DIP: "Middle_DIP",
  Middle_PIP: "Middle_PIP",
  Middle_MCP: "Middle_MCP",
  Ring_Tip: "Ring_Tip",
  Ring_DIP: "Ring_DIP",
  Ring_PIP: "Ring_PIP",
  Ring_MCP: "Ring_MCP",
  Pinky_Tip: "Pinky_Tip",
  Pinky_DIP: "Pinky_DIP",
  Pinky_PIP: "Pinky_PIP",
  Pinky_MCP: "Pinky_MCP",
  Wrist_Center: "Wrist_Center",
  Wrist_Ulnar: "Wrist_Ulnar",
  Wrist_Radial: "Wrist_Radial",
  Hand_Center: "Hand_Center",
  EHandTrackingKeypoint_MAX: "EHandTrackingKeypoint_MAX"
};
declare class MagicLeapHandTrackingFunctionLibrary
  mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MagicLeapHandTrackingFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MagicLeapHandTrackingFunctionLibrary;
  static GetDefaultObject(): MagicLeapHandTrackingFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapHandTrackingFunctionLibrary;
  static SetStaticGestureConfidenceThreshold(
    Gesture: EHandTrackingGestureT,
    Confidence: number
  ): void;
  static SetConfiguration(
    StaticGesturesToActivate: EHandTrackingGestureT[],
    KeypointsFilterLevel: EHandTrackingKeypointTFilterLevelT,
    GestureFilterLevel: EHandTrackingGestureTFilterLevel,
    HandSwitchingFilterLevel: EHandTrackingGestureTFilterLevel,
    bTrackingEnabled: boolean
  ): boolean;
  static GetStaticGestureConfidenceThreshold(
    Gesture: EHandTrackingGestureT
  ): number;
  static GetMagicLeapHandTrackingLiveLinkSource(
    SourceHandle?: LiveLinkSourceHandle
  ): {
    SourceHandle: LiveLinkSourceHandle,
    $: boolean
  };
  static GetHandThumbTip(
    Hand: EControllerHandT,
    TransformSpace: EGestureTransformSpaceT,
    Secondary?: Transform
  ): {
    Secondary: Transform,
    $: boolean
  };
  static GetHandIndexFingerTip(
    Hand: EControllerHandT,
    TransformSpace: EGestureTransformSpaceT,
    Pointer?: Transform
  ): {
    Pointer: Transform,
    $: boolean
  };
  static GetHandCenterNormalized(
    Hand: EControllerHandT,
    HandCenterNormalized?: Vector
  ): {
    HandCenterNormalized: Vector,
    $: boolean
  };
  static GetHandCenter(
    Hand: EControllerHandT,
    HandCenter?: Transform
  ): {
    HandCenter: Transform,
    $: boolean
  };
  static GetGestureKeypointTransform(
    Hand: EControllerHandT,
    Keypoint: EHandTrackingKeypointT,
    TransformSpace: EGestureTransformSpaceT,
    Transform?: Transform
  ): {
    Transform: Transform,
    $: boolean
  };
  static GetGestureKeypoints(
    Hand: EControllerHandT,
    Keypoints?: Transform[]
  ): {
    Keypoints: Transform[],
    $: boolean
  };
  static GetCurrentGestureConfidence(
    Hand: EControllerHandT,
    Confidence?: number
  ): {
    Confidence: number,
    $: boolean
  };
  static GetCurrentGesture(
    Hand: EControllerHandT,
    Gesture?: EHandTrackingGestureT
  ): {
    Gesture: EHandTrackingGestureT,
    $: boolean
  };
  static GetConfiguration(
    ActiveStaticGestures?: EHandTrackingGestureT[],
    KeypointsFilterLevel?: EHandTrackingKeypointTFilterLevelT,
    GestureFilterLevel?: EHandTrackingGestureTFilterLevel,
    HandSwitchingFilterLevel?: EHandTrackingGestureTFilterLevel,
    bTrackingEnabled?: boolean
  ): {
    ActiveStaticGestures: EHandTrackingGestureT[],
    KeypointsFilterLevel: EHandTrackingKeypointTFilterLevelT,
    GestureFilterLevel: EHandTrackingGestureTFilterLevel,
    HandSwitchingFilterLevel: EHandTrackingGestureTFilterLevel,
    bTrackingEnabled: boolean,
    $: boolean
  };
  static C(Other: UObject | any): MagicLeapHandTrackingFunctionLibrary;
}
declare type EMagicLeapIdentityKeyT =
  | "GivenName"
  | "FamilyName"
  | "Email"
  | "Bio"
  | "PhoneNumber"
  | "Avatar2D"
  | "Avatar3D"
  | "Unknown"
  | "EMagicLeapIdentityKey_MAX";
declare var EMagicLeapIdentityKey: {
  GivenName: "GivenName",
  FamilyName: "FamilyName",
  Email: "Email",
  Bio: "Bio",
  PhoneNumber: "PhoneNumber",
  Avatar2D: "Avatar2D",
  Avatar3D: "Avatar3D",
  Unknown: "Unknown",
  EMagicLeapIdentityKey_MAX: "EMagicLeapIdentityKey_MAX"
};
declare class MagicLeapIdentityAttribute {
  Attribute: EMagicLeapIdentityKeyT;
  Value: string;
  clone(): MagicLeapIdentityAttribute;
  static C(Other: UObject | any): MagicLeapIdentityAttribute;
}
declare type EMagicLeapIdentityErrorT =
  | "Ok"
  | "InvalidParam"
  | "AllocFailed"
  | "PrivilegeDenied"
  | "FailedToConnectToLocalService"
  | "FailedToConnectToCloudService"
  | "CloudAuthentication"
  | "InvalidInformationFromCloud"
  | "NotLoggedIn"
  | "ExpiredCredentials"
  | "FailedToGetUserProfile"
  | "Unauthorized"
  | "CertificateError"
  | "RejectedByCloud"
  | "AlreadyLoggedIn"
  | "ModifyIsNotSupported"
  | "NetworkError"
  | "UnspecifiedFailure"
  | "EMagicLeapIdentityError_MAX";
declare var EMagicLeapIdentityError: {
  Ok: "Ok",
  InvalidParam: "InvalidParam",
  AllocFailed: "AllocFailed",
  PrivilegeDenied: "PrivilegeDenied",
  FailedToConnectToLocalService: "FailedToConnectToLocalService",
  FailedToConnectToCloudService: "FailedToConnectToCloudService",
  CloudAuthentication: "CloudAuthentication",
  InvalidInformationFromCloud: "InvalidInformationFromCloud",
  NotLoggedIn: "NotLoggedIn",
  ExpiredCredentials: "ExpiredCredentials",
  FailedToGetUserProfile: "FailedToGetUserProfile",
  Unauthorized: "Unauthorized",
  CertificateError: "CertificateError",
  RejectedByCloud: "RejectedByCloud",
  AlreadyLoggedIn: "AlreadyLoggedIn",
  ModifyIsNotSupported: "ModifyIsNotSupported",
  NetworkError: "NetworkError",
  UnspecifiedFailure: "UnspecifiedFailure",
  EMagicLeapIdentityError_MAX: "EMagicLeapIdentityError_MAX"
};
declare class MagicLeapIdentity mixins UObject {
  static Load(ResourceName: string): MagicLeapIdentity;
  static Find(Outer: UObject, ResourceName: string): MagicLeapIdentity;
  static GetDefaultObject(): MagicLeapIdentity;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapIdentity;
  RequestAttributeValue(
    RequestedAttributeList: EMagicLeapIdentityKeyT[],
    RequestedAttributeValues?: MagicLeapIdentityAttribute[]
  ): {
    RequestedAttributeValues: MagicLeapIdentityAttribute[],
    $: EMagicLeapIdentityErrorT
  };
  GetAllAvailableAttributes(
    AvailableAttributes?: EMagicLeapIdentityKeyT[]
  ): {
    AvailableAttributes: EMagicLeapIdentityKeyT[],
    $: EMagicLeapIdentityErrorT
  };
  static C(Other: UObject | any): MagicLeapIdentity;
}
declare class DirectoryWatcher mixins UObject {
  Added: string[];
  Modified: string[];
  Removed: string[];
  OnChanged: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): DirectoryWatcher;
  static Find(Outer: UObject, ResourceName: string): DirectoryWatcher;
  static GetDefaultObject(): DirectoryWatcher;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DirectoryWatcher;
  Watch(Directory: string): void;
  Unwatch(): void;
  Contains(File: string): boolean;
  static C(Other: UObject | any): DirectoryWatcher;
}
declare class JavascriptContext mixins UObject {
  Paths: string[];
  static Load(ResourceName: string): JavascriptContext;
  static Find(Outer: UObject, ResourceName: string): JavascriptContext;
  static GetDefaultObject(): JavascriptContext;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptContext;
  WriteDTS(Target: string, bIncludingTooltip: boolean): boolean;
  WriteAliases(Target: string): boolean;
  SetContextId(Name: string): void;
  SetAsDebugContext(InPort: number): void;
  RunScript(Script: string, bOutput: boolean): string;
  RunFile(Filename: string): void;
  ResetAsDebugContext(): void;
  RequestV8GarbageCollection(): void;
  ReadScriptFile(Filename: string): string;
  IsDebugContext(): boolean;
  GetScriptFileFullPath(Filename: string): string;
  FindPathFile(
    TargetRootPath: string,
    TargetFileName: string,
    OutFiles?: string[]
  ): {
    OutFiles: string[]
  };
  Expose(Name: string, UObject: UObject): void;
  DestroyInspector(): void;
  CreateInspector(Port: number): void;
  static C(Other: UObject | any): JavascriptContext;
}
declare class JavascriptHeapStatistics {
  TotalHeapSize: number;
  TotalHeapSizeExecutable: number;
  TotalPhysicalSize: number;
  TotalAvailableSize: number;
  UsedHeapSize: number;
  HeapSizeLimit: number;
  MallocedMemory: number;
  bDoesZapGarbage: boolean;
  clone(): JavascriptHeapStatistics;
  static C(Other: UObject | any): JavascriptHeapStatistics;
}
declare class JavascriptIsolate mixins UObject {
  static Load(ResourceName: string): JavascriptIsolate;
  static Find(Outer: UObject, ResourceName: string): JavascriptIsolate;
  static GetDefaultObject(): JavascriptIsolate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptIsolate;
  Init(bIsEditor: boolean): void;
  GetHeapStatistics(
    Statistics?: JavascriptHeapStatistics
  ): {
    Statistics: JavascriptHeapStatistics
  };
  CreateContext(): JavascriptContext;
  static C(Other: UObject | any): JavascriptIsolate;
}
declare class JavascriptAsset {
  Name: string;
  Asset: SoftObjectPath;
  clone(): JavascriptAsset;
  static C(Other: UObject | any): JavascriptAsset;
}
declare class JavascriptClassAsset {
  Name: string;
  Class: UnrealEngineClassT;
  clone(): JavascriptClassAsset;
  static C(Other: UObject | any): JavascriptClassAsset;
}
declare class JavascriptComponent mixins ActorComponent {
  ScriptSourceFile: string;
  bActiveWithinEditor: boolean;
  JavascriptContext: JavascriptContext;
  JavascriptIsolate: JavascriptIsolate;
  OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
  OnBeginPlay: UnrealEngineDelegate<() => void>;
  OnEndPlay: UnrealEngineDelegate<() => void>;
  OnInvoke: UnrealEngineDelegate<(Name: string) => void>;
  Assets: JavascriptAsset[];
  ClassAssets: JavascriptClassAsset[];
  static Load(ResourceName: string): JavascriptComponent;
  static Find(Outer: UObject, ResourceName: string): JavascriptComponent;
  static GetDefaultObject(): JavascriptComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptComponent;
  ResolveClass(Name: string): UnrealEngineClassT;
  ResolveAsset(Name: string, bTryLoad: boolean): UObject;
  Invoke(Name: string): void;
  ForceGC(): void;
  Expose(ExposedAs: string, UObject: UObject): void;
  static C(Other: UObject | any): JavascriptComponent;
}
declare class JavascriptDelegate mixins UObject {
  static Load(ResourceName: string): JavascriptDelegate;
  static Find(Outer: UObject, ResourceName: string): JavascriptDelegate;
  static GetDefaultObject(): JavascriptDelegate;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptDelegate;
  Fire(): void;
  static C(Other: UObject | any): JavascriptDelegate;
}
declare class JavascriptGeneratedClass mixins BlueprintGeneratedClass {
  static Load(ResourceName: string): JavascriptGeneratedClass<any>;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGeneratedClass<any>;
  static GetDefaultObject(): JavascriptGeneratedClass<any>;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGeneratedClass<any>;
  static C(Other: UObject | any): JavascriptGeneratedClass;
}
declare class JavascriptGeneratedClass_Native mixins BlueprintGeneratedClass {
  static Load(ResourceName: string): JavascriptGeneratedClass_Native;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGeneratedClass_Native;
  static GetDefaultObject(): JavascriptGeneratedClass_Native;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGeneratedClass_Native;
  static C(Other: UObject | any): JavascriptGeneratedClass_Native;
}
declare class JavascriptGeneratedFunction mixins UFunction {
  static Load(ResourceName: string): JavascriptGeneratedFunction;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGeneratedFunction;
  static GetDefaultObject(): JavascriptGeneratedFunction;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGeneratedFunction;
  static C(Other: UObject | any): JavascriptGeneratedFunction;
}
declare class JavascriptGlobalDelegates mixins UObject {
  static Load(ResourceName: string): JavascriptGlobalDelegates;
  static Find(Outer: UObject, ResourceName: string): JavascriptGlobalDelegates;
  static GetDefaultObject(): JavascriptGlobalDelegates;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGlobalDelegates;
  UnbindAll(): void;
  Unbind(Key: string): void;
  RedirectorFollowed(PackageName: string, Redirector: UObject): void;
  PreLoadMap(MapName: string): void;
  PreGarbageCollectDelegate(): void;
  PostLoadMapWithWorld(World: World): void;
  PostGarbageCollect(): void;
  PostDemoPlay(): void;
  PostApplyLevelOffset(
    Level: Level,
    World: World,
    Offset: Vector,
    Flag: boolean
  ): void;
  PackageCreatedForLoad(InPackage: Package): void;
  OnWorldCleanup(
    World: World,
    bSessionEnded: boolean,
    bCleanupResources: boolean
  ): void;
  OnPreWorldInitialization_Friendly(World: World): void;
  OnPreWorldFinishDestroy(World: World): void;
  OnPreObjectPropertyChanged_Friendly(
    InObject: UObject,
    Property: Property,
    MemberProperty: Property
  ): void;
  OnPostWorldInitialization_Friendly(World: World): void;
  OnPostWorldCreation(World: World): void;
  OnPostDuplicate_Friendly(World: World, bDuplicateForPIE: boolean): void;
  OnObjectSaved(UObject: UObject): void;
  OnObjectPropertyChanged_Friendly(
    InObject: UObject,
    Property: Property,
    MemberProperty: Property,
    ChangeType: number
  ): void;
  OnObjectModified(UObject: UObject): void;
  OnAssetLoaded(UObject: UObject): void;
  LevelRemovedFromWorld(Level: Level, World: World): void;
  LevelAddedToWorld(Level: Level, World: World): void;
  Bind(Key: string): void;
  static C(Other: UObject | any): JavascriptGlobalDelegates;
}
declare class JavascriptStaticCache mixins UObject {
  Isolates: JavascriptIsolate[];
  static Load(ResourceName: string): JavascriptStaticCache;
  static Find(Outer: UObject, ResourceName: string): JavascriptStaticCache;
  static GetDefaultObject(): JavascriptStaticCache;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptStaticCache;
  static C(Other: UObject | any): JavascriptStaticCache;
}
declare class JavascriptStubStruct {
  clone(): JavascriptStubStruct;
  static C(Other: UObject | any): JavascriptStubStruct;
}
declare class JavascriptFunction {
  clone(): JavascriptFunction;
  static C(Other: UObject | any): JavascriptFunction;
  CallJS(CustomStruct: JavascriptStubStruct): void;
  static CallJS(
    UFunction: JavascriptFunction,
    CustomStruct: JavascriptStubStruct
  ): void;
}
declare class JavascriptStreamableManager {
  clone(): JavascriptStreamableManager;
  static C(Other: UObject | any): JavascriptStreamableManager;
  IsAsyncLoadComplete(Target: SoftObjectPath): boolean;
  RequestAsyncLoad(
    TargetsToStream: SoftObjectPath[],
    DelegateToCall: JavascriptFunction,
    Priority: number
  ): void;
  SimpleAsyncLoad(Target: SoftObjectPath, Priority: number): void;
  Unload(Target: SoftObjectPath): void;
  static IsAsyncLoadComplete(
    Manager: JavascriptStreamableManager,
    Target: SoftObjectPath
  ): boolean;
  static RequestAsyncLoad(
    Manager: JavascriptStreamableManager,
    TargetsToStream: SoftObjectPath[],
    DelegateToCall: JavascriptFunction,
    Priority: number
  ): void;
  static SimpleAsyncLoad(
    Manager: JavascriptStreamableManager,
    Target: SoftObjectPath,
    Priority: number
  ): void;
  static Unload(
    Manager: JavascriptStreamableManager,
    Target: SoftObjectPath
  ): void;
  static CreateStreamableManager(): JavascriptStreamableManager;
}
declare class JavascriptInternetAddr {
  clone(): JavascriptInternetAddr;
  static C(Other: UObject | any): JavascriptInternetAddr;
  SetIp(
    ResolvedAddress?: string,
    bValid?: boolean
  ): {
    Addr: JavascriptInternetAddr,
    bValid: boolean
  };
  SetPort(
    Port?: number
  ): {
    Addr: JavascriptInternetAddr
  };
  static SetIp(
    Addr?: JavascriptInternetAddr,
    ResolvedAddress?: string,
    bValid?: boolean
  ): {
    Addr: JavascriptInternetAddr,
    bValid: boolean
  };
  static SetPort(
    Addr?: JavascriptInternetAddr,
    Port?: number
  ): {
    Addr: JavascriptInternetAddr
  };
  static CreateInternetAddr(): JavascriptInternetAddr;
}
declare class JavascriptSocket {
  clone(): JavascriptSocket;
  static C(Other: UObject | any): JavascriptSocket;
  SendMemoryTo(
    ToAddr?: JavascriptInternetAddr,
    NumBytes?: number,
    BytesSent?: number
  ): {
    Socket: JavascriptSocket,
    BytesSent: number,
    $: boolean
  };
  static SendMemoryTo(
    Socket?: JavascriptSocket,
    ToAddr?: JavascriptInternetAddr,
    NumBytes?: number,
    BytesSent?: number
  ): {
    Socket: JavascriptSocket,
    BytesSent: number,
    $: boolean
  };
  static CreateSocket(
    SocketType: string,
    Description: string,
    bForceUDP: boolean
  ): JavascriptSocket;
}
declare type EJavascriptStatDataTypeT =
  | "Invalid"
  | "ST_None"
  | "ST_int64"
  | "ST_double"
  | "ST_FName"
  | "ST_Ptr"
  | "EJavascriptStatDataType_MAX";
declare var EJavascriptStatDataType: {
  Invalid: "Invalid",
  ST_None: "ST_None",
  ST_int64: "ST_int64",
  ST_double: "ST_double",
  ST_FName: "ST_FName",
  ST_Ptr: "ST_Ptr",
  EJavascriptStatDataType_MAX: "EJavascriptStatDataType_MAX"
};
declare type EJavascriptStatOperationT =
  | "Invalid"
  | "SetLongName"
  | "AdvanceFrameEventGameThread"
  | "AdvanceFrameEventRenderThread"
  | "CycleScopeStart"
  | "CycleScopeEnd"
  | "SpecialMessageMarker"
  | "Set"
  | "Clear"
  | "Add"
  | "Subtract"
  | "ChildrenStart"
  | "ChildrenEnd"
  | "Leaf"
  | "MaxVal"
  | "Memory"
  | "EJavascriptStatOperation_MAX";
declare var EJavascriptStatOperation: {
  Invalid: "Invalid",
  SetLongName: "SetLongName",
  AdvanceFrameEventGameThread: "AdvanceFrameEventGameThread",
  AdvanceFrameEventRenderThread: "AdvanceFrameEventRenderThread",
  CycleScopeStart: "CycleScopeStart",
  CycleScopeEnd: "CycleScopeEnd",
  SpecialMessageMarker: "SpecialMessageMarker",
  Set: "Set",
  Clear: "Clear",
  Add: "Add",
  Subtract: "Subtract",
  ChildrenStart: "ChildrenStart",
  ChildrenEnd: "ChildrenEnd",
  Leaf: "Leaf",
  MaxVal: "MaxVal",
  Memory: "Memory",
  EJavascriptStatOperation_MAX: "EJavascriptStatOperation_MAX"
};
declare class JavascriptStat {
  clone(): JavascriptStat;
  static C(Other: UObject | any): JavascriptStat;
  AddMessage(InStatOperation: EJavascriptStatOperationT): void;
  AddMessage_float(
    InStatOperation: EJavascriptStatOperationT,
    Value: number,
    bIsCycle: boolean
  ): void;
  AddMessage_int(
    InStatOperation: EJavascriptStatOperationT,
    Value: number,
    bIsCycle: boolean
  ): void;
  static AddMessage(
    Stat: JavascriptStat,
    InStatOperation: EJavascriptStatOperationT
  ): void;
  static AddMessage_float(
    Stat: JavascriptStat,
    InStatOperation: EJavascriptStatOperationT,
    Value: number,
    bIsCycle: boolean
  ): void;
  static AddMessage_int(
    Stat: JavascriptStat,
    InStatOperation: EJavascriptStatOperationT,
    Value: number,
    bIsCycle: boolean
  ): void;
  static NewStat(
    InStatName: string,
    InStatDesc: string,
    InGroupName: string,
    InGroupCategory: string,
    InGroupDesc: string,
    bDefaultEnable: boolean,
    bShouldClearEveryFrame: boolean,
    InStatType: EJavascriptStatDataTypeT,
    bCycleStat: boolean,
    bSortByName: boolean
  ): JavascriptStat;
}
declare type ELogVerbosity_JST =
  | "NoLogging"
  | "Fatal"
  | "Error"
  | "Warning"
  | "Display"
  | "Log"
  | "Verbose"
  | "VeryVerbose"
  | "ELogVerbosity_MAX";
declare var ELogVerbosity_JS: {
  NoLogging: "NoLogging",
  Fatal: "Fatal",
  Error: "Error",
  Warning: "Warning",
  Display: "Display",
  Log: "Log",
  Verbose: "Verbose",
  VeryVerbose: "VeryVerbose",
  ELogVerbosity_MAX: "ELogVerbosity_MAX"
};
declare class JavascriptLogCategory {
  clone(): JavascriptLogCategory;
  static C(Other: UObject | any): JavascriptLogCategory;
  GetCategoryName(): string;
  IsSuppressed(Verbosity: ELogVerbosity_JST): boolean;
  Log(
    Verbosity: ELogVerbosity_JST,
    Message: string,
    Filename: string,
    LineNumber: number
  ): void;
  static GetCategoryName(Category: JavascriptLogCategory): string;
  static IsSuppressed(
    Category: JavascriptLogCategory,
    Verbosity: ELogVerbosity_JST
  ): boolean;
  static Log(
    Category: JavascriptLogCategory,
    Verbosity: ELogVerbosity_JST,
    Message: string,
    Filename: string,
    LineNumber: number
  ): void;
  static CreateLogCategory(
    CategoryName: string,
    InDefaultVerbosity: ELogVerbosity_JST
  ): JavascriptLogCategory;
}
declare class JavscriptProperty {
  Type: string;
  Name: string;
  clone(): JavscriptProperty;
  static C(Other: UObject | any): JavscriptProperty;
}
declare class JavascriptProfileNode {
  clone(): JavascriptProfileNode;
  static C(Other: UObject | any): JavascriptProfileNode;
  GetBailoutReason(): string;
  GetCallUid(): number;
  GetChild(index: number): JavascriptProfileNode;
  GetChildrenCount(): number;
  GetColumnNumber(): number;
  GetDeoptInfo_Reason(index: number): string;
  GetDeoptInfo_Stack(index: number): string;
  GetDeoptInfosCount(index: number): number;
  GetFunctionName(): string;
  GetHitCount(): number;
  GetHitLineCount(): number;
  GetLineNumber(): number;
  GetNodeId(): number;
  GetScriptId(): number;
  GetScriptResourceName(): string;
  static GetBailoutReason(UNode: JavascriptProfileNode): string;
  static GetCallUid(UNode: JavascriptProfileNode): number;
  static GetChild(
    UNode: JavascriptProfileNode,
    index: number
  ): JavascriptProfileNode;
  static GetChildrenCount(UNode: JavascriptProfileNode): number;
  static GetColumnNumber(UNode: JavascriptProfileNode): number;
  static GetDeoptInfo_Reason(
    UNode: JavascriptProfileNode,
    index: number
  ): string;
  static GetDeoptInfo_Stack(
    UNode: JavascriptProfileNode,
    index: number
  ): string;
  static GetDeoptInfosCount(
    UNode: JavascriptProfileNode,
    index: number
  ): number;
  static GetFunctionName(UNode: JavascriptProfileNode): string;
  static GetHitCount(UNode: JavascriptProfileNode): number;
  static GetHitLineCount(UNode: JavascriptProfileNode): number;
  static GetLineNumber(UNode: JavascriptProfileNode): number;
  static GetNodeId(UNode: JavascriptProfileNode): number;
  static GetScriptId(UNode: JavascriptProfileNode): number;
  static GetScriptResourceName(UNode: JavascriptProfileNode): string;
}
declare class JavascriptLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptLibrary;
  static GetDefaultObject(): JavascriptLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptLibrary;
  static WriteStringToFile(
    UObject: UObject,
    Filename: string,
    Data: string,
    EncodingOptions: EJavascriptEncodingOptionsT
  ): boolean;
  static WriteFile(UObject: UObject, Filename: string): boolean;
  static V8_SetIdleTaskBudget(BudgetInSeconds: number): void;
  static V8_SetFlagsFromString(V8Flags: string): void;
  static UnregisterComponent(ActorComponent: ActorComponent): void;
  static Unload(
    Manager: JavascriptStreamableManager,
    Target: SoftObjectPath
  ): void;
  static TryLoadByPath(Path: string): UObject;
  static SimpleAsyncLoad(
    Manager: JavascriptStreamableManager,
    Target: SoftObjectPath,
    Priority: number
  ): void;
  static SetRootComponent(Actor: Actor, Component: SceneComponent): void;
  static SetPort(
    Addr?: JavascriptInternetAddr,
    Port?: number
  ): {
    Addr: JavascriptInternetAddr
  };
  static SetObjectFlags(Obj: UObject, Flags: number): void;
  static SetMobility(
    SceneComponent: SceneComponent,
    Type: EComponentMobilityT
  ): void;
  static SetMobile(SceneComponent: SceneComponent): void;
  static SetIp(
    Addr?: JavascriptInternetAddr,
    ResolvedAddress?: string,
    bValid?: boolean
  ): {
    Addr: JavascriptInternetAddr,
    bValid: boolean
  };
  static SetClientTravel(
    Engine: Engine,
    InWorld: World,
    NextURL: string,
    InTravelType: ETravelTypeT
  ): void;
  static SetActorFlags(Actor: Actor, Flags: number): void;
  static SendMemoryTo(
    Socket?: JavascriptSocket,
    ToAddr?: JavascriptInternetAddr,
    NumBytes?: number,
    BytesSent?: number
  ): {
    Socket: JavascriptSocket,
    BytesSent: number,
    $: boolean
  };
  static SegmentIntersection2D(
    SegmentStartA: Vector,
    SegmentEndA: Vector,
    SegmentStartB: Vector,
    SegmentEndB: Vector,
    IntersectionPoint?: Vector
  ): {
    IntersectionPoint: Vector,
    $: boolean
  };
  static ResolveIp(
    HostName: string,
    OutIp?: string
  ): {
    OutIp: string,
    $: boolean
  };
  static ReregisterComponent(ActorComponent: ActorComponent): void;
  static ReregisterAllComponents(Actor: Actor): void;
  static RequestAsyncLoad(
    Manager: JavascriptStreamableManager,
    TargetsToStream: SoftObjectPath[],
    DelegateToCall: JavascriptFunction,
    Priority: number
  ): void;
  static RegisterComponent(ActorComponent: ActorComponent): void;
  static ReadStringFromFile(UObject: UObject, Filename: string): string;
  static ReadFile(UObject: UObject, Filename: string): boolean;
  static ReadDirectory(
    UObject: UObject,
    Directory: string,
    OutItems?: DirectoryItem[]
  ): {
    OutItems: DirectoryItem[],
    $: boolean
  };
  static NewStat(
    InStatName: string,
    InStatDesc: string,
    InGroupName: string,
    InGroupCategory: string,
    InGroupDesc: string,
    bDefaultEnable: boolean,
    bShouldClearEveryFrame: boolean,
    InStatType: EJavascriptStatDataTypeT,
    bCycleStat: boolean,
    bSortByName: boolean
  ): JavascriptStat;
  static MarkRenderStateDirty(Component: ActorComponent): void;
  static MakeDirectory(Path: string, Tree: boolean): boolean;
  static Log(
    Category: JavascriptLogCategory,
    Verbosity: ELogVerbosity_JST,
    Message: string,
    Filename: string,
    LineNumber: number
  ): void;
  static LoadPackage(InOuter: Package, PackageName: string): Package;
  static IsSuppressed(
    Category: JavascriptLogCategory,
    Verbosity: ELogVerbosity_JST
  ): boolean;
  static IsRegistered(ActorComponent: ActorComponent): boolean;
  static IsPlayInPreview(World: World): boolean;
  static IsPlayInEditor(World: World): boolean;
  static IsPendingKill(InActor: Actor): boolean;
  static IsGeneratedByBlueprint(InClass: UnrealEngineClassT): boolean;
  static IsGameWorld(World: World): boolean;
  static IsAsyncLoadComplete(
    Manager: JavascriptStreamableManager,
    Target: SoftObjectPath
  ): boolean;
  static HasUndo(Engine: Engine): boolean;
  static HasAnyPackageFlags(Package: Package, Flags: number): boolean;
  static HasAnyFlags(UObject: UObject, Flags: number): boolean;
  static HandleSeamlessTravelPlayer(
    GameMode: GameModeBase,
    C?: Controller
  ): {
    C: Controller
  };
  static GetWorldBounds(InWorld: World): Box;
  static GetSuperClasses(
    InClass: UnrealEngineClassT
  ): UnrealEngineClassT[];
  static GetStructProperties(
    StructName: string,
    bIncludeSuper: boolean
  ): JavscriptProperty[];
  static GetScriptResourceName(UNode: JavascriptProfileNode): string;
  static GetScriptId(UNode: JavascriptProfileNode): number;
  static GetPlatformName(): string;
  static GetOutermost(UObject: UObject): UObject;
  static GetOuter(UObject: UObject): UObject;
  static GetObjectsWithOuter(
    Outer: UObject,
    Results?: UObject[],
    bIncludeNestedObjects?: boolean,
    ExclusionFlags?: number,
    ExclusionInternalFlags?: number
  ): {
    Results: UObject[]
  };
  static GetObjectsOfClass(
    ClassToLookFor: UnrealEngineClassT,
    Results?: UObject[],
    bIncludeDerivedClasses?: boolean,
    ExcludeFlags?: number,
    ExclusionInternalFlags?: number
  ): {
    Results: UObject[]
  };
  static GetNodeId(UNode: JavascriptProfileNode): number;
  static GetName(UObject: UObject): string;
  static GetModel(World: World): Model;
  static GetMetaData(Field: Field, Key: string): string;
  static GetLineNumber(UNode: JavascriptProfileNode): number;
  static GetLevels(World: World): Level[];
  static GetLevel(Actor: Actor): Level;
  static GetLastRenderTime(Actor: Actor): number;
  static GetHitLineCount(UNode: JavascriptProfileNode): number;
  static GetHitCount(UNode: JavascriptProfileNode): number;
  static GetFunctionParmsSize(UFunction: UFunction): number;
  static GetFunctionName(UNode: JavascriptProfileNode): string;
  static GetFileSize(UObject: UObject, Filename: string): number;
  static GetFields(UObject: UObject, bIncludeSuper: boolean): Field[];
  static GetDynamicBinding(
    Outer: UnrealEngineClassT,
    BindingObjectClass: UnrealEngineClassT
  ): DynamicBlueprintBinding;
  static GetDir(UObject: UObject, WhichDir: string): string;
  static GetDerivedClasses(
    ClassToLookFor: UnrealEngineClassT,
    Results?: UnrealEngineClassT[],
    bRecursive?: boolean
  ): {
    Results: UnrealEngineClassT[]
  };
  static GetDeoptInfosCount(
    UNode: JavascriptProfileNode,
    index: number
  ): number;
  static GetDeoptInfo_Stack(
    UNode: JavascriptProfileNode,
    index: number
  ): string;
  static GetDeoptInfo_Reason(
    UNode: JavascriptProfileNode,
    index: number
  ): string;
  static GetCurrentProcessId(): number;
  static GetColumnNumber(UNode: JavascriptProfileNode): number;
  static GetClassPathName(Class: UnrealEngineClassT): string;
  static GetChildrenCount(UNode: JavascriptProfileNode): number;
  static GetChild(
    UNode: JavascriptProfileNode,
    index: number
  ): JavascriptProfileNode;
  static GetCategoryName(Category: JavascriptLogCategory): string;
  static GetCallUid(UNode: JavascriptProfileNode): number;
  static GetBlueprintGeneratedClassFromPath(
    Path: string
  ): UnrealEngineClassT;
  static GetBlueprintGeneratedClass(
    Blueprint: Blueprint
  ): UnrealEngineClassT;
  static GetBailoutReason(UNode: JavascriptProfileNode): string;
  static GetArchetypePathName(UObject: UObject): string;
  static GetAllActorsOfClassAndTags(
    WorldContextObject: UObject,
    ActorClass: UnrealEngineClassT,
    Tags_Accept: string[],
    Tags_Deny: string[],
    OutActors?: Actor[]
  ): {
    OutActors: Actor[]
  };
  static GenerateNavigation(InWorld: World, NavData: RecastNavMesh): void;
  static FindPackage(InOuter: UObject, PackageName: string): Package;
  static FindObjectWithOuter(
    Outer: UObject,
    ClassToLookFor: UnrealEngineClassT,
    NameToLookFor: string
  ): UObject;
  static FileExists(Filename: string): boolean;
  static Duplicate(UObject: UObject, Outer: UObject, Name: string): UObject;
  static DirectoryExists(InDirectory: string): boolean;
  static DeleteFile(Filename: string, ReadOnly: boolean): boolean;
  static DeleteDirectory(
    Path: string,
    RequireExists: boolean,
    Tree: boolean
  ): boolean;
  static CreateStreamableManager(): JavascriptStreamableManager;
  static CreateSocket(
    SocketType: string,
    Description: string,
    bForceUDP: boolean
  ): JavascriptSocket;
  static CreatePackage(Outer: UObject, PackageName: string): Package;
  static CreateLogCategory(
    CategoryName: string,
    InDefaultVerbosity: ELogVerbosity_JST
  ): JavascriptLogCategory;
  static CreateInternetAddr(): JavascriptInternetAddr;
  static CreateEnum(Outer: UObject, Name: string, DisplayNames: string[]): Enum;
  static ClipboardPaste(): string;
  static ClipboardCopy(string: string): void;
  static CallJS(
    UFunction: JavascriptFunction,
    CustomStruct: JavascriptStubStruct
  ): void;
  static AddMessage_int(
    Stat: JavascriptStat,
    InStatOperation: EJavascriptStatOperationT,
    Value: number,
    bIsCycle: boolean
  ): void;
  static AddMessage_float(
    Stat: JavascriptStat,
    InStatOperation: EJavascriptStatOperationT,
    Value: number,
    bIsCycle: boolean
  ): void;
  static AddMessage(
    Stat: JavascriptStat,
    InStatOperation: EJavascriptStatOperationT
  ): void;
  static AddDynamicBinding(
    Outer: UnrealEngineClassT,
    BindingObject: DynamicBlueprintBinding
  ): void;
  static Actor_GetWorld(Actor: Actor): World;
  static C(Other: UObject | any): JavascriptLibrary;
}
declare class JavascriptMemoryObject mixins UObject {
  static Load(ResourceName: string): JavascriptMemoryObject;
  static Find(Outer: UObject, ResourceName: string): JavascriptMemoryObject;
  static GetDefaultObject(): JavascriptMemoryObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptMemoryObject;
  static C(Other: UObject | any): JavascriptMemoryObject;
}
declare class JavascriptRef {
  clone(): JavascriptRef;
  static C(Other: UObject | any): JavascriptRef;
}
declare class JavascriptObject mixins UObject {
  Ref: JavascriptRef;
  Func: JavascriptFunction;
  static Load(ResourceName: string): JavascriptObject;
  static Find(Outer: UObject, ResourceName: string): JavascriptObject;
  static GetDefaultObject(): JavascriptObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptObject;
  static C(Other: UObject | any): JavascriptObject;
}
declare class JavascriptOutputDevice mixins UObject {
  static Load(ResourceName: string): JavascriptOutputDevice;
  static Find(Outer: UObject, ResourceName: string): JavascriptOutputDevice;
  static GetDefaultObject(): JavascriptOutputDevice;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptOutputDevice;
  OnMessage(
    Message: string,
    Verbosity: ELogVerbosity_JST,
    Category: string
  ): void;
  static Log(
    Category: string,
    Verbosity: ELogVerbosity_JST,
    Filename: string,
    LineNumber: number,
    Message: string
  ): void;
  Kill(): void;
  static C(Other: UObject | any): JavascriptOutputDevice;
}
declare class JavascriptProcess mixins UObject {
  static Load(ResourceName: string): JavascriptProcess;
  static Find(Outer: UObject, ResourceName: string): JavascriptProcess;
  static GetDefaultObject(): JavascriptProcess;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptProcess;
  WriteToPipe(
    Message: string,
    OutWritten?: string
  ): {
    OutWritten: string,
    $: boolean
  };
  Wait(): void;
  Terminate(KillTree: boolean): void;
  static Sleep(Seconds: number): void;
  static SimulateKeypress(KeyEvent: number): void;
  static SetEnvironmentVar(VarName: string, VarValue: string): void;
  ReadFromPipe(): string;
  ReadArrayFromPipe(
    Array?: number[]
  ): {
    Array: number[],
    $: boolean
  };
  static Open_PID(ProcessId: number): JavascriptProcess;
  static Open(ProcName: string): JavascriptProcess;
  static LaunchURL(
    URL: string,
    Parms: string,
    Error?: string
  ): {
    Error: string
  };
  IsRunning(): boolean;
  static IsApplicationRunning_PID(ProcessId: number): boolean;
  static IsApplicationRunning(ProcName: string): boolean;
  static GetString(Key: string, bFlag: boolean): string;
  GetReturnCode(
    ReturnCode?: number
  ): {
    ReturnCode: number,
    $: boolean
  };
  static GetEnvironmentVar(VarName: string): string;
  static GetApplicationName(ProcessId: number): string;
  static Create(
    URL: string,
    Parms: string,
    bLaunchDetached: boolean,
    bLaunchHidden: boolean,
    bLaunchReallyHidden: boolean,
    PriorityModifier: number,
    OptionalWorkingDirectory: string,
    bUsePipe: boolean
  ): JavascriptProcess;
  Close(): void;
  static CanLaunchURL(URL: string): boolean;
  static C(Other: UObject | any): JavascriptProcess;
}
declare class JavascriptProfile mixins UObject {
  static Load(ResourceName: string): JavascriptProfile;
  static Find(Outer: UObject, ResourceName: string): JavascriptProfile;
  static GetDefaultObject(): JavascriptProfile;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptProfile;
  static Stop(Title: string): JavascriptProfile;
  static Start(Title: string, bRecordSamples: boolean): void;
  static SetSamplingInterval(us: number): void;
  static SetIdle(is_idle: boolean): void;
  GetTopDownRoot(): JavascriptProfileNode;
  GetSampleTimestamp(index: number): number;
  GetSamplesCount(): number;
  GetSample(index: number): JavascriptProfileNode;
  static C(Other: UObject | any): JavascriptProfile;
}
declare class JavascriptSemaphore mixins UObject {
  static Load(ResourceName: string): JavascriptSemaphore;
  static Find(Outer: UObject, ResourceName: string): JavascriptSemaphore;
  static GetDefaultObject(): JavascriptSemaphore;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptSemaphore;
  Unlock(): void;
  TryLock(NanosecondsToWait: number): boolean;
  Lock(): void;
  Dispose(): void;
  static Create(
    Name: string,
    bCreate: boolean,
    MaxLocks: number
  ): JavascriptSemaphore;
  static C(Other: UObject | any): JavascriptSemaphore;
}
declare class JavascriptSettings mixins UObject {
  V8Flags: string;
  static Load(ResourceName: string): JavascriptSettings;
  static Find(Outer: UObject, ResourceName: string): JavascriptSettings;
  static GetDefaultObject(): JavascriptSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptSettings;
  static C(Other: UObject | any): JavascriptSettings;
}
declare class JavascriptSharedMemoryRegion mixins JavascriptMemoryObject {
  static Load(ResourceName: string): JavascriptSharedMemoryRegion;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptSharedMemoryRegion;
  static GetDefaultObject(): JavascriptSharedMemoryRegion;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptSharedMemoryRegion;
  Dispose(): void;
  static Create(
    Name: string,
    bCreate: boolean,
    bRead: boolean,
    bWrite: boolean,
    Size: number
  ): JavascriptSharedMemoryRegion;
  static C(Other: UObject | any): JavascriptSharedMemoryRegion;
}
declare class JavascriptAutomatedTestInstance {
  clone(): JavascriptAutomatedTestInstance;
  static C(Other: UObject | any): JavascriptAutomatedTestInstance;
  AddAnalyticsItem(InAnalyticsItem: string): void;
  AddError(InError: string): void;
  AddLogItem(InLogItem: string): void;
  AddWarning(InWarning: string): void;
  ClearExecutionInfo(): void;
  Destroy(): {
    test: JavascriptAutomatedTestInstance
  };
  SetContinue(bInContinue: boolean): void;
  static AddAnalyticsItem(
    test: JavascriptAutomatedTestInstance,
    InAnalyticsItem: string
  ): void;
  static AddError(test: JavascriptAutomatedTestInstance, InError: string): void;
  static AddLogItem(
    test: JavascriptAutomatedTestInstance,
    InLogItem: string
  ): void;
  static AddWarning(
    test: JavascriptAutomatedTestInstance,
    InWarning: string
  ): void;
  static ClearExecutionInfo(test: JavascriptAutomatedTestInstance): void;
  static Destroy(
    test?: JavascriptAutomatedTestInstance
  ): {
    test: JavascriptAutomatedTestInstance
  };
  static SetContinue(
    test: JavascriptAutomatedTestInstance,
    bInContinue: boolean
  ): void;
}
declare class JavascriptAutomatedTest {
  Name: string;
  bComplexTask: boolean;
  TestFlags: number;
  RequiredDeviceNum: number;
  TestFunctionNames: string[];
  UFunction: JavascriptFunction;
  clone(): JavascriptAutomatedTest;
  static C(Other: UObject | any): JavascriptAutomatedTest;
  Create(): JavascriptAutomatedTestInstance;
  static Create(test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
}
declare class JavascriptTestLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptTestLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptTestLibrary;
  static GetDefaultObject(): JavascriptTestLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptTestLibrary;
  static SetContinue(
    test: JavascriptAutomatedTestInstance,
    bInContinue: boolean
  ): void;
  static PushFrameCounter(): void;
  static PopFrameCounter(): void;
  static NewWorld(): World;
  static InitializeActorsForPlay(World: World, URL: URL): void;
  static DestroyWorld(World: World): void;
  static DestroyUObject(UObject: UObject): void;
  static Destroy(
    test?: JavascriptAutomatedTestInstance
  ): {
    test: JavascriptAutomatedTestInstance
  };
  static Create(test: JavascriptAutomatedTest): JavascriptAutomatedTestInstance;
  static ClearExecutionInfo(test: JavascriptAutomatedTestInstance): void;
  static BeginPlay(World: World): void;
  static AddWarning(
    test: JavascriptAutomatedTestInstance,
    InWarning: string
  ): void;
  static AddLogItem(
    test: JavascriptAutomatedTestInstance,
    InLogItem: string
  ): void;
  static AddError(test: JavascriptAutomatedTestInstance, InError: string): void;
  static AddAnalyticsItem(
    test: JavascriptAutomatedTestInstance,
    InAnalyticsItem: string
  ): void;
  static C(Other: UObject | any): JavascriptTestLibrary;
}
declare class JavascriptComboButton mixins ContentWidget {
  ComboButtonStyle: ComboButtonStyle;
  ButtonStyle: ButtonStyle;
  OnGetMenuContent: UnrealEngineDelegate<() => JavascriptSlateWidget>;
  OnMenuOpenChanged: UnrealEngineDelegate<(Value: boolean) => void>;
  OnComboBoxOpened: UnrealEngineDelegate<() => void>;
  bIsFocusable: boolean;
  bHasDownArrow: boolean;
  ForegroundColor: SlateColor;
  ButtonColorAndOpacity: SlateColor;
  ContentPadding: Margin;
  MenuPlacement: EMenuPlacementT;
  HAlign: EHorizontalAlignmentT;
  VAlign: EVerticalAlignmentT;
  static Load(ResourceName: string): JavascriptComboButton;
  static Find(Outer: UObject, ResourceName: string): JavascriptComboButton;
  static GetDefaultObject(): JavascriptComboButton;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptComboButton;
  SetIsOpen(InIsOpen: boolean, bFocusMenu: boolean): void;
  static C(Other: UObject | any): JavascriptComboButton;
}
declare class JavascriptSlateIcon {
  StyleSetName: string;
  StyleName: string;
  SmallStyleName: string;
  clone(): JavascriptSlateIcon;
  static C(Other: UObject | any): JavascriptSlateIcon;
}
declare class JavascriptComboButtonContext mixins UObject {
  OnGetLabel: UnrealEngineDelegate<() => string>;
  OnGetTooltip: UnrealEngineDelegate<() => string>;
  OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
  OnGetWidget: UnrealEngineDelegate<() => JavascriptSlateWidget>;
  OnCanExecute: UnrealEngineDelegate<() => boolean>;
  static Load(ResourceName: string): JavascriptComboButtonContext;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptComboButtonContext;
  static GetDefaultObject(): JavascriptComboButtonContext;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptComboButtonContext;
  static C(Other: UObject | any): JavascriptComboButtonContext;
}
declare class JavascriptGameViewport mixins ContentWidget {
  BackgroundColor: LinearColor;
  static Load(ResourceName: string): JavascriptGameViewport;
  static Find(Outer: UObject, ResourceName: string): JavascriptGameViewport;
  static GetDefaultObject(): JavascriptGameViewport;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGameViewport;
  Spawn(ActorClass: UnrealEngineClassT): Actor;
  SetViewRotation(Rotation: Rotator): void;
  SetViewLocation(Location: Vector): void;
  GetViewRotation(): Rotator;
  GetViewportWorld(): World;
  GetViewLocation(): Vector;
  static C(Other: UObject | any): JavascriptGameViewport;
}
declare class TableColumnHeaderStyle mixins SlateWidgetStyle {
  SortPrimaryAscendingImage: SlateBrush;
  SortPrimaryDescendingImage: SlateBrush;
  SortSecondaryAscendingImage: SlateBrush;
  SortSecondaryDescendingImage: SlateBrush;
  NormalBrush: SlateBrush;
  HoveredBrush: SlateBrush;
  MenuDropdownImage: SlateBrush;
  MenuDropdownNormalBorderBrush: SlateBrush;
  MenuDropdownHoveredBorderBrush: SlateBrush;
  clone(): TableColumnHeaderStyle;
  static C(Other: UObject | any): TableColumnHeaderStyle;
}
declare class SplitterStyle mixins SlateWidgetStyle {
  HandleNormalBrush: SlateBrush;
  HandleHighlightBrush: SlateBrush;
  clone(): SplitterStyle;
  static C(Other: UObject | any): SplitterStyle;
}
declare class HeaderRowStyle mixins SlateWidgetStyle {
  ColumnStyle: TableColumnHeaderStyle;
  LastColumnStyle: TableColumnHeaderStyle;
  ColumnSplitterStyle: SplitterStyle;
  BackgroundBrush: SlateBrush;
  ForegroundColor: SlateColor;
  clone(): HeaderRowStyle;
  static C(Other: UObject | any): HeaderRowStyle;
}
declare class JavascriptColumn {
  ID: string;
  Width: number;
  Widget: Widget;
  clone(): JavascriptColumn;
  static C(Other: UObject | any): JavascriptColumn;
}
declare class JavascriptTreeView mixins ListViewBase {
  OnGenerateRowEvent: UnrealEngineDelegate<
    (UObject: UObject, ID: string, Instance: JavascriptTreeView) => Widget
  >;
  OnExpansionChanged: UnrealEngineDelegate<
    (Item: UObject, bExpanded: boolean, Instance: JavascriptTreeView) => void
  >;
  OnContextMenuOpening: UnrealEngineDelegate<
    (Instance: JavascriptTreeView) => Widget
  >;
  OnGetChildren: UnrealEngineDelegate<
    (Item: UObject, Instance: JavascriptTreeView) => void
  >;
  JavascriptContext: JavascriptContext;
  Items: UObject[];
  HeaderRowStyle: HeaderRowStyle;
  TableRowStyle: TableRowStyle;
  ScrollBarStyle: ScrollBarStyle;
  SelectionMode: ESelectionModeT;
  Children: UObject[];
  Columns: JavascriptColumn[];
  ColumnWidgets: Widget[];
  static Load(ResourceName: string): JavascriptTreeView;
  static Find(Outer: UObject, ResourceName: string): JavascriptTreeView;
  static GetDefaultObject(): JavascriptTreeView;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptTreeView;
  SetSingleExpandedItem(InItem: UObject): void;
  SetSelection(SoleSelectedItem: UObject): void;
  SetItemExpansion(InItem: UObject, InShouldExpandItem: boolean): void;
  SetDoubleClickSelection(SelectedItem: UObject): void;
  RequestTreeRefresh(): void;
  OnSelectionChanged(UObject: UObject, Type: ESelectInfoT): void;
  OnDoubleClick(UObject: UObject): void;
  IsItemExpanded(InItem: UObject): boolean;
  IsDoubleClickSelection(SelectedItem: UObject): boolean;
  GetSelectedItems(
    OutItems?: UObject[]
  ): {
    OutItems: UObject[],
    $: boolean
  };
  GetDoubleClickedItems(
    OutItems?: UObject[]
  ): {
    OutItems: UObject[]
  };
  ClearDoubleClickSelection(): void;
  static C(Other: UObject | any): JavascriptTreeView;
}
declare class JavascriptListView mixins JavascriptTreeView {
  ItemHeight: number;
  static Load(ResourceName: string): JavascriptListView;
  static Find(Outer: UObject, ResourceName: string): JavascriptListView;
  static GetDefaultObject(): JavascriptListView;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptListView;
  RequestListRefresh(): void;
  OnClick(UObject: UObject): void;
  static C(Other: UObject | any): JavascriptListView;
}
declare class JavascriptMenuContext mixins UObject {
  Description: string;
  Tooltip: string;
  Icon: JavascriptSlateIcon;
  OnCanExecute: UnrealEngineDelegate<() => boolean>;
  OnExecute: UnrealEngineDelegate<() => void>;
  static Load(ResourceName: string): JavascriptMenuContext;
  static Find(Outer: UObject, ResourceName: string): JavascriptMenuContext;
  static GetDefaultObject(): JavascriptMenuContext;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptMenuContext;
  static C(Other: UObject | any): JavascriptMenuContext;
}
declare type EJavasrciptUserInterfaceActionTypeT =
  | "None"
  | "Button"
  | "ToggleButton"
  | "RadioButton"
  | "Check"
  | "CollapsedButton"
  | "EJavasrciptUserInterfaceActionType_MAX";
declare var EJavasrciptUserInterfaceActionType: {
  None: "None",
  Button: "Button",
  ToggleButton: "ToggleButton",
  RadioButton: "RadioButton",
  Check: "Check",
  CollapsedButton: "CollapsedButton",
  EJavasrciptUserInterfaceActionType_MAX: "EJavasrciptUserInterfaceActionType_MAX"
};
declare class JavascriptUICommandInfo {
  clone(): JavascriptUICommandInfo;
  static C(Other: UObject | any): JavascriptUICommandInfo;
  static GenericCommand(What: string): JavascriptUICommandInfo;
}
declare class JavascriptUICommand {
  ID: string;
  FriendlyName: string;
  Description: string;
  DefaultChord: InputChord;
  ActionType: EJavasrciptUserInterfaceActionTypeT;
  CommandInfo: JavascriptUICommandInfo;
  IconStyleName: string;
  clone(): JavascriptUICommand;
  static C(Other: UObject | any): JavascriptUICommand;
}
declare class JavascriptBindingContext {
  clone(): JavascriptBindingContext;
  static C(Other: UObject | any): JavascriptBindingContext;
  Destroy(): void;
  UI_COMMAND_Function(
    Command: JavascriptUICommand,
    InTextSubNamespace: string
  ): JavascriptUICommandInfo;
  static Destroy(Context: JavascriptBindingContext): void;
  static UI_COMMAND_Function(
    This: JavascriptBindingContext,
    Command: JavascriptUICommand,
    InTextSubNamespace: string
  ): JavascriptUICommandInfo;
  static NewBindingContext(
    InContextName: string,
    InContextDesc: string,
    InContextParent: string,
    InStyleSetName: string
  ): JavascriptBindingContext;
}
declare type EJavascriptExtensionHookT =
  | "Before"
  | "After"
  | "First"
  | "EJavascriptExtensionHook_MAX";
declare var EJavascriptExtensionHook: {
  Before: "Before",
  After: "After",
  First: "First",
  EJavascriptExtensionHook_MAX: "EJavascriptExtensionHook_MAX"
};
declare class JavascriptUICommandList {
  clone(): JavascriptUICommandList;
  static C(Other: UObject | any): JavascriptUICommandList;
  CreateMenuBarBuilder(UFunction: JavascriptFunction): void;
  CreateMenuBuilder(
    bInShouldCloseWindowAfterMenuSelection: boolean,
    UFunction: JavascriptFunction
  ): void;
  CreateToolbarBuilder(
    Orientation: EOrientationT,
    UFunction: JavascriptFunction
  ): void;
  ProcessCommandBindings_KeyEvent(InKeyEvent: KeyEvent): boolean;
  ProcessCommandBindings_PointerEvent(InMouseEvent: UPointerEvent): boolean;
  static CreateMenuBarBuilder(
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): void;
  static CreateMenuBuilder(
    CommandList: JavascriptUICommandList,
    bInShouldCloseWindowAfterMenuSelection: boolean,
    UFunction: JavascriptFunction
  ): void;
  static CreateToolbarBuilder(
    CommandList: JavascriptUICommandList,
    Orientation: EOrientationT,
    UFunction: JavascriptFunction
  ): void;
  static ProcessCommandBindings_KeyEvent(
    CommandList: JavascriptUICommandList,
    InKeyEvent: KeyEvent
  ): boolean;
  static ProcessCommandBindings_PointerEvent(
    CommandList: JavascriptUICommandList,
    InMouseEvent: UPointerEvent
  ): boolean;
  static GetLevelEditorActions(): JavascriptUICommandList;
  static CreateUICommandList(): JavascriptUICommandList;
}
declare class JavascriptExtensionBase {
  clone(): JavascriptExtensionBase;
  static C(Other: UObject | any): JavascriptExtensionBase;
}
declare class JavascriptUICommands mixins UObject {
  OnExecuteAction: UnrealEngineDelegate<(ID: string) => void>;
  OnCanExecuteAction: UnrealEngineDelegate<(ID: string) => boolean>;
  OnIsActionChecked: UnrealEngineDelegate<(ID: string) => boolean>;
  OnIsActionButtonVisible: UnrealEngineDelegate<(ID: string) => boolean>;
  Commands: JavascriptUICommand[];
  ContextName: string;
  ContextDesc: string;
  ContextNameParent: string;
  StyleSetName: string;
  TextSubNamespace: string;
  CommandInfos: JavascriptUICommandInfo[];
  BindingContext: JavascriptBindingContext;
  static Load(ResourceName: string): JavascriptUICommands;
  static Find(Outer: UObject, ResourceName: string): JavascriptUICommands;
  static GetDefaultObject(): JavascriptUICommands;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptUICommands;
  Uninitialize(): void;
  Unbind(List: JavascriptUICommandList): void;
  Refresh(): void;
  Initialize(): void;
  GetAction(ID: string): JavascriptUICommandInfo;
  Discard(): void;
  Commit(): void;
  static BroadcastCommandsChanged(InContextName: string): void;
  Bind(List: JavascriptUICommandList): void;
  static C(Other: UObject | any): JavascriptUICommands;
}
declare class JavascriptToolbarButtonContext mixins UObject {
  OnGetLabel: UnrealEngineDelegate<() => string>;
  OnGetTooltip: UnrealEngineDelegate<() => string>;
  OnGetIcon: UnrealEngineDelegate<() => JavascriptSlateIcon>;
  OnExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => void>;
  OnCanExecuteAction: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
  OnIsActionChecked: UnrealEngineDelegate<(EditingObject: UObject) => boolean>;
  OnIsActionButtonVisible: UnrealEngineDelegate<
    (EditingObject: UObject) => boolean
  >;
  static Load(ResourceName: string): JavascriptToolbarButtonContext;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptToolbarButtonContext;
  static GetDefaultObject(): JavascriptToolbarButtonContext;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptToolbarButtonContext;
  UnmarkReferencedObject(): void;
  MarkReferencedObject(): void;
  static C(Other: UObject | any): JavascriptToolbarButtonContext;
}
declare class JavascriptMenuBuilder {
  clone(): JavascriptMenuBuilder;
  static C(Other: UObject | any): JavascriptMenuBuilder;
  AddComboButton(
    UObject?: JavascriptComboButtonContext
  ): {
    Builder: JavascriptMenuBuilder
  };
  AddMenuByCommands(
    UICommands?: JavascriptUICommands
  ): {
    Builder: JavascriptMenuBuilder
  };
  AddMenuEntry(
    UObject?: JavascriptMenuContext
  ): {
    Builder: JavascriptMenuBuilder
  };
  AddPullDownMenu(
    InMenuLabel?: string,
    InToolTip?: string,
    InPullDownMenu?: JavascriptFunction,
    InExtensionHook?: string,
    InTutorialHighlightName?: string
  ): {
    MenuBuilder: JavascriptMenuBuilder
  };
  AddSeparator(): {
    Builder: JavascriptMenuBuilder
  };
  AddToolBarButton(
    CommandInfo?: JavascriptUICommandInfo
  ): {
    Builder: JavascriptMenuBuilder
  };
  AddToolBarButtonByContext(
    Context?: JavascriptToolbarButtonContext,
    EditingObject?: UObject
  ): {
    Builder: JavascriptMenuBuilder
  };
  AddWidget(
    Widget?: Widget,
    Label?: string,
    bNoIndent?: boolean,
    InTutorialHighlightName?: string,
    bSearchable?: boolean
  ): {
    Builder: JavascriptMenuBuilder
  };
  BeginSection(
    InExtensionHook?: string,
    MenuHeadingText?: string
  ): {
    Builder: JavascriptMenuBuilder
  };
  EndSection(): {
    Builder: JavascriptMenuBuilder
  };
  PopCommandList(): {
    Builder: JavascriptMenuBuilder
  };
  PushCommandList(
    List?: JavascriptUICommandList
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddComboButton(
    Builder?: JavascriptMenuBuilder,
    UObject?: JavascriptComboButtonContext
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddMenuByCommands(
    Builder?: JavascriptMenuBuilder,
    UICommands?: JavascriptUICommands
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddMenuEntry(
    Builder?: JavascriptMenuBuilder,
    UObject?: JavascriptMenuContext
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddPullDownMenu(
    MenuBuilder?: JavascriptMenuBuilder,
    InMenuLabel?: string,
    InToolTip?: string,
    InPullDownMenu?: JavascriptFunction,
    InExtensionHook?: string,
    InTutorialHighlightName?: string
  ): {
    MenuBuilder: JavascriptMenuBuilder
  };
  static AddSeparator(
    Builder?: JavascriptMenuBuilder
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddToolBarButton(
    Builder?: JavascriptMenuBuilder,
    CommandInfo?: JavascriptUICommandInfo
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddToolBarButtonByContext(
    Builder?: JavascriptMenuBuilder,
    Context?: JavascriptToolbarButtonContext,
    EditingObject?: UObject
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddWidget(
    Builder?: JavascriptMenuBuilder,
    Widget?: Widget,
    Label?: string,
    bNoIndent?: boolean,
    InTutorialHighlightName?: string,
    bSearchable?: boolean
  ): {
    Builder: JavascriptMenuBuilder
  };
  static BeginSection(
    Builder?: JavascriptMenuBuilder,
    InExtensionHook?: string,
    MenuHeadingText?: string
  ): {
    Builder: JavascriptMenuBuilder
  };
  static EndSection(
    Builder?: JavascriptMenuBuilder
  ): {
    Builder: JavascriptMenuBuilder
  };
  static PopCommandList(
    Builder?: JavascriptMenuBuilder
  ): {
    Builder: JavascriptMenuBuilder
  };
  static PushCommandList(
    Builder?: JavascriptMenuBuilder,
    List?: JavascriptUICommandList
  ): {
    Builder: JavascriptMenuBuilder
  };
}
declare class JavascriptExtender {
  clone(): JavascriptExtender;
  static C(Other: UObject | any): JavascriptExtender;
  AddMenubarExtension(
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  AddMenuExtension(
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  AddToolBarExtension(
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  Apply(
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    MenuBuilder?: JavascriptMenuBuilder
  ): {
    MenuBuilder: JavascriptMenuBuilder
  };
  RemoveExtension(Extension: JavascriptExtensionBase): void;
  static AddMenubarExtension(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  static AddMenuExtension(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  static AddToolBarExtension(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  static Apply(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    MenuBuilder?: JavascriptMenuBuilder
  ): {
    MenuBuilder: JavascriptMenuBuilder
  };
  static RemoveExtension(
    Extender: JavascriptExtender,
    Extension: JavascriptExtensionBase
  ): void;
  static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
}
declare class JavascriptMenuLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptMenuLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptMenuLibrary;
  static GetDefaultObject(): JavascriptMenuLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptMenuLibrary;
  static UI_COMMAND_Function(
    This: JavascriptBindingContext,
    Command: JavascriptUICommand,
    InTextSubNamespace: string
  ): JavascriptUICommandInfo;
  static RemoveExtension(
    Extender: JavascriptExtender,
    Extension: JavascriptExtensionBase
  ): void;
  static PushCommandList(
    Builder?: JavascriptMenuBuilder,
    List?: JavascriptUICommandList
  ): {
    Builder: JavascriptMenuBuilder
  };
  static ProcessCommandBindings_PointerEvent(
    CommandList: JavascriptUICommandList,
    InMouseEvent: UPointerEvent
  ): boolean;
  static ProcessCommandBindings_KeyEvent(
    CommandList: JavascriptUICommandList,
    InKeyEvent: KeyEvent
  ): boolean;
  static PopCommandList(
    Builder?: JavascriptMenuBuilder
  ): {
    Builder: JavascriptMenuBuilder
  };
  static NewBindingContext(
    InContextName: string,
    InContextDesc: string,
    InContextParent: string,
    InStyleSetName: string
  ): JavascriptBindingContext;
  static GenericCommand(What: string): JavascriptUICommandInfo;
  static EndSection(
    Builder?: JavascriptMenuBuilder
  ): {
    Builder: JavascriptMenuBuilder
  };
  static Destroy(Context: JavascriptBindingContext): void;
  static CreateUICommandList(): JavascriptUICommandList;
  static CreateToolbarBuilder(
    CommandList: JavascriptUICommandList,
    Orientation: EOrientationT,
    UFunction: JavascriptFunction
  ): void;
  static CreateMenuBuilder(
    CommandList: JavascriptUICommandList,
    bInShouldCloseWindowAfterMenuSelection: boolean,
    UFunction: JavascriptFunction
  ): void;
  static CreateMenuBarBuilder(
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): void;
  static Combine(Extenders: JavascriptExtender[]): JavascriptExtender;
  static BeginSection(
    Builder?: JavascriptMenuBuilder,
    InExtensionHook?: string,
    MenuHeadingText?: string
  ): {
    Builder: JavascriptMenuBuilder
  };
  static Apply(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    MenuBuilder?: JavascriptMenuBuilder
  ): {
    MenuBuilder: JavascriptMenuBuilder
  };
  static AddWidget(
    Builder?: JavascriptMenuBuilder,
    Widget?: Widget,
    Label?: string,
    bNoIndent?: boolean,
    InTutorialHighlightName?: string,
    bSearchable?: boolean
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddToolBarExtension(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  static AddToolBarButtonByContext(
    Builder?: JavascriptMenuBuilder,
    Context?: JavascriptToolbarButtonContext,
    EditingObject?: UObject
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddToolBarButton(
    Builder?: JavascriptMenuBuilder,
    CommandInfo?: JavascriptUICommandInfo
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddSeparator(
    Builder?: JavascriptMenuBuilder
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddPullDownMenu(
    MenuBuilder?: JavascriptMenuBuilder,
    InMenuLabel?: string,
    InToolTip?: string,
    InPullDownMenu?: JavascriptFunction,
    InExtensionHook?: string,
    InTutorialHighlightName?: string
  ): {
    MenuBuilder: JavascriptMenuBuilder
  };
  static AddMenuExtension(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  static AddMenuEntry(
    Builder?: JavascriptMenuBuilder,
    UObject?: JavascriptMenuContext
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddMenuByCommands(
    Builder?: JavascriptMenuBuilder,
    UICommands?: JavascriptUICommands
  ): {
    Builder: JavascriptMenuBuilder
  };
  static AddMenubarExtension(
    Extender: JavascriptExtender,
    ExtensionHook: string,
    HookPosition: EJavascriptExtensionHookT,
    CommandList: JavascriptUICommandList,
    UFunction: JavascriptFunction
  ): JavascriptExtensionBase;
  static AddComboButton(
    Builder?: JavascriptMenuBuilder,
    UObject?: JavascriptComboButtonContext
  ): {
    Builder: JavascriptMenuBuilder
  };
  static C(Other: UObject | any): JavascriptMenuLibrary;
}
declare class JavascriptMultiBox mixins Widget {
  OnHook: UnrealEngineDelegate<
    (
      ID: string,
      Self: JavascriptMultiBox,
      CurrentBuilder: JavascriptMenuBuilder
    ) => void
  >;
  static Load(ResourceName: string): JavascriptMultiBox;
  static Find(Outer: UObject, ResourceName: string): JavascriptMultiBox;
  static GetDefaultObject(): JavascriptMultiBox;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptMultiBox;
  static Bind(Builder: JavascriptMenuBuilder): void;
  AddSubMenu(
    Builder?: JavascriptMenuBuilder,
    ID?: string,
    Label?: string,
    Tooltip?: string,
    bInOpenSubMenuOnClick?: boolean
  ): {
    Builder: JavascriptMenuBuilder
  };
  AddPullDownMenu(
    Builder?: JavascriptMenuBuilder,
    ID?: string,
    Label?: string,
    Tooltip?: string
  ): {
    Builder: JavascriptMenuBuilder
  };
  static C(Other: UObject | any): JavascriptMultiBox;
}
declare class JavascriptSlateTextRun {
  clone(): JavascriptSlateTextRun;
  static C(Other: UObject | any): JavascriptSlateTextRun;
}
declare class JavascriptTextModel mixins UObject {
  static Load(ResourceName: string): JavascriptTextModel;
  static Find(Outer: UObject, ResourceName: string): JavascriptTextModel;
  static GetDefaultObject(): JavascriptTextModel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptTextModel;
  SetString(string: string): void;
  GetString(): string;
  CreateRun(
    MessageTextStyle: TextBlockStyle,
    BeginIndex: number,
    EndIndex: number
  ): JavascriptSlateTextRun;
  static C(Other: UObject | any): JavascriptTextModel;
}
declare class JavascriptTextLayout {
  clone(): JavascriptTextLayout;
  static C(Other: UObject | any): JavascriptTextLayout;
  AddLine(
    Model?: JavascriptTextModel,
    Runs?: JavascriptSlateTextRun[]
  ): {
    TextLayout: JavascriptTextLayout
  };
  ClearLines(): {
    TextLayout: JavascriptTextLayout
  };
  GetAsText(): string;
  GetLineLength(): number;
  static AddLine(
    TextLayout?: JavascriptTextLayout,
    Model?: JavascriptTextModel,
    Runs?: JavascriptSlateTextRun[]
  ): {
    TextLayout: JavascriptTextLayout
  };
  static ClearLines(
    TextLayout?: JavascriptTextLayout
  ): {
    TextLayout: JavascriptTextLayout
  };
  static GetAsText(TextLayout: JavascriptTextLayout): string;
  static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
}
declare class JavascriptMultiLineEditableTextBox
  mixins MultiLineEditableTextBox {
  OnVScrollBarUserScrolled: UnrealEngineMulticastDelegate<
    (Offset: number) => void
  >;
  GetTextDelegate: UnrealEngineDelegate<
    (TextLayout: JavascriptTextLayout) => string
  >;
  SetTextDelegate: UnrealEngineDelegate<
    (InText: string, TextLayout: JavascriptTextLayout) => void
  >;
  bAlwaysShowScrollbars: boolean;
  static Load(ResourceName: string): JavascriptMultiLineEditableTextBox;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptMultiLineEditableTextBox;
  static GetDefaultObject(): JavascriptMultiLineEditableTextBox;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptMultiLineEditableTextBox;
  ScrollTo(Line: number, Offset: number): void;
  Refresh(): void;
  GoTo(Line: number, Offset: number): void;
  static C(Other: UObject | any): JavascriptMultiLineEditableTextBox;
}
declare class JavascriptRichTextBlockHyperlinkDecorator
  mixins RichTextBlockDecorator {
  HyperlinkId: string;
  OnClick: UnrealEngineMulticastDelegate<
    (Self: JavascriptRichTextBlockHyperlinkDecorator) => void
  >;
  static Load(ResourceName: string): JavascriptRichTextBlockHyperlinkDecorator;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptRichTextBlockHyperlinkDecorator;
  static GetDefaultObject(): JavascriptRichTextBlockHyperlinkDecorator;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptRichTextBlockHyperlinkDecorator;
  GetMetadata(Key: string): string;
  static C(Other: UObject | any): JavascriptRichTextBlockHyperlinkDecorator;
}
declare class JavascriptSearchBox mixins Widget {
  OnTextChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
  OnTextCommitted: UnrealEngineMulticastDelegate<
    (text: string, CommitMethod: ETextCommitT) => void
  >;
  text: string;
  TextDelegate: UnrealEngineDelegate<() => string>;
  HintText: string;
  HintTextDelegate: UnrealEngineDelegate<() => string>;
  static Load(ResourceName: string): JavascriptSearchBox;
  static Find(Outer: UObject, ResourceName: string): JavascriptSearchBox;
  static GetDefaultObject(): JavascriptSearchBox;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptSearchBox;
  SetText(InText: string): void;
  SetHintText(InHintText: string): void;
  static C(Other: UObject | any): JavascriptSearchBox;
}
declare class JavascriptStyleSet {
  StyleSetName: string;
  clone(): JavascriptStyleSet;
  static C(Other: UObject | any): JavascriptStyleSet;
  GetBrush(StyleName: string): SlateBrush;
  GetButtonStyle(StyleName: string): ButtonStyle;
  GetCheckBoxStyle(StyleName: string): CheckBoxStyle;
  GetColor(StyleName: string): LinearColor;
  GetComboBoxStyle(StyleName: string): ComboBoxStyle;
  GetComboButtonStyle(StyleName: string): ComboButtonStyle;
  GetEditableTextBoxStyle(StyleName: string): EditableTextBoxStyle;
  GetEditableTextStyle(StyleName: string): EditableTextStyle;
  GetFloat(StyleName: string): number;
  GetFontStyle(StyleName: string): SlateFontInfo;
  GetMargin(StyleName: string): Margin;
  GetProgressBarStyle(StyleName: string): ProgressBarStyle;
  GetSlateColor(StyleName: string): SlateColor;
  GetSound(StyleName: string): SlateSound;
  GetTextBlockStyle(StyleName: string): TextBlockStyle;
  GetVector(StyleName: string): Vector2D;
  static GetBrush(Handle: JavascriptStyleSet, StyleName: string): SlateBrush;
  static GetButtonStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ButtonStyle;
  static GetCheckBoxStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): CheckBoxStyle;
  static GetColor(Handle: JavascriptStyleSet, StyleName: string): LinearColor;
  static GetComboBoxStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ComboBoxStyle;
  static GetComboButtonStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ComboButtonStyle;
  static GetEditableTextBoxStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): EditableTextBoxStyle;
  static GetEditableTextStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): EditableTextStyle;
  static GetFloat(Handle: JavascriptStyleSet, StyleName: string): number;
  static GetFontStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): SlateFontInfo;
  static GetMargin(Handle: JavascriptStyleSet, StyleName: string): Margin;
  static GetProgressBarStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ProgressBarStyle;
  static GetSlateColor(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): SlateColor;
  static GetSound(Handle: JavascriptStyleSet, StyleName: string): SlateSound;
  static GetTextBlockStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): TextBlockStyle;
  static GetVector(Handle: JavascriptStyleSet, StyleName: string): Vector2D;
}
declare class JavascriptStyleSetLibrary mixins BlueprintFunctionLibrary {
  SlateColor: SlateColor;
  SlateBrush: SlateBrush;
  ButtonStyle: ButtonStyle;
  TextBlockStyle: TextBlockStyle;
  EditableTextStyle: EditableTextStyle;
  EditableTextBoxStyle: EditableTextBoxStyle;
  CheckBoxStyle: CheckBoxStyle;
  ComboBoxStyle: ComboBoxStyle;
  ComboButtonStyle: ComboButtonStyle;
  ProgressBarStyle: ProgressBarStyle;
  static Load(ResourceName: string): JavascriptStyleSetLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptStyleSetLibrary;
  static GetDefaultObject(): JavascriptStyleSetLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptStyleSetLibrary;
  static GetVector(Handle: JavascriptStyleSet, StyleName: string): Vector2D;
  static GetTextBlockStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): TextBlockStyle;
  static GetSound(Handle: JavascriptStyleSet, StyleName: string): SlateSound;
  static GetSlateColor(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): SlateColor;
  static GetProgressBarStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ProgressBarStyle;
  static GetMargin(Handle: JavascriptStyleSet, StyleName: string): Margin;
  static GetFontStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): SlateFontInfo;
  static GetFloat(Handle: JavascriptStyleSet, StyleName: string): number;
  static GetEditableTextStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): EditableTextStyle;
  static GetEditableTextBoxStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): EditableTextBoxStyle;
  static GetComboButtonStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ComboButtonStyle;
  static GetComboBoxStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ComboBoxStyle;
  static GetColor(Handle: JavascriptStyleSet, StyleName: string): LinearColor;
  static GetCheckBoxStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): CheckBoxStyle;
  static GetButtonStyle(
    Handle: JavascriptStyleSet,
    StyleName: string
  ): ButtonStyle;
  static GetBrush(Handle: JavascriptStyleSet, StyleName: string): SlateBrush;
  static C(Other: UObject | any): JavascriptStyleSetLibrary;
}
declare class JavascriptTextBlock mixins TextBlock {
  HighlightText: string;
  HighlightTextDelegate: UnrealEngineDelegate<() => string>;
  static Load(ResourceName: string): JavascriptTextBlock;
  static Find(Outer: UObject, ResourceName: string): JavascriptTextBlock;
  static GetDefaultObject(): JavascriptTextBlock;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptTextBlock;
  SetHighlightText(InHighlightText: string): void;
  static C(Other: UObject | any): JavascriptTextBlock;
}
declare class JavascriptTileView mixins TileView {
  JavascriptContext: JavascriptContext;
  static Load(ResourceName: string): JavascriptTileView;
  static Find(Outer: UObject, ResourceName: string): JavascriptTileView;
  static GetDefaultObject(): JavascriptTileView;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptTileView;
  OnSelectionChanged(UObject: UObject, Type: ESelectInfoT): void;
  OnDoubleClick(UObject: UObject): void;
  OnClick(UObject: UObject): void;
  static C(Other: UObject | any): JavascriptTileView;
}
declare class JavascriptUMGBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptUMGBlueprintLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptUMGBlueprintLibrary;
  static GetDefaultObject(): JavascriptUMGBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptUMGBlueprintLibrary;
  static SlateColor_UseSubduedForeground(): SlateColor;
  static SlateColor_UseForeground(): SlateColor;
  static GetLineLength(TargetTextLayout: JavascriptTextLayout): number;
  static GetAsText(TextLayout: JavascriptTextLayout): string;
  static DrawSpaceSpline(
    Context?: PaintContext,
    InStart?: Vector2D,
    InStartDir?: Vector2D,
    InEnd?: Vector2D,
    InEndDir?: Vector2D,
    InThickness?: number,
    InTint?: LinearColor
  ): {
    Context: PaintContext
  };
  static ClearLines(
    TextLayout?: JavascriptTextLayout
  ): {
    TextLayout: JavascriptTextLayout
  };
  static AddLine(
    TextLayout?: JavascriptTextLayout,
    Model?: JavascriptTextModel,
    Runs?: JavascriptSlateTextRun[]
  ): {
    TextLayout: JavascriptTextLayout
  };
  static C(Other: UObject | any): JavascriptUMGBlueprintLibrary;
}
declare class JavascriptSlateStyle {
  clone(): JavascriptSlateStyle;
  static C(Other: UObject | any): JavascriptSlateStyle;
  AddBorderBrush(
    PropertyName: string,
    InImageName: string,
    InMargin: Margin,
    InColorAndOpacity: LinearColor,
    InImageType: ESlateBrushImageTypeT
  ): void;
  AddBoxBrush(
    PropertyName: string,
    InImageName: string,
    InMargin: Margin,
    InColorAndOpacity: LinearColor,
    InImageType: ESlateBrushImageTypeT
  ): void;
  AddFontInfo(PropertyName: string, FontInfo: SlateFontInfo): void;
  AddImageBrush(
    PropertyName: string,
    InImageName: string,
    InImageSize: Vector2D,
    InTint: LinearColor,
    InTiling: ESlateBrushTileTypeT,
    InImageType: ESlateBrushImageTypeT
  ): void;
  AddSound(PropertyName: string, Sound: SlateSound): void;
  Register(): void;
  RootToContentDir(RelativePath: string): string;
  RootToCoreContentDir(RelativePath: string): string;
  SetContentRoot(InContentRootDir: string): void;
  SetCoreContentRoot(InCoreContentRootDir: string): void;
  Unregister(): void;
  static AddBorderBrush(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    InImageName: string,
    InMargin: Margin,
    InColorAndOpacity: LinearColor,
    InImageType: ESlateBrushImageTypeT
  ): void;
  static AddBoxBrush(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    InImageName: string,
    InMargin: Margin,
    InColorAndOpacity: LinearColor,
    InImageType: ESlateBrushImageTypeT
  ): void;
  static AddFontInfo(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    FontInfo: SlateFontInfo
  ): void;
  static AddImageBrush(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    InImageName: string,
    InImageSize: Vector2D,
    InTint: LinearColor,
    InTiling: ESlateBrushTileTypeT,
    InImageType: ESlateBrushImageTypeT
  ): void;
  static AddSound(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    Sound: SlateSound
  ): void;
  static Register(StyleSet: JavascriptSlateStyle): void;
  static RootToContentDir(
    StyleSet: JavascriptSlateStyle,
    RelativePath: string
  ): string;
  static RootToCoreContentDir(
    StyleSet: JavascriptSlateStyle,
    RelativePath: string
  ): string;
  static SetContentRoot(
    StyleSet: JavascriptSlateStyle,
    InContentRootDir: string
  ): void;
  static SetCoreContentRoot(
    StyleSet: JavascriptSlateStyle,
    InCoreContentRootDir: string
  ): void;
  static Unregister(StyleSet: JavascriptSlateStyle): void;
  static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
}
declare class JavascriptUMGLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptUMGLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptUMGLibrary;
  static GetDefaultObject(): JavascriptUMGLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptUMGLibrary;
  static Unregister(StyleSet: JavascriptSlateStyle): void;
  static TakeWidget(Widget: Widget): JavascriptSlateWidget;
  static ShowWindow(NewWindow: JavascriptSlateWidget): void;
  static SetCoreContentRoot(
    StyleSet: JavascriptSlateStyle,
    InCoreContentRootDir: string
  ): void;
  static SetContentRoot(
    StyleSet: JavascriptSlateStyle,
    InContentRootDir: string
  ): void;
  static SetContent(
    TargetWidget: NativeWidgetHost,
    SlateWidget: JavascriptSlateWidget
  ): Widget;
  static RootToCoreContentDir(
    StyleSet: JavascriptSlateStyle,
    RelativePath: string
  ): string;
  static RootToContentDir(
    StyleSet: JavascriptSlateStyle,
    RelativePath: string
  ): string;
  static Register(StyleSet: JavascriptSlateStyle): void;
  static GenerateDynamicImageResource(InDynamicBrushName: string): Vector2D;
  static CreateSlateStyle(InStyleSetName: string): JavascriptSlateStyle;
  static AddWindowAsNativeChild(
    NewWindow: JavascriptSlateWidget,
    RootWindow: JavascriptSlateWidget
  ): void;
  static AddWindow(
    NewWindow: JavascriptSlateWidget,
    bShowImmediately: boolean
  ): void;
  static AddSound(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    Sound: SlateSound
  ): void;
  static AddImageBrush(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    InImageName: string,
    InImageSize: Vector2D,
    InTint: LinearColor,
    InTiling: ESlateBrushTileTypeT,
    InImageType: ESlateBrushImageTypeT
  ): void;
  static AddFontInfo(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    FontInfo: SlateFontInfo
  ): void;
  static AddBoxBrush(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    InImageName: string,
    InMargin: Margin,
    InColorAndOpacity: LinearColor,
    InImageType: ESlateBrushImageTypeT
  ): void;
  static AddBorderBrush(
    StyleSet: JavascriptSlateStyle,
    PropertyName: string,
    InImageName: string,
    InMargin: Margin,
    InColorAndOpacity: LinearColor,
    InImageType: ESlateBrushImageTypeT
  ): void;
  static C(Other: UObject | any): JavascriptUMGLibrary;
}
declare class JavascriptUserObjectListEntry mixins UserWidget {
  Item: UObject;
  static Load(ResourceName: string): JavascriptUserObjectListEntry;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptUserObjectListEntry;
  static GetDefaultObject(): JavascriptUserObjectListEntry;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptUserObjectListEntry;
  static C(Other: UObject | any): JavascriptUserObjectListEntry;
}
declare class JavascriptWidget mixins UserWidget {
  JavascriptContext: JavascriptContext;
  OnInputActionEvent: UnrealEngineMulticastDelegate<
    (ActionName: string) => void
  >;
  OnReleaseActionEvent: UnrealEngineMulticastDelegate<
    (ActionName: string) => void
  >;
  OnInputAxisEvent: UnrealEngineMulticastDelegate<
    (Axis: number, AxisName: string) => void
  >;
  OnDestroy: UnrealEngineMulticastDelegate<(bReleaseChildren: boolean) => void>;
  ContentSlot: PanelSlot;
  static Load(ResourceName: string): JavascriptWidget;
  static Find(Outer: UObject, ResourceName: string): JavascriptWidget;
  static GetDefaultObject(): JavascriptWidget;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptWidget;
  SetRootWidget(Widget: Widget): void;
  RemoveChild(): boolean;
  OnReleaseInputActionByName(ActionName: string): void;
  OnListenForInputAxis(
    AxisName: string,
    EventType: EInputEventT,
    bConsume: boolean
  ): void;
  OnListenForInputAction(
    ActionName: string,
    EventType: EInputEventT,
    bConsume: boolean
  ): void;
  OnInputAxisByName(Axis: number, ActionName: string): void;
  OnInputActionByName(ActionName: string): void;
  static HasValidCachedWidget(Widget: Widget): boolean;
  static CallSynchronizeProperties(WidgetOrSlot: Visual): void;
  AddChild(Content: Widget): PanelSlot;
  static C(Other: UObject | any): JavascriptWidget;
}
declare type EJavascriptWindowTypeT =
  | "Normal"
  | "Menu"
  | "ToolTip"
  | "Notification"
  | "CursorDecorator"
  | "EJavascriptWindowType_MAX";
declare var EJavascriptWindowType: {
  Normal: "Normal",
  Menu: "Menu",
  ToolTip: "ToolTip",
  Notification: "Notification",
  CursorDecorator: "CursorDecorator",
  EJavascriptWindowType_MAX: "EJavascriptWindowType_MAX"
};
declare class WindowStyle mixins SlateWidgetStyle {
  MinimizeButtonStyle: ButtonStyle;
  MaximizeButtonStyle: ButtonStyle;
  RestoreButtonStyle: ButtonStyle;
  CloseButtonStyle: ButtonStyle;
  TitleTextStyle: TextBlockStyle;
  ActiveTitleBrush: SlateBrush;
  InactiveTitleBrush: SlateBrush;
  FlashTitleBrush: SlateBrush;
  BackgroundColor: SlateColor;
  OutlineBrush: SlateBrush;
  OutlineColor: SlateColor;
  BorderBrush: SlateBrush;
  BackgroundBrush: SlateBrush;
  ChildBackgroundBrush: SlateBrush;
  clone(): WindowStyle;
  static C(Other: UObject | any): WindowStyle;
}
declare type EJavascriptAutoCenterT =
  | "None"
  | "PrimaryWorkArea"
  | "PreferredWorkArea"
  | "EJavascriptAutoCenter_MAX";
declare var EJavascriptAutoCenter: {
  None: "None",
  PrimaryWorkArea: "PrimaryWorkArea",
  PreferredWorkArea: "PreferredWorkArea",
  EJavascriptAutoCenter_MAX: "EJavascriptAutoCenter_MAX"
};
declare type EJavascriptWindowTransparencyT =
  | "None"
  | "PerWindow"
  | "EJavascriptWindowTransparency_MAX";
declare var EJavascriptWindowTransparency: {
  None: "None",
  PerWindow: "PerWindow",
  EJavascriptWindowTransparency_MAX: "EJavascriptWindowTransparency_MAX"
};
declare type EJavascriptSizingRuleT =
  | "FixedSize"
  | "Autosized"
  | "UserSized"
  | "EJavascriptSizingRule_MAX";
declare var EJavascriptSizingRule: {
  FixedSize: "FixedSize",
  Autosized: "Autosized",
  UserSized: "UserSized",
  EJavascriptSizingRule_MAX: "EJavascriptSizingRule_MAX"
};
declare class JavascriptWindow mixins ContentWidget {
  Type: EJavascriptWindowTypeT;
  Style: WindowStyle;
  Title: string;
  bDragAnywhere: boolean;
  AutoCenter: EJavascriptAutoCenterT;
  ScreenPosition: Vector2D;
  ClientSize: Vector2D;
  SupportsTransparency: EJavascriptWindowTransparencyT;
  InitialOpacity: number;
  IsInitiallyMaximized: boolean;
  SizingRule: EJavascriptSizingRuleT;
  IsPopupWindow: boolean;
  FocusWhenFirstShown: boolean;
  ActivateWhenFirstShown: boolean;
  UseOSWindowBorder: boolean;
  HasCloseButton: boolean;
  SupportsMaximize: boolean;
  SupportsMinimize: boolean;
  CreateTitleBar: boolean;
  SaneWindowPlacement: boolean;
  LayoutBorder: Margin;
  UserResizeBorder: Margin;
  static Load(ResourceName: string): JavascriptWindow;
  static Find(Outer: UObject, ResourceName: string): JavascriptWindow;
  static GetDefaultObject(): JavascriptWindow;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptWindow;
  ShowWindow(): void;
  SetOpacity(InOpacity: number): void;
  Resize(NewSize: Vector2D): void;
  ReshapeWindow(NewPosition: Vector2D, NewSize: Vector2D): void;
  RequestDestroyWindow(): void;
  MoveWindowTo(NewPosition: Vector2D): void;
  HideWindow(): void;
  FlashWindow(): void;
  EnableWindow(bEnable: boolean): void;
  DestroyWindowImmediately(): void;
  BringToFront(): void;
  static C(Other: UObject | any): JavascriptWindow;
  OpenFileDialog(
    DialogTitle: string,
    DefaultPath: string,
    DefaultFile: string,
    FileTypes: string,
    Flags: number,
    OutFilenames?: string[]
  ): {
    OutFilenames: string[],
    $: boolean
  };
  static OpenFileDialog(
    WindowHandle: JavascriptWindow,
    DialogTitle: string,
    DefaultPath: string,
    DefaultFile: string,
    FileTypes: string,
    Flags: number,
    OutFilenames?: string[]
  ): {
    OutFilenames: string[],
    $: boolean
  };
}
declare type EJavascriptHttpRequestStatusT =
  | "NotStarted"
  | "Processing"
  | "Failed"
  | "Succeeded"
  | "EJavascriptHttpRequestStatus_MAX";
declare var EJavascriptHttpRequestStatus: {
  NotStarted: "NotStarted",
  Processing: "Processing",
  Failed: "Failed",
  Succeeded: "Succeeded",
  EJavascriptHttpRequestStatus_MAX: "EJavascriptHttpRequestStatus_MAX"
};
declare class JavascriptHttpRequest mixins UObject {
  OnComplete: UnrealEngineDelegate<(successful: boolean) => void>;
  OnProgress: UnrealEngineDelegate<(sent: number, recv: number) => void>;
  static Load(ResourceName: string): JavascriptHttpRequest;
  static Find(Outer: UObject, ResourceName: string): JavascriptHttpRequest;
  static GetDefaultObject(): JavascriptHttpRequest;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptHttpRequest;
  SetVerb(Verb: string): void;
  SetURL(URL: string): void;
  SetHeader(HeaderName: string, HeaderValue: string): void;
  SetContentWithFiles(
    FilePaths: string[],
    Boundary: string,
    Content: string
  ): void;
  SetContentFromMemory(): void;
  SetContentAsString(ContentString: string): void;
  ProcessRequest(): boolean;
  GetVerb(): string;
  GetStatus(): EJavascriptHttpRequestStatusT;
  GetResponseCode(): number;
  GetElapsedTime(): number;
  GetContentToMemory(): void;
  GetContentLength(): number;
  GetContentAsString(): string;
  CancelRequest(): void;
  static C(Other: UObject | any): JavascriptHttpRequest;
}
declare class WebBrowserTexture mixins Texture {
  static Load(ResourceName: string): WebBrowserTexture;
  static Find(Outer: UObject, ResourceName: string): WebBrowserTexture;
  static GetDefaultObject(): WebBrowserTexture;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WebBrowserTexture;
  static C(Other: UObject | any): WebBrowserTexture;
}
declare class WebBrowser mixins Widget {
  OnUrlChanged: UnrealEngineMulticastDelegate<(text: string) => void>;
  OnBeforePopup: UnrealEngineMulticastDelegate<
    (URL: string, Frame: string) => void
  >;
  InitialURL: string;
  bSupportsTransparency: boolean;
  static Load(ResourceName: string): WebBrowser;
  static Find(Outer: UObject, ResourceName: string): WebBrowser;
  static GetDefaultObject(): WebBrowser;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WebBrowser;
  LoadURL(NewURL: string): void;
  LoadString(Contents: string, DummyURL: string): void;
  GetUrl(): string;
  GetTitleText(): string;
  ExecuteJavascript(ScriptText: string): void;
  static C(Other: UObject | any): WebBrowser;
}
declare class WebBrowserAssetManager mixins UObject {
  DefaultMaterial: Material;
  static Load(ResourceName: string): WebBrowserAssetManager;
  static Find(Outer: UObject, ResourceName: string): WebBrowserAssetManager;
  static GetDefaultObject(): WebBrowserAssetManager;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WebBrowserAssetManager;
  static C(Other: UObject | any): WebBrowserAssetManager;
}
declare class TireConfigMaterialFriction {
  PhysicalMaterial: PhysicalMaterial;
  FrictionScale: number;
  clone(): TireConfigMaterialFriction;
  static C(Other: UObject | any): TireConfigMaterialFriction;
}
declare class TireConfig mixins DataAsset {
  FrictionScale: number;
  TireFrictionScales: TireConfigMaterialFriction[];
  static Load(ResourceName: string): TireConfig;
  static Find(Outer: UObject, ResourceName: string): TireConfig;
  static GetDefaultObject(): TireConfig;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TireConfig;
  static C(Other: UObject | any): TireConfig;
}
declare type EWheelSweepTypeT =
  | "SimpleAndComplex"
  | "Simple"
  | "Complex"
  | "EWheelSweepType_MAX";
declare var EWheelSweepType: {
  SimpleAndComplex: "SimpleAndComplex",
  Simple: "Simple",
  Complex: "Complex",
  EWheelSweepType_MAX: "EWheelSweepType_MAX"
};
declare class VehicleWheel mixins UObject {
  CollisionMesh: StaticMesh;
  bDontCreateShape: boolean;
  bAutoAdjustCollisionSize: boolean;
  Offset: Vector;
  ShapeRadius: number;
  ShapeWidth: number;
  Mass: number;
  DampingRate: number;
  SteerAngle: number;
  bAffectedByHandbrake: boolean;
  TireType: TireType;
  TireConfig: TireConfig;
  LatStiffMaxLoad: number;
  LatStiffValue: number;
  LongStiffValue: number;
  SuspensionForceOffset: number;
  SuspensionMaxRaise: number;
  SuspensionMaxDrop: number;
  SuspensionNaturalFrequency: number;
  SuspensionDampingRatio: number;
  SweepType: EWheelSweepTypeT;
  MaxBrakeTorque: number;
  MaxHandBrakeTorque: number;
  VehicleSim: WheeledVehicleMovementComponent;
  WheelIndex: number;
  DebugLongSlip: number;
  DebugLatSlip: number;
  DebugNormalizedTireLoad: number;
  DebugWheelTorque: number;
  DebugLongForce: number;
  DebugLatForce: number;
  Location: Vector;
  OldLocation: Vector;
  Velocity: Vector;
  static Load(ResourceName: string): VehicleWheel;
  static Find(Outer: UObject, ResourceName: string): VehicleWheel;
  static GetDefaultObject(): VehicleWheel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VehicleWheel;
  IsInAir(): boolean;
  GetSuspensionOffset(): number;
  GetSteerAngle(): number;
  GetRotationAngle(): number;
  static C(Other: UObject | any): VehicleWheel;
}
declare class WheelSetup {
  WheelClass: UnrealEngineClassT;
  BoneName: string;
  AdditionalOffset: Vector;
  bDisableSteering: boolean;
  clone(): WheelSetup;
  static C(Other: UObject | any): WheelSetup;
}
declare class ReplicatedVehicleState {
  SteeringInput: number;
  ThrottleInput: number;
  BrakeInput: number;
  HandbrakeInput: number;
  CurrentGear: number;
  clone(): ReplicatedVehicleState;
  static C(Other: UObject | any): ReplicatedVehicleState;
}
declare class VehicleInputRate {
  RiseRate: number;
  FallRate: number;
  clone(): VehicleInputRate;
  static C(Other: UObject | any): VehicleInputRate;
}
declare class WheeledVehicleMovementComponent mixins PawnMovementComponent {
  bDeprecatedSpringOffsetMode: boolean;
  bReverseAsBrake: boolean;
  bUseRVOAvoidance: boolean;
  bRawHandbrakeInput: boolean;
  bRawGearUpInput: boolean;
  bRawGearDownInput: boolean;
  bWasAvoidanceUpdated: boolean;
  Mass: number;
  WheelSetups: WheelSetup[];
  DragCoefficient: number;
  ChassisWidth: number;
  ChassisHeight: number;
  DragArea: number;
  EstimatedMaxEngineSpeed: number;
  MaxEngineRPM: number;
  DebugDragMagnitude: number;
  InertiaTensorScale: Vector;
  MinNormalizedTireLoad: number;
  MinNormalizedTireLoadFiltered: number;
  MaxNormalizedTireLoad: number;
  MaxNormalizedTireLoadFiltered: number;
  ThresholdLongitudinalSpeed: number;
  LowForwardSpeedSubStepCount: number;
  HighForwardSpeedSubStepCount: number;
  Wheels: VehicleWheel[];
  RVOAvoidanceRadius: number;
  RVOAvoidanceHeight: number;
  AvoidanceConsiderationRadius: number;
  RVOSteeringStep: number;
  RVOThrottleStep: number;
  AvoidanceUID: number;
  AvoidanceGroup: NavAvoidanceMask;
  GroupsToAvoid: NavAvoidanceMask;
  GroupsToIgnore: NavAvoidanceMask;
  AvoidanceWeight: number;
  PendingLaunchVelocity: Vector;
  ReplicatedState: ReplicatedVehicleState;
  RawSteeringInput: number;
  RawThrottleInput: number;
  RawBrakeInput: number;
  SteeringInput: number;
  ThrottleInput: number;
  BrakeInput: number;
  HandbrakeInput: number;
  IdleBrakeInput: number;
  StopThreshold: number;
  WrongDirectionThreshold: number;
  ThrottleInputRate: VehicleInputRate;
  BrakeInputRate: VehicleInputRate;
  HandbrakeInputRate: VehicleInputRate;
  SteeringInputRate: VehicleInputRate;
  OverrideController: Controller;
  static Load(ResourceName: string): WheeledVehicleMovementComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): WheeledVehicleMovementComponent;
  static GetDefaultObject(): WheeledVehicleMovementComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WheeledVehicleMovementComponent;
  SetUseAutoGears(bUseAuto: boolean): void;
  SetThrottleInput(Throttle: number): void;
  SetTargetGear(GearNum: number, bImmediate: boolean): void;
  SetSteeringInput(Steering: number): void;
  SetHandbrakeInput(bNewHandbrake: boolean): void;
  SetGroupsToIgnoreMask(GroupMask: NavAvoidanceMask): void;
  SetGroupsToIgnore(GroupFlags: number): void;
  SetGroupsToAvoidMask(GroupMask: NavAvoidanceMask): void;
  SetGroupsToAvoid(GroupFlags: number): void;
  SetGearUp(bNewGearUp: boolean): void;
  SetGearDown(bNewGearDown: boolean): void;
  SetBrakeInput(Brake: number): void;
  SetAvoidanceGroupMask(GroupMask: NavAvoidanceMask): void;
  SetAvoidanceGroup(GroupFlags: number): void;
  SetAvoidanceEnabled(bEnable: boolean): void;
  ServerUpdateState(
    InSteeringInput: number,
    InThrottleInput: number,
    InBrakeInput: number,
    InHandbrakeInput: number,
    CurrentGear: number
  ): void;
  GetUseAutoGears(): boolean;
  GetTargetGear(): number;
  GetForwardSpeed(): number;
  GetEngineRotationSpeed(): number;
  GetEngineMaxRotationSpeed(): number;
  GetCurrentGear(): number;
  static C(Other: UObject | any): WheeledVehicleMovementComponent;
}
declare class SimpleWheeledVehicleMovementComponent
  mixins WheeledVehicleMovementComponent {
  static Load(ResourceName: string): SimpleWheeledVehicleMovementComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): SimpleWheeledVehicleMovementComponent;
  static GetDefaultObject(): SimpleWheeledVehicleMovementComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SimpleWheeledVehicleMovementComponent;
  SetSteerAngle(SteerAngle: number, WheelIndex: number): void;
  SetDriveTorque(DriveTorque: number, WheelIndex: number): void;
  SetBrakeTorque(BrakeTorque: number, WheelIndex: number): void;
  static C(Other: UObject | any): SimpleWheeledVehicleMovementComponent;
}
declare class WheeledVehicle mixins Pawn {
  Mesh: SkeletalMeshComponent;
  VehicleMovement: WheeledVehicleMovementComponent;
  static GetDefaultObject(): WheeledVehicle;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WheeledVehicle;
  static C(Other: UObject | any): WheeledVehicle;
}
declare class VehicleAnimInstance mixins AnimInstance {
  WheeledVehicleMovementComponent: WheeledVehicleMovementComponent;
  static Load(ResourceName: string): VehicleAnimInstance;
  static Find(Outer: UObject, ResourceName: string): VehicleAnimInstance;
  static GetDefaultObject(): VehicleAnimInstance;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VehicleAnimInstance;
  GetVehicle(): WheeledVehicle;
  static C(Other: UObject | any): VehicleAnimInstance;
}
declare class VehicleEngineData {
  TorqueCurve: RuntimeFloatCurve;
  MaxRPM: number;
  MOI: number;
  DampingRateFullThrottle: number;
  DampingRateZeroThrottleClutchEngaged: number;
  DampingRateZeroThrottleClutchDisengaged: number;
  clone(): VehicleEngineData;
  static C(Other: UObject | any): VehicleEngineData;
}
declare type EVehicleDifferential4WT =
  | "LimitedSlip_4W"
  | "LimitedSlip_FrontDrive"
  | "LimitedSlip_RearDrive"
  | "Open_4W"
  | "Open_FrontDrive"
  | "Open_RearDrive"
  | "EVehicleDifferential4W_MAX";
declare var EVehicleDifferential4W: {
  LimitedSlip_4W: "LimitedSlip_4W",
  LimitedSlip_FrontDrive: "LimitedSlip_FrontDrive",
  LimitedSlip_RearDrive: "LimitedSlip_RearDrive",
  Open_4W: "Open_4W",
  Open_FrontDrive: "Open_FrontDrive",
  Open_RearDrive: "Open_RearDrive",
  EVehicleDifferential4W_MAX: "EVehicleDifferential4W_MAX"
};
declare class VehicleDifferential4WData {
  DifferentialType: EVehicleDifferential4WT;
  FrontRearSplit: number;
  FrontLeftRightSplit: number;
  RearLeftRightSplit: number;
  CentreBias: number;
  FrontBias: number;
  RearBias: number;
  clone(): VehicleDifferential4WData;
  static C(Other: UObject | any): VehicleDifferential4WData;
}
declare class VehicleGearData {
  Ratio: number;
  DownRatio: number;
  UpRatio: number;
  clone(): VehicleGearData;
  static C(Other: UObject | any): VehicleGearData;
}
declare class VehicleTransmissionData {
  bUseGearAutoBox: boolean;
  GearSwitchTime: number;
  GearAutoBoxLatency: number;
  FinalRatio: number;
  ForwardGears: VehicleGearData[];
  ReverseGearRatio: number;
  NeutralGearUpRatio: number;
  ClutchStrength: number;
  clone(): VehicleTransmissionData;
  static C(Other: UObject | any): VehicleTransmissionData;
}
declare class WheeledVehicleMovementComponent4W
  mixins WheeledVehicleMovementComponent {
  EngineSetup: VehicleEngineData;
  DifferentialSetup: VehicleDifferential4WData;
  AckermannAccuracy: number;
  TransmissionSetup: VehicleTransmissionData;
  SteeringCurve: RuntimeFloatCurve;
  static Load(ResourceName: string): WheeledVehicleMovementComponent4W;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): WheeledVehicleMovementComponent4W;
  static GetDefaultObject(): WheeledVehicleMovementComponent4W;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WheeledVehicleMovementComponent4W;
  static C(Other: UObject | any): WheeledVehicleMovementComponent4W;
}
declare class AnimNode_WheelHandler mixins AnimNode_SkeletalControlBase {
  clone(): AnimNode_WheelHandler;
  static C(Other: UObject | any): AnimNode_WheelHandler;
}
declare class AnimGraphNode_WheelHandler
  mixins AnimGraphNode_SkeletalControlBase {
  UNode: AnimNode_WheelHandler;
  static Load(ResourceName: string): AnimGraphNode_WheelHandler;
  static Find(Outer: UObject, ResourceName: string): AnimGraphNode_WheelHandler;
  static GetDefaultObject(): AnimGraphNode_WheelHandler;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimGraphNode_WheelHandler;
  static C(Other: UObject | any): AnimGraphNode_WheelHandler;
}
declare type ELocationAccuracyT =
  | "LA_ThreeKilometers"
  | "LA_OneKilometer"
  | "LA_HundredMeters"
  | "LA_TenMeters"
  | "LA_Best"
  | "LA_Navigation"
  | "LA_MAX";
declare var ELocationAccuracy: {
  LA_ThreeKilometers: "LA_ThreeKilometers",
  LA_OneKilometer: "LA_OneKilometer",
  LA_HundredMeters: "LA_HundredMeters",
  LA_TenMeters: "LA_TenMeters",
  LA_Best: "LA_Best",
  LA_Navigation: "LA_Navigation",
  LA_MAX: "LA_MAX"
};
declare class LocationServicesData {
  Timestamp: number;
  Longitude: number;
  Latitude: number;
  HorizontalAccuracy: number;
  VerticalAccuracy: number;
  Altitude: number;
  clone(): LocationServicesData;
  static C(Other: UObject | any): LocationServicesData;
  static GetLastKnownLocation(): LocationServicesData;
}
declare class LocationServicesImpl mixins UObject {
  OnLocationChanged: UnrealEngineMulticastDelegate<
    (LocationData: LocationServicesData) => void
  >;
  static Load(ResourceName: string): LocationServicesImpl;
  static Find(Outer: UObject, ResourceName: string): LocationServicesImpl;
  static GetDefaultObject(): LocationServicesImpl;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LocationServicesImpl;
  static C(Other: UObject | any): LocationServicesImpl;
}
declare class LocationServices mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): LocationServices;
  static Find(Outer: UObject, ResourceName: string): LocationServices;
  static GetDefaultObject(): LocationServices;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LocationServices;
  static StopLocationServices(): boolean;
  static StartLocationServices(): boolean;
  static IsLocationAccuracyAvailable(Accuracy: ELocationAccuracyT): boolean;
  static InitLocationServices(
    Accuracy: ELocationAccuracyT,
    UpdateFrequency: number,
    MinDistanceFilter: number
  ): boolean;
  static GetLocationServicesImpl(): LocationServicesImpl;
  static GetLastKnownLocation(): LocationServicesData;
  static AreLocationServicesEnabled(): boolean;
  static C(Other: UObject | any): LocationServices;
}
declare class MaterialExpressionSpriteTextureSampler
  mixins MaterialExpressionTextureSampleParameter2D {
  bSampleAdditionalTextures: boolean;
  AdditionalSlotIndex: number;
  SlotDisplayName: string;
  static Load(ResourceName: string): MaterialExpressionSpriteTextureSampler;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MaterialExpressionSpriteTextureSampler;
  static GetDefaultObject(): MaterialExpressionSpriteTextureSampler;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MaterialExpressionSpriteTextureSampler;
  static C(Other: UObject | any): MaterialExpressionSpriteTextureSampler;
}
declare class PaperSpriteSocket {
  LocalTransform: Transform;
  SocketName: string;
  clone(): PaperSpriteSocket;
  static C(Other: UObject | any): PaperSpriteSocket;
}
declare type ESpriteCollisionModeT =
  | "None"
  | "Use2DPhysics"
  | "Use3DPhysics"
  | "ESpriteCollisionMode_MAX";
declare var ESpriteCollisionMode: {
  None: "None",
  Use2DPhysics: "Use2DPhysics",
  Use3DPhysics: "Use3DPhysics",
  ESpriteCollisionMode_MAX: "ESpriteCollisionMode_MAX"
};
declare type ESpritePivotModeT =
  | "Top_Left"
  | "Top_Center"
  | "Top_Right"
  | "Center_Left"
  | "Center_Center"
  | "Center_Right"
  | "Bottom_Left"
  | "Bottom_Center"
  | "Bottom_Right"
  | "Custom"
  | "ESpritePivotMode_MAX";
declare var ESpritePivotMode: {
  Top_Left: "Top_Left",
  Top_Center: "Top_Center",
  Top_Right: "Top_Right",
  Center_Left: "Center_Left",
  Center_Center: "Center_Center",
  Center_Right: "Center_Right",
  Bottom_Left: "Bottom_Left",
  Bottom_Center: "Bottom_Center",
  Bottom_Right: "Bottom_Right",
  Custom: "Custom",
  ESpritePivotMode_MAX: "ESpritePivotMode_MAX"
};
declare type ESpriteShapeTypeT =
  | "Box"
  | "Circle"
  | "Polygon"
  | "ESpriteShapeType_MAX";
declare var ESpriteShapeType: {
  Box: "Box",
  Circle: "Circle",
  Polygon: "Polygon",
  ESpriteShapeType_MAX: "ESpriteShapeType_MAX"
};
declare class SpriteGeometryShape {
  ShapeType: ESpriteShapeTypeT;
  Vertices: Vector2D[];
  BoxSize: Vector2D;
  BoxPosition: Vector2D;
  Rotation: number;
  bNegativeWinding: boolean;
  clone(): SpriteGeometryShape;
  static C(Other: UObject | any): SpriteGeometryShape;
}
declare type ESpritePolygonModeT =
  | "SourceBoundingBox"
  | "TightBoundingBox"
  | "ShrinkWrapped"
  | "FullyCustom"
  | "Diced"
  | "ESpritePolygonMode_MAX";
declare var ESpritePolygonMode: {
  SourceBoundingBox: "SourceBoundingBox",
  TightBoundingBox: "TightBoundingBox",
  ShrinkWrapped: "ShrinkWrapped",
  FullyCustom: "FullyCustom",
  Diced: "Diced",
  ESpritePolygonMode_MAX: "ESpritePolygonMode_MAX"
};
declare class SpriteGeometryCollection {
  Shapes: SpriteGeometryShape[];
  GeometryType: ESpritePolygonModeT;
  PixelsPerSubdivisionX: number;
  PixelsPerSubdivisionY: number;
  bAvoidVertexMerging: boolean;
  AlphaThreshold: number;
  DetailAmount: number;
  SimplifyEpsilon: number;
  clone(): SpriteGeometryCollection;
  static C(Other: UObject | any): SpriteGeometryCollection;
}
declare type EPaperSpriteAtlasPaddingT =
  | "DilateBorder"
  | "PadWithZero"
  | "EPaperSpriteAtlasPadding_MAX";
declare var EPaperSpriteAtlasPadding: {
  DilateBorder: "DilateBorder",
  PadWithZero: "PadWithZero",
  EPaperSpriteAtlasPadding_MAX: "EPaperSpriteAtlasPadding_MAX"
};
declare class PaperSpriteAtlasSlot {
  SpriteRef: PaperSprite;
  AtlasIndex: number;
  X: number;
  Y: number;
  Width: number;
  Height: number;
  clone(): PaperSpriteAtlasSlot;
  static C(Other: UObject | any): PaperSpriteAtlasSlot;
}
declare class PaperSpriteAtlas mixins UObject {
  AtlasDescription: string;
  MaxWidth: number;
  MaxHeight: number;
  MipCount: number;
  PaddingType: EPaperSpriteAtlasPaddingT;
  Padding: number;
  CompressionSettings: TextureCompressionSettingsT;
  Filter: TextureFilterT;
  GeneratedTextures: Texture[];
  AtlasGUID: Guid;
  bRebuildAtlas: boolean;
  AtlasSlots: PaperSpriteAtlasSlot[];
  NumIncrementalBuilds: number;
  BuiltWidth: number;
  BuiltHeight: number;
  BuiltPadding: number;
  static Load(ResourceName: string): PaperSpriteAtlas;
  static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlas;
  static GetDefaultObject(): PaperSpriteAtlas;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteAtlas;
  static C(Other: UObject | any): PaperSpriteAtlas;
}
declare class PaperSprite mixins UObject {
  OriginInSourceImageBeforeTrimming: Vector2D;
  SourceImageDimensionBeforeTrimming: Vector2D;
  bTrimmedInSourceImage: boolean;
  bRotatedInSourceImage: boolean;
  SourceTextureDimension: Vector2D;
  SourceUV: Vector2D;
  SourceDimension: Vector2D;
  SourceTexture: Texture2D;
  AdditionalSourceTextures: Texture[];
  BakedSourceUV: Vector2D;
  BakedSourceDimension: Vector2D;
  BakedSourceTexture: Texture2D;
  DefaultMaterial: MaterialInterface;
  AlternateMaterial: MaterialInterface;
  Sockets: PaperSpriteSocket[];
  SpriteCollisionDomain: ESpriteCollisionModeT;
  PixelsPerUnrealUnit: number;
  BodySetup: BodySetup;
  PivotMode: ESpritePivotModeT;
  CustomPivotPoint: Vector2D;
  bSnapPivotToPixelGrid: boolean;
  CollisionGeometry: SpriteGeometryCollection;
  CollisionThickness: number;
  RenderGeometry: SpriteGeometryCollection;
  AtlasGroup: PaperSpriteAtlas;
  AlternateMaterialSplitIndex: number;
  BakedRenderData: Vector4[];
  static Load(ResourceName: string): PaperSprite;
  static Find(Outer: UObject, ResourceName: string): PaperSprite;
  static GetDefaultObject(): PaperSprite;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSprite;
  static C(Other: UObject | any): PaperSprite;
  MakeBrushFromSprite(Width: number, Height: number): SlateBrush;
  static MakeBrushFromSprite(
    Sprite: PaperSprite,
    Width: number,
    Height: number
  ): SlateBrush;
}
declare class PaperFlipbookKeyFrame {
  Sprite: PaperSprite;
  FrameRun: number;
  clone(): PaperFlipbookKeyFrame;
  static C(Other: UObject | any): PaperFlipbookKeyFrame;
}
declare type EFlipbookCollisionModeT =
  | "NoCollision"
  | "FirstFrameCollision"
  | "EachFrameCollision"
  | "EFlipbookCollisionMode_MAX";
declare var EFlipbookCollisionMode: {
  NoCollision: "NoCollision",
  FirstFrameCollision: "FirstFrameCollision",
  EachFrameCollision: "EachFrameCollision",
  EFlipbookCollisionMode_MAX: "EFlipbookCollisionMode_MAX"
};
declare class PaperFlipbook mixins UObject {
  FramesPerSecond: number;
  KeyFrames: PaperFlipbookKeyFrame[];
  DefaultMaterial: MaterialInterface;
  CollisionSource: EFlipbookCollisionModeT;
  static Load(ResourceName: string): PaperFlipbook;
  static Find(Outer: UObject, ResourceName: string): PaperFlipbook;
  static GetDefaultObject(): PaperFlipbook;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperFlipbook;
  IsValidKeyFrameIndex(index: number): boolean;
  GetTotalDuration(): number;
  GetSpriteAtTime(Time: number, bClampToEnds: boolean): PaperSprite;
  GetSpriteAtFrame(FrameIndex: number): PaperSprite;
  GetNumKeyFrames(): number;
  GetNumFrames(): number;
  GetKeyFrameIndexAtTime(Time: number, bClampToEnds: boolean): number;
  static C(Other: UObject | any): PaperFlipbook;
}
declare class PaperFlipbookComponent mixins MeshComponent {
  SourceFlipbook: PaperFlipbook;
  Material: MaterialInterface;
  PlayRate: number;
  bLooping: boolean;
  bReversePlayback: boolean;
  bPlaying: boolean;
  AccumulatedTime: number;
  CachedFrameIndex: number;
  SpriteColor: LinearColor;
  CachedBodySetup: BodySetup;
  OnFinishedPlaying: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): PaperFlipbookComponent;
  static Find(Outer: UObject, ResourceName: string): PaperFlipbookComponent;
  static GetDefaultObject(): PaperFlipbookComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperFlipbookComponent;
  Stop(): void;
  SetSpriteColor(NewColor: LinearColor): void;
  SetPlayRate(NewRate: number): void;
  SetPlaybackPositionInFrames(
    NewFramePosition: number,
    bFireEvents: boolean
  ): void;
  SetPlaybackPosition(NewPosition: number, bFireEvents: boolean): void;
  SetNewTime(NewTime: number): void;
  SetLooping(bNewLooping: boolean): void;
  SetFlipbook(NewFlipbook: PaperFlipbook): boolean;
  ReverseFromEnd(): void;
  Reverse(): void;
  PlayFromStart(): void;
  Play(): void;
  OnRep_SourceFlipbook(OldFlipbook: PaperFlipbook): void;
  IsReversing(): boolean;
  IsPlaying(): boolean;
  IsLooping(): boolean;
  GetPlayRate(): number;
  GetPlaybackPositionInFrames(): number;
  GetPlaybackPosition(): number;
  GetFlipbookLengthInFrames(): number;
  GetFlipbookLength(): number;
  GetFlipbookFramerate(): number;
  GetFlipbook(): PaperFlipbook;
  static C(Other: UObject | any): PaperFlipbookComponent;
}
declare class PaperCharacter mixins Character {
  Sprite: PaperFlipbookComponent;
  static GetDefaultObject(): PaperCharacter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperCharacter;
  static C(Other: UObject | any): PaperCharacter;
}
declare class PaperFlipbookActor mixins Actor {
  RenderComponent: PaperFlipbookComponent;
  static GetDefaultObject(): PaperFlipbookActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperFlipbookActor;
  static C(Other: UObject | any): PaperFlipbookActor;
}
declare class SpriteInstanceData {
  Transform: Matrix;
  SourceSprite: PaperSprite;
  VertexColor: Color;
  MaterialIndex: number;
  clone(): SpriteInstanceData;
  static C(Other: UObject | any): SpriteInstanceData;
}
declare class PaperGroupedSpriteComponent mixins MeshComponent {
  InstanceMaterials: MaterialInterface[];
  PerInstanceSpriteData: SpriteInstanceData[];
  static Load(ResourceName: string): PaperGroupedSpriteComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperGroupedSpriteComponent;
  static GetDefaultObject(): PaperGroupedSpriteComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperGroupedSpriteComponent;
  UpdateInstanceTransform(
    InstanceIndex: number,
    NewInstanceTransform: Transform,
    bWorldSpace: boolean,
    bMarkRenderStateDirty: boolean,
    bTeleport: boolean
  ): boolean;
  UpdateInstanceColor(
    InstanceIndex: number,
    NewInstanceColor: LinearColor,
    bMarkRenderStateDirty: boolean
  ): boolean;
  SortInstancesAlongAxis(WorldSpaceSortAxis: Vector): void;
  RemoveInstance(InstanceIndex: number): boolean;
  GetInstanceTransform(
    InstanceIndex: number,
    OutInstanceTransform?: Transform,
    bWorldSpace?: boolean
  ): {
    OutInstanceTransform: Transform,
    $: boolean
  };
  GetInstanceCount(): number;
  ClearInstances(): void;
  AddInstance(
    Transform: Transform,
    Sprite: PaperSprite,
    bWorldSpace: boolean,
    Color: LinearColor
  ): number;
  static C(Other: UObject | any): PaperGroupedSpriteComponent;
}
declare class PaperGroupedSpriteActor mixins Actor {
  RenderComponent: PaperGroupedSpriteComponent;
  static GetDefaultObject(): PaperGroupedSpriteActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperGroupedSpriteActor;
  static C(Other: UObject | any): PaperGroupedSpriteActor;
}
declare class PaperRuntimeSettings mixins UObject {
  bEnableSpriteAtlasGroups: boolean;
  bEnableTerrainSplineEditing: boolean;
  bResizeSpriteDataToMatchTextures: boolean;
  static Load(ResourceName: string): PaperRuntimeSettings;
  static Find(Outer: UObject, ResourceName: string): PaperRuntimeSettings;
  static GetDefaultObject(): PaperRuntimeSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperRuntimeSettings;
  static C(Other: UObject | any): PaperRuntimeSettings;
}
declare class PaperSpriteComponent mixins MeshComponent {
  SourceSprite: PaperSprite;
  MaterialOverride: MaterialInterface;
  SpriteColor: LinearColor;
  static Load(ResourceName: string): PaperSpriteComponent;
  static Find(Outer: UObject, ResourceName: string): PaperSpriteComponent;
  static GetDefaultObject(): PaperSpriteComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteComponent;
  SetSpriteColor(NewColor: LinearColor): void;
  SetSprite(NewSprite: PaperSprite): boolean;
  GetSprite(): PaperSprite;
  static C(Other: UObject | any): PaperSpriteComponent;
}
declare class PaperSpriteActor mixins Actor {
  RenderComponent: PaperSpriteComponent;
  static GetDefaultObject(): PaperSpriteActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteActor;
  static C(Other: UObject | any): PaperSpriteActor;
}
declare class PaperSpriteBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): PaperSpriteBlueprintLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperSpriteBlueprintLibrary;
  static GetDefaultObject(): PaperSpriteBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteBlueprintLibrary;
  static MakeBrushFromSprite(
    Sprite: PaperSprite,
    Width: number,
    Height: number
  ): SlateBrush;
  static C(Other: UObject | any): PaperSpriteBlueprintLibrary;
}
declare class PaperTerrainSplineComponent mixins SplineComponent {
  static Load(ResourceName: string): PaperTerrainSplineComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperTerrainSplineComponent;
  static GetDefaultObject(): PaperTerrainSplineComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTerrainSplineComponent;
  static C(Other: UObject | any): PaperTerrainSplineComponent;
}
declare class PaperTerrainMaterialRule {
  StartCap: PaperSprite;
  Body: PaperSprite[];
  EndCap: PaperSprite;
  MinimumAngle: number;
  MaximumAngle: number;
  bEnableCollision: boolean;
  CollisionOffset: number;
  DrawOrder: number;
  Description: string;
  clone(): PaperTerrainMaterialRule;
  static C(Other: UObject | any): PaperTerrainMaterialRule;
}
declare class PaperTerrainMaterial mixins DataAsset {
  Rules: PaperTerrainMaterialRule[];
  InteriorFill: PaperSprite;
  static Load(ResourceName: string): PaperTerrainMaterial;
  static Find(Outer: UObject, ResourceName: string): PaperTerrainMaterial;
  static GetDefaultObject(): PaperTerrainMaterial;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTerrainMaterial;
  static C(Other: UObject | any): PaperTerrainMaterial;
}
declare class PaperTerrainComponent mixins PrimitiveComponent {
  TerrainMaterial: PaperTerrainMaterial;
  bClosedSpline: boolean;
  bFilledSpline: boolean;
  AssociatedSpline: PaperTerrainSplineComponent;
  RandomSeed: number;
  SegmentOverlapAmount: number;
  TerrainColor: LinearColor;
  ReparamStepsPerSegment: number;
  SpriteCollisionDomain: ESpriteCollisionModeT;
  CollisionThickness: number;
  CachedBodySetup: BodySetup;
  static Load(ResourceName: string): PaperTerrainComponent;
  static Find(Outer: UObject, ResourceName: string): PaperTerrainComponent;
  static GetDefaultObject(): PaperTerrainComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTerrainComponent;
  SetTerrainColor(NewColor: LinearColor): void;
  static C(Other: UObject | any): PaperTerrainComponent;
}
declare class PaperTerrainActor mixins Actor {
  DummyRoot: SceneComponent;
  SplineComponent: PaperTerrainSplineComponent;
  RenderComponent: PaperTerrainComponent;
  static GetDefaultObject(): PaperTerrainActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTerrainActor;
  static C(Other: UObject | any): PaperTerrainActor;
}
declare class IntMargin {
  Left: number;
  Top: number;
  Right: number;
  Bottom: number;
  clone(): IntMargin;
  static C(Other: UObject | any): IntMargin;
}
declare class PaperTileMetadata {
  UserDataName: string;
  CollisionData: SpriteGeometryCollection;
  TerrainMembership: number;
  clone(): PaperTileMetadata;
  static C(Other: UObject | any): PaperTileMetadata;
}
declare class PaperTileSetTerrain {
  TerrainName: string;
  CenterTileIndex: number;
  clone(): PaperTileSetTerrain;
  static C(Other: UObject | any): PaperTileSetTerrain;
}
declare class PaperTileSet mixins UObject {
  TileSize: IntPoint;
  TileSheet: Texture2D;
  AdditionalSourceTextures: Texture[];
  BorderMargin: IntMargin;
  PerTileSpacing: IntPoint;
  DrawingOffset: IntPoint;
  BackgroundColor: LinearColor;
  WidthInTiles: number;
  HeightInTiles: number;
  AllocatedWidth: number;
  AllocatedHeight: number;
  PerTileData: PaperTileMetadata[];
  Terrains: PaperTileSetTerrain[];
  TileWidth: number;
  TileHeight: number;
  Margin: number;
  Spacing: number;
  static Load(ResourceName: string): PaperTileSet;
  static Find(Outer: UObject, ResourceName: string): PaperTileSet;
  static GetDefaultObject(): PaperTileSet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileSet;
  static C(Other: UObject | any): PaperTileSet;
}
declare class PaperTileInfo {
  TileSet: PaperTileSet;
  PackedTileIndex: number;
  clone(): PaperTileInfo;
  static C(Other: UObject | any): PaperTileInfo;
  BreakTile(
    TileIndex?: number,
    TileSet?: PaperTileSet,
    bFlipH?: boolean,
    bFlipV?: boolean,
    bFlipD?: boolean
  ): {
    TileIndex: number,
    TileSet: PaperTileSet,
    bFlipH: boolean,
    bFlipV: boolean,
    bFlipD: boolean
  };
  GetTileTransform(): Transform;
  GetTileUserData(): string;
  static BreakTile(
    Tile: PaperTileInfo,
    TileIndex?: number,
    TileSet?: PaperTileSet,
    bFlipH?: boolean,
    bFlipV?: boolean,
    bFlipD?: boolean
  ): {
    TileIndex: number,
    TileSet: PaperTileSet,
    bFlipH: boolean,
    bFlipV: boolean,
    bFlipD: boolean
  };
  static GetTileTransform(Tile: PaperTileInfo): Transform;
  static GetTileUserData(Tile: PaperTileInfo): string;
  static MakeTile(
    TileIndex: number,
    TileSet: PaperTileSet,
    bFlipH: boolean,
    bFlipV: boolean,
    bFlipD: boolean
  ): PaperTileInfo;
}
declare class PaperTileLayer mixins UObject {
  LayerName: string;
  LayerWidth: number;
  LayerHeight: number;
  bHiddenInEditor: boolean;
  bHiddenInGame: boolean;
  bLayerCollides: boolean;
  bOverrideCollisionThickness: boolean;
  bOverrideCollisionOffset: boolean;
  CollisionThicknessOverride: number;
  CollisionOffsetOverride: number;
  LayerColor: LinearColor;
  AllocatedWidth: number;
  AllocatedHeight: number;
  AllocatedCells: PaperTileInfo[];
  TileSet: PaperTileSet;
  AllocatedGrid: number[];
  static Load(ResourceName: string): PaperTileLayer;
  static Find(Outer: UObject, ResourceName: string): PaperTileLayer;
  static GetDefaultObject(): PaperTileLayer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileLayer;
  static C(Other: UObject | any): PaperTileLayer;
}
declare type ETileMapProjectionModeT =
  | "Orthogonal"
  | "IsometricDiamond"
  | "IsometricStaggered"
  | "HexagonalStaggered"
  | "ETileMapProjectionMode_MAX";
declare var ETileMapProjectionMode: {
  Orthogonal: "Orthogonal",
  IsometricDiamond: "IsometricDiamond",
  IsometricStaggered: "IsometricStaggered",
  HexagonalStaggered: "HexagonalStaggered",
  ETileMapProjectionMode_MAX: "ETileMapProjectionMode_MAX"
};
declare class PaperTileMap mixins UObject {
  MapWidth: number;
  MapHeight: number;
  TileWidth: number;
  TileHeight: number;
  PixelsPerUnrealUnit: number;
  SeparationPerTileX: number;
  SeparationPerTileY: number;
  SeparationPerLayer: number;
  SelectedTileSet: PaperTileSet;
  Material: MaterialInterface;
  TileLayers: PaperTileLayer[];
  CollisionThickness: number;
  SpriteCollisionDomain: ESpriteCollisionModeT;
  ProjectionMode: ETileMapProjectionModeT;
  HexSideLength: number;
  BodySetup: BodySetup;
  AssetImportData: AssetImportData;
  SelectedLayerIndex: number;
  BackgroundColor: LinearColor;
  TileGridColor: LinearColor;
  MultiTileGridColor: LinearColor;
  MultiTileGridWidth: number;
  MultiTileGridHeight: number;
  MultiTileGridOffsetX: number;
  MultiTileGridOffsetY: number;
  LayerGridColor: LinearColor;
  LayerNameIndex: number;
  static Load(ResourceName: string): PaperTileMap;
  static Find(Outer: UObject, ResourceName: string): PaperTileMap;
  static GetDefaultObject(): PaperTileMap;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileMap;
  static C(Other: UObject | any): PaperTileMap;
}
declare class PaperTileMapComponent mixins MeshComponent {
  MapWidth: number;
  MapHeight: number;
  TileWidth: number;
  TileHeight: number;
  DefaultLayerTileSet: PaperTileSet;
  Material: MaterialInterface;
  TileLayers: PaperTileLayer[];
  TileMapColor: LinearColor;
  UseSingleLayerIndex: number;
  bUseSingleLayer: boolean;
  TileMap: PaperTileMap;
  bShowPerTileGridWhenSelected: boolean;
  bShowPerLayerGridWhenSelected: boolean;
  bShowOutlineWhenUnselected: boolean;
  bShowPerTileGridWhenUnselected: boolean;
  bShowPerLayerGridWhenUnselected: boolean;
  static Load(ResourceName: string): PaperTileMapComponent;
  static Find(Outer: UObject, ResourceName: string): PaperTileMapComponent;
  static GetDefaultObject(): PaperTileMapComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileMapComponent;
  SetTileMapColor(NewColor: LinearColor): void;
  SetTileMap(NewTileMap: PaperTileMap): boolean;
  SetTile(X: number, Y: number, Layer: number, NewValue: PaperTileInfo): void;
  SetLayerColor(NewColor: LinearColor, Layer: number): void;
  SetLayerCollision(
    Layer: number,
    bHasCollision: boolean,
    bOverrideThickness: boolean,
    CustomThickness: number,
    bOverrideOffset: boolean,
    CustomOffset: number,
    bRebuildCollision: boolean
  ): void;
  SetDefaultCollisionThickness(
    Thickness: number,
    bRebuildCollision: boolean
  ): void;
  ResizeMap(NewWidthInTiles: number, NewHeightInTiles: number): void;
  RebuildCollision(): void;
  OwnsTileMap(): boolean;
  MakeTileMapEditable(): void;
  GetTilePolygon(
    TileX: number,
    TileY: number,
    Points?: Vector[],
    LayerIndex?: number,
    bWorldSpace?: boolean
  ): {
    Points: Vector[]
  };
  GetTileMapColor(): LinearColor;
  GetTileCornerPosition(
    TileX: number,
    TileY: number,
    LayerIndex: number,
    bWorldSpace: boolean
  ): Vector;
  GetTileCenterPosition(
    TileX: number,
    TileY: number,
    LayerIndex: number,
    bWorldSpace: boolean
  ): Vector;
  GetTile(X: number, Y: number, Layer: number): PaperTileInfo;
  GetMapSize(
    MapWidth?: number,
    MapHeight?: number,
    NumLayers?: number
  ): {
    MapWidth: number,
    MapHeight: number,
    NumLayers: number
  };
  GetLayerColor(Layer: number): LinearColor;
  CreateNewTileMap(
    MapWidth: number,
    MapHeight: number,
    TileWidth: number,
    TileHeight: number,
    PixelsPerUnrealUnit: number,
    bCreateLayer: boolean
  ): void;
  AddNewLayer(): PaperTileLayer;
  static C(Other: UObject | any): PaperTileMapComponent;
}
declare class PaperTileMapActor mixins Actor {
  RenderComponent: PaperTileMapComponent;
  static GetDefaultObject(): PaperTileMapActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileMapActor;
  static C(Other: UObject | any): PaperTileMapActor;
}
declare class TileMapBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): TileMapBlueprintLibrary;
  static Find(Outer: UObject, ResourceName: string): TileMapBlueprintLibrary;
  static GetDefaultObject(): TileMapBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TileMapBlueprintLibrary;
  static MakeTile(
    TileIndex: number,
    TileSet: PaperTileSet,
    bFlipH: boolean,
    bFlipV: boolean,
    bFlipD: boolean
  ): PaperTileInfo;
  static GetTileUserData(Tile: PaperTileInfo): string;
  static GetTileTransform(Tile: PaperTileInfo): Transform;
  static BreakTile(
    Tile: PaperTileInfo,
    TileIndex?: number,
    TileSet?: PaperTileSet,
    bFlipH?: boolean,
    bFlipV?: boolean,
    bFlipD?: boolean
  ): {
    TileIndex: number,
    TileSet: PaperTileSet,
    bFlipH: boolean,
    bFlipV: boolean,
    bFlipD: boolean
  };
  static C(Other: UObject | any): TileMapBlueprintLibrary;
}
declare class TcpMessagingSettings mixins UObject {
  EnableTransport: boolean;
  ListenEndpoint: string;
  ConnectToEndpoints: string[];
  ConnectionRetryDelay: number;
  static Load(ResourceName: string): TcpMessagingSettings;
  static Find(Outer: UObject, ResourceName: string): TcpMessagingSettings;
  static GetDefaultObject(): TcpMessagingSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TcpMessagingSettings;
  static C(Other: UObject | any): TcpMessagingSettings;
}
declare class UdpMessagingSettings mixins UObject {
  EnableTransport: boolean;
  UnicastEndpoint: string;
  MulticastEndpoint: string;
  MulticastTimeToLive: number;
  StaticEndpoints: string[];
  EnableTunnel: boolean;
  TunnelUnicastEndpoint: string;
  TunnelMulticastEndpoint: string;
  RemoteTunnelEndpoints: string[];
  static Load(ResourceName: string): UdpMessagingSettings;
  static Find(Outer: UObject, ResourceName: string): UdpMessagingSettings;
  static GetDefaultObject(): UdpMessagingSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): UdpMessagingSettings;
  static C(Other: UObject | any): UdpMessagingSettings;
}
declare class AudioCurveSourceComponent mixins AudioComponent {
  CurveSourceBindingName: string;
  CurveSyncOffset: number;
  static Load(ResourceName: string): AudioCurveSourceComponent;
  static Find(Outer: UObject, ResourceName: string): AudioCurveSourceComponent;
  static GetDefaultObject(): AudioCurveSourceComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AudioCurveSourceComponent;
  static C(Other: UObject | any): AudioCurveSourceComponent;
}
declare class FacialAnimationBulkImporterSettings mixins UObject {
  SourceImportPath: DirectoryPath;
  TargetImportPath: DirectoryPath;
  CurveNodeName: string;
  static Load(ResourceName: string): FacialAnimationBulkImporterSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): FacialAnimationBulkImporterSettings;
  static GetDefaultObject(): FacialAnimationBulkImporterSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FacialAnimationBulkImporterSettings;
  static C(Other: UObject | any): FacialAnimationBulkImporterSettings;
}
declare class EdGraph_ReferenceViewer mixins EdGraph {
  static Load(ResourceName: string): EdGraph_ReferenceViewer;
  static Find(Outer: UObject, ResourceName: string): EdGraph_ReferenceViewer;
  static GetDefaultObject(): EdGraph_ReferenceViewer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EdGraph_ReferenceViewer;
  static C(Other: UObject | any): EdGraph_ReferenceViewer;
}
declare class EdGraphNode_Reference mixins EdGraphNode {
  static Load(ResourceName: string): EdGraphNode_Reference;
  static Find(Outer: UObject, ResourceName: string): EdGraphNode_Reference;
  static GetDefaultObject(): EdGraphNode_Reference;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EdGraphNode_Reference;
  static C(Other: UObject | any): EdGraphNode_Reference;
}
declare class ReferenceViewerSchema mixins EdGraphSchema {
  static Load(ResourceName: string): ReferenceViewerSchema;
  static Find(Outer: UObject, ResourceName: string): ReferenceViewerSchema;
  static GetDefaultObject(): ReferenceViewerSchema;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ReferenceViewerSchema;
  static C(Other: UObject | any): ReferenceViewerSchema;
}
declare class GameplayTagSearchFilter
  mixins ContentBrowserFrontEndFilterExtension {
  static Load(ResourceName: string): GameplayTagSearchFilter;
  static Find(Outer: UObject, ResourceName: string): GameplayTagSearchFilter;
  static GetDefaultObject(): GameplayTagSearchFilter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagSearchFilter;
  static C(Other: UObject | any): GameplayTagSearchFilter;
}
declare class GameplayTagsK2Node_LiteralGameplayTag mixins K2Node {
  static Load(ResourceName: string): GameplayTagsK2Node_LiteralGameplayTag;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_LiteralGameplayTag;
  static GetDefaultObject(): GameplayTagsK2Node_LiteralGameplayTag;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_LiteralGameplayTag;
  static C(Other: UObject | any): GameplayTagsK2Node_LiteralGameplayTag;
}
declare class GameplayTagsK2Node_MultiCompareBase mixins K2Node {
  NumberOfPins: number;
  PinNames: string[];
  static Load(ResourceName: string): GameplayTagsK2Node_MultiCompareBase;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareBase;
  static GetDefaultObject(): GameplayTagsK2Node_MultiCompareBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_MultiCompareBase;
  static C(Other: UObject | any): GameplayTagsK2Node_MultiCompareBase;
}
declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface
  mixins GameplayTagsK2Node_MultiCompareBase {
  static Load(
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
  static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
  static C(
    Other: UObject | any
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterface;
}
declare class GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags
  mixins GameplayTagsK2Node_MultiCompareBase {
  static Load(
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
  static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
  static C(
    Other: UObject | any
  ): GameplayTagsK2Node_MultiCompareGameplayTagAssetInterfaceSingleTags;
}
declare class GameplayTagsK2Node_MultiCompareGameplayTagContainer
  mixins GameplayTagsK2Node_MultiCompareBase {
  static Load(
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
  static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
  static C(
    Other: UObject | any
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainer;
}
declare class GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags
  mixins GameplayTagsK2Node_MultiCompareBase {
  static Load(
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
  static GetDefaultObject(): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
  static C(
    Other: UObject | any
  ): GameplayTagsK2Node_MultiCompareGameplayTagContainerSingleTags;
}
declare class GameplayTagsK2Node_SwitchGameplayTag mixins K2Node_Switch {
  PinTags: GameplayTag[];
  PinNames: string[];
  static Load(ResourceName: string): GameplayTagsK2Node_SwitchGameplayTag;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_SwitchGameplayTag;
  static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTag;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_SwitchGameplayTag;
  static C(Other: UObject | any): GameplayTagsK2Node_SwitchGameplayTag;
}
declare class GameplayTagsK2Node_SwitchGameplayTagContainer
  mixins K2Node_Switch {
  PinContainers: GameplayTagContainer[];
  PinNames: string[];
  static Load(
    ResourceName: string
  ): GameplayTagsK2Node_SwitchGameplayTagContainer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GameplayTagsK2Node_SwitchGameplayTagContainer;
  static GetDefaultObject(): GameplayTagsK2Node_SwitchGameplayTagContainer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GameplayTagsK2Node_SwitchGameplayTagContainer;
  static C(Other: UObject | any): GameplayTagsK2Node_SwitchGameplayTagContainer;
}
declare class DataValidationCommandlet mixins Commandlet {
  static Load(ResourceName: string): DataValidationCommandlet;
  static Find(Outer: UObject, ResourceName: string): DataValidationCommandlet;
  static GetDefaultObject(): DataValidationCommandlet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DataValidationCommandlet;
  static C(Other: UObject | any): DataValidationCommandlet;
}
declare class DataValidationManager mixins UObject {
  ExcludedDirectories: DirectoryPath[];
  bValidateOnSave: boolean;
  DataValidationManagerClassName: SoftClassPath;
  static Load(ResourceName: string): DataValidationManager;
  static Find(Outer: UObject, ResourceName: string): DataValidationManager;
  static GetDefaultObject(): DataValidationManager;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DataValidationManager;
  static C(Other: UObject | any): DataValidationManager;
}
declare class AppleImageUtilsImageConversionResult {
  Error: string;
  ImageData: number[];
  clone(): AppleImageUtilsImageConversionResult;
  static C(Other: UObject | any): AppleImageUtilsImageConversionResult;
}
declare type ETextureRotationDirectionT =
  | "None"
  | "Left"
  | "Right"
  | "Down"
  | "ETextureRotationDirection_MAX";
declare var ETextureRotationDirection: {
  None: "None",
  Left: "Left",
  Right: "Right",
  Down: "Down",
  ETextureRotationDirection_MAX: "ETextureRotationDirection_MAX"
};
declare class AppleImageUtilsBaseAsyncTaskBlueprintProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<
    (ConversionResult: AppleImageUtilsImageConversionResult) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (ConversionResult: AppleImageUtilsImageConversionResult) => void
  >;
  ConversionResult: AppleImageUtilsImageConversionResult;
  static Load(ResourceName: string): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static GetDefaultObject(): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static CreateProxyObjectForConvertToTIFF(
    SourceImage: Texture,
    bWantColor: boolean,
    bUseGpu: boolean,
    Scale: number,
    Rotate: ETextureRotationDirectionT
  ): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static CreateProxyObjectForConvertToPNG(
    SourceImage: Texture,
    bWantColor: boolean,
    bUseGpu: boolean,
    Scale: number,
    Rotate: ETextureRotationDirectionT
  ): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static CreateProxyObjectForConvertToJPEG(
    SourceImage: Texture,
    Quality: number,
    bWantColor: boolean,
    bUseGpu: boolean,
    Scale: number,
    Rotate: ETextureRotationDirectionT
  ): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static CreateProxyObjectForConvertToHEIF(
    SourceImage: Texture,
    Quality: number,
    bWantColor: boolean,
    bUseGpu: boolean,
    Scale: number,
    Rotate: ETextureRotationDirectionT
  ): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
  static C(Other: UObject | any): AppleImageUtilsBaseAsyncTaskBlueprintProxy;
}
declare class AppleImageInterface mixins Interface {
  static Load(ResourceName: string): AppleImageInterface;
  static Find(Outer: UObject, ResourceName: string): AppleImageInterface;
  static GetDefaultObject(): AppleImageInterface;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AppleImageInterface;
  static C(Other: UObject | any): AppleImageInterface;
}
declare class DetectedFeature {
  Confidence: number;
  clone(): DetectedFeature;
  static C(Other: UObject | any): DetectedFeature;
}
declare class DetectedFeatureRegion mixins DetectedFeature {
  Points: Vector2D[];
  clone(): DetectedFeatureRegion;
  static C(Other: UObject | any): DetectedFeatureRegion;
}
declare class DetectedFeature2D mixins DetectedFeature {
  BoundingBox: Box2D;
  clone(): DetectedFeature2D;
  static C(Other: UObject | any): DetectedFeature2D;
}
declare type EDetectedFaceFeatureTypeT =
  | "Unkown"
  | "FaceContour"
  | "InnerLips"
  | "LeftEye"
  | "LeftEyebrow"
  | "LeftPupil"
  | "MedianLine"
  | "Nose"
  | "NoseCrest"
  | "OuterLips"
  | "RightEye"
  | "RightEyebrow"
  | "RightPupil"
  | "EDetectedFaceFeatureType_MAX";
declare var EDetectedFaceFeatureType: {
  Unkown: "Unkown",
  FaceContour: "FaceContour",
  InnerLips: "InnerLips",
  LeftEye: "LeftEye",
  LeftEyebrow: "LeftEyebrow",
  LeftPupil: "LeftPupil",
  MedianLine: "MedianLine",
  Nose: "Nose",
  NoseCrest: "NoseCrest",
  OuterLips: "OuterLips",
  RightEye: "RightEye",
  RightEyebrow: "RightEyebrow",
  RightPupil: "RightPupil",
  EDetectedFaceFeatureType_MAX: "EDetectedFaceFeatureType_MAX"
};
declare class DetectedFaceFeature2D mixins DetectedFeature2D {
  FeatureType: EDetectedFaceFeatureTypeT;
  clone(): DetectedFaceFeature2D;
  static C(Other: UObject | any): DetectedFaceFeature2D;
}
declare class DetectedFaceFeatureRegion mixins DetectedFeatureRegion {
  FeatureType: EDetectedFaceFeatureTypeT;
  clone(): DetectedFaceFeatureRegion;
  static C(Other: UObject | any): DetectedFaceFeatureRegion;
}
declare class DetectedFace mixins DetectedFeatureRegion {
  BoundingBox: Box2D;
  Features: DetectedFaceFeature2D[];
  FeatureRegions: DetectedFaceFeatureRegion[];
  clone(): DetectedFace;
  static C(Other: UObject | any): DetectedFace;
}
declare class FaceDetectionResult {
  DetectedFaces: DetectedFace[];
  clone(): FaceDetectionResult;
  static C(Other: UObject | any): FaceDetectionResult;
}
declare class AppleVisionDetectFacesAsyncTaskBlueprintProxy mixins UObject {
  OnSuccess: UnrealEngineMulticastDelegate<
    (FaceDetectionResult: FaceDetectionResult) => void
  >;
  OnFailure: UnrealEngineMulticastDelegate<
    (FaceDetectionResult: FaceDetectionResult) => void
  >;
  FaceDetectionResult: FaceDetectionResult;
  static Load(
    ResourceName: string
  ): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
  static GetDefaultObject(): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
  static CreateProxyObjectForDetectFaces(
    SourceImage: Texture
  ): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
  static C(Other: UObject | any): AppleVisionDetectFacesAsyncTaskBlueprintProxy;
}
declare class K2Node_DetectFaces mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_DetectFaces;
  static Find(Outer: UObject, ResourceName: string): K2Node_DetectFaces;
  static GetDefaultObject(): K2Node_DetectFaces;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_DetectFaces;
  static C(Other: UObject | any): K2Node_DetectFaces;
}
declare class GeometryCacheTrack mixins UObject {
  Duration: number;
  static Load(ResourceName: string): GeometryCacheTrack;
  static Find(Outer: UObject, ResourceName: string): GeometryCacheTrack;
  static GetDefaultObject(): GeometryCacheTrack;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheTrack;
  static C(Other: UObject | any): GeometryCacheTrack;
}
declare class GeometryCache mixins UObject {
  AssetImportData: AssetImportData;
  ThumbnailInfo: ThumbnailInfo;
  Materials: MaterialInterface[];
  Tracks: GeometryCacheTrack[];
  StartFrame: number;
  EndFrame: number;
  static Load(ResourceName: string): GeometryCache;
  static Find(Outer: UObject, ResourceName: string): GeometryCache;
  static GetDefaultObject(): GeometryCache;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCache;
  static C(Other: UObject | any): GeometryCache;
}
declare class GeometryCacheComponent mixins MeshComponent {
  GeometryCache: GeometryCache;
  bRunning: boolean;
  bLooping: boolean;
  StartTimeOffset: number;
  PlaybackSpeed: number;
  NumTracks: number;
  ElapsedTime: number;
  Duration: number;
  bManualTick: boolean;
  static Load(ResourceName: string): GeometryCacheComponent;
  static Find(Outer: UObject, ResourceName: string): GeometryCacheComponent;
  static GetDefaultObject(): GeometryCacheComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheComponent;
  TickAtThisTime(
    Time: number,
    bInIsRunning: boolean,
    bInBackwards: boolean,
    bInIsLooping: boolean
  ): void;
  Stop(): void;
  SetStartTimeOffset(NewStartTimeOffset: number): void;
  SetPlaybackSpeed(NewPlaybackSpeed: number): void;
  SetLooping(bNewLooping: boolean): void;
  SetGeometryCache(NewGeomCache: GeometryCache): boolean;
  PlayReversedFromEnd(): void;
  PlayReversed(): void;
  PlayFromStart(): void;
  Play(): void;
  Pause(): void;
  IsPlayingReversed(): boolean;
  IsPlaying(): boolean;
  IsLooping(): boolean;
  GetStartTimeOffset(): number;
  GetPlaybackSpeed(): number;
  GetPlaybackDirection(): number;
  GetNumberOfFrames(): number;
  GetDuration(): number;
  GetAnimationTime(): number;
  static C(Other: UObject | any): GeometryCacheComponent;
}
declare class GeometryCacheActor mixins Actor {
  GeometryCacheComponent: GeometryCacheComponent;
  static GetDefaultObject(): GeometryCacheActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheActor;
  GetGeometryCacheComponent(): GeometryCacheComponent;
  static C(Other: UObject | any): GeometryCacheActor;
}
declare class GeometryCacheCodecBase mixins UObject {
  TopologyRanges: number[];
  static Load(ResourceName: string): GeometryCacheCodecBase;
  static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecBase;
  static GetDefaultObject(): GeometryCacheCodecBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheCodecBase;
  static C(Other: UObject | any): GeometryCacheCodecBase;
}
declare class GeometryCacheCodecRaw mixins GeometryCacheCodecBase {
  DummyProperty: number;
  static Load(ResourceName: string): GeometryCacheCodecRaw;
  static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecRaw;
  static GetDefaultObject(): GeometryCacheCodecRaw;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheCodecRaw;
  static C(Other: UObject | any): GeometryCacheCodecRaw;
}
declare class GeometryCacheCodecV1 mixins GeometryCacheCodecBase {
  static Load(ResourceName: string): GeometryCacheCodecV1;
  static Find(Outer: UObject, ResourceName: string): GeometryCacheCodecV1;
  static GetDefaultObject(): GeometryCacheCodecV1;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheCodecV1;
  static C(Other: UObject | any): GeometryCacheCodecV1;
}
declare class GeometryCacheMeshData {
  clone(): GeometryCacheMeshData;
  static C(Other: UObject | any): GeometryCacheMeshData;
}
declare class GeometryCacheTrack_FlipbookAnimation mixins GeometryCacheTrack {
  NumMeshSamples: any;
  static Load(ResourceName: string): GeometryCacheTrack_FlipbookAnimation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCacheTrack_FlipbookAnimation;
  static GetDefaultObject(): GeometryCacheTrack_FlipbookAnimation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheTrack_FlipbookAnimation;
  AddMeshSample(MeshData: GeometryCacheMeshData, SampleTime: number): void;
  static C(Other: UObject | any): GeometryCacheTrack_FlipbookAnimation;
}
declare class GeometryCacheTrackStreamable mixins GeometryCacheTrack {
  Codec: GeometryCacheCodecBase;
  StartSampleTime: number;
  static Load(ResourceName: string): GeometryCacheTrackStreamable;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCacheTrackStreamable;
  static GetDefaultObject(): GeometryCacheTrackStreamable;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheTrackStreamable;
  static C(Other: UObject | any): GeometryCacheTrackStreamable;
}
declare class GeometryCacheTrack_TransformAnimation mixins GeometryCacheTrack {
  static Load(ResourceName: string): GeometryCacheTrack_TransformAnimation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCacheTrack_TransformAnimation;
  static GetDefaultObject(): GeometryCacheTrack_TransformAnimation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheTrack_TransformAnimation;
  SetMesh(NewMeshData: GeometryCacheMeshData): void;
  static C(Other: UObject | any): GeometryCacheTrack_TransformAnimation;
}
declare class GeometryCacheTrack_TransformGroupAnimation
  mixins GeometryCacheTrack {
  static Load(ResourceName: string): GeometryCacheTrack_TransformGroupAnimation;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCacheTrack_TransformGroupAnimation;
  static GetDefaultObject(): GeometryCacheTrack_TransformGroupAnimation;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheTrack_TransformGroupAnimation;
  SetMesh(NewMeshData: GeometryCacheMeshData): void;
  static C(Other: UObject | any): GeometryCacheTrack_TransformGroupAnimation;
}
declare type EAlembicSamplingTypeT =
  | "PerFrame"
  | "PerXFrames"
  | "PerTimeStep"
  | "EAlembicSamplingType_MAX";
declare var EAlembicSamplingType: {
  PerFrame: "PerFrame",
  PerXFrames: "PerXFrames",
  PerTimeStep: "PerTimeStep",
  EAlembicSamplingType_MAX: "EAlembicSamplingType_MAX"
};
declare class AbcSamplingSettings {
  SamplingType: EAlembicSamplingTypeT;
  FrameSteps: number;
  TimeSteps: number;
  FrameStart: number;
  FrameEnd: number;
  bSkipEmpty: boolean;
  clone(): AbcSamplingSettings;
  static C(Other: UObject | any): AbcSamplingSettings;
}
declare class AbcAssetImportData mixins AssetImportData {
  TrackNames: string[];
  SamplingSettings: AbcSamplingSettings;
  static Load(ResourceName: string): AbcAssetImportData;
  static Find(Outer: UObject, ResourceName: string): AbcAssetImportData;
  static GetDefaultObject(): AbcAssetImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AbcAssetImportData;
  static C(Other: UObject | any): AbcAssetImportData;
}
declare type EAlembicImportTypeT =
  | "StaticMesh"
  | "GeometryCache"
  | "Skeletal"
  | "EAlembicImportType_MAX";
declare var EAlembicImportType: {
  StaticMesh: "StaticMesh",
  GeometryCache: "GeometryCache",
  Skeletal: "Skeletal",
  EAlembicImportType_MAX: "EAlembicImportType_MAX"
};
declare class AbcNormalGenerationSettings {
  bForceOneSmoothingGroupPerObject: boolean;
  HardEdgeAngleThreshold: number;
  bRecomputeNormals: boolean;
  bIgnoreDegenerateTriangles: boolean;
  clone(): AbcNormalGenerationSettings;
  static C(Other: UObject | any): AbcNormalGenerationSettings;
}
declare class AbcMaterialSettings {
  bCreateMaterials: boolean;
  bFindMaterials: boolean;
  clone(): AbcMaterialSettings;
  static C(Other: UObject | any): AbcMaterialSettings;
}
declare type EBaseCalculationTypeT =
  | "PercentageBased"
  | "FixedNumber"
  | "EBaseCalculationType_MAX";
declare var EBaseCalculationType: {
  PercentageBased: "PercentageBased",
  FixedNumber: "FixedNumber",
  EBaseCalculationType_MAX: "EBaseCalculationType_MAX"
};
declare class AbcCompressionSettings {
  bMergeMeshes: boolean;
  bBakeMatrixAnimation: boolean;
  BaseCalculationType: EBaseCalculationTypeT;
  PercentageOfTotalBases: number;
  MaxNumberOfBases: number;
  MinimumNumberOfVertexInfluencePercentage: number;
  clone(): AbcCompressionSettings;
  static C(Other: UObject | any): AbcCompressionSettings;
}
declare class AbcStaticMeshSettings {
  bMergeMeshes: boolean;
  bPropagateMatrixTransformations: boolean;
  bGenerateLightmapUVs: boolean;
  clone(): AbcStaticMeshSettings;
  static C(Other: UObject | any): AbcStaticMeshSettings;
}
declare class AbcGeometryCacheSettings {
  bFlattenTracks: boolean;
  bApplyConstantTopologyOptimizations: boolean;
  bCalculateMotionVectorsDuringImport: boolean;
  bOptimizeIndexBuffers: boolean;
  CompressedPositionPrecision: number;
  CompressedTextureCoordinatesNumberOfBits: number;
  clone(): AbcGeometryCacheSettings;
  static C(Other: UObject | any): AbcGeometryCacheSettings;
}
declare type EAbcConversionPresetT =
  | "Maya"
  | "Max"
  | "Custom"
  | "EAbcConversionPreset_MAX";
declare var EAbcConversionPreset: {
  Maya: "Maya",
  Max: "Max",
  Custom: "Custom",
  EAbcConversionPreset_MAX: "EAbcConversionPreset_MAX"
};
declare class AbcConversionSettings {
  Preset: EAbcConversionPresetT;
  bFlipU: boolean;
  bFlipV: boolean;
  Scale: Vector;
  Rotation: Vector;
  clone(): AbcConversionSettings;
  static C(Other: UObject | any): AbcConversionSettings;
}
declare class AbcImportSettings mixins UObject {
  ImportType: EAlembicImportTypeT;
  SamplingSettings: AbcSamplingSettings;
  NormalGenerationSettings: AbcNormalGenerationSettings;
  MaterialSettings: AbcMaterialSettings;
  CompressionSettings: AbcCompressionSettings;
  StaticMeshSettings: AbcStaticMeshSettings;
  GeometryCacheSettings: AbcGeometryCacheSettings;
  ConversionSettings: AbcConversionSettings;
  static Load(ResourceName: string): AbcImportSettings;
  static Find(Outer: UObject, ResourceName: string): AbcImportSettings;
  static GetDefaultObject(): AbcImportSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AbcImportSettings;
  static C(Other: UObject | any): AbcImportSettings;
}
declare class AlembicTestCommandlet mixins Commandlet {
  static Load(ResourceName: string): AlembicTestCommandlet;
  static Find(Outer: UObject, ResourceName: string): AlembicTestCommandlet;
  static GetDefaultObject(): AlembicTestCommandlet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AlembicTestCommandlet;
  static C(Other: UObject | any): AlembicTestCommandlet;
}
declare class AlembicImportFactory mixins Factory {
  ImportSettings: AbcImportSettings;
  bShowOption: boolean;
  static Load(ResourceName: string): AlembicImportFactory;
  static Find(Outer: UObject, ResourceName: string): AlembicImportFactory;
  static GetDefaultObject(): AlembicImportFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AlembicImportFactory;
  static C(Other: UObject | any): AlembicImportFactory;
}
declare class ActorFactoryGeometryCache mixins ActorFactory {
  static Load(ResourceName: string): ActorFactoryGeometryCache;
  static Find(Outer: UObject, ResourceName: string): ActorFactoryGeometryCache;
  static GetDefaultObject(): ActorFactoryGeometryCache;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ActorFactoryGeometryCache;
  static C(Other: UObject | any): ActorFactoryGeometryCache;
}
declare class GeometryCacheThumbnailRenderer
  mixins DefaultSizedThumbnailRenderer {
  static Load(ResourceName: string): GeometryCacheThumbnailRenderer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCacheThumbnailRenderer;
  static GetDefaultObject(): GeometryCacheThumbnailRenderer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCacheThumbnailRenderer;
  static C(Other: UObject | any): GeometryCacheThumbnailRenderer;
}
declare class K2Node_ConvertToJPEG mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_ConvertToJPEG;
  static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToJPEG;
  static GetDefaultObject(): K2Node_ConvertToJPEG;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_ConvertToJPEG;
  static C(Other: UObject | any): K2Node_ConvertToJPEG;
}
declare class K2Node_ConvertToHEIF mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_ConvertToHEIF;
  static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToHEIF;
  static GetDefaultObject(): K2Node_ConvertToHEIF;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_ConvertToHEIF;
  static C(Other: UObject | any): K2Node_ConvertToHEIF;
}
declare class K2Node_ConvertToTIFF mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_ConvertToTIFF;
  static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToTIFF;
  static GetDefaultObject(): K2Node_ConvertToTIFF;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_ConvertToTIFF;
  static C(Other: UObject | any): K2Node_ConvertToTIFF;
}
declare class K2Node_ConvertToPNG mixins K2Node_BaseAsyncTask {
  static Load(ResourceName: string): K2Node_ConvertToPNG;
  static Find(Outer: UObject, ResourceName: string): K2Node_ConvertToPNG;
  static GetDefaultObject(): K2Node_ConvertToPNG;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): K2Node_ConvertToPNG;
  static C(Other: UObject | any): K2Node_ConvertToPNG;
}
declare class MovieSceneGeometryCacheParams {
  GeometryCacheAsset: GeometryCache;
  StartFrameOffset: FrameNumber;
  EndFrameOffset: FrameNumber;
  PlayRate: number;
  bReverse: boolean;
  StartOffset: number;
  EndOffset: number;
  GeometryCache: SoftObjectPath;
  clone(): MovieSceneGeometryCacheParams;
  static C(Other: UObject | any): MovieSceneGeometryCacheParams;
}
declare class MovieSceneGeometryCacheSection mixins MovieSceneSection {
  Params: MovieSceneGeometryCacheParams;
  static Load(ResourceName: string): MovieSceneGeometryCacheSection;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MovieSceneGeometryCacheSection;
  static GetDefaultObject(): MovieSceneGeometryCacheSection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MovieSceneGeometryCacheSection;
  static C(Other: UObject | any): MovieSceneGeometryCacheSection;
}
declare class MovieSceneGeometryCacheTrack mixins MovieSceneNameableTrack {
  AnimationSections: MovieSceneSection[];
  static Load(ResourceName: string): MovieSceneGeometryCacheTrack;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MovieSceneGeometryCacheTrack;
  static GetDefaultObject(): MovieSceneGeometryCacheTrack;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MovieSceneGeometryCacheTrack;
  static C(Other: UObject | any): MovieSceneGeometryCacheTrack;
}
declare class WebSocketConnection mixins NetConnection {
  static Load(ResourceName: string): WebSocketConnection;
  static Find(Outer: UObject, ResourceName: string): WebSocketConnection;
  static GetDefaultObject(): WebSocketConnection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WebSocketConnection;
  static C(Other: UObject | any): WebSocketConnection;
}
declare class WebSocketNetDriver mixins NetDriver {
  WebSocketPort: number;
  static Load(ResourceName: string): WebSocketNetDriver;
  static Find(Outer: UObject, ResourceName: string): WebSocketNetDriver;
  static GetDefaultObject(): WebSocketNetDriver;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): WebSocketNetDriver;
  static C(Other: UObject | any): WebSocketNetDriver;
}
declare class AnimationSharingSetupFactory mixins Factory {
  static Load(ResourceName: string): AnimationSharingSetupFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AnimationSharingSetupFactory;
  static GetDefaultObject(): AnimationSharingSetupFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AnimationSharingSetupFactory;
  static C(Other: UObject | any): AnimationSharingSetupFactory;
}
declare class LayersBlueprintLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): LayersBlueprintLibrary;
  static Find(Outer: UObject, ResourceName: string): LayersBlueprintLibrary;
  static GetDefaultObject(): LayersBlueprintLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LayersBlueprintLibrary;
  static GetActors(
    WorldContextObject: UObject,
    ActorLayer: ActorLayer
  ): Actor[];
  static C(Other: UObject | any): LayersBlueprintLibrary;
}
declare class MyPluginStruct {
  TestString: string;
  clone(): MyPluginStruct;
  static C(Other: UObject | any): MyPluginStruct;
}
declare class MyPluginObject mixins UObject {
  MyStruct: MyPluginStruct;
  static Load(ResourceName: string): MyPluginObject;
  static Find(Outer: UObject, ResourceName: string): MyPluginObject;
  static GetDefaultObject(): MyPluginObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MyPluginObject;
  static C(Other: UObject | any): MyPluginObject;
}
declare class LightPropagationVolumeBlendableFactory mixins Factory {
  static Load(ResourceName: string): LightPropagationVolumeBlendableFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LightPropagationVolumeBlendableFactory;
  static GetDefaultObject(): LightPropagationVolumeBlendableFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LightPropagationVolumeBlendableFactory;
  static C(Other: UObject | any): LightPropagationVolumeBlendableFactory;
}
declare class DatasmithSceneNewFactory mixins Factory {
  static Load(ResourceName: string): DatasmithSceneNewFactory;
  static Find(Outer: UObject, ResourceName: string): DatasmithSceneNewFactory;
  static GetDefaultObject(): DatasmithSceneNewFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DatasmithSceneNewFactory;
  static C(Other: UObject | any): DatasmithSceneNewFactory;
}
declare class CapturedPropSegment {
  PropertyName: string;
  PropertyIndex: number;
  ComponentName: string;
  clone(): CapturedPropSegment;
  static C(Other: UObject | any): CapturedPropSegment;
}
declare type EPropertyValueCategoryT =
  | "Undefined"
  | "Generic"
  | "RelativeLocation"
  | "RelativeRotation"
  | "RelativeScale3D"
  | "bVisible"
  | "Material"
  | "Color"
  | "EPropertyValueCategory_MAX";
declare var EPropertyValueCategory: {
  Undefined: "Undefined",
  Generic: "Generic",
  RelativeLocation: "RelativeLocation",
  RelativeRotation: "RelativeRotation",
  RelativeScale3D: "RelativeScale3D",
  bVisible: "bVisible",
  Material: "Material",
  Color: "Color",
  EPropertyValueCategory_MAX: "EPropertyValueCategory_MAX"
};
declare class PropertyValue mixins UObject {
  Properties: Property[];
  PropertyIndices: number[];
  CapturedPropSegments: CapturedPropSegment[];
  FullDisplayString: string;
  PropertySetterName: string;
  PropertySetterParameterDefaults: any;
  bHasRecordedData: boolean;
  LeafPropertyClass: UnrealEngineClassT;
  ValueBytes: number[];
  PropCategory: EPropertyValueCategoryT;
  static Load(ResourceName: string): PropertyValue;
  static Find(Outer: UObject, ResourceName: string): PropertyValue;
  static GetDefaultObject(): PropertyValue;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PropertyValue;
  HasRecordedData(): boolean;
  GetPropertyTooltip(): string;
  GetFullDisplayString(): string;
  static C(Other: UObject | any): PropertyValue;
}
declare class FunctionCaller {
  FunctionName: string;
  FunctionEntry: any;
  clone(): FunctionCaller;
  static C(Other: UObject | any): FunctionCaller;
}
declare class VariantObjectBinding mixins UObject {
  ObjectPtr: SoftObjectPath;
  LazyObjectPtr: any;
  CapturedProperties: PropertyValue[];
  FunctionCallers: FunctionCaller[];
  static Load(ResourceName: string): VariantObjectBinding;
  static Find(Outer: UObject, ResourceName: string): VariantObjectBinding;
  static GetDefaultObject(): VariantObjectBinding;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VariantObjectBinding;
  static C(Other: UObject | any): VariantObjectBinding;
}
declare class Variant mixins UObject {
  DisplayText: string;
  ObjectBindings: VariantObjectBinding[];
  static Load(ResourceName: string): Variant;
  static Find(Outer: UObject, ResourceName: string): Variant;
  static GetDefaultObject(): Variant;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): Variant;
  SwitchOn(): void;
  SetDisplayText(NewDisplayText: string): void;
  GetNumActors(): number;
  GetDisplayText(): string;
  GetActor(ActorIndex: number): Actor;
  static C(Other: UObject | any): Variant;
}
declare class VariantSet mixins UObject {
  DisplayText: string;
  bExpanded: boolean;
  Variants: Variant[];
  static Load(ResourceName: string): VariantSet;
  static Find(Outer: UObject, ResourceName: string): VariantSet;
  static GetDefaultObject(): VariantSet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): VariantSet;
  SetDisplayText(NewDisplayText: string): void;
  GetVariantByName(VariantName: string): Variant;
  GetVariant(VariantIndex: number): Variant;
  GetNumVariants(): number;
  GetDisplayText(): string;
  static C(Other: UObject | any): VariantSet;
}
declare class LevelVariantSets mixins UObject {
  DirectorBlueprint: UObject;
  DirectorClass: UnrealEngineClassT;
  VariantSets: VariantSet[];
  static Load(ResourceName: string): LevelVariantSets;
  static Find(Outer: UObject, ResourceName: string): LevelVariantSets;
  static GetDefaultObject(): LevelVariantSets;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LevelVariantSets;
  GetVariantSetByName(VariantSetName: string): VariantSet;
  GetVariantSet(VariantSetIndex: number): VariantSet;
  GetNumVariantSets(): number;
  static C(Other: UObject | any): LevelVariantSets;
}
declare class LevelVariantSetsActor mixins Actor {
  LevelVariantSets: SoftObjectPath;
  static GetDefaultObject(): LevelVariantSetsActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LevelVariantSetsActor;
  SwitchOnVariantByName(VariantSetName: string, VariantName: string): boolean;
  SwitchOnVariantByIndex(
    VariantSetIndex: number,
    VariantIndex: number
  ): boolean;
  SetLevelVariantSets(InVariantSets: LevelVariantSets): void;
  GetLevelVariantSets(bLoad: boolean): LevelVariantSets;
  static C(Other: UObject | any): LevelVariantSetsActor;
}
declare class LevelVariantSetsFunctionDirector mixins UObject {
  static Load(ResourceName: string): LevelVariantSetsFunctionDirector;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LevelVariantSetsFunctionDirector;
  static GetDefaultObject(): LevelVariantSetsFunctionDirector;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LevelVariantSetsFunctionDirector;
  static C(Other: UObject | any): LevelVariantSetsFunctionDirector;
}
declare class PropertyValueTransform mixins PropertyValue {
  static Load(ResourceName: string): PropertyValueTransform;
  static Find(Outer: UObject, ResourceName: string): PropertyValueTransform;
  static GetDefaultObject(): PropertyValueTransform;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PropertyValueTransform;
  static C(Other: UObject | any): PropertyValueTransform;
}
declare class PropertyValueVisibility mixins PropertyValue {
  static Load(ResourceName: string): PropertyValueVisibility;
  static Find(Outer: UObject, ResourceName: string): PropertyValueVisibility;
  static GetDefaultObject(): PropertyValueVisibility;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PropertyValueVisibility;
  static C(Other: UObject | any): PropertyValueVisibility;
}
declare class PropertyValueColor mixins PropertyValue {
  static Load(ResourceName: string): PropertyValueColor;
  static Find(Outer: UObject, ResourceName: string): PropertyValueColor;
  static GetDefaultObject(): PropertyValueColor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PropertyValueColor;
  static C(Other: UObject | any): PropertyValueColor;
}
declare class PropertyValueMaterial mixins PropertyValue {
  static Load(ResourceName: string): PropertyValueMaterial;
  static Find(Outer: UObject, ResourceName: string): PropertyValueMaterial;
  static GetDefaultObject(): PropertyValueMaterial;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PropertyValueMaterial;
  static C(Other: UObject | any): PropertyValueMaterial;
}
declare class ComponentReference {
  OtherActor: Actor;
  ComponentProperty: string;
  clone(): ComponentReference;
  static C(Other: UObject | any): ComponentReference;
}
declare class CableComponent mixins MeshComponent {
  bAttachStart: boolean;
  bAttachEnd: boolean;
  AttachEndTo: ComponentReference;
  AttachEndToSocketName: string;
  EndLocation: Vector;
  CableLength: number;
  NumSegments: number;
  SubstepTime: number;
  SolverIterations: number;
  bEnableStiffness: boolean;
  bEnableCollision: boolean;
  CollisionFriction: number;
  CableForce: Vector;
  CableGravityScale: number;
  CableWidth: number;
  NumSides: number;
  TileMaterial: number;
  static Load(ResourceName: string): CableComponent;
  static Find(Outer: UObject, ResourceName: string): CableComponent;
  static GetDefaultObject(): CableComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CableComponent;
  SetAttachEndToComponent(Component: SceneComponent, SocketName: string): void;
  SetAttachEndTo(
    Actor: Actor,
    ComponentProperty: string,
    SocketName: string
  ): void;
  GetCableParticleLocations(
    Locations?: Vector[]
  ): {
    Locations: Vector[]
  };
  GetAttachedComponent(): SceneComponent;
  GetAttachedActor(): Actor;
  static C(Other: UObject | any): CableComponent;
}
declare class CableActor mixins Actor {
  CableComponent: CableComponent;
  static GetDefaultObject(): CableActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CableActor;
  static C(Other: UObject | any): CableActor;
}
declare type ESteamVRTouchDPadMappingT =
  | "FaceButtons"
  | "ThumbstickDirections"
  | "Disabled"
  | "ESteamVRTouchDPadMapping_MAX";
declare var ESteamVRTouchDPadMapping: {
  FaceButtons: "FaceButtons",
  ThumbstickDirections: "ThumbstickDirections",
  Disabled: "Disabled",
  ESteamVRTouchDPadMapping_MAX: "ESteamVRTouchDPadMapping_MAX"
};
declare class SteamVRControllerLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): SteamVRControllerLibrary;
  static Find(Outer: UObject, ResourceName: string): SteamVRControllerLibrary;
  static GetDefaultObject(): SteamVRControllerLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SteamVRControllerLibrary;
  static SetTouchDPadMapping(NewMapping: ESteamVRTouchDPadMappingT): void;
  static C(Other: UObject | any): SteamVRControllerLibrary;
}
declare class CustomMeshTriangle {
  Vertex0: Vector;
  Vertex1: Vector;
  Vertex2: Vector;
  clone(): CustomMeshTriangle;
  static C(Other: UObject | any): CustomMeshTriangle;
}
declare class CustomMeshComponent mixins MeshComponent {
  static Load(ResourceName: string): CustomMeshComponent;
  static Find(Outer: UObject, ResourceName: string): CustomMeshComponent;
  static GetDefaultObject(): CustomMeshComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CustomMeshComponent;
  SetCustomMeshTriangles(Triangles: CustomMeshTriangle[]): boolean;
  ClearCustomMeshTriangles(): void;
  AddCustomMeshTriangles(Triangles: CustomMeshTriangle[]): void;
  static C(Other: UObject | any): CustomMeshComponent;
}
declare class AndroidPermissionCallbackProxy mixins UObject {
  OnPermissionsGrantedDynamicDelegate: UnrealEngineMulticastDelegate<
    (Permissions: string[], GrantResults: boolean[]) => void
  >;
  static Load(ResourceName: string): AndroidPermissionCallbackProxy;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AndroidPermissionCallbackProxy;
  static GetDefaultObject(): AndroidPermissionCallbackProxy;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AndroidPermissionCallbackProxy;
  static C(Other: UObject | any): AndroidPermissionCallbackProxy;
}
declare class AndroidPermissionFunctionLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): AndroidPermissionFunctionLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): AndroidPermissionFunctionLibrary;
  static GetDefaultObject(): AndroidPermissionFunctionLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AndroidPermissionFunctionLibrary;
  static CheckPermission(permission: string): boolean;
  static AcquirePermissions(
    Permissions: string[]
  ): AndroidPermissionCallbackProxy;
  static C(Other: UObject | any): AndroidPermissionFunctionLibrary;
}
declare class FieldSystem mixins UObject {
  static Load(ResourceName: string): FieldSystem;
  static Find(Outer: UObject, ResourceName: string): FieldSystem;
  static GetDefaultObject(): FieldSystem;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FieldSystem;
  static C(Other: UObject | any): FieldSystem;
}
declare class FieldSystemComponent mixins PrimitiveComponent {
  FieldSystem: FieldSystem;
  static Load(ResourceName: string): FieldSystemComponent;
  static Find(Outer: UObject, ResourceName: string): FieldSystemComponent;
  static GetDefaultObject(): FieldSystemComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FieldSystemComponent;
  ApplyUniformVectorFalloffForce(
    Enabled: boolean,
    Position: Vector,
    Direction: Vector,
    Radius: number,
    Magnitude: number
  ): void;
  ApplyStayDynamicField(
    Enabled: boolean,
    Position: Vector,
    Radius: number,
    MaxLevelPerCommand: number
  ): void;
  ApplyRadialVectorFalloffForce(
    Enabled: boolean,
    Position: Vector,
    Radius: number,
    Magnitude: number
  ): void;
  ApplyRadialForce(Enabled: boolean, Position: Vector, Magnitude: number): void;
  ApplyLinearForce(
    Enabled: boolean,
    Direction: Vector,
    Magnitude: number
  ): void;
  static C(Other: UObject | any): FieldSystemComponent;
}
declare class FieldSystemActor mixins Actor {
  FieldSystemComponent: FieldSystemComponent;
  static GetDefaultObject(): FieldSystemActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FieldSystemActor;
  static C(Other: UObject | any): FieldSystemActor;
}
declare class ChaosSolver mixins UObject {
  static Load(ResourceName: string): ChaosSolver;
  static Find(Outer: UObject, ResourceName: string): ChaosSolver;
  static GetDefaultObject(): ChaosSolver;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ChaosSolver;
  static C(Other: UObject | any): ChaosSolver;
}
declare class ChaosSolverActor mixins Actor {
  TimeStepMultiplier: number;
  CollisionIterations: number;
  PushOutIterations: number;
  PushOutPairIterations: number;
  CollisionDataSizeMax: number;
  CollisionDataTimeWindow: number;
  DoCollisionDataSpatialHash: boolean;
  CollisionDataSpatialHashRadius: number;
  MaxCollisionPerCell: number;
  BreakingDataSizeMax: number;
  BreakingDataTimeWindow: number;
  DoBreakingDataSpatialHash: boolean;
  BreakingDataSpatialHashRadius: number;
  MaxBreakingPerCell: number;
  TrailingDataSizeMax: number;
  TrailingDataTimeWindow: number;
  TrailingMinSpeedThreshold: number;
  TrailingMinVolumeThreshold: number;
  HasFloor: boolean;
  FloorHeight: number;
  SpriteComponent: BillboardComponent;
  static GetDefaultObject(): ChaosSolverActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ChaosSolverActor;
  static C(Other: UObject | any): ChaosSolverActor;
}
declare class GeometryCollection mixins UObject {
  Materials: MaterialInterface[];
  PersistentGuid: Guid;
  StateGuid: Guid;
  InteriorMaterialIndex: number;
  BoneSelectedMaterialIndex: number;
  static Load(ResourceName: string): GeometryCollection;
  static Find(Outer: UObject, ResourceName: string): GeometryCollection;
  static GetDefaultObject(): GeometryCollection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollection;
  static C(Other: UObject | any): GeometryCollection;
}
declare type EObjectTypeEnumT =
  | "Chaos_Object_Dynamic"
  | "Chaos_Object_Kinematic"
  | "Chaos_Object_Sleeping"
  | "Chaos_Max";
declare var EObjectTypeEnum: {
  Chaos_Object_Dynamic: "Chaos_Object_Dynamic",
  Chaos_Object_Kinematic: "Chaos_Object_Kinematic",
  Chaos_Object_Sleeping: "Chaos_Object_Sleeping",
  Chaos_Max: "Chaos_Max"
};
declare type ECollisionTypeEnumT =
  | "Chaos_Volumetric"
  | "Chaos_Surface_Volumetric"
  | "Chaos_Max";
declare var ECollisionTypeEnum: {
  Chaos_Volumetric: "Chaos_Volumetric",
  Chaos_Surface_Volumetric: "Chaos_Surface_Volumetric",
  Chaos_Max: "Chaos_Max"
};
declare type EImplicitTypeEnumT =
  | "Chaos_Implicit_Cube"
  | "Chaos_Implicit_Sphere"
  | "Chaos_Implicit_LevelSet"
  | "Chaos_Max";
declare var EImplicitTypeEnum: {
  Chaos_Implicit_Cube: "Chaos_Implicit_Cube",
  Chaos_Implicit_Sphere: "Chaos_Implicit_Sphere",
  Chaos_Implicit_LevelSet: "Chaos_Implicit_LevelSet",
  Chaos_Max: "Chaos_Max"
};
declare type EInitialVelocityTypeEnumT =
  | "Chaos_Initial_Velocity_User_Defined"
  | "Chaos_Initial_Velocity_None"
  | "Chaos_Max";
declare var EInitialVelocityTypeEnum: {
  Chaos_Initial_Velocity_User_Defined: "Chaos_Initial_Velocity_User_Defined",
  Chaos_Initial_Velocity_None: "Chaos_Initial_Velocity_None",
  Chaos_Max: "Chaos_Max"
};
declare type EGeometryCollectionCacheTypeT =
  | "None"
  | "Record"
  | "Play"
  | "RecordAndPlay"
  | "EGeometryCollectionCacheType_MAX";
declare var EGeometryCollectionCacheType: {
  None: "None",

  Play: "Play",
  RecordAndPlay: "RecordAndPlay",
  EGeometryCollectionCacheType_MAX: "EGeometryCollectionCacheType_MAX"
};
declare class SolverCollisionData {
  clone(): SolverCollisionData;
  static C(Other: UObject | any): SolverCollisionData;
}
declare class SolverTrailingData {
  clone(): SolverTrailingData;
  static C(Other: UObject | any): SolverTrailingData;
}
declare class RecordedFrame {
  Transforms: Transform[];
  TransformIndices: number[];
  PreviousTransformIndices: number[];
  DisabledFlags: boolean[];
  Collisions: SolverCollisionData[];
  Trailings: SolverTrailingData[];
  Timestamp: number;
  clone(): RecordedFrame;
  static C(Other: UObject | any): RecordedFrame;
}
declare class RecordedTransformTrack {
  Records: RecordedFrame[];
  clone(): RecordedTransformTrack;
  static C(Other: UObject | any): RecordedTransformTrack;
}
declare class GeometryCollectionCache mixins UObject {
  RecordedData: RecordedTransformTrack;
  SupportedCollection: GeometryCollection;
  CompatibleCollectionState: Guid;
  static Load(ResourceName: string): GeometryCollectionCache;
  static Find(Outer: UObject, ResourceName: string): GeometryCollectionCache;
  static GetDefaultObject(): GeometryCollectionCache;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollectionCache;
  static C(Other: UObject | any): GeometryCollectionCache;
}
declare class GeomComponentCacheParameters {
  CacheMode: EGeometryCollectionCacheTypeT;
  TargetCache: GeometryCollectionCache;
  ReverseCacheBeginTime: number;
  SaveCollisionData: boolean;
  CollisionDataMaxSize: number;
  DoCollisionDataSpatialHash: boolean;
  SpatialHashRadius: number;
  MaxCollisionPerCell: number;
  SaveTrailingData: boolean;
  TrailingDataSizeMax: number;
  TrailingMinSpeedThreshold: number;
  TrailingMinVolumeThreshold: number;
  clone(): GeomComponentCacheParameters;
  static C(Other: UObject | any): GeomComponentCacheParameters;
}
declare class GeometryCollectionComponent mixins MeshComponent {
  ChaosSolverActor: ChaosSolverActor;
  RestCollection: GeometryCollection;
  DynamicCollection: GeometryCollection;
  FieldSystem: FieldSystemActor;
  Simulating: boolean;
  ObjectType: EObjectTypeEnumT;
  EnableClustering: boolean;
  MaxClusterLevel: number;
  DamageThreshold: number[];
  CollisionType: ECollisionTypeEnumT;
  ImplicitType: EImplicitTypeEnumT;
  MinLevelSetResolution: number;
  MaxLevelSetResolution: number;
  MassAsDensity: boolean;
  Mass: number;
  MinimumMassClamp: number;
  CollisionParticlesFraction: number;
  Friction: number;
  Bouncyness: number;
  LinearSleepingThreshold: number;
  AngularSleepingThreshold: number;
  InitialVelocityType: EInitialVelocityTypeEnumT;
  InitialLinearVelocity: Vector;
  InitialAngularVelocity: Vector;
  CacheParameters: GeomComponentCacheParameters;
  DummyBoxComponent: BoxComponent;
  InteriorMaterialID: number;
  BoneSelectedMaterialID: number;
  EditorActor: Actor;
  static Load(ResourceName: string): GeometryCollectionComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCollectionComponent;
  static GetDefaultObject(): GeometryCollectionComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollectionComponent;
  static C(Other: UObject | any): GeometryCollectionComponent;
}
declare class GeometryCollectionDebugDrawActor mixins Actor {
  PointThickness: number;
  LineThickness: number;
  bTextShadow: boolean;
  TextScale: number;
  NormalScale: number;
  TransformScale: number;
  ArrowScale: number;
  static GetDefaultObject(): GeometryCollectionDebugDrawActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollectionDebugDrawActor;
  static C(Other: UObject | any): GeometryCollectionDebugDrawActor;
}
declare class GeometryCollectionRenderLevelSetActor mixins Actor {
  TargetVolumeTexture: VolumeTexture;
  RayMarchMaterial: Material;
  SurfaceTolerance: number;
  Isovalue: number;
  Enabled: boolean;
  RenderVolumeBoundingBox: boolean;
  static GetDefaultObject(): GeometryCollectionRenderLevelSetActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollectionRenderLevelSetActor;
  static C(Other: UObject | any): GeometryCollectionRenderLevelSetActor;
}
declare class GeometryCollectionDebugDrawComponent mixins MeshComponent {
  GeometryCollectionDebugDrawActor: GeometryCollectionDebugDrawActor;
  GeometryCollectionRenderLevelSet: GeometryCollectionRenderLevelSetActor;
  bDebugDrawLevelSet: boolean;
  bRenderLevelSetAtOrigin: boolean;
  LevelSetIndex: number;
  bDebugDrawTransform: boolean;
  bDebugDrawTransformIndex: boolean;
  bDebugDrawBoundingBox: boolean;
  GeometryColor: LinearColor;
  bDebugDrawProximity: boolean;
  bDebugDrawBreakingFace: boolean;
  bDebugDrawBreakingRegionData: boolean;
  BreakingColor: LinearColor;
  bDebugDrawFace: boolean;
  bDebugDrawFaceIndex: boolean;
  bDebugDrawFaceNormal: boolean;
  bDebugDrawSingleFace: boolean;
  SingleFaceIdx: number;
  FaceColor: LinearColor;
  bDebugDrawVertex: boolean;
  bDebugDrawVertexIndex: boolean;
  bDebugDrawVertexNormal: boolean;
  VertexColor: LinearColor;
  static Load(ResourceName: string): GeometryCollectionDebugDrawComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): GeometryCollectionDebugDrawComponent;
  static GetDefaultObject(): GeometryCollectionDebugDrawComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollectionDebugDrawComponent;
  static C(Other: UObject | any): GeometryCollectionDebugDrawComponent;
}
declare class GeometryCollectionActor mixins Actor {
  GeometryCollectionComponent: GeometryCollectionComponent;
  GeometryCollectionDebugDrawComponent: GeometryCollectionDebugDrawComponent;
  static GetDefaultObject(): GeometryCollectionActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GeometryCollectionActor;
  RaycastSingle(
    Start: Vector,
    End: Vector,
    OutHit?: HitResult
  ): {
    OutHit: HitResult,
    $: boolean
  };
  static C(Other: UObject | any): GeometryCollectionActor;
}
declare class StaticMeshSimulationComponent mixins ActorComponent {
  Simulating: boolean;
  ObjectType: EObjectTypeEnumT;
  Mass: number;
  CollisionType: ECollisionTypeEnumT;
  InitialVelocityType: EInitialVelocityTypeEnumT;
  InitialLinearVelocity: Vector;
  InitialAngularVelocity: Vector;
  DamageThreshold: number;
  Friction: number;
  Bouncyness: number;
  ChaosSolverActor: ChaosSolverActor;
  static Load(ResourceName: string): StaticMeshSimulationComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): StaticMeshSimulationComponent;
  static GetDefaultObject(): StaticMeshSimulationComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): StaticMeshSimulationComponent;
  static C(Other: UObject | any): StaticMeshSimulationComponent;
}
declare class EditableMeshAdapter mixins UObject {
  static Load(ResourceName: string): EditableMeshAdapter;
  static Find(Outer: UObject, ResourceName: string): EditableMeshAdapter;
  static GetDefaultObject(): EditableMeshAdapter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditableMeshAdapter;
  static C(Other: UObject | any): EditableMeshAdapter;
}
declare class EditableGeometryCollectionAdapter mixins EditableMeshAdapter {
  GeometryCollection: GeometryCollection;
  OriginalGeometryCollection: GeometryCollection;
  GeometryCollectionLODIndex: number;
  static Load(ResourceName: string): EditableGeometryCollectionAdapter;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EditableGeometryCollectionAdapter;
  static GetDefaultObject(): EditableGeometryCollectionAdapter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditableGeometryCollectionAdapter;
  static C(Other: UObject | any): EditableGeometryCollectionAdapter;
}
declare class ElementID {
  IDValue: number;
  clone(): ElementID;
  static C(Other: UObject | any): ElementID;
}
declare class VertexID mixins ElementID {
  clone(): VertexID;
  static C(Other: UObject | any): VertexID;
}
declare class EdgeID mixins ElementID {
  clone(): EdgeID;
  static C(Other: UObject | any): EdgeID;
}
declare class PolygonID mixins ElementID {
  clone(): PolygonID;
  static C(Other: UObject | any): PolygonID;
}
declare type ETriangleTessellationModeT =
  | "ThreeTriangles"
  | "FourTriangles"
  | "ETriangleTessellationMode_MAX";
declare var ETriangleTessellationMode: {
  ThreeTriangles: "ThreeTriangles",
  FourTriangles: "FourTriangles",
  ETriangleTessellationMode_MAX: "ETriangleTessellationMode_MAX"
};
declare type EMeshModificationTypeT =
  | "FirstInterim"
  | "Interim"
  | "Final"
  | "EMeshModificationType_MAX";
declare var EMeshModificationType: {
  FirstInterim: "FirstInterim",
  Interim: "Interim",
  Final: "Final",
  EMeshModificationType_MAX: "EMeshModificationType_MAX"
};
declare type EMeshTopologyChangeT =
  | "NoTopologyChange"
  | "TopologyChange"
  | "EMeshTopologyChange_MAX";
declare var EMeshTopologyChange: {
  NoTopologyChange: "NoTopologyChange",
  TopologyChange: "TopologyChange",
  EMeshTopologyChange_MAX: "EMeshTopologyChange_MAX"
};
declare class VertexPair {
  VertexID0: VertexID;
  VertexID1: VertexID;
  clone(): VertexPair;
  static C(Other: UObject | any): VertexPair;
}
declare class PolygonToSplit {
  PolygonID: PolygonID;
  VertexPairsToSplitAt: VertexPair[];
  clone(): PolygonToSplit;
  static C(Other: UObject | any): PolygonToSplit;
}
declare class MeshElementAttributeValue {
  clone(): MeshElementAttributeValue;
  static C(Other: UObject | any): MeshElementAttributeValue;
}
declare class MeshElementAttributeData {
  AttributeName: string;
  AttributeIndex: number;
  AttributeValue: MeshElementAttributeValue;
  clone(): MeshElementAttributeData;
  static C(Other: UObject | any): MeshElementAttributeData;
}
declare class MeshElementAttributeList {
  Attributes: MeshElementAttributeData[];
  clone(): MeshElementAttributeList;
  static C(Other: UObject | any): MeshElementAttributeList;
}
declare class AttributesForVertex {
  VertexID: VertexID;
  VertexAttributes: MeshElementAttributeList;
  clone(): AttributesForVertex;
  static C(Other: UObject | any): AttributesForVertex;
}
declare class VertexInstanceID mixins ElementID {
  clone(): VertexInstanceID;
  static C(Other: UObject | any): VertexInstanceID;
}
declare class AttributesForVertexInstance {
  VertexInstanceID: VertexInstanceID;
  VertexInstanceAttributes: MeshElementAttributeList;
  clone(): AttributesForVertexInstance;
  static C(Other: UObject | any): AttributesForVertexInstance;
}
declare class VertexAttributesForPolygonHole {
  VertexAttributeList: MeshElementAttributeList[];
  clone(): VertexAttributesForPolygonHole;
  static C(Other: UObject | any): VertexAttributesForPolygonHole;
}
declare class VertexAttributesForPolygon {
  PolygonID: PolygonID;
  PerimeterVertexAttributeLists: MeshElementAttributeList[];
  VertexAttributeListsForEachHole: VertexAttributesForPolygonHole[];
  clone(): VertexAttributesForPolygon;
  static C(Other: UObject | any): VertexAttributesForPolygon;
}
declare class VerticesForEdge {
  EdgeID: EdgeID;
  NewVertexID0: VertexID;
  NewVertexID1: VertexID;
  clone(): VerticesForEdge;
  static C(Other: UObject | any): VerticesForEdge;
}
declare class AttributesForEdge {
  EdgeID: EdgeID;
  EdgeAttributes: MeshElementAttributeList;
  clone(): AttributesForEdge;
  static C(Other: UObject | any): AttributesForEdge;
}
declare class VertexToMove {
  VertexID: VertexID;
  NewVertexPosition: Vector;
  clone(): VertexToMove;
  static C(Other: UObject | any): VertexToMove;
}
declare class PolygonGroupID mixins ElementID {
  clone(): PolygonGroupID;
  static C(Other: UObject | any): PolygonGroupID;
}
declare type EInsetPolygonsModeT =
  | "All"
  | "CenterPolygonOnly"
  | "SidePolygonsOnly"
  | "EInsetPolygonsMode_MAX";
declare var EInsetPolygonsMode: {
  All: "All",
  CenterPolygonOnly: "CenterPolygonOnly",
  SidePolygonsOnly: "SidePolygonsOnly",
  EInsetPolygonsMode_MAX: "EInsetPolygonsMode_MAX"
};
declare class VertexAndAttributes {
  VertexInstanceID: VertexInstanceID;
  VertexID: VertexID;
  PolygonVertexAttributes: MeshElementAttributeList;
  clone(): VertexAndAttributes;
  static C(Other: UObject | any): VertexAndAttributes;
}
declare class SubdividedQuadVertex {
  VertexPositionIndex: number;
  TextureCoordinate0: Vector2D;
  TextureCoordinate1: Vector2D;
  VertexColor: Color;
  VertexNormal: Vector;
  VertexTangent: Vector;
  VertexBinormalSign: number;
  clone(): SubdividedQuadVertex;
  static C(Other: UObject | any): SubdividedQuadVertex;
}
declare class SubdividedQuad {
  QuadVertex0: SubdividedQuadVertex;
  QuadVertex1: SubdividedQuadVertex;
  QuadVertex2: SubdividedQuadVertex;
  QuadVertex3: SubdividedQuadVertex;
  clone(): SubdividedQuad;
  static C(Other: UObject | any): SubdividedQuad;
}
declare class SubdivisionLimitSection {
  SubdividedQuads: SubdividedQuad[];
  clone(): SubdivisionLimitSection;
  static C(Other: UObject | any): SubdivisionLimitSection;
}
declare class SubdividedWireEdge {
  EdgeVertex0PositionIndex: number;
  EdgeVertex1PositionIndex: number;
  clone(): SubdividedWireEdge;
  static C(Other: UObject | any): SubdividedWireEdge;
}
declare class SubdivisionLimitData {
  VertexPositions: Vector[];
  Sections: SubdivisionLimitSection[];
  SubdividedWireEdges: SubdividedWireEdge[];
  clone(): SubdivisionLimitData;
  static C(Other: UObject | any): SubdivisionLimitData;
}
declare class MeshTriangle {
  VertexInstanceID0: VertexInstanceID;
  VertexInstanceID1: VertexInstanceID;
  VertexInstanceID2: VertexInstanceID;
  clone(): MeshTriangle;
  static C(Other: UObject | any): MeshTriangle;
}
declare class VertexToCreate {
  VertexAttributes: MeshElementAttributeList;
  OriginalVertexID: VertexID;
  clone(): VertexToCreate;
  static C(Other: UObject | any): VertexToCreate;
}
declare class VertexInstanceToCreate {
  VertexID: VertexID;
  VertexInstanceAttributes: MeshElementAttributeList;
  OriginalVertexInstanceID: VertexInstanceID;
  clone(): VertexInstanceToCreate;
  static C(Other: UObject | any): VertexInstanceToCreate;
}
declare type EPolygonEdgeHardnessT =
  | "NewEdgesSoft"
  | "NewEdgesHard"
  | "AllEdgesSoft"
  | "AllEdgesHard"
  | "EPolygonEdgeHardness_MAX";
declare var EPolygonEdgeHardness: {
  NewEdgesSoft: "NewEdgesSoft",
  NewEdgesHard: "NewEdgesHard",
  AllEdgesSoft: "AllEdgesSoft",
  AllEdgesHard: "AllEdgesHard",
  EPolygonEdgeHardness_MAX: "EPolygonEdgeHardness_MAX"
};
declare class PolygonToCreate {
  PolygonGroupID: PolygonGroupID;
  PerimeterVertices: VertexAndAttributes[];
  OriginalPolygonID: PolygonID;
  PolygonEdgeHardness: EPolygonEdgeHardnessT;
  clone(): PolygonToCreate;
  static C(Other: UObject | any): PolygonToCreate;
}
declare class PolygonGroupToCreate {
  PolygonGroupAttributes: MeshElementAttributeList;
  OriginalPolygonGroupID: PolygonGroupID;
  clone(): PolygonGroupToCreate;
  static C(Other: UObject | any): PolygonGroupToCreate;
}
declare class EdgeToCreate {
  VertexID0: VertexID;
  VertexID1: VertexID;
  ConnectedPolygons: PolygonID[];
  EdgeAttributes: MeshElementAttributeList;
  OriginalEdgeID: EdgeID;
  clone(): EdgeToCreate;
  static C(Other: UObject | any): EdgeToCreate;
}
declare class VertexIndexAndInstanceID {
  ContourIndex: number;
  VertexInstanceID: VertexInstanceID;
  clone(): VertexIndexAndInstanceID;
  static C(Other: UObject | any): VertexIndexAndInstanceID;
}
declare class VertexInstancesForPolygonHole {
  VertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
  clone(): VertexInstancesForPolygonHole;
  static C(Other: UObject | any): VertexInstancesForPolygonHole;
}
declare class ChangeVertexInstancesForPolygon {
  PolygonID: PolygonID;
  PerimeterVertexIndicesAndInstanceIDs: VertexIndexAndInstanceID[];
  VertexIndicesAndInstanceIDsForEachHole: VertexInstancesForPolygonHole[];
  clone(): ChangeVertexInstancesForPolygon;
  static C(Other: UObject | any): ChangeVertexInstancesForPolygon;
}
declare class PolygonGroupForPolygon {
  PolygonID: PolygonID;
  PolygonGroupID: PolygonGroupID;
  clone(): PolygonGroupForPolygon;
  static C(Other: UObject | any): PolygonGroupForPolygon;
}
declare class EditableMesh mixins UObject {
  Adapters: EditableMeshAdapter[];
  TextureCoordinateCount: number;
  PendingCompactCounter: number;
  SubdivisionCount: number;
  static Load(ResourceName: string): EditableMesh;
  static Find(Outer: UObject, ResourceName: string): EditableMesh;
  static GetDefaultObject(): EditableMesh;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditableMesh;
  WeldVertices(
    VertexIDs: VertexID[],
    OutNewVertexID?: VertexID
  ): {
    OutNewVertexID: VertexID
  };
  TryToRemoveVertex(
    VertexID: VertexID,
    bOutWasVertexRemoved?: boolean,
    OutNewEdgeID?: EdgeID
  ): {
    bOutWasVertexRemoved: boolean,
    OutNewEdgeID: EdgeID
  };
  TryToRemovePolygonEdge(
    EdgeID: EdgeID,
    bOutWasEdgeRemoved?: boolean,
    OutNewPolygonID?: PolygonID
  ): {
    bOutWasEdgeRemoved: boolean,
    OutNewPolygonID: PolygonID
  };
  TriangulatePolygons(
    PolygonIDs: PolygonID[],
    OutNewTrianglePolygons?: PolygonID[]
  ): {
    OutNewTrianglePolygons: PolygonID[]
  };
  TessellatePolygons(
    PolygonIDs: PolygonID[],
    TriangleTessellationMode: ETriangleTessellationModeT,
    OutNewPolygonIDs?: PolygonID[]
  ): {
    OutNewPolygonIDs: PolygonID[]
  };
  StartModification(
    MeshModificationType: EMeshModificationTypeT,
    MeshTopologyChange: EMeshTopologyChangeT
  ): void;
  SplitPolygons(
    PolygonsToSplit: PolygonToSplit[],
    OutNewEdgeIDs?: EdgeID[]
  ): {
    OutNewEdgeIDs: EdgeID[]
  };
  SplitPolygonalMesh(
    InPlane: Plane,
    PolygonIDs1?: PolygonID[],
    PolygonIDs2?: PolygonID[],
    BoundaryIDs?: EdgeID[]
  ): {
    PolygonIDs1: PolygonID[],
    PolygonIDs2: PolygonID[],
    BoundaryIDs: EdgeID[]
  };
  SplitEdge(
    EdgeID: EdgeID,
    Splits: number[],
    OutNewVertexIDs?: VertexID[]
  ): {
    OutNewVertexIDs: VertexID[]
  };
  SetVerticesCornerSharpness(
    VertexIDs: VertexID[],
    VerticesNewCornerSharpness: number[]
  ): void;
  SetVerticesAttributes(AttributesForVertices: AttributesForVertex[]): void;
  SetVertexInstancesAttributes(
    AttributesForVertexInstances: AttributesForVertexInstance[]
  ): void;
  SetTextureCoordinateCount(NumTexCoords: number): void;
  SetSubdivisionCount(NewSubdivisionCount: number): void;
  SetPolygonsVertexAttributes(
    VertexAttributesForPolygons: VertexAttributesForPolygon[]
  ): void;
  SetEdgesVertices(VerticesForEdges: VerticesForEdge[]): void;
  SetEdgesHardnessAutomatically(
    EdgeIDs: EdgeID[],
    MaxDotProductForSoftEdge: number
  ): void;
  SetEdgesHardness(EdgeIDs: EdgeID[], EdgesNewIsHard: boolean[]): void;
  SetEdgesCreaseSharpness(
    EdgeIDs: EdgeID[],
    EdgesNewCreaseSharpness: number[]
  ): void;
  SetEdgesAttributes(AttributesForEdges: AttributesForEdge[]): void;
  SetAllowUndo(bInAllowUndo: boolean): void;
  SetAllowSpatialDatabase(bInAllowSpatialDatabase: boolean): void;
  SetAllowCompact(bInAllowCompact: boolean): void;
  SearchSpatialDatabaseForPolygonsPotentiallyIntersectingPlane(
    InPlane: Plane,
    OutPolygons?: PolygonID[]
  ): {
    OutPolygons: PolygonID[]
  };
  SearchSpatialDatabaseForPolygonsPotentiallyIntersectingLineSegment(
    LineSegmentStart: Vector,
    LineSegmentEnd: Vector,
    OutPolygons?: PolygonID[]
  ): {
    OutPolygons: PolygonID[]
  };
  SearchSpatialDatabaseForPolygonsInVolume(
    planes: Plane[],
    OutPolygons?: PolygonID[]
  ): {
    OutPolygons: PolygonID[]
  };
  RevertInstance(): EditableMesh;
  Revert(): void;
  RemovePolygonPerimeterVertices(
    PolygonID: PolygonID,
    FirstVertexNumberToRemove: number,
    NumVerticesToRemove: number,
    bDeleteOrphanedVertexInstances: boolean
  ): void;
  RebuildRenderMesh(): void;
  QuadrangulateMesh(
    OutNewPolygonIDs?: PolygonID[]
  ): {
    OutNewPolygonIDs: PolygonID[]
  };
  PropagateInstanceChanges(): void;
  MoveVertices(VerticesToMove: VertexToMove[]): void;
  static MakeVertexID(VertexIndex: number): VertexID;
  static MakePolygonID(PolygonIndex: number): PolygonID;
  static MakePolygonGroupID(PolygonGroupIndex: number): PolygonGroupID;
  static MakeEdgeID(EdgeIndex: number): EdgeID;
  IsValidVertex(VertexID: VertexID): boolean;
  IsValidPolygonGroup(PolygonGroupID: PolygonGroupID): boolean;
  IsValidPolygon(PolygonID: PolygonID): boolean;
  IsValidEdge(EdgeID: EdgeID): boolean;
  IsUndoAllowed(): boolean;
  IsSpatialDatabaseAllowed(): boolean;
  IsPreviewingSubdivisions(): boolean;
  IsOrphanedVertex(VertexID: VertexID): boolean;
  IsCompactAllowed(): boolean;
  IsCommittedAsInstance(): boolean;
  IsCommitted(): boolean;
  IsBeingModified(): boolean;
  static InvalidVertexID(): VertexID;
  static InvalidPolygonID(): PolygonID;
  static InvalidPolygonGroupID(): PolygonGroupID;
  static InvalidEdgeID(): EdgeID;
  InsetPolygons(
    PolygonIDs: PolygonID[],
    InsetFixedDistance: number,
    InsetProgressTowardCenter: number,
    Mode: EInsetPolygonsModeT,
    OutNewCenterPolygonIDs?: PolygonID[],
    OutNewSidePolygonIDs?: PolygonID[]
  ): {
    OutNewCenterPolygonIDs: PolygonID[],
    OutNewSidePolygonIDs: PolygonID[]
  };
  InsertPolygonPerimeterVertices(
    PolygonID: PolygonID,
    InsertBeforeVertexNumber: number,
    VerticesToInsert: VertexAndAttributes[]
  ): void;
  InsertEdgeLoop(
    EdgeID: EdgeID,
    Splits: number[],
    OutNewEdgeIDs?: EdgeID[]
  ): {
    OutNewEdgeIDs: EdgeID[]
  };
  InitializeAdapters(): void;
  GetVertexPairEdge(
    VertexID: VertexID,
    NextVertexID: VertexID,
    bOutEdgeWindingIsReversed?: boolean
  ): {
    bOutEdgeWindingIsReversed: boolean,
    $: EdgeID
  };
  GetVertexInstanceVertex(VertexInstanceID: VertexInstanceID): VertexID;
  GetVertexInstanceCount(): number;
  GetVertexInstanceConnectedPolygons(
    VertexInstanceID: VertexInstanceID,
    OutConnectedPolygonIDs?: PolygonID[]
  ): {
    OutConnectedPolygonIDs: PolygonID[]
  };
  GetVertexInstanceConnectedPolygonCount(
    VertexInstanceID: VertexInstanceID
  ): number;
  GetVertexInstanceConnectedPolygon(
    VertexInstanceID: VertexInstanceID,
    ConnectedPolygonNumber: number
  ): PolygonID;
  GetVertexCount(): number;
  GetVertexConnectedPolygons(
    VertexID: VertexID,
    OutConnectedPolygonIDs?: PolygonID[]
  ): {
    OutConnectedPolygonIDs: PolygonID[]
  };
  GetVertexConnectedEdges(
    VertexID: VertexID,
    OutConnectedEdgeIDs?: EdgeID[]
  ): {
    OutConnectedEdgeIDs: EdgeID[]
  };
  GetVertexConnectedEdgeCount(VertexID: VertexID): number;
  GetVertexConnectedEdge(
    VertexID: VertexID,
    ConnectedEdgeNumber: number
  ): EdgeID;
  GetVertexAdjacentVertices(
    VertexID: VertexID,
    OutAdjacentVertexIDs?: VertexID[]
  ): {
    OutAdjacentVertexIDs: VertexID[]
  };
  GetTextureCoordinateCount(): number;
  GetSubdivisionLimitData(): SubdivisionLimitData;
  GetSubdivisionCount(): number;
  GetPolygonTriangulatedTriangleCount(PolygonID: PolygonID): number;
  GetPolygonTriangulatedTriangle(
    PolygonID: PolygonID,
    PolygonTriangleNumber: number
  ): MeshTriangle;
  GetPolygonPerimeterVertices(
    PolygonID: PolygonID,
    OutPolygonPerimeterVertexIDs?: VertexID[]
  ): {
    OutPolygonPerimeterVertexIDs: VertexID[]
  };
  GetPolygonPerimeterVertexInstances(
    PolygonID: PolygonID,
    OutPolygonPerimeterVertexInstanceIDs?: VertexInstanceID[]
  ): {
    OutPolygonPerimeterVertexInstanceIDs: VertexInstanceID[]
  };
  GetPolygonPerimeterVertexInstance(
    PolygonID: PolygonID,
    PolygonVertexNumber: number
  ): VertexInstanceID;
  GetPolygonPerimeterVertexCount(PolygonID: PolygonID): number;
  GetPolygonPerimeterVertex(
    PolygonID: PolygonID,
    PolygonVertexNumber: number
  ): VertexID;
  GetPolygonPerimeterEdges(
    PolygonID: PolygonID,
    OutPolygonPerimeterEdgeIDs?: EdgeID[]
  ): {
    OutPolygonPerimeterEdgeIDs: EdgeID[]
  };
  GetPolygonPerimeterEdgeCount(PolygonID: PolygonID): number;
  GetPolygonPerimeterEdge(
    PolygonID: PolygonID,
    PerimeterEdgeNumber: number,
    bOutEdgeWindingIsReversedForPolygon?: boolean
  ): {
    bOutEdgeWindingIsReversedForPolygon: boolean,
    $: EdgeID
  };
  GetPolygonInGroup(
    PolygonGroupID: PolygonGroupID,
    PolygonNumber: number
  ): PolygonID;
  GetPolygonGroupCount(): number;
  GetPolygonCountInGroup(PolygonGroupID: PolygonGroupID): number;
  GetPolygonCount(): number;
  GetPolygonAdjacentPolygons(
    PolygonID: PolygonID,
    OutAdjacentPolygons?: PolygonID[]
  ): {
    OutAdjacentPolygons: PolygonID[]
  };
  GetGroupForPolygon(PolygonID: PolygonID): PolygonGroupID;
  GetFirstValidPolygonGroup(): PolygonGroupID;
  GetEdgeVertices(
    EdgeID: EdgeID,
    OutEdgeVertexID0?: VertexID,
    OutEdgeVertexID1?: VertexID
  ): {
    OutEdgeVertexID0: VertexID,
    OutEdgeVertexID1: VertexID
  };
  GetEdgeVertex(EdgeID: EdgeID, EdgeVertexNumber: number): VertexID;
  GetEdgeThatConnectsVertices(VertexID0: VertexID, VertexID1: VertexID): EdgeID;
  GetEdgeLoopElements(
    EdgeID: EdgeID,
    EdgeLoopIDs?: EdgeID[]
  ): {
    EdgeLoopIDs: EdgeID[]
  };
  GetEdgeCount(): number;
  GetEdgeConnectedPolygons(
    EdgeID: EdgeID,
    OutConnectedPolygonIDs?: PolygonID[]
  ): {
    OutConnectedPolygonIDs: PolygonID[]
  };
  GetEdgeConnectedPolygonCount(EdgeID: EdgeID): number;
  GetEdgeConnectedPolygon(
    EdgeID: EdgeID,
    ConnectedPolygonNumber: number
  ): PolygonID;
  GeneratePolygonTangentsAndNormals(PolygonIDs: PolygonID[]): void;
  FlipPolygons(PolygonIDs: PolygonID[]): void;
  FindPolygonPerimeterVertexNumberForVertex(
    PolygonID: PolygonID,
    VertexID: VertexID
  ): number;
  FindPolygonPerimeterEdgeNumberForVertices(
    PolygonID: PolygonID,
    EdgeVertexID0: VertexID,
    EdgeVertexID1: VertexID
  ): number;
  FindPolygonLoop(
    EdgeID: EdgeID,
    OutEdgeLoopEdgeIDs?: EdgeID[],
    OutFlippedEdgeIDs?: EdgeID[],
    OutReversedEdgeIDPathToTake?: EdgeID[],
    OutPolygonIDsToSplit?: PolygonID[]
  ): {
    OutEdgeLoopEdgeIDs: EdgeID[],
    OutFlippedEdgeIDs: EdgeID[],
    OutReversedEdgeIDPathToTake: EdgeID[],
    OutPolygonIDsToSplit: PolygonID[]
  };
  ExtrudePolygons(
    Polygons: PolygonID[],
    ExtrudeDistance: number,
    bKeepNeighborsTogether: boolean,
    OutNewExtrudedFrontPolygons?: PolygonID[]
  ): {
    OutNewExtrudedFrontPolygons: PolygonID[]
  };
  ExtendVertices(
    VertexIDs: VertexID[],
    bOnlyExtendClosestEdge: boolean,
    ReferencePosition: Vector,
    OutNewExtendedVertexIDs?: VertexID[]
  ): {
    OutNewExtendedVertexIDs: VertexID[]
  };
  ExtendEdges(
    EdgeIDs: EdgeID[],
    bWeldNeighbors: boolean,
    OutNewExtendedEdgeIDs?: EdgeID[]
  ): {
    OutNewExtendedEdgeIDs: EdgeID[]
  };
  EndModification(bFromUndo: boolean): void;
  DeleteVertexInstances(
    VertexInstanceIDsToDelete: VertexInstanceID[],
    bDeleteOrphanedVertices: boolean
  ): void;
  DeleteVertexAndConnectedEdgesAndPolygons(
    VertexID: VertexID,
    bDeleteOrphanedEdges: boolean,
    bDeleteOrphanedVertices: boolean,
    bDeleteOrphanedVertexInstances: boolean,
    bDeleteEmptyPolygonGroups: boolean
  ): void;
  DeletePolygons(
    PolygonIDsToDelete: PolygonID[],
    bDeleteOrphanedEdges: boolean,
    bDeleteOrphanedVertices: boolean,
    bDeleteOrphanedVertexInstances: boolean,
    bDeleteEmptyPolygonGroups: boolean
  ): void;
  DeletePolygonGroups(PolygonGroupIDs: PolygonGroupID[]): void;
  DeleteOrphanVertices(VertexIDsToDelete: VertexID[]): void;
  DeleteEdges(
    EdgeIDsToDelete: EdgeID[],
    bDeleteOrphanedVertices: boolean
  ): void;
  DeleteEdgeAndConnectedPolygons(
    EdgeID: EdgeID,
    bDeleteOrphanedEdges: boolean,
    bDeleteOrphanedVertices: boolean,
    bDeleteOrphanedVertexInstances: boolean,
    bDeleteEmptyPolygonGroups: boolean
  ): void;
  CreateVertices(
    VerticesToCreate: VertexToCreate[],
    OutNewVertexIDs?: VertexID[]
  ): {
    OutNewVertexIDs: VertexID[]
  };
  CreateVertexInstances(
    VertexInstancesToCreate: VertexInstanceToCreate[],
    OutNewVertexInstanceIDs?: VertexInstanceID[]
  ): {
    OutNewVertexInstanceIDs: VertexInstanceID[]
  };
  CreatePolygons(
    PolygonsToCreate: PolygonToCreate[],
    OutNewPolygonIDs?: PolygonID[],
    OutNewEdgeIDs?: EdgeID[]
  ): {
    OutNewPolygonIDs: PolygonID[],
    OutNewEdgeIDs: EdgeID[]
  };
  CreatePolygonGroups(
    PolygonGroupsToCreate: PolygonGroupToCreate[],
    OutNewPolygonGroupIDs?: PolygonGroupID[]
  ): {
    OutNewPolygonGroupIDs: PolygonGroupID[]
  };
  CreateMissingPolygonPerimeterEdges(
    PolygonID: PolygonID,
    OutNewEdgeIDs?: EdgeID[]
  ): {
    OutNewEdgeIDs: EdgeID[]
  };
  CreateEmptyVertexRange(
    NumVerticesToCreate: number,
    OutNewVertexIDs?: VertexID[]
  ): {
    OutNewVertexIDs: VertexID[]
  };
  CreateEdges(
    EdgesToCreate: EdgeToCreate[],
    OutNewEdgeIDs?: EdgeID[]
  ): {
    OutNewEdgeIDs: EdgeID[]
  };
  ComputePolygonTriangulation(
    PolygonID: PolygonID,
    OutTriangles?: MeshTriangle[]
  ): {
    OutTriangles: MeshTriangle[]
  };
  ComputePolygonsSharedEdges(
    PolygonIDs: PolygonID[],
    OutSharedEdgeIDs?: EdgeID[]
  ): {
    OutSharedEdgeIDs: EdgeID[]
  };
  ComputePolygonPlane(PolygonID: PolygonID): Plane;
  ComputePolygonNormal(PolygonID: PolygonID): Vector;
  ComputePolygonCenter(PolygonID: PolygonID): Vector;
  ComputeBoundingBoxAndSphere(): BoxSphereBounds;
  ComputeBoundingBox(): Box;
  ComputeBarycentricWeightForPointOnPolygon(
    PolygonID: PolygonID,
    PointOnPolygon: Vector,
    OutTriangle?: MeshTriangle,
    OutTriangleVertexWeights?: Vector
  ): {
    OutTriangle: MeshTriangle,
    OutTriangleVertexWeights: Vector,
    $: boolean
  };
  CommitInstance(ComponentToInstanceTo: PrimitiveComponent): EditableMesh;
  Commit(): void;
  ChangePolygonsVertexInstances(
    VertexInstancesForPolygons: ChangeVertexInstancesForPolygon[]
  ): void;
  BevelPolygons(
    PolygonIDs: PolygonID[],
    BevelFixedDistance: number,
    BevelProgressTowardCenter: number,
    OutNewCenterPolygonIDs?: PolygonID[],
    OutNewSidePolygonIDs?: PolygonID[]
  ): {
    OutNewCenterPolygonIDs: PolygonID[],
    OutNewSidePolygonIDs: PolygonID[]
  };
  AssignPolygonsToPolygonGroups(
    PolygonGroupForPolygons: PolygonGroupForPolygon[],
    bDeleteOrphanedPolygonGroups: boolean
  ): void;
  AnyChangesToUndo(): boolean;
  static C(Other: UObject | any): EditableMesh;
}
declare class EditableMeshFactory mixins UObject {
  static Load(ResourceName: string): EditableMeshFactory;
  static Find(Outer: UObject, ResourceName: string): EditableMeshFactory;
  static GetDefaultObject(): EditableMeshFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditableMeshFactory;
  static MakeEditableMesh(
    PrimitiveComponent: PrimitiveComponent,
    LODIndex: number
  ): EditableMesh;
  static C(Other: UObject | any): EditableMeshFactory;
}
declare class EditableStaticMeshAdapter mixins EditableMeshAdapter {
  StaticMesh: StaticMesh;
  OriginalStaticMesh: StaticMesh;
  StaticMeshLODIndex: number;
  static Load(ResourceName: string): EditableStaticMeshAdapter;
  static Find(Outer: UObject, ResourceName: string): EditableStaticMeshAdapter;
  static GetDefaultObject(): EditableStaticMeshAdapter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditableStaticMeshAdapter;
  static C(Other: UObject | any): EditableStaticMeshAdapter;
}
declare class MobileInstalledContent mixins UObject {
  static Load(ResourceName: string): MobileInstalledContent;
  static Find(Outer: UObject, ResourceName: string): MobileInstalledContent;
  static GetDefaultObject(): MobileInstalledContent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MobileInstalledContent;
  Mount(PakOrder: number, MountPoint: string): boolean;
  GetInstalledContentSize(): number;
  GetDiskFreeSpace(): number;
  static C(Other: UObject | any): MobileInstalledContent;
}
declare class MobilePendingContent mixins MobileInstalledContent {
  static Load(ResourceName: string): MobilePendingContent;
  static Find(Outer: UObject, ResourceName: string): MobilePendingContent;
  static GetDefaultObject(): MobilePendingContent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MobilePendingContent;
  GetTotalDownloadedSize(): number;
  GetRequiredDiskSpace(): number;
  GetInstallProgress(): number;
  GetDownloadStatusText(): string;
  GetDownloadSpeed(): number;
  GetDownloadSize(): number;
  static C(Other: UObject | any): MobilePendingContent;
}
declare class MobilePatchingLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): MobilePatchingLibrary;
  static Find(Outer: UObject, ResourceName: string): MobilePatchingLibrary;
  static GetDefaultObject(): MobilePatchingLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MobilePatchingLibrary;
  static HasActiveWiFiConnection(): boolean;
  static GetSupportedPlatformNames(): string[];
  static GetInstalledContent(InstallDirectory: string): MobileInstalledContent;
  static GetActiveDeviceProfileName(): string;
  static C(Other: UObject | any): MobilePatchingLibrary;
}
declare class AudioCaptureComponent mixins SynthComponent {
  JitterLatencyFrames: number;
  static Load(ResourceName: string): AudioCaptureComponent;
  static Find(Outer: UObject, ResourceName: string): AudioCaptureComponent;
  static GetDefaultObject(): AudioCaptureComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AudioCaptureComponent;
  static C(Other: UObject | any): AudioCaptureComponent;
}
declare class ArchVisCharacter mixins Character {
  LookUpAxisName: string;
  LookUpAtRateAxisName: string;
  TurnAxisName: string;
  TurnAtRateAxisName: string;
  MoveForwardAxisName: string;
  MoveRightAxisName: string;
  MouseSensitivityScale_Pitch: number;
  MouseSensitivityScale_Yaw: number;
  static GetDefaultObject(): ArchVisCharacter;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ArchVisCharacter;
  static C(Other: UObject | any): ArchVisCharacter;
}
declare class ArchVisCharMovementComponent mixins CharacterMovementComponent {
  RotationalAcceleration: Rotator;
  RotationalDeceleration: Rotator;
  MaxRotationalVelocity: Rotator;
  MinPitch: number;
  MaxPitch: number;
  WalkingFriction: number;
  WalkingSpeed: number;
  WalkingAcceleration: number;
  static Load(ResourceName: string): ArchVisCharMovementComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ArchVisCharMovementComponent;
  static GetDefaultObject(): ArchVisCharMovementComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ArchVisCharMovementComponent;
  static C(Other: UObject | any): ArchVisCharMovementComponent;
}
declare class FlipbookEditorSettings mixins UObject {
  BackgroundColor: Color;
  bShowGridByDefault: boolean;
  static Load(ResourceName: string): FlipbookEditorSettings;
  static Find(Outer: UObject, ResourceName: string): FlipbookEditorSettings;
  static GetDefaultObject(): FlipbookEditorSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): FlipbookEditorSettings;
  static C(Other: UObject | any): FlipbookEditorSettings;
}
declare type ESpriteExtractModeT = "Auto" | "Grid" | "ESpriteExtractMode_MAX";
declare var ESpriteExtractMode: {
  Auto: "Auto",
  Grid: "Grid",
  ESpriteExtractMode_MAX: "ESpriteExtractMode_MAX"
};
declare class PaperExtractSpritesSettings mixins UObject {
  SpriteExtractMode: ESpriteExtractModeT;
  OutlineColor: LinearColor;
  ViewportTextureTint: LinearColor;
  BackgroundColor: LinearColor;
  NamingTemplate: string;
  NamingStartIndex: number;
  static Load(ResourceName: string): PaperExtractSpritesSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperExtractSpritesSettings;
  static GetDefaultObject(): PaperExtractSpritesSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperExtractSpritesSettings;
  static C(Other: UObject | any): PaperExtractSpritesSettings;
}
declare class PaperExtractSpriteGridSettings mixins UObject {
  CellWidth: number;
  CellHeight: number;
  NumCellsX: number;
  NumCellsY: number;
  MarginX: number;
  MarginY: number;
  SpacingX: number;
  SpacingY: number;
  static Load(ResourceName: string): PaperExtractSpriteGridSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperExtractSpriteGridSettings;
  static GetDefaultObject(): PaperExtractSpriteGridSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperExtractSpriteGridSettings;
  static C(Other: UObject | any): PaperExtractSpriteGridSettings;
}
declare class PaperFlipbookActorFactory mixins ActorFactory {
  static Load(ResourceName: string): PaperFlipbookActorFactory;
  static Find(Outer: UObject, ResourceName: string): PaperFlipbookActorFactory;
  static GetDefaultObject(): PaperFlipbookActorFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperFlipbookActorFactory;
  static C(Other: UObject | any): PaperFlipbookActorFactory;
}
declare class PaperFlipbookFactory mixins Factory {
  static Load(ResourceName: string): PaperFlipbookFactory;
  static Find(Outer: UObject, ResourceName: string): PaperFlipbookFactory;
  static GetDefaultObject(): PaperFlipbookFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperFlipbookFactory;
  static C(Other: UObject | any): PaperFlipbookFactory;
}
declare class PaperSpriteThumbnailRenderer
  mixins DefaultSizedThumbnailRenderer {
  static Load(ResourceName: string): PaperSpriteThumbnailRenderer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperSpriteThumbnailRenderer;
  static GetDefaultObject(): PaperSpriteThumbnailRenderer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteThumbnailRenderer;
  static C(Other: UObject | any): PaperSpriteThumbnailRenderer;
}
declare class PaperFlipbookThumbnailRenderer
  mixins PaperSpriteThumbnailRenderer {
  static Load(ResourceName: string): PaperFlipbookThumbnailRenderer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperFlipbookThumbnailRenderer;
  static GetDefaultObject(): PaperFlipbookThumbnailRenderer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperFlipbookThumbnailRenderer;
  static C(Other: UObject | any): PaperFlipbookThumbnailRenderer;
}
declare class PaperImporterSettings mixins UObject {
  bPickBestMaterialWhenCreatingSprites: boolean;
  bPickBestMaterialWhenCreatingTileMaps: boolean;
  bAnalysisCanUseOpaque: boolean;
  DefaultPixelsPerUnrealUnit: number;
  NormalMapTextureSuffixes: string[];
  BaseMapTextureSuffixes: string[];
  DefaultSpriteTextureGroup: TextureGroupT;
  bOverrideTextureCompression: boolean;
  DefaultSpriteTextureCompression: TextureCompressionSettingsT;
  UnlitDefaultMaskedMaterialName: SoftObjectPath;
  UnlitDefaultTranslucentMaterialName: SoftObjectPath;
  UnlitDefaultOpaqueMaterialName: SoftObjectPath;
  LitDefaultMaskedMaterialName: SoftObjectPath;
  LitDefaultTranslucentMaterialName: SoftObjectPath;
  LitDefaultOpaqueMaterialName: SoftObjectPath;
  static Load(ResourceName: string): PaperImporterSettings;
  static Find(Outer: UObject, ResourceName: string): PaperImporterSettings;
  static GetDefaultObject(): PaperImporterSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperImporterSettings;
  static C(Other: UObject | any): PaperImporterSettings;
}
declare class PaperSpriteActorFactory mixins ActorFactory {
  static Load(ResourceName: string): PaperSpriteActorFactory;
  static Find(Outer: UObject, ResourceName: string): PaperSpriteActorFactory;
  static GetDefaultObject(): PaperSpriteActorFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteActorFactory;
  static C(Other: UObject | any): PaperSpriteActorFactory;
}
declare class PaperSpriteAtlasFactory mixins Factory {
  static Load(ResourceName: string): PaperSpriteAtlasFactory;
  static Find(Outer: UObject, ResourceName: string): PaperSpriteAtlasFactory;
  static GetDefaultObject(): PaperSpriteAtlasFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteAtlasFactory;
  static C(Other: UObject | any): PaperSpriteAtlasFactory;
}
declare class PaperSpriteFactory mixins Factory {
  static Load(ResourceName: string): PaperSpriteFactory;
  static Find(Outer: UObject, ResourceName: string): PaperSpriteFactory;
  static GetDefaultObject(): PaperSpriteFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteFactory;
  static C(Other: UObject | any): PaperSpriteFactory;
}
declare class PaperTileMapFactory mixins Factory {
  static Load(ResourceName: string): PaperTileMapFactory;
  static Find(Outer: UObject, ResourceName: string): PaperTileMapFactory;
  static GetDefaultObject(): PaperTileMapFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileMapFactory;
  static C(Other: UObject | any): PaperTileMapFactory;
}
declare class PaperTileMapPromotionFactory mixins Factory {
  AssetToRename: PaperTileMap;
  static Load(ResourceName: string): PaperTileMapPromotionFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperTileMapPromotionFactory;
  static GetDefaultObject(): PaperTileMapPromotionFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileMapPromotionFactory;
  static C(Other: UObject | any): PaperTileMapPromotionFactory;
}
declare class PaperTileSetFactory mixins Factory {
  static Load(ResourceName: string): PaperTileSetFactory;
  static Find(Outer: UObject, ResourceName: string): PaperTileSetFactory;
  static GetDefaultObject(): PaperTileSetFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileSetFactory;
  static C(Other: UObject | any): PaperTileSetFactory;
}
declare class PaperTileSetThumbnailRenderer
  mixins DefaultSizedThumbnailRenderer {
  static Load(ResourceName: string): PaperTileSetThumbnailRenderer;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperTileSetThumbnailRenderer;
  static GetDefaultObject(): PaperTileSetThumbnailRenderer;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTileSetThumbnailRenderer;
  static C(Other: UObject | any): PaperTileSetThumbnailRenderer;
}
declare class SpriteEditorSettings mixins UObject {
  BackgroundColor: Color;
  bShowGridByDefault: boolean;
  static Load(ResourceName: string): SpriteEditorSettings;
  static Find(Outer: UObject, ResourceName: string): SpriteEditorSettings;
  static GetDefaultObject(): SpriteEditorSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SpriteEditorSettings;
  static C(Other: UObject | any): SpriteEditorSettings;
}
declare class TerrainSplineActorFactory mixins ActorFactory {
  static Load(ResourceName: string): TerrainSplineActorFactory;
  static Find(Outer: UObject, ResourceName: string): TerrainSplineActorFactory;
  static GetDefaultObject(): TerrainSplineActorFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TerrainSplineActorFactory;
  static C(Other: UObject | any): TerrainSplineActorFactory;
}
declare class TileMapActorFactory mixins ActorFactory {
  static Load(ResourceName: string): TileMapActorFactory;
  static Find(Outer: UObject, ResourceName: string): TileMapActorFactory;
  static GetDefaultObject(): TileMapActorFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TileMapActorFactory;
  static C(Other: UObject | any): TileMapActorFactory;
}
declare class TileSetImportMapping {
  SourceName: string;
  ImportedTileSet: any;
  ImportedTexture: any;
  clone(): TileSetImportMapping;
  static C(Other: UObject | any): TileSetImportMapping;
}
declare class TileMapAssetImportData mixins AssetImportData {
  TileSetMap: TileSetImportMapping[];
  static Load(ResourceName: string): TileMapAssetImportData;
  static Find(Outer: UObject, ResourceName: string): TileMapAssetImportData;
  static GetDefaultObject(): TileMapAssetImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TileMapAssetImportData;
  static C(Other: UObject | any): TileMapAssetImportData;
}
declare class TileMapEditorSettings mixins UObject {
  DefaultBackgroundColor: Color;
  bShowGridByDefault: boolean;
  DefaultTileGridColor: Color;
  DefaultMultiTileGridColor: Color;
  DefaultMultiTileGridWidth: number;
  DefaultMultiTileGridHeight: number;
  DefaultMultiTileGridOffsetX: number;
  DefaultMultiTileGridOffsetY: number;
  DefaultLayerGridColor: Color;
  static Load(ResourceName: string): TileMapEditorSettings;
  static Find(Outer: UObject, ResourceName: string): TileMapEditorSettings;
  static GetDefaultObject(): TileMapEditorSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TileMapEditorSettings;
  static C(Other: UObject | any): TileMapEditorSettings;
}
declare class TileSetEditorSettings mixins UObject {
  DefaultBackgroundColor: Color;
  bShowGridByDefault: boolean;
  ExtrusionAmount: number;
  bPadToPowerOf2: boolean;
  bFillWithTransparentBlack: boolean;
  static Load(ResourceName: string): TileSetEditorSettings;
  static Find(Outer: UObject, ResourceName: string): TileSetEditorSettings;
  static GetDefaultObject(): TileSetEditorSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TileSetEditorSettings;
  static C(Other: UObject | any): TileSetEditorSettings;
}
declare class TileSheetPaddingFactory mixins Factory {
  SourceTileSet: PaperTileSet;
  ExtrusionAmount: number;
  bPadToPowerOf2: boolean;
  bFillWithTransparentBlack: boolean;
  static Load(ResourceName: string): TileSheetPaddingFactory;
  static Find(Outer: UObject, ResourceName: string): TileSheetPaddingFactory;
  static GetDefaultObject(): TileSheetPaddingFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TileSheetPaddingFactory;
  static C(Other: UObject | any): TileSheetPaddingFactory;
}
declare class PaperSpriteSheet mixins UObject {
  SpriteNames: string[];
  Sprites: PaperSprite[];
  TextureName: string;
  Texture: Texture2D;
  NormalMapTextureName: string;
  NormalMapTexture: Texture2D;
  AssetImportData: AssetImportData;
  static Load(ResourceName: string): PaperSpriteSheet;
  static Find(Outer: UObject, ResourceName: string): PaperSpriteSheet;
  static GetDefaultObject(): PaperSpriteSheet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteSheet;
  static C(Other: UObject | any): PaperSpriteSheet;
}
declare class PaperSpriteSheetImportFactory mixins Factory {
  static Load(ResourceName: string): PaperSpriteSheetImportFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperSpriteSheetImportFactory;
  static GetDefaultObject(): PaperSpriteSheetImportFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteSheetImportFactory;
  static C(Other: UObject | any): PaperSpriteSheetImportFactory;
}
declare class PaperSpriteSheetReimportFactory
  mixins PaperSpriteSheetImportFactory {
  static Load(ResourceName: string): PaperSpriteSheetReimportFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): PaperSpriteSheetReimportFactory;
  static GetDefaultObject(): PaperSpriteSheetReimportFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperSpriteSheetReimportFactory;
  static C(Other: UObject | any): PaperSpriteSheetReimportFactory;
}
declare class PaperTiledImporterFactory mixins Factory {
  static Load(ResourceName: string): PaperTiledImporterFactory;
  static Find(Outer: UObject, ResourceName: string): PaperTiledImporterFactory;
  static GetDefaultObject(): PaperTiledImporterFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PaperTiledImporterFactory;
  static C(Other: UObject | any): PaperTiledImporterFactory;
}
declare class CryptoKeysCommandlet mixins Commandlet {
  static Load(ResourceName: string): CryptoKeysCommandlet;
  static Find(Outer: UObject, ResourceName: string): CryptoKeysCommandlet;
  static GetDefaultObject(): CryptoKeysCommandlet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CryptoKeysCommandlet;
  static C(Other: UObject | any): CryptoKeysCommandlet;
}
declare class CryptoEncryptionKey {
  Guid: Guid;
  Name: string;
  Key: string;
  clone(): CryptoEncryptionKey;
  static C(Other: UObject | any): CryptoEncryptionKey;
}
declare class CryptoKeysSettings mixins UObject {
  EncryptionKey: string;
  SecondaryEncryptionKeys: CryptoEncryptionKey[];
  bEncryptPakIniFiles: boolean;
  bEncryptPakIndex: boolean;
  bEncryptUAssetFiles: boolean;
  bEncryptAllAssetFiles: boolean;
  SigningPublicExponent: string;
  SigningModulus: string;
  SigningPrivateExponent: string;
  bEnablePakSigning: boolean;
  static Load(ResourceName: string): CryptoKeysSettings;
  static Find(Outer: UObject, ResourceName: string): CryptoKeysSettings;
  static GetDefaultObject(): CryptoKeysSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): CryptoKeysSettings;
  static C(Other: UObject | any): CryptoKeysSettings;
}
declare class MacGraphicsSwitchingSettings mixins UObject {
  RendererID: number;
  bShowGraphicsSwitching: boolean;
  static Load(ResourceName: string): MacGraphicsSwitchingSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MacGraphicsSwitchingSettings;
  static GetDefaultObject(): MacGraphicsSwitchingSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MacGraphicsSwitchingSettings;
  static C(Other: UObject | any): MacGraphicsSwitchingSettings;
}
declare class NewPluginDescriptorData mixins UObject {
  CreatedBy: string;
  CreatedByURL: string;
  Description: string;
  bIsBetaVersion: boolean;
  static Load(ResourceName: string): NewPluginDescriptorData;
  static Find(Outer: UObject, ResourceName: string): NewPluginDescriptorData;
  static GetDefaultObject(): NewPluginDescriptorData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): NewPluginDescriptorData;
  static C(Other: UObject | any): NewPluginDescriptorData;
}
declare class PluginMetadataObject mixins UObject {
  Version: number;
  VersionName: string;
  FriendlyName: string;
  Description: string;
  Category: string;
  CreatedBy: string;
  CreatedByURL: string;
  DocsURL: string;
  MarketplaceURL: string;
  SupportURL: string;
  bCanContainContent: boolean;
  bIsBetaVersion: boolean;
  static Load(ResourceName: string): PluginMetadataObject;
  static Find(Outer: UObject, ResourceName: string): PluginMetadataObject;
  static GetDefaultObject(): PluginMetadataObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PluginMetadataObject;
  static C(Other: UObject | any): PluginMetadataObject;
}
declare class SpeedTreeImportFactory mixins Factory {
  static Load(ResourceName: string): SpeedTreeImportFactory;
  static Find(Outer: UObject, ResourceName: string): SpeedTreeImportFactory;
  static GetDefaultObject(): SpeedTreeImportFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SpeedTreeImportFactory;
  static C(Other: UObject | any): SpeedTreeImportFactory;
}
declare class ReimportSpeedTreeFactory mixins SpeedTreeImportFactory {
  static Load(ResourceName: string): ReimportSpeedTreeFactory;
  static Find(Outer: UObject, ResourceName: string): ReimportSpeedTreeFactory;
  static GetDefaultObject(): ReimportSpeedTreeFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ReimportSpeedTreeFactory;
  static C(Other: UObject | any): ReimportSpeedTreeFactory;
}
declare type EImportGeometryTypeT =
  | "IGT_3D"
  | "IGT_Billboards"
  | "IGT_Both"
  | "IGT_MAX";
declare var EImportGeometryType: {
  IGT_3D: "IGT_3D",
  IGT_Billboards: "IGT_Billboards",
  IGT_Both: "IGT_Both",
  IGT_MAX: "IGT_MAX"
};
declare type EImportLODTypeT =
  | "ILT_PaintedFoliage"
  | "ILT_IndividualActors"
  | "ILT_MAX";
declare var EImportLODType: {
  ILT_PaintedFoliage: "ILT_PaintedFoliage",
  ILT_IndividualActors: "ILT_IndividualActors",
  ILT_MAX: "ILT_MAX"
};
declare class SpeedTreeImportData mixins AssetImportData {
  TreeScale: number;
  ImportGeometryType: EImportGeometryTypeT;
  LODType: EImportLODTypeT;
  IncludeCollision: boolean;
  MakeMaterialsCheck: boolean;
  IncludeNormalMapCheck: boolean;
  IncludeDetailMapCheck: boolean;
  IncludeSpecularMapCheck: boolean;
  IncludeBranchSeamSmoothing: boolean;
  IncludeSpeedTreeAO: boolean;
  IncludeColorAdjustment: boolean;
  IncludeSubsurface: boolean;
  IncludeVertexProcessingCheck: boolean;
  IncludeWindCheck: boolean;
  IncludeSmoothLODCheck: boolean;
  static Load(ResourceName: string): SpeedTreeImportData;
  static Find(Outer: UObject, ResourceName: string): SpeedTreeImportData;
  static GetDefaultObject(): SpeedTreeImportData;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): SpeedTreeImportData;
  static C(Other: UObject | any): SpeedTreeImportData;
}
declare class MovieSceneMediaSection mixins MovieSceneSection {
  MediaSource: MediaSource;
  bLooping: boolean;
  StartFrameOffset: FrameNumber;
  MediaTexture: MediaTexture;
  MediaSoundComponent: MediaSoundComponent;
  bUseExternalMediaPlayer: boolean;
  ExternalMediaPlayer: MediaPlayer;
  ThumbnailReferenceOffset: number;
  static Load(ResourceName: string): MovieSceneMediaSection;
  static Find(Outer: UObject, ResourceName: string): MovieSceneMediaSection;
  static GetDefaultObject(): MovieSceneMediaSection;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MovieSceneMediaSection;
  static C(Other: UObject | any): MovieSceneMediaSection;
}
declare class MovieSceneMediaTrack mixins MovieSceneNameableTrack {
  MediaSections: MovieSceneSection[];
  static Load(ResourceName: string): MovieSceneMediaTrack;
  static Find(Outer: UObject, ResourceName: string): MovieSceneMediaTrack;
  static GetDefaultObject(): MovieSceneMediaTrack;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MovieSceneMediaTrack;
  static C(Other: UObject | any): MovieSceneMediaTrack;
}
declare class ImgMediaSettings mixins UObject {
  DefaultFrameRate: FrameRate;
  CacheBehindPercentage: number;
  CacheSizeGB: number;
  CacheThreads: number;
  CacheThreadStackSizeKB: number;
  ExrDecoderThreads: any;
  DefaultProxy: string;
  UseDefaultProxy: boolean;
  static Load(ResourceName: string): ImgMediaSettings;
  static Find(Outer: UObject, ResourceName: string): ImgMediaSettings;
  static GetDefaultObject(): ImgMediaSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ImgMediaSettings;
  static C(Other: UObject | any): ImgMediaSettings;
}
declare class ImgMediaSource mixins BaseMediaSource {
  FrameRateOverride: FrameRate;
  ProxyOverride: string;
  SequencePath: DirectoryPath;
  static Load(ResourceName: string): ImgMediaSource;
  static Find(Outer: UObject, ResourceName: string): ImgMediaSource;
  static GetDefaultObject(): ImgMediaSource;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ImgMediaSource;
  SetSequencePath(Path: string): void;
  GetSequencePath(): string;
  GetProxies(
    OutProxies?: string[]
  ): {
    OutProxies: string[]
  };
  static C(Other: UObject | any): ImgMediaSource;
}
declare class DropTimecode {
  Timecode: Timecode;
  FrameRate: number;
  bColorFraming: boolean;
  bRunningForward: boolean;
  bNewFrame: boolean;
  clone(): DropTimecode;
  static C(Other: UObject | any): DropTimecode;
  Conv_DropTimecodeToString(): string;
  static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
}
declare class LinearTimecodeComponent mixins SceneComponent {
  MediaPlayer: MediaPlayer;
  DropTimecode: DropTimecode;
  OnTimecodeChange: UnrealEngineMulticastDelegate<
    (Timecode: DropTimecode) => void
  >;
  static Load(ResourceName: string): LinearTimecodeComponent;
  static Find(Outer: UObject, ResourceName: string): LinearTimecodeComponent;
  static GetDefaultObject(): LinearTimecodeComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LinearTimecodeComponent;
  static SetDropTimecodeFrameNumber(
    Timecode: DropTimecode,
    FrameNumber: number,
    OutTimecode?: DropTimecode
  ): {
    OutTimecode: DropTimecode
  };
  static GetDropTimeCodeFrameNumber(
    Timecode: DropTimecode,
    FrameNumber?: number
  ): {
    FrameNumber: number
  };
  GetDropFrameNumber(): number;
  static C(Other: UObject | any): LinearTimecodeComponent;
}
declare class DropTimecodeToStringConversion mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): DropTimecodeToStringConversion;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): DropTimecodeToStringConversion;
  static GetDefaultObject(): DropTimecodeToStringConversion;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): DropTimecodeToStringConversion;
  static Conv_DropTimecodeToString(InTimecode: DropTimecode): string;
  static C(Other: UObject | any): DropTimecodeToStringConversion;
}
declare class JavascriptPinParams {
  ContainerType: EPinContainerTypeT;
  bIsReference: boolean;
  bIsConst: boolean;
  index: number;
  clone(): JavascriptPinParams;
  static C(Other: UObject | any): JavascriptPinParams;
}
declare class JavascriptGraphEdNode mixins EdGraphNode {
  BackgroundColor: SlateColor;
  GraphNode: UObject;
  IsTitleOnly: boolean;
  Bidirectional: boolean;
  PriorityOrder: number;
  static Load(ResourceName: string): JavascriptGraphEdNode;
  static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdNode;
  static GetDefaultObject(): JavascriptGraphEdNode;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphEdNode;
  UpdateSlate(): void;
  SetVisible(bVisible: boolean): void;
  SetTitleSelectionMode(TitleHeight: number): void;
  SetEnable(bEnable: boolean): void;
  ResetTitleSelectionMode(): void;
  RemovePinByName(PinName: string): boolean;
  RemovePin(Pin: JavascriptEdGraphPin): boolean;
  GetNumOfPins(Direction: EEdGraphPinDirectionT): number;
  GetDesiredSize(): Vector2D;
  CreatePin(
    Dir: EEdGraphPinDirectionT,
    PinCategory: string,
    PinSubCategory: string,
    PinSubCategoryObject: UObject,
    PinName: string,
    PinToolTip: string,
    InPinParams: JavascriptPinParams
  ): JavascriptEdGraphPin;
  static C(Other: UObject | any): JavascriptGraphEdNode;
}
declare class JavascriptSlateEdNode {
  clone(): JavascriptSlateEdNode;
  static C(Other: UObject | any): JavascriptSlateEdNode;
  AddPinToHoverSet(Pin: JavascriptEdGraphPin): void;
  RemovePinFromHoverSet(Pin: JavascriptEdGraphPin): void;
  static AddPinToHoverSet(
    InSlateEdNode: JavascriptSlateEdNode,
    Pin: JavascriptEdGraphPin
  ): void;
  static RemovePinFromHoverSet(
    InSlateNode: JavascriptSlateEdNode,
    Pin: JavascriptEdGraphPin
  ): void;
}
declare class JavascriptPerformSecondPassLayoutContainer {
  PrevNode: EdGraphNode;
  NextNode: EdGraphNode;
  NodeIndex: number;
  MaxNodes: number;
  clone(): JavascriptPerformSecondPassLayoutContainer;
  static C(Other: UObject | any): JavascriptPerformSecondPassLayoutContainer;
}
declare class JavascriptConnectionParams {
  WireColor: LinearColor;
  AssociatedPin1: JavascriptEdGraphPin;
  AssociatedPin2: JavascriptEdGraphPin;
  WireThickness: number;
  bDrawBubbles: boolean;
  bUserFlag1: boolean;
  bUserFlag2: boolean;
  StartDirection: EEdGraphPinDirectionT;
  EndDirection: EEdGraphPinDirectionT;
  clone(): JavascriptConnectionParams;
  static C(Other: UObject | any): JavascriptConnectionParams;
}
declare class JavascriptGraphConnectionDrawingPolicyContainer {
  clone(): JavascriptGraphConnectionDrawingPolicyContainer;
  static C(
    Other: UObject | any
  ): JavascriptGraphConnectionDrawingPolicyContainer;
  ApplyHoverDeemphasis(
    OutputPin: JavascriptEdGraphPin,
    InputPin: JavascriptEdGraphPin,
    Thickness: number,
    WireColor: LinearColor
  ): void;
  DetermineWiringStyle(
    OutputPin: JavascriptEdGraphPin,
    InputPin: JavascriptEdGraphPin,
    Params?: JavascriptConnectionParams
  ): {
    Params: JavascriptConnectionParams
  };
  DrawConnection(
    A: Vector2D,
    B: Vector2D,
    Params: JavascriptConnectionParams
  ): void;
  DrawSplineWithArrow(
    StartAnchorPoint: Vector2D,
    EndAnchorPoint: Vector2D,
    Params: JavascriptConnectionParams
  ): void;
  GetHorveredPinNum(): number;
  IsContainedHoveredPins(Pin: JavascriptEdGraphPin): boolean;
  MakeRotatedBox(
    ArrowDrawPos: Vector2D,
    AngleInRadians: number,
    WireColor: LinearColor
  ): void;
  static ApplyHoverDeemphasis(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    OutputPin: JavascriptEdGraphPin,
    InputPin: JavascriptEdGraphPin,
    Thickness: number,
    WireColor: LinearColor
  ): void;
  static DetermineWiringStyle(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    OutputPin: JavascriptEdGraphPin,
    InputPin: JavascriptEdGraphPin,
    Params?: JavascriptConnectionParams
  ): {
    Params: JavascriptConnectionParams
  };
  static DrawConnection(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    A: Vector2D,
    B: Vector2D,
    Params: JavascriptConnectionParams
  ): void;
  static DrawSplineWithArrow(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    StartAnchorPoint: Vector2D,
    EndAnchorPoint: Vector2D,
    Params: JavascriptConnectionParams
  ): void;
  static GetHorveredPinNum(
    Container: JavascriptGraphConnectionDrawingPolicyContainer
  ): number;
  static IsContainedHoveredPins(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    Pin: JavascriptEdGraphPin
  ): boolean;
  static MakeRotatedBox(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    ArrowDrawPos: Vector2D,
    AngleInRadians: number,
    WireColor: LinearColor
  ): void;
}
declare type EGraphSchemaGetStringQueryT =
  | "Description"
  | "Title"
  | "EGraphSchemaGetStringQuery_MAX";
declare var EGraphSchemaGetStringQuery: {
  Description: "Description",
  Title: "Title",
  EGraphSchemaGetStringQuery_MAX: "EGraphSchemaGetStringQuery_MAX"
};
declare class JavascriptGraphMenuBuilder mixins JavascriptMenuBuilder {
  Graph: EdGraph;
  GraphNode: EdGraphNode;
  GraphPin: JavascriptEdGraphPin;
  bIsDebugging: boolean;
  clone(): JavascriptGraphMenuBuilder;
  static C(Other: UObject | any): JavascriptGraphMenuBuilder;
}
declare type ECanCreateConnectionResponseT =
  | "CONNECT_RESPONSE_MAKE"
  | "CONNECT_RESPONSE_DISALLOW"
  | "CONNECT_RESPONSE_BREAK_OTHERS_A"
  | "CONNECT_RESPONSE_BREAK_OTHERS_B"
  | "CONNECT_RESPONSE_BREAK_OTHERS_AB"
  | "CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE"
  | "CONNECT_RESPONSE_MAX";
declare var ECanCreateConnectionResponse: {
  CONNECT_RESPONSE_MAKE: "CONNECT_RESPONSE_MAKE",
  CONNECT_RESPONSE_DISALLOW: "CONNECT_RESPONSE_DISALLOW",
  CONNECT_RESPONSE_BREAK_OTHERS_A: "CONNECT_RESPONSE_BREAK_OTHERS_A",
  CONNECT_RESPONSE_BREAK_OTHERS_B: "CONNECT_RESPONSE_BREAK_OTHERS_B",
  CONNECT_RESPONSE_BREAK_OTHERS_AB: "CONNECT_RESPONSE_BREAK_OTHERS_AB",
  CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE: "CONNECT_RESPONSE_MAKE_WITH_CONVERSION_NODE",
  CONNECT_RESPONSE_MAX: "CONNECT_RESPONSE_MAX"
};
declare class JavascriptPinConnectionResponse {
  Message: string;
  Response: ECanCreateConnectionResponseT;
  clone(): JavascriptPinConnectionResponse;
  static C(Other: UObject | any): JavascriptPinConnectionResponse;
}
declare class EdGraphSchemaAction {
  MenuDescription: string;
  TooltipDescription: string;
  Category: string;
  Keywords: string;
  Grouping: number;
  SectionID: number;
  MenuDescriptionArray: string[];
  FullSearchTitlesArray: string[];
  FullSearchKeywordsArray: string[];
  FullSearchCategoryArray: string[];
  LocalizedMenuDescriptionArray: string[];
  LocalizedFullSearchTitlesArray: string[];
  LocalizedFullSearchKeywordsArray: string[];
  LocalizedFullSearchCategoryArray: string[];
  SearchText: string;
  clone(): EdGraphSchemaAction;
  static C(Other: UObject | any): EdGraphSchemaAction;
}
declare class PerformActionContext {
  ParentGraph: EdGraph;
  FromPins: JavascriptEdGraphPin[];
  Location: Vector2D;
  bSelectNewNode: boolean;
  clone(): PerformActionContext;
  static C(Other: UObject | any): PerformActionContext;
}
declare class JavascriptArrangedWidget {
  clone(): JavascriptArrangedWidget;
  static C(Other: UObject | any): JavascriptArrangedWidget;
}
declare class JavascriptPinWidget {
  clone(): JavascriptPinWidget;
  static C(Other: UObject | any): JavascriptPinWidget;
}
declare class JavascriptDetermineLinkGeometryContainer {
  clone(): JavascriptDetermineLinkGeometryContainer;
  static C(Other: UObject | any): JavascriptDetermineLinkGeometryContainer;
  FindPinGeometries(PinWidget: JavascriptPinWidget): JavascriptArrangedWidget;
  FindPinToPinWidgetMap(Pin: JavascriptEdGraphPin): JavascriptPinWidget;
  GetArrangedNodes(UNode: EdGraphNode): JavascriptArrangedWidget;
  GetOutputPinWidget(): JavascriptPinWidget;
  static FindPinGeometries(
    Container: JavascriptDetermineLinkGeometryContainer,
    PinWidget: JavascriptPinWidget
  ): JavascriptArrangedWidget;
  static FindPinToPinWidgetMap(
    Container: JavascriptDetermineLinkGeometryContainer,
    Pin: JavascriptEdGraphPin
  ): JavascriptPinWidget;
  static GetArrangedNodes(
    Container: JavascriptDetermineLinkGeometryContainer,
    UNode: EdGraphNode
  ): JavascriptArrangedWidget;
  static GetOutputPinWidget(
    Container: JavascriptDetermineLinkGeometryContainer
  ): JavascriptPinWidget;
}
declare class JavascriptGraphAssetGraphSchema mixins EdGraphSchema {
  OnGetPinColor: UnrealEngineDelegate<
    (bHovered: boolean, Pin: JavascriptEdGraphPin) => SlateColor
  >;
  OnGetDefaultValueVisibility: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => boolean
  >;
  OnGetSlateBrushName: UnrealEngineDelegate<
    (bHovered: boolean, Pin: JavascriptEdGraphPin) => string
  >;
  OnPinConnectionListChanged: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => void
  >;
  OnTryCreateConnection: UnrealEngineDelegate<
    (PinA: JavascriptEdGraphPin, PinB: JavascriptEdGraphPin) => void
  >;
  OnMouseEnter: UnrealEngineDelegate<
    (
      Instance: JavascriptGraphEdNode,
      SlateEdNode: JavascriptSlateEdNode
    ) => void
  >;
  OnMouseLeave: UnrealEngineDelegate<
    (
      Instance: JavascriptGraphEdNode,
      SlateEdNode: JavascriptSlateEdNode
    ) => void
  >;
  OnMouseMove: UnrealEngineDelegate<
    (
      Instance: JavascriptGraphEdNode,
      Delta: Vector2D,
      bUserIsDragging: boolean,
      MouseZone: number
    ) => void
  >;
  OnMouseButtonDown: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void
  >;
  OnMouseButtonUp: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode, MyGeometry: Geometry) => void
  >;
  OnPerformSecondPassLayout: UnrealEngineDelegate<
    (
      Instance: JavascriptGraphEdNode
    ) => JavascriptPerformSecondPassLayoutContainer
  >;
  OnRequiresSecondPassLayout: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => boolean
  >;
  OnMoveTo: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode, NewPosition: Vector2D) => boolean
  >;
  OnTakeCustomContentWidget: UnrealEngineDelegate<
    (
      Instance: JavascriptGraphEdNode,
      OutUserWidget: JavascriptSlateWidget,
      OutLeftNodeBoxWidget: JavascriptSlateWidget,
      OutRightNodeBoxWidget: JavascriptSlateWidget,
      OutAltLeftNodeBoxWidget: JavascriptSlateWidget,
      OutAltRightNodeBoxWidget: JavascriptSlateWidget
    ) => JavascriptSlateWidget
  >;
  OnGetValueWidget: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => JavascriptSlateWidget
  >;
  OnGetActualPinWidget: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => JavascriptSlateWidget
  >;
  OnGetPinStatusIndicator: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => JavascriptSlateWidget
  >;
  OnDisableMakePins: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => boolean
  >;
  OnUsingDefaultPin: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => boolean
  >;
  OnGetPinLabelVisibility: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => boolean
  >;
  OnUsingAlternativeInputPinBox: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => boolean
  >;
  OnUsingAlternativeOutputPinBox: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => boolean
  >;
  OnUsingNodeWidgetMap: UnrealEngineDelegate<() => boolean>;
  OnDetermineWiringStyle: UnrealEngineDelegate<
    (
      A: JavascriptEdGraphPin,
      B: JavascriptEdGraphPin,
      Params: JavascriptConnectionParams,
      Container: JavascriptGraphConnectionDrawingPolicyContainer
    ) => void
  >;
  OnComputeSplineTangent: UnrealEngineDelegate<
    (A: Vector2D, B: Vector2D) => Vector2D
  >;
  OnDrawSplineWithArrow: UnrealEngineDelegate<
    (
      A: Vector2D,
      B: Vector2D,
      Params: JavascriptConnectionParams,
      Container: JavascriptGraphConnectionDrawingPolicyContainer,
      ArrowRadius: Vector2D
    ) => boolean
  >;
  OnDrawSplineWithArrow_Geom: UnrealEngineDelegate<
    (
      A: Geometry,
      B: Geometry,
      Params: JavascriptConnectionParams,
      Container: JavascriptGraphConnectionDrawingPolicyContainer
    ) => boolean
  >;
  OnDrawPreviewConnector: UnrealEngineDelegate<
    (
      PinGeometry: Geometry,
      StartPoint: Vector2D,
      EndPoint: Vector2D,
      Pin: JavascriptEdGraphPin,
      Params: JavascriptConnectionParams,
      Container: JavascriptGraphConnectionDrawingPolicyContainer
    ) => boolean
  >;
  OnTakeWidget: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => JavascriptSlateWidget
  >;
  OnTakeTitleWidget: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => JavascriptSlateWidget
  >;
  OnTakeErrorReportingWidget: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => JavascriptSlateWidget
  >;
  OnGetString: UnrealEngineDelegate<
    (
      Instance: JavascriptGraphEdNode,
      Query: EGraphSchemaGetStringQueryT
    ) => string
  >;
  OnBuildMenu: UnrealEngineDelegate<
    (Builder: JavascriptGraphMenuBuilder) => void
  >;
  OnAllocateDefaultPins: UnrealEngineDelegate<
    (UNode: JavascriptGraphEdNode) => void
  >;
  OnCreatePin: UnrealEngineDelegate<
    (Pin: JavascriptEdGraphPin) => JavascriptSlateWidget
  >;
  OnCanCreateConnection: UnrealEngineDelegate<
    (
      A: JavascriptEdGraphPin,
      B: JavascriptEdGraphPin
    ) => JavascriptPinConnectionResponse
  >;
  OnPerformAction: UnrealEngineDelegate<
    (Action: EdGraphSchemaAction, Context: PerformActionContext) => EdGraphNode
  >;
  OnContextActions: UnrealEngineDelegate<
    (FromPin: JavascriptEdGraphPin) => EdGraphSchemaAction[]
  >;
  OnNodeConnectionListChanged: UnrealEngineDelegate<
    (UNode: JavascriptGraphEdNode) => void
  >;
  OnCreateAutomaticConversionNodeAndConnections: UnrealEngineDelegate<
    (A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => boolean
  >;
  OnDetermineLinkGeometry: UnrealEngineDelegate<
    (
      OutPin: JavascriptEdGraphPin,
      InputPin: JavascriptEdGraphPin,
      StartWidgetGeometry: JavascriptArrangedWidget,
      EndWidgetGeometry: JavascriptArrangedWidget,
      Container: JavascriptDetermineLinkGeometryContainer
    ) => boolean
  >;
  OnGetNodeComment: UnrealEngineDelegate<
    (UNode: JavascriptGraphEdNode) => string
  >;
  OnSetNodeComment: UnrealEngineDelegate<
    (UNode: JavascriptGraphEdNode, string: string) => void
  >;
  OnIsNodeComment: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => boolean
  >;
  OnEndUserInteraction: UnrealEngineDelegate<
    (UNode: JavascriptGraphEdNode) => void
  >;
  OnCreateOutputSideAddButton: UnrealEngineDelegate<
    (Instance: JavascriptGraphEdNode) => boolean
  >;
  OnAddPinByAddButton: UnrealEngineDelegate<
    (UNode: JavascriptGraphEdNode) => void
  >;
  OnShouldAlwaysPurgeOnModification: UnrealEngineDelegate<() => boolean>;
  static Load(ResourceName: string): JavascriptGraphAssetGraphSchema;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGraphAssetGraphSchema;
  static GetDefaultObject(): JavascriptGraphAssetGraphSchema;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphAssetGraphSchema;
  BreakSinglePinLink(
    SourcePin: JavascriptEdGraphPin,
    TargetPin: JavascriptEdGraphPin
  ): void;
  BreakPinLinks(
    TargetPin: JavascriptEdGraphPin,
    bSendsNodeNotifcation: boolean
  ): void;
  BreakNodeLinks(TargetNode: EdGraphNode): void;
  static C(Other: UObject | any): JavascriptGraphAssetGraphSchema;
}
declare class JavascriptNodeCreator {
  UNode: JavascriptGraphEdNode;
  clone(): JavascriptNodeCreator;
  static C(Other: UObject | any): JavascriptNodeCreator;
  Finalize(): {
    Creator: JavascriptNodeCreator
  };
  static Finalize(
    Creator?: JavascriptNodeCreator
  ): {
    Creator: JavascriptNodeCreator
  };
}
declare class JavascriptGraphEdGraph mixins EdGraph {
  static Load(ResourceName: string): JavascriptGraphEdGraph;
  static Find(Outer: UObject, ResourceName: string): JavascriptGraphEdGraph;
  static GetDefaultObject(): JavascriptGraphEdGraph;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphEdGraph;
  RebuildGenericGraph(): void;
  static C(Other: UObject | any): JavascriptGraphEdGraph;
  NodeCreator(bSelectNewNode: boolean): JavascriptNodeCreator;
  static NodeCreator(
    Graph: JavascriptGraphEdGraph,
    bSelectNewNode: boolean
  ): JavascriptNodeCreator;
}
declare class JavascriptGraphEditorLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptGraphEditorLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGraphEditorLibrary;
  static GetDefaultObject(): JavascriptGraphEditorLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphEditorLibrary;
  static TryConnection(
    Schema: EdGraphSchema,
    A: JavascriptEdGraphPin,
    B: JavascriptEdGraphPin
  ): void;
  static SetPinType(Pin: JavascriptEdGraphPin, PinType: EdGraphPinType): void;
  static SetPinInfo(
    A: JavascriptEdGraphPin,
    InPinName: string,
    InPinToolTip: string
  ): void;
  static SetPinHidden(A: JavascriptEdGraphPin, bHidden: boolean): void;
  static SetParentPin(
    A: JavascriptEdGraphPin,
    Parent: JavascriptEdGraphPin
  ): void;
  static SetNodeMetaData(
    Schema: EdGraphSchema,
    UNode: EdGraphNode,
    KeyValue: string
  ): boolean;
  static ResizeNode(UNode: EdGraphNode, NewSize: Vector2D): void;
  static RemovePinFromHoverSet(
    InSlateNode: JavascriptSlateEdNode,
    Pin: JavascriptEdGraphPin
  ): void;
  static NodeCreator(
    Graph: JavascriptGraphEdGraph,
    bSelectNewNode: boolean
  ): JavascriptNodeCreator;
  static MakeRotatedBox(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    ArrowDrawPos: Vector2D,
    AngleInRadians: number,
    WireColor: LinearColor
  ): void;
  static MakeLinkTo(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin): void;
  static IsValid(A: JavascriptEdGraphPin): boolean;
  static IsPinHidden(A: JavascriptEdGraphPin): boolean;
  static IsContainedHoveredPins(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    Pin: JavascriptEdGraphPin
  ): boolean;
  static GetSubPins(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
  static GetPinType(A: JavascriptEdGraphPin): EdGraphPinType;
  static GetPins(UNode: EdGraphNode): JavascriptEdGraphPin[];
  static GetPinName(A: JavascriptEdGraphPin): string;
  static GetPinIndex(A: JavascriptEdGraphPin): number;
  static GetPinGUID(A: JavascriptEdGraphPin): Guid;
  static GetPinContainerType(
    A: JavascriptEdGraphPin
  ): EJavascriptPinContainerTypeT;
  static GetParentPin(A: JavascriptEdGraphPin): JavascriptEdGraphPin;
  static GetOwningNode(A: JavascriptEdGraphPin): EdGraphNode;
  static GetOutputPinWidget(
    Container: JavascriptDetermineLinkGeometryContainer
  ): JavascriptPinWidget;
  static GetLinkedTo(A: JavascriptEdGraphPin): JavascriptEdGraphPin[];
  static GetLinkedPinNum(A: JavascriptEdGraphPin): number;
  static GetHorveredPinNum(
    Container: JavascriptGraphConnectionDrawingPolicyContainer
  ): number;
  static GetDirection(A: JavascriptEdGraphPin): EEdGraphPinDirectionT;
  static GetDefaultObject(): JavascriptEdGraphPin;
  static GetArrangedNodes(
    Container: JavascriptDetermineLinkGeometryContainer,
    UNode: EdGraphNode
  ): JavascriptArrangedWidget;
  static FindPinToPinWidgetMap(
    Container: JavascriptDetermineLinkGeometryContainer,
    Pin: JavascriptEdGraphPin
  ): JavascriptPinWidget;
  static FindPinGeometries(
    Container: JavascriptDetermineLinkGeometryContainer,
    PinWidget: JavascriptPinWidget
  ): JavascriptArrangedWidget;
  static FindPin(
    UNode: EdGraphNode,
    PinName: string,
    Direction: EEdGraphPinDirectionT
  ): JavascriptEdGraphPin;
  static FindClosestPointOnGeom(Geom: Geometry, TestPoint: Vector2D): Vector2D;
  static Finalize(
    Creator?: JavascriptNodeCreator
  ): {
    Creator: JavascriptNodeCreator
  };
  static DrawSplineWithArrow(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    StartAnchorPoint: Vector2D,
    EndAnchorPoint: Vector2D,
    Params: JavascriptConnectionParams
  ): void;
  static DrawConnection(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    A: Vector2D,
    B: Vector2D,
    Params: JavascriptConnectionParams
  ): void;
  static DetermineWiringStyle(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    OutputPin: JavascriptEdGraphPin,
    InputPin: JavascriptEdGraphPin,
    Params?: JavascriptConnectionParams
  ): {
    Params: JavascriptConnectionParams
  };
  static DestroyNode(UNode: EdGraphNode): void;
  static CenterOf(Geom: Geometry): Vector2D;
  static CanUserDeleteNode(UNode: EdGraphNode): boolean;
  static CanDuplicateNode(UNode: EdGraphNode): boolean;
  static BreakLinkTo(A: JavascriptEdGraphPin, B: JavascriptEdGraphPin): void;
  static BreakAllPinLinks(A: JavascriptEdGraphPin): void;
  static AutowireNewNode(
    UNode: EdGraphNode,
    FromPin: JavascriptEdGraphPin
  ): void;
  static ApplyHoverDeemphasis(
    Container: JavascriptGraphConnectionDrawingPolicyContainer,
    OutputPin: JavascriptEdGraphPin,
    InputPin: JavascriptEdGraphPin,
    Thickness: number,
    WireColor: LinearColor
  ): void;
  static AddPinToHoverSet(
    InSlateEdNode: JavascriptSlateEdNode,
    Pin: JavascriptEdGraphPin
  ): void;
  static C(Other: UObject | any): JavascriptGraphEditorLibrary;
}
declare class JavascriptGraphAppearanceInfo {
  CornerImage: SlateBrush;
  CornerText: string;
  PIENotifyText: string;
  ReadOnlyText: string;
  InstructionText: string;
  clone(): JavascriptGraphAppearanceInfo;
  static C(Other: UObject | any): JavascriptGraphAppearanceInfo;
}
declare class JavascriptGraphEditorWidget mixins Widget {
  EdGraph: JavascriptGraphEdGraph;
  OnNodeDoubleClicked: UnrealEngineDelegate<(UNode: EdGraphNode) => void>;
  OnDropActor: UnrealEngineDelegate<
    (Actors: Actor[], Graph: EdGraph, Point: Vector2D) => void
  >;
  OnDisallowedPinConnection: UnrealEngineDelegate<
    (A: JavascriptEdGraphPin, B: JavascriptEdGraphPin) => void
  >;
  OnSelectedNodesChanged: UnrealEngineDelegate<(Set: UObject[]) => void>;
  AppearanceInfo: JavascriptGraphAppearanceInfo;
  CommandList: JavascriptUICommandList;
  static Load(ResourceName: string): JavascriptGraphEditorWidget;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGraphEditorWidget;
  static GetDefaultObject(): JavascriptGraphEditorWidget;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphEditorWidget;
  SetViewLocation(Location: Vector2D, ZoomAmount: number): void;
  SetNodeSelection(UNode: EdGraphNode, bSelect: boolean): void;
  SetGraph(InEdGraph: JavascriptGraphEdGraph): void;
  SelectAllNodes(): void;
  static NewGraph(ParentScope: UObject): JavascriptGraphEdGraph;
  JumpToPin(JumpToMe: JavascriptEdGraphPin): void;
  JumpToNode(
    JumpToMe: EdGraphNode,
    bRequestRename: boolean,
    bSelectNode: boolean
  ): void;
  GetViewLocation(
    OutLocation?: Vector2D,
    OutZoomAmount?: number
  ): {
    OutLocation: Vector2D,
    OutZoomAmount: number
  };
  GetSelectedNodes(): UObject[];
  GetPasteLocation(): Vector2D;
  ClearSelectionSet(): void;
  static C(Other: UObject | any): JavascriptGraphEditorWidget;
}
declare class JavascriptGraphPinObject mixins Widget {
  OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
  OnGetDefaultValue: UnrealEngineDelegate<() => UObject>;
  OnSetDefaultValue: UnrealEngineDelegate<(Value: string) => void>;
  static Load(ResourceName: string): JavascriptGraphPinObject;
  static Find(Outer: UObject, ResourceName: string): JavascriptGraphPinObject;
  static GetDefaultObject(): JavascriptGraphPinObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphPinObject;
  static C(Other: UObject | any): JavascriptGraphPinObject;
}
declare class JavascriptTextProperty {
  Key: string;
  Namespace: string;
  Value: string;
  TableId: string;
  clone(): JavascriptTextProperty;
  static C(Other: UObject | any): JavascriptTextProperty;
}
declare class JavascriptGraphTextPropertyEditableTextBox mixins Widget {
  OnGetGraphPin: UnrealEngineDelegate<() => JavascriptEdGraphPin>;
  OnGetDefaultValue: UnrealEngineDelegate<() => JavascriptTextProperty>;
  OnTextCommitted: UnrealEngineMulticastDelegate<
    (TextProperty: JavascriptTextProperty) => void
  >;
  WidgetStyle: EditableTextBoxStyle;
  WrapTextAt: number;
  AutoWrapText: boolean;
  static Load(ResourceName: string): JavascriptGraphTextPropertyEditableTextBox;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptGraphTextPropertyEditableTextBox;
  static GetDefaultObject(): JavascriptGraphTextPropertyEditableTextBox;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptGraphTextPropertyEditableTextBox;
  static C(Other: UObject | any): JavascriptGraphTextPropertyEditableTextBox;
}
declare class ActorFactoryLandscape mixins ActorFactory {
  static Load(ResourceName: string): ActorFactoryLandscape;
  static Find(Outer: UObject, ResourceName: string): ActorFactoryLandscape;
  static GetDefaultObject(): ActorFactoryLandscape;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ActorFactoryLandscape;
  static C(Other: UObject | any): ActorFactoryLandscape;
}
declare type ELandscapeToolFlattenModeT =
  | "Invalid"
  | "Both"
  | "Raise"
  | "Lower"
  | "Terrace"
  | "ELandscapeToolFlattenMode_MAX";
declare var ELandscapeToolFlattenMode: {
  Invalid: "Invalid",
  Both: "Both",
  Raise: "Raise",
  Lower: "Lower",
  Terrace: "Terrace",
  ELandscapeToolFlattenMode_MAX: "ELandscapeToolFlattenMode_MAX"
};
declare type ELandscapeToolErosionModeT =
  | "Invalid"
  | "Both"
  | "Raise"
  | "Lower"
  | "ELandscapeToolErosionMode_MAX";
declare var ELandscapeToolErosionMode: {
  Invalid: "Invalid",
  Both: "Both",
  Raise: "Raise",
  Lower: "Lower",
  ELandscapeToolErosionMode_MAX: "ELandscapeToolErosionMode_MAX"
};
declare type ELandscapeToolHydroErosionModeT =
  | "Invalid"
  | "Both"
  | "Positive"
  | "ELandscapeToolHydroErosionMode_MAX";
declare var ELandscapeToolHydroErosionMode: {
  Invalid: "Invalid",
  Both: "Both",
  Positive: "Positive",
  ELandscapeToolHydroErosionMode_MAX: "ELandscapeToolHydroErosionMode_MAX"
};
declare type ELandscapeToolNoiseModeT =
  | "Invalid"
  | "Both"
  | "Add"
  | "Sub"
  | "ELandscapeToolNoiseMode_MAX";
declare var ELandscapeToolNoiseMode: {
  Invalid: "Invalid",
  Both: "Both",
  Add: "Add",
  Sub: "Sub",
  ELandscapeToolNoiseMode_MAX: "ELandscapeToolNoiseMode_MAX"
};
declare type ELandscapeToolPasteModeT =
  | "Invalid"
  | "Both"
  | "Raise"
  | "Lower"
  | "ELandscapeToolPasteMode_MAX";
declare var ELandscapeToolPasteMode: {
  Invalid: "Invalid",
  Both: "Both",
  Raise: "Raise",
  Lower: "Lower",
  ELandscapeToolPasteMode_MAX: "ELandscapeToolPasteMode_MAX"
};
declare class GizmoImportLayer {
  LayerFilename: string;
  LayerName: string;
  bNoImport: boolean;
  clone(): GizmoImportLayer;
  static C(Other: UObject | any): GizmoImportLayer;
}
declare type ELandscapeMirrorOperationT =
  | "MinusXToPlusX"
  | "PlusXToMinusX"
  | "MinusYToPlusY"
  | "PlusYToMinusY"
  | "RotateMinusXToPlusX"
  | "RotatePlusXToMinusX"
  | "RotateMinusYToPlusY"
  | "RotatePlusYToMinusY"
  | "ELandscapeMirrorOperation_MAX";
declare var ELandscapeMirrorOperation: {
  MinusXToPlusX: "MinusXToPlusX",
  PlusXToMinusX: "PlusXToMinusX",
  MinusYToPlusY: "MinusYToPlusY",
  PlusYToMinusY: "PlusYToMinusY",
  RotateMinusXToPlusX: "RotateMinusXToPlusX",
  RotatePlusXToMinusX: "RotatePlusXToMinusX",
  RotateMinusYToPlusY: "RotateMinusYToPlusY",
  RotatePlusYToMinusY: "RotatePlusYToMinusY",
  ELandscapeMirrorOperation_MAX: "ELandscapeMirrorOperation_MAX"
};
declare type ELandscapeConvertModeT =
  | "Invalid"
  | "Expand"
  | "Clip"
  | "Resample"
  | "ELandscapeConvertMode_MAX";
declare var ELandscapeConvertMode: {
  Invalid: "Invalid",
  Expand: "Expand",
  Clip: "Clip",
  Resample: "Resample",
  ELandscapeConvertMode_MAX: "ELandscapeConvertMode_MAX"
};
declare type ELandscapeImportResultT =
  | "Success"
  | "Warning"
  | "Error"
  | "ELandscapeImportResult_MAX";
declare var ELandscapeImportResult: {
  Success: "Success",
  Warning: "Warning",
  Error: "Error",
  ELandscapeImportResult_MAX: "ELandscapeImportResult_MAX"
};
declare type ELandscapeImportAlphamapTypeT =
  | "Additive"
  | "Layered"
  | "ELandscapeImportAlphamapType_MAX";
declare var ELandscapeImportAlphamapType: {
  Additive: "Additive",
  Layered: "Layered",
  ELandscapeImportAlphamapType_MAX: "ELandscapeImportAlphamapType_MAX"
};
declare class LandscapeImportLayerInfo {
  LayerName: string;
  LayerInfo: LandscapeLayerInfoObject;
  SourceFilePath: string;
  clone(): LandscapeImportLayerInfo;
  static C(Other: UObject | any): LandscapeImportLayerInfo;
}
declare class LandscapeImportLayer mixins LandscapeImportLayerInfo {
  ThumbnailMIC: LandscapeMaterialInstanceConstant;
  ImportResult: ELandscapeImportResultT;
  ErrorMessage: string;
  clone(): LandscapeImportLayer;
  static C(Other: UObject | any): LandscapeImportLayer;
}
declare class LandscapePatternBrushWorldSpaceSettings {
  Origin: Vector2D;
  Rotation: number;
  bCenterTextureOnOrigin: boolean;
  RepeatSize: number;
  clone(): LandscapePatternBrushWorldSpaceSettings;
  static C(Other: UObject | any): LandscapePatternBrushWorldSpaceSettings;
}
declare type EColorChannelT =
  | "Red"
  | "Green"
  | "Blue"
  | "Alpha"
  | "EColorChannel_MAX";
declare var EColorChannel: {
  Red: "Red",
  Green: "Green",
  Blue: "Blue",
  Alpha: "Alpha",
  EColorChannel_MAX: "EColorChannel_MAX"
};
declare class LandscapeEditorObject mixins UObject {
  ToolStrength: number;
  bUseWeightTargetValue: boolean;
  WeightTargetValue: number;
  MaximumValueRadius: number;
  FlattenMode: ELandscapeToolFlattenModeT;
  bUseSlopeFlatten: boolean;
  bPickValuePerApply: boolean;
  bUseFlattenTarget: boolean;
  FlattenTarget: number;
  bShowFlattenTargetPreview: boolean;
  TerraceInterval: number;
  TerraceSmooth: number;
  bFlattenEyeDropperModeActivated: boolean;
  FlattenEyeDropperModeDesiredTarget: number;
  RampWidth: number;
  RampSideFalloff: number;
  SmoothFilterKernelSize: number;
  bDetailSmooth: boolean;
  DetailScale: number;
  ErodeThresh: number;
  ErodeSurfaceThickness: number;
  ErodeIterationNum: number;
  ErosionNoiseMode: ELandscapeToolErosionModeT;
  ErosionNoiseScale: number;
  RainAmount: number;
  SedimentCapacity: number;
  HErodeIterationNum: number;
  RainDistMode: ELandscapeToolHydroErosionModeT;
  RainDistScale: number;
  bHErosionDetailSmooth: boolean;
  HErosionDetailScale: number;
  NoiseMode: ELandscapeToolNoiseModeT;
  NoiseScale: number;
  bUseSelectedRegion: boolean;
  bUseNegativeMask: boolean;
  PasteMode: ELandscapeToolPasteModeT;
  bApplyToAllTargets: boolean;
  bSnapGizmo: boolean;
  bSmoothGizmoBrush: boolean;
  GizmoHeightmapFilenameString: string;
  GizmoImportSize: IntPoint;
  GizmoImportLayers: GizmoImportLayer[];
  MirrorPoint: Vector2D;
  MirrorOp: ELandscapeMirrorOperationT;
  MirrorSmoothingWidth: number;
  BlueprintCustomBrush: UnrealEngineClassT;
  ResizeLandscape_QuadsPerSection: number;
  ResizeLandscape_SectionsPerComponent: number;
  ResizeLandscape_ComponentCount: IntPoint;
  ResizeLandscape_ConvertMode: ELandscapeConvertModeT;
  NewLandscape_Material: any;
  NewLandscape_QuadsPerSection: number;
  NewLandscape_SectionsPerComponent: number;
  NewLandscape_ComponentCount: IntPoint;
  NewLandscape_Location: Vector;
  NewLandscape_Rotation: Rotator;
  NewLandscape_Scale: Vector;
  ImportLandscape_HeightmapImportResult: ELandscapeImportResultT;
  ImportLandscape_HeightmapErrorMessage: string;
  ImportLandscape_HeightmapFilename: string;
  ImportLandscape_Width: any;
  ImportLandscape_Height: any;
  ImportLandscape_Data: any[];
  ImportLandscape_AlphamapType: ELandscapeImportAlphamapTypeT;
  ImportLandscape_Layers: LandscapeImportLayer[];
  BrushRadius: number;
  BrushFalloff: number;
  bUseClayBrush: boolean;
  AlphaBrushScale: number;
  bAlphaBrushAutoRotate: boolean;
  AlphaBrushRotation: number;
  AlphaBrushPanU: number;
  AlphaBrushPanV: number;
  bUseWorldSpacePatternBrush: boolean;
  WorldSpacePatternBrushSettings: LandscapePatternBrushWorldSpaceSettings;
  AlphaTexture: Texture2D;
  AlphaTextureChannel: EColorChannelT;
  AlphaTextureSizeX: number;
  AlphaTextureSizeY: number;
  AlphaTextureData: number[];
  BrushComponentSize: number;
  PaintingRestriction: ELandscapeLayerPaintingRestrictionT;
  TargetDisplayOrder: ELandscapeLayerDisplayModeT;
  ShowUnusedLayers: boolean;
  static Load(ResourceName: string): LandscapeEditorObject;
  static Find(Outer: UObject, ResourceName: string): LandscapeEditorObject;
  static GetDefaultObject(): LandscapeEditorObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LandscapeEditorObject;
  static C(Other: UObject | any): LandscapeEditorObject;
}
declare class LandscapePlaceholder mixins Actor {
  static GetDefaultObject(): LandscapePlaceholder;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LandscapePlaceholder;
  static C(Other: UObject | any): LandscapePlaceholder;
}
declare type EJavasriptTabActivationCauseT =
  | "UserClickedOnTab"
  | "SetDirectly"
  | "EJavasriptTabActivationCause_MAX";
declare var EJavasriptTabActivationCause: {
  UserClickedOnTab: "UserClickedOnTab",
  SetDirectly: "SetDirectly",
  EJavasriptTabActivationCause_MAX: "EJavasriptTabActivationCause_MAX"
};
declare class JavascriptWorkspaceItem {
  clone(): JavascriptWorkspaceItem;
  static C(Other: UObject | any): JavascriptWorkspaceItem;
  AddGroup(DisplayName: string): JavascriptWorkspaceItem;
  static AddGroup(
    Parent: JavascriptWorkspaceItem,
    DisplayName: string
  ): JavascriptWorkspaceItem;
  static GetGroup(Name: string): JavascriptWorkspaceItem;
}
declare type EJavascriptTabRoleT =
  | "MajorTab"
  | "PanelTab"
  | "NomadTab"
  | "DocumentTab"
  | "EJavascriptTabRole_MAX";
declare var EJavascriptTabRole: {
  MajorTab: "MajorTab",
  PanelTab: "PanelTab",
  NomadTab: "NomadTab",
  DocumentTab: "DocumentTab",
  EJavascriptTabRole_MAX: "EJavascriptTabRole_MAX"
};
declare class JavascriptEditorTab mixins UObject {
  OnSpawnTab: UnrealEngineDelegate<(Context: UObject) => Widget>;
  OnCloseTab: UnrealEngineDelegate<(Widget: Widget) => void>;
  OnTabActivatedCallback: UnrealEngineDelegate<
    (TabId: string, Cause: EJavasriptTabActivationCauseT) => void
  >;
  Group: JavascriptWorkspaceItem;
  TabId: string;
  DisplayName: string;
  bIsNomad: boolean;
  Role: EJavascriptTabRoleT;
  static Load(ResourceName: string): JavascriptEditorTab;
  static Find(Outer: UObject, ResourceName: string): JavascriptEditorTab;
  static GetDefaultObject(): JavascriptEditorTab;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorTab;
  ForceCommit(): void;
  Discard(): void;
  Commit(): void;
  CloseTab(Widget: Widget): void;
  static C(Other: UObject | any): JavascriptEditorTab;
}
declare class JavascriptMenuExtension {
  ExtensionHook: string;
  HookPosition: EJavascriptExtensionHookT;
  clone(): JavascriptMenuExtension;
  static C(Other: UObject | any): JavascriptMenuExtension;
}
declare class JavascriptUIExtender mixins UObject {
  MenuExtensions: JavascriptMenuExtension[];
  ToolbarExtensions: JavascriptMenuExtension[];
  OnHook: UnrealEngineDelegate<(Hook: string) => void>;
  static Load(ResourceName: string): JavascriptUIExtender;
  static Find(Outer: UObject, ResourceName: string): JavascriptUIExtender;
  static GetDefaultObject(): JavascriptUIExtender;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptUIExtender;
  static GetTopCommandList(): JavascriptUICommandList;
  static EndSection(): void;
  static Bind(Commands: JavascriptUICommands): void;
  static BeginSection(Name: string, text: string): void;
  static AddToolBarButton(Commands: JavascriptUICommands, ID: string): void;
  static AddMenuSeparator(): void;
  static AddMenuEntry(Commands: JavascriptUICommands, ID: string): void;
  static C(Other: UObject | any): JavascriptUIExtender;
}
declare class JavascriptAssetEditorToolkit mixins UObject {
  ToolkitFName: string;
  Layout: string;
  BaseToolkitName: string;
  ToolkitName: string;
  WorldCentricTabColorScale: LinearColor;
  WorldCentricTabPrefix: string;
  Tabs: JavascriptEditorTab[];
  Commands: JavascriptUICommands;
  MenuExtender: JavascriptUIExtender;
  ToolbarExtender: JavascriptUIExtender;
  TestArray: number[];
  static Load(ResourceName: string): JavascriptAssetEditorToolkit;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptAssetEditorToolkit;
  static GetDefaultObject(): JavascriptAssetEditorToolkit;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptAssetEditorToolkit;
  Refresh(): void;
  Discard(): void;
  Commit(): void;
  static C(Other: UObject | any): JavascriptAssetEditorToolkit;
}
declare class JavascriptAssetTypeActions mixins UObject {
  ActionsName: string;
  Color: Color;
  SupportedClass: UnrealEngineClassT;
  Editor: JavascriptAssetEditorToolkit;
  Actions: JavascriptUIExtender;
  static Load(ResourceName: string): JavascriptAssetTypeActions;
  static Find(Outer: UObject, ResourceName: string): JavascriptAssetTypeActions;
  static GetDefaultObject(): JavascriptAssetTypeActions;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptAssetTypeActions;
  Refresh(): void;
  Discard(): void;
  Commit(): void;
  static C(Other: UObject | any): JavascriptAssetTypeActions;
}
declare class JavascriptCommandlet mixins Commandlet {
  CmdLineTokens: string[];
  CmdLineSwitches: string[];
  static Load(ResourceName: string): JavascriptCommandlet;
  static Find(Outer: UObject, ResourceName: string): JavascriptCommandlet;
  static GetDefaultObject(): JavascriptCommandlet;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptCommandlet;
  static C(Other: UObject | any): JavascriptCommandlet;
}
declare class JavascriptEditorEngineLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptEditorEngineLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptEditorEngineLibrary;
  static GetDefaultObject(): JavascriptEditorEngineLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorEngineLibrary;
  static SetMaterial(
    Engine: EditorEngine,
    InModel: Model,
    Material: MaterialInterface,
    Surfaces: number[]
  ): void;
  static SelectNone(
    Engine: EditorEngine,
    bNoteSelectionChange: boolean,
    bDeselectBSPSurfs: boolean,
    WarnAboutManyActors: boolean
  ): void;
  static SelectGroup(
    Engine: EditorEngine,
    InGroupActor: GroupActor,
    bForceSelection: boolean,
    bInSelected: boolean,
    bNotify: boolean
  ): void;
  static SelectComponent(
    Engine: EditorEngine,
    Component: ActorComponent,
    bInSelected: boolean,
    bNotify: boolean,
    bSelectEvenIfHidden: boolean
  ): void;
  static SelectActor(
    Engine: EditorEngine,
    Actor: Actor,
    bInSelected: boolean,
    bNotify: boolean,
    bSelectEvenIfHidden: boolean,
    bForceRefresh: boolean
  ): void;
  static RedrawAllViewports(
    Engine: EditorEngine,
    bInvalidateHitProxies: boolean
  ): void;
  static RebuildStaticNavigableGeometry(
    Engine: EditorEngine,
    Level: Level
  ): void;
  static RebuildLevel(Engine: EditorEngine, Level: Level): void;
  static GetSurfaces(
    Brush: Brush,
    Surfaces?: number[]
  ): {
    Surfaces: number[]
  };
  static GetSelectedSet(
    Engine: EditorEngine,
    Class: UnrealEngineClassT
  ): USelection;
  static GetSelectedObjects(Engine: EditorEngine): USelection;
  static GetSelectedComponents(Engine: EditorEngine): USelection;
  static GetPIEWorld(Engine: Engine): World;
  static GetLongPackagePath(InPackage: Package): string;
  static GetEditorWorld(Engine: Engine): World;
  static FindBrushBuilder(
    Engine: EditorEngine,
    BrushBuilderClass: UnrealEngineClassT
  ): BrushBuilder;
  static Exec(
    Engine: EditorEngine,
    InWorld: World,
    Command: string,
    Out?: string
  ): {
    Out: string,
    $: boolean
  };
  static DuplicateAsset(
    AssetName: string,
    PackagePath: string,
    OriginalObject: UObject
  ): UObject;
  static DeleteObjectsUnchecked(ObjectsToDelete: UObject[]): number;
  static CanSelectActor(
    Engine: EditorEngine,
    Actor: Actor,
    bInSelected: boolean,
    bSelectEvenIfHidden: boolean,
    bWarnIfLevelLocked: boolean
  ): boolean;
  static bspBrushCSG(
    Engine: EditorEngine,
    Actor: Brush,
    Model: Model,
    PolyFlags: number,
    BrushType: EBrushTypeT,
    CSGOper: ECsgOperT,
    bBuildBounds: boolean,
    bMergePolys: boolean,
    bReplaceNULLMaterialRefs: boolean,
    bShowProgressBar: boolean
  ): number;
  static C(Other: UObject | any): JavascriptEditorEngineLibrary;
}
declare class JavascriptAssetData {
  ObjectPath: string;
  PackageName: string;
  PackagePath: string;
  AssetName: string;
  AssetClass: string;
  ChunkIDs: number[];
  PackageFlags: number;
  clone(): JavascriptAssetData;
  static C(Other: UObject | any): JavascriptAssetData;
  GetAllTags(
    OutArray?: string[]
  ): {
    OutArray: string[]
  };
  GetAsset(): UObject;
  GetClass(): UnrealEngineClassT;
  GetPackage(): Package;
  GetTagValue(
    Name: string,
    OutValue?: string
  ): {
    OutValue: string,
    $: boolean
  };
  IsAssetLoaded(): boolean;
  static GetAllTags(
    AssetData: JavascriptAssetData,
    OutArray?: string[]
  ): {
    OutArray: string[]
  };
  static GetAsset(AssetData: JavascriptAssetData): UObject;
  static GetClass(AssetData: JavascriptAssetData): UnrealEngineClassT;
  static GetPackage(AssetData: JavascriptAssetData): Package;
  static GetTagValue(
    AssetData: JavascriptAssetData,
    Name: string,
    OutValue?: string
  ): {
    OutValue: string,
    $: boolean
  };
  static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
}
declare class JavascriptEditorGlobalDelegates mixins UObject {
  static Load(ResourceName: string): JavascriptEditorGlobalDelegates;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptEditorGlobalDelegates;
  static GetDefaultObject(): JavascriptEditorGlobalDelegates;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorGlobalDelegates;
  WorldChange(): void;
  UnbindAll(): void;
  Unbind(Key: string): void;
  SurfProps(): void;
  SingleStepPIE(bIsSimulating: boolean): void;
  SelectedProps(): void;
  ResumePIE(bIsSimulating: boolean): void;
  RefreshPrimitiveStatsBrowser(): void;
  RefreshLayerBrowser(): void;
  RefreshEditor(): void;
  RefreshAllBrowsers(): void;
  RedrawAllViewports(): void;
  PropertySelectionChange(): void;
  PreSaveWorld_Friendly(SaveFlags: number, World: World): void;
  PreBeginPIE(bIsSimulating: boolean): void;
  PostSaveWorld_Friendly(
    SaveFlags: number,
    World: World,
    bSuccess: boolean
  ): void;
  PostLandscapeLayerUpdated(): void;
  OnShutdownPostPackagesSaved(): void;
  OnPathRemoved(Path: string): void;
  OnPathAdded(Path: string): void;
  OnObjectReimported(UObject: UObject): void;
  OnNewAssetCreated(InFactory: Factory): void;
  OnNewActorsDropped(DroppedObjects: UObject[], OutNewActors: Actor[]): void;
  OnMapOpened(Filename: string, bAsTemplate: boolean): void;
  OnLightingBuildStarted(): void;
  OnLightingBuildKept(): void;
  OnInMemoryAssetDeleted(InObject: UObject): void;
  OnInMemoryAssetCreated(InObject: UObject): void;
  OnGridSnappingChanged(bGridEnabled: boolean, GridSize: number): void;
  OnFocusViewportOnActors(Actors: Actor[]): void;
  OnFinishPickingBlueprintClass(InClass: UnrealEngineClassT): void;
  OnFilesLoaded(): void;
  OnFileLoadProgressUpdated_Friendly(
    NumTotalAssets: number,
    NumAssetsProcessedByAssetRegistry: number,
    NumAssetsPendingDataLoad: number,
    bIsDiscoveringAssetFiles: boolean
  ): void;
  OnEditorCameraMoved(
    ViewLocation: Vector,
    ViewRotation: Rotator,
    ViewportType: ELevelViewportTypeT,
    ViewIndex: number
  ): void;
  OnDollyPerspectiveCamera(Drag: Vector, ViewIndex: number): void;
  OnConfigureNewAssetProperties(InFactory: Factory): void;
  OnClassPackageLoadedOrUnloaded(): void;
  OnBlueprintReinstanced(): void;
  OnBlueprintPreCompile(Blueprint: Blueprint): void;
  OnBlueprintCompiled(): void;
  OnAssetsPreDelete(Assets: UObject[]): void;
  OnAssetsDeleted(Classes: UnrealEngineClassT[]): void;
  OnAssetRenamed_Friendly(AssetData: JavascriptAssetData, Name: string): void;
  OnAssetRemoved_Friendly(AssetData: JavascriptAssetData): void;
  OnAssetReimport(InCreatedObject: UObject): void;
  OnAssetPreImport_Friendly(
    InFactory: Factory,
    InClass: UnrealEngineClassT,
    InParent: UObject,
    Name: string,
    Type: string
  ): void;
  OnAssetPostImport(InFactory: Factory, InCreatedObject: UObject): void;
  OnAssetAdded_Friendly(AssetData: JavascriptAssetData): void;
  OnApplyObjectToActor(ObjectToApply: UObject, Actor: Actor): void;
  OnAddLevelToWorld(Level: Level): void;
  OnActionAxisMappingsChanged(): void;
  NewCurrentLevel(): void;
  MapChange_Friendly(MapChangeFlags: number): void;
  LoadSelectedAssetsIfNeeded(): void;
  LayerChange(): void;
  FitTextureToSurface(World: World): void;
  EndPlayMapDelegate(): void;
  EndPIE(bIsSimulating: boolean): void;
  DisplayLoadErrors(): void;
  CleanseEditor(): void;
  ChangeEditorMode(NewMode: string): void;
  Bind(Key: string): void;
  BeginPIE(bIsSimulating: boolean): void;
  ActorPropertiesChange(): void;
  static C(Other: UObject | any): JavascriptEditorGlobalDelegates;
}
declare class JavascriptEditorInputProcessor mixins UObject {
  static Load(ResourceName: string): JavascriptEditorInputProcessor;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptEditorInputProcessor;
  static GetDefaultObject(): JavascriptEditorInputProcessor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorInputProcessor;
  UnRegister(): void;
  Register(): void;
  HandleMouseMoveEvent(InPointerEvent: UPointerEvent): boolean;
  HandleKeyUpEvent(InKeyEvent: KeyEvent): boolean;
  HandleKeyDownEvent(InKeyEvent: KeyEvent): boolean;
  HandleAnalogInputEvent(InKeyEvent: AnalogInputEvent): boolean;
  Activate(bEnable: boolean): void;
  static C(Other: UObject | any): JavascriptEditorInputProcessor;
}
declare class JavascriptLazyExtenderDelegates mixins UObject {
  GetExtender: UnrealEngineDelegate<
    (
      List: JavascriptUICommandList,
      EditingObjects: UObject[]
    ) => JavascriptExtender
  >;
  static Load(ResourceName: string): JavascriptLazyExtenderDelegates;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptLazyExtenderDelegates;
  static GetDefaultObject(): JavascriptLazyExtenderDelegates;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptLazyExtenderDelegates;
  static C(Other: UObject | any): JavascriptLazyExtenderDelegates;
}
declare type EJavascriptRHIFeatureLevelT =
  | "ES2"
  | "ES3_1"
  | "SM4"
  | "SM5"
  | "Num"
  | "EJavascriptRHIFeatureLevel_MAX";
declare var EJavascriptRHIFeatureLevel: {
  ES2: "ES2",
  ES3_1: "ES3_1",
  SM4: "SM4",
  SM5: "SM5",
  Num: "Num",
  EJavascriptRHIFeatureLevel_MAX: "EJavascriptRHIFeatureLevel_MAX"
};
declare class JavascriptPDI {
  clone(): JavascriptPDI;
  static C(Other: UObject | any): JavascriptPDI;
  DrawArc(
    Base: Vector,
    X: Vector,
    Y: Vector,
    MinAngle: number,
    MaxAngle: number,
    Radius: number,
    Sections: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  DrawCircle(
    Base: Vector,
    X: Vector,
    Y: Vector,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawConnectedArrow(
    ArrowToWorld: Transform,
    Color: LinearColor,
    ArrowHeight: number,
    ArrowWidth: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    NumSpokes: number
  ): void;
  DrawDashedLine(
    Start: Vector,
    End: Vector,
    Color: LinearColor,
    DashSize: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    DepthBias: number
  ): void;
  DrawDirectionalArrow(
    ArrowToWorld: Transform,
    InColor: LinearColor,
    Length: number,
    ArrowSize: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number
  ): void;
  DrawOrientedWireBox(
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Extent: Vector,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawPolygon(
    Verts: Vector[],
    InColor: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    RHIFeatureLevel: EJavascriptRHIFeatureLevelT
  ): void;
  DrawWireBox(
    Box: Box,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireBox2(
    Matrix: Transform,
    Box: Box,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireCapsule(
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireChoppedCone(
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    TopRadius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  DrawWireCone(
    Verts?: Vector[],
    Transform?: Transform,
    ConeRadius?: number,
    ConeAngle?: number,
    ConeSides?: number,
    Color?: LinearColor,
    DepthPriority?: ESceneDepthPriorityGroupT,
    Thickness?: number,
    DepthBias?: number,
    bScreenSpace?: boolean
  ): {
    Verts: Vector[]
  };
  DrawWireCylinder(
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireDiamond(
    Transform: Transform,
    Size: number,
    InColor: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  DrawWireSphere(
    Base: Vector,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireSphere2(
    Transform: Transform,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireSphereAutoSides(
    Base: Vector,
    Color: LinearColor,
    Radius: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireSphereAutoSides2(
    Transform: Transform,
    Color: LinearColor,
    Radius: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  DrawWireSphereCappedCone(
    Transform: Transform,
    ConeRadius: number,
    ConeAngle: number,
    ConeSides: number,
    ArcFrequency: number,
    CapSegments: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  DrawWireStar(
    Position: Vector,
    Size: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  SetHitProxy(Name: string): void;
  static DrawArc(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    MinAngle: number,
    MaxAngle: number,
    Radius: number,
    Sections: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawCircle(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawConnectedArrow(
    PDI: JavascriptPDI,
    ArrowToWorld: Transform,
    Color: LinearColor,
    ArrowHeight: number,
    ArrowWidth: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    NumSpokes: number
  ): void;
  static DrawDashedLine(
    PDI: JavascriptPDI,
    Start: Vector,
    End: Vector,
    Color: LinearColor,
    DashSize: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    DepthBias: number
  ): void;
  static DrawDirectionalArrow(
    PDI: JavascriptPDI,
    ArrowToWorld: Transform,
    InColor: LinearColor,
    Length: number,
    ArrowSize: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number
  ): void;
  static DrawOrientedWireBox(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Extent: Vector,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawPolygon(
    PDI: JavascriptPDI,
    Verts: Vector[],
    InColor: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    RHIFeatureLevel: EJavascriptRHIFeatureLevelT
  ): void;
  static DrawWireBox(
    PDI: JavascriptPDI,
    Box: Box,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireBox2(
    PDI: JavascriptPDI,
    Matrix: Transform,
    Box: Box,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireCapsule(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireChoppedCone(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    TopRadius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireCone(
    PDI: JavascriptPDI,
    Verts?: Vector[],
    Transform?: Transform,
    ConeRadius?: number,
    ConeAngle?: number,
    ConeSides?: number,
    Color?: LinearColor,
    DepthPriority?: ESceneDepthPriorityGroupT,
    Thickness?: number,
    DepthBias?: number,
    bScreenSpace?: boolean
  ): {
    Verts: Vector[]
  };
  static DrawWireCylinder(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireDiamond(
    PDI: JavascriptPDI,
    Transform: Transform,
    Size: number,
    InColor: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireSphere(
    PDI: JavascriptPDI,
    Base: Vector,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphere2(
    PDI: JavascriptPDI,
    Transform: Transform,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphereAutoSides(
    PDI: JavascriptPDI,
    Base: Vector,
    Color: LinearColor,
    Radius: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphereAutoSides2(
    PDI: JavascriptPDI,
    Transform: Transform,
    Color: LinearColor,
    Radius: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphereCappedCone(
    PDI: JavascriptPDI,
    Transform: Transform,
    ConeRadius: number,
    ConeAngle: number,
    ConeSides: number,
    ArcFrequency: number,
    CapSegments: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireStar(
    PDI: JavascriptPDI,
    Position: Vector,
    Size: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static SetHitProxy(PDI: JavascriptPDI, Name: string): void;
}
declare class JavascriptExtensibilityManager {
  clone(): JavascriptExtensibilityManager;
  static C(Other: UObject | any): JavascriptExtensibilityManager;
  AddExtender(Extender: JavascriptExtender): void;
  AddLazyExtender(Delegates: JavascriptLazyExtenderDelegates): void;
  RemoveAllLazyExtender(): void;
  RemoveExtender(Extender: JavascriptExtender): void;
  static AddExtender(
    Manager: JavascriptExtensibilityManager,
    Extender: JavascriptExtender
  ): void;
  static AddLazyExtender(
    Manager: JavascriptExtensibilityManager,
    Delegates: JavascriptLazyExtenderDelegates
  ): void;
  static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
  static RemoveExtender(
    Manager: JavascriptExtensibilityManager,
    Extender: JavascriptExtender
  ): void;
  static GetMenuExtensibilityManager(
    What: string
  ): JavascriptExtensibilityManager;
  static GetToolBarExtensibilityManager(
    What: string
  ): JavascriptExtensibilityManager;
}
declare class JavascriptViewportClick {
  clone(): JavascriptViewportClick;
  static C(Other: UObject | any): JavascriptViewportClick;
  GetClickPos(): IntPoint;
  GetDirection(): Vector;
  GetEvent(): EInputEventT;
  GetKey(): Key;
  GetOrigin(): Vector;
  IsAltDown(): boolean;
  IsControlDown(): boolean;
  IsShiftDown(): boolean;
  static GetClickPos(Click: JavascriptViewportClick): IntPoint;
  static GetDirection(Click: JavascriptViewportClick): Vector;
  static GetEvent(Click: JavascriptViewportClick): EInputEventT;
  static GetKey(Click: JavascriptViewportClick): Key;
  static GetOrigin(Click: JavascriptViewportClick): Vector;
  static IsAltDown(Click: JavascriptViewportClick): boolean;
  static IsControlDown(Click: JavascriptViewportClick): boolean;
  static IsShiftDown(Click: JavascriptViewportClick): boolean;
}
declare class JavascriptHitProxy {
  clone(): JavascriptHitProxy;
  static C(Other: UObject | any): JavascriptHitProxy;
  GetActor(): Actor;
  GetName(): string;
  static GetActor(Proxy: JavascriptHitProxy): Actor;
  static GetName(Proxy: JavascriptHitProxy): string;
}
declare type EJavascriptMessageSeverityT =
  | "CriticalError"
  | "Error"
  | "PerformanceWarning"
  | "Warning"
  | "Info"
  | "EJavascriptMessageSeverity_MAX";
declare var EJavascriptMessageSeverity: {
  CriticalError: "CriticalError",
  Error: "Error",
  PerformanceWarning: "PerformanceWarning",
  Warning: "Warning",
  Info: "Info",
  EJavascriptMessageSeverity_MAX: "EJavascriptMessageSeverity_MAX"
};
declare class JavascriptEditorLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptEditorLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptEditorLibrary;
  static GetDefaultObject(): JavascriptEditorLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorLibrary;
  static UpdateModelComponents(Level: Level): void;
  static ToggleSelect(USelection: USelection, InObject: UObject): void;
  static SetIsTemporarilyHiddenInEditor(Actor: Actor, bIsHidden: boolean): void;
  static SetHitProxy(PDI: JavascriptPDI, Name: string): void;
  static SetHeightmapDataFromMemory(
    LandscapeInfo: LandscapeInfo,
    MinX: number,
    MinY: number,
    MaxX: number,
    MaxY: number
  ): void;
  static SetFolderPath_Recursively(Actor: Actor, NewFolderPath: string): void;
  static SetFolderPath(Actor: Actor, NewFolderPath: string): void;
  static SetAlphamapDataFromMemory(
    LandscapeInfo: LandscapeInfo,
    LayerInfo: LandscapeLayerInfoObject,
    MinX: number,
    MinY: number,
    MaxX: number,
    MaxY: number,
    PaintingRestriction: ELandscapeLayerPaintingRestrictionT
  ): void;
  static SetActorLabel(
    Actor: Actor,
    NewActorLabel: string,
    bMarkDirty: boolean
  ): void;
  static Select(USelection: USelection, InObject: UObject): void;
  static SavePackage(Package: Package, Filename: string): boolean;
  static RequestEndPlayMapInPIE(): void;
  static ReplaceAnimNotifyClass(
    Sequence: AnimSequenceBase,
    NotifyName: string,
    NewNotifyName: string,
    NewNotifyClass: UObject
  ): number;
  static RemoveLevelInstance(World: World): void;
  static RemoveExtender(
    Manager: JavascriptExtensibilityManager,
    Extender: JavascriptExtender
  ): void;
  static RemoveComponentFromBlueprint(
    Blueprint: Blueprint,
    RemoveComponent: ActorComponent,
    bPromoteChildren: boolean
  ): void;
  static RemoveAllLazyExtender(Manager: JavascriptExtensibilityManager): void;
  static PostEditChange(InObject: UObject): void;
  static OpenPopupWindow(
    Widget: Widget,
    PopupDesiredSize: Vector2D,
    HeadingText: string
  ): void;
  static OpenFileDialog(
    WindowHandle: JavascriptWindow,
    DialogTitle: string,
    DefaultPath: string,
    DefaultFile: string,
    FileTypes: string,
    Flags: number,
    OutFilenames?: string[]
  ): {
    OutFilenames: string[],
    $: boolean
  };
  static OpenEditorForAssetByPath(
    AssetPathName: string,
    ObjectName: string
  ): void;
  static OpenEditorForAsset(Asset: UObject): boolean;
  static ModifyObject(UObject: UObject, bAlwaysMarkDirty: boolean): void;
  static MarkPackageDirty(InObject: UObject): boolean;
  static LoadImageFromDiskAsync(
    ImagePath: string,
    Callback: AsyncTaskDownloadImage
  ): boolean;
  static LoadFileToString(
    Path: string,
    Data?: string
  ): {
    Data: string,
    $: boolean
  };
  static LoadFileToIntArray(
    Path: string,
    FileData?: number[]
  ): {
    FileData: number[],
    $: boolean
  };
  static IsShiftDown(Click: JavascriptViewportClick): boolean;
  static IsControlDown(Click: JavascriptViewportClick): boolean;
  static IsAssetLoaded(AssetData: JavascriptAssetData): boolean;
  static IsAltDown(Click: JavascriptViewportClick): boolean;
  static IsActorLabelEditable(Actor: Actor): boolean;
  static IsActive(Transactor: Transactor): boolean;
  static InvalidateModelGeometry(World: World, InLevel: Level): void;
  static GetTransaction(
    Transactor: Transactor,
    QueueIndex: number
  ): JavascriptTransaction;
  static GetToolBarExtensibilityManager(
    What: string
  ): JavascriptExtensibilityManager;
  static GetTitle(Transaction: JavascriptTransaction): string;
  static GetTagValue(
    AssetData: JavascriptAssetData,
    Name: string,
    OutValue?: string
  ): {
    OutValue: string,
    $: boolean
  };
  static GetSelectedObjects(
    USelection: USelection,
    Out?: UObject[]
  ): {
    Out: UObject[],
    $: number
  };
  static GetRootWindow(): JavascriptSlateWidget;
  static GetQueueLength(Transactor: Transactor): number;
  static GetPrimaryObject(Transaction: JavascriptTransaction): UObject;
  static GetParentClassOfBlueprint(
    Blueprint: Blueprint
  ): UnrealEngineClassT;
  static GetPackage(AssetData: JavascriptAssetData): Package;
  static GetOrigin(Click: JavascriptViewportClick): Vector;
  static GetName(Proxy: JavascriptHitProxy): string;
  static GetMenuExtensibilityManager(
    What: string
  ): JavascriptExtensibilityManager;
  static GetLevelEditorActions(): JavascriptUICommandList;
  static GetLayerInfoByName(
    LandscapeInfo: LandscapeInfo,
    LayerName: string,
    Owner: LandscapeProxy
  ): LandscapeLayerInfoObject;
  static GetLandscapeInfo(
    Landscape: Landscape,
    bSpawnNewActor: boolean
  ): LandscapeInfo;
  static GetLandscapeExtent(
    LandscapeInfo: LandscapeInfo,
    MinX?: number,
    MinY?: number,
    MaxX?: number,
    MaxY?: number
  ): {
    MinX: number,
    MinY: number,
    MaxX: number,
    MaxY: number,
    $: boolean
  };
  static GetKeyNameByKeyEvent(Event: KeyEvent): string;
  static GetKey(Click: JavascriptViewportClick): Key;
  static GetHeightmapDataToMemory(
    LandscapeInfo: LandscapeInfo,
    MinX: number,
    MinY: number,
    MaxX: number,
    MaxY: number
  ): void;
  static GetGroup(Name: string): JavascriptWorkspaceItem;
  static GetFolderPath(Actor: Actor): string;
  static GetEvent(Click: JavascriptViewportClick): EInputEventT;
  static GetEngine(): EditorEngine;
  static GetDirection(Click: JavascriptViewportClick): Vector;
  static GetDefaultBrush(World: World): Brush;
  static GetDataTableAsJSON(
    InDataTable: DataTable,
    InDTExportFlags: number
  ): string;
  static GetContext(Transaction: JavascriptTransaction): string;
  static GetClickPos(Click: JavascriptViewportClick): IntPoint;
  static GetClass(AssetData: JavascriptAssetData): UnrealEngineClassT;
  static GetAssetsByType(
    Types: string[],
    bRecursiveClasses: boolean
  ): AssetData[];
  static GetAsset(AssetData: JavascriptAssetData): UObject;
  static GetAlphamapDataToMemory(
    LandscapeInfo: LandscapeInfo,
    LayerInfo: LandscapeLayerInfoObject,
    MinX: number,
    MinY: number,
    MaxX: number,
    MaxY: number
  ): void;
  static GetAllTags(
    AssetData: JavascriptAssetData,
    OutArray?: string[]
  ): {
    OutArray: string[]
  };
  static GetActorLabel(Actor: Actor): string;
  static GetActor(Proxy: JavascriptHitProxy): Actor;
  static FindWorldInPackage(Package: Package): World;
  static ExportNavigation(InWorld: World, Path: string): string;
  static EditorDestroyActor(
    World: World,
    Actor: Actor,
    bShouldModifyLevel: boolean
  ): boolean;
  static EditorAddModalWindow(Widget: JavascriptSlateWidget): void;
  static DrawWireStar(
    PDI: JavascriptPDI,
    Position: Vector,
    Size: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireSphereCappedCone(
    PDI: JavascriptPDI,
    Transform: Transform,
    ConeRadius: number,
    ConeAngle: number,
    ConeSides: number,
    ArcFrequency: number,
    CapSegments: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireSphereAutoSides2(
    PDI: JavascriptPDI,
    Transform: Transform,
    Color: LinearColor,
    Radius: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphereAutoSides(
    PDI: JavascriptPDI,
    Base: Vector,
    Color: LinearColor,
    Radius: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphere2(
    PDI: JavascriptPDI,
    Transform: Transform,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireSphere(
    PDI: JavascriptPDI,
    Base: Vector,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireDiamond(
    PDI: JavascriptPDI,
    Transform: Transform,
    Size: number,
    InColor: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireCylinder(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireCone(
    PDI: JavascriptPDI,
    Verts?: Vector[],
    Transform?: Transform,
    ConeRadius?: number,
    ConeAngle?: number,
    ConeSides?: number,
    Color?: LinearColor,
    DepthPriority?: ESceneDepthPriorityGroupT,
    Thickness?: number,
    DepthBias?: number,
    bScreenSpace?: boolean
  ): {
    Verts: Vector[]
  };
  static DrawWireChoppedCone(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    TopRadius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DrawWireCapsule(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Color: LinearColor,
    Radius: number,
    HalfHeight: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireBox2(
    PDI: JavascriptPDI,
    Matrix: Transform,
    Box: Box,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawWireBox(
    PDI: JavascriptPDI,
    Box: Box,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawPolygon(
    PDI: JavascriptPDI,
    Verts: Vector[],
    InColor: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    RHIFeatureLevel: EJavascriptRHIFeatureLevelT
  ): void;
  static DrawOrientedWireBox(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Z: Vector,
    Extent: Vector,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawDirectionalArrow(
    PDI: JavascriptPDI,
    ArrowToWorld: Transform,
    InColor: LinearColor,
    Length: number,
    ArrowSize: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number
  ): void;
  static DrawDashedLine(
    PDI: JavascriptPDI,
    Start: Vector,
    End: Vector,
    Color: LinearColor,
    DashSize: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    DepthBias: number
  ): void;
  static DrawConnectedArrow(
    PDI: JavascriptPDI,
    ArrowToWorld: Transform,
    Color: LinearColor,
    ArrowHeight: number,
    ArrowWidth: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    NumSpokes: number
  ): void;
  static DrawCircle(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    Color: LinearColor,
    Radius: number,
    NumSides: number,
    DepthPriority: ESceneDepthPriorityGroupT,
    Thickness: number,
    DepthBias: number,
    bScreenSpace: boolean
  ): void;
  static DrawArc(
    PDI: JavascriptPDI,
    Base: Vector,
    X: Vector,
    Y: Vector,
    MinAngle: number,
    MaxAngle: number,
    Radius: number,
    Sections: number,
    Color: LinearColor,
    DepthPriority: ESceneDepthPriorityGroupT
  ): void;
  static DeselectAll(
    USelection: USelection,
    InClass: UnrealEngineClassT
  ): void;
  static Deselect(USelection: USelection, InObject: UObject): void;
  static DeletePackage(Package: Package): boolean;
  static csgAdd(
    DefaultBrush: Brush,
    PolyFlags: number,
    BrushType: EBrushTypeT
  ): Brush;
  static CreatePropertyEditorToolkit(ObjectsForPropertiesMenu: UObject[]): void;
  static CreateLogListingWidget(InLogName: string): JavascriptSlateWidget;
  static CreateLogListing(InLogName: string, InLabel: string): void;
  static CreateBrushForVolumeActor(
    NewActor: Volume,
    BrushBuilder: BrushBuilder
  ): void;
  static CompileBlueprint(Blueprint: Blueprint): void;
  static ClearActorLabel(Actor: Actor): void;
  static Build(Builder: BrushBuilder, InWorld: World, InBrush: Brush): boolean;
  static BroadcastHotReload(): void;
  static BroadcastAssetCreated(NewAsset: UObject): void;
  static AddWhitelistedObject(InObject: UObject): void;
  static AddLogListingMessage(
    InLogName: string,
    InSeverity: EJavascriptMessageSeverityT,
    LogText: string
  ): void;
  static AddLazyExtender(
    Manager: JavascriptExtensibilityManager,
    Delegates: JavascriptLazyExtenderDelegates
  ): void;
  static AddGroup(
    Parent: JavascriptWorkspaceItem,
    DisplayName: string
  ): JavascriptWorkspaceItem;
  static AddExtender(
    Manager: JavascriptExtensibilityManager,
    Extender: JavascriptExtender
  ): void;
  static AddComponentsToBlueprint(
    Blueprint: Blueprint,
    Components: ActorComponent[],
    bHarvesting: boolean,
    OptionalNewRootComponent: ActorComponent,
    bKeepMobility: boolean
  ): void;
  static C(Other: UObject | any): JavascriptEditorLibrary;
}
declare class JavascriptEditorPopupWindow mixins UObject {
  Widget: Widget;
  static Load(ResourceName: string): JavascriptEditorPopupWindow;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptEditorPopupWindow;
  static GetDefaultObject(): JavascriptEditorPopupWindow;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorPopupWindow;
  Open(Heading: string, DesiredSize: Vector2D): boolean;
  OnDismissed(): void;
  static C(Other: UObject | any): JavascriptEditorPopupWindow;
}
declare class JavascriptEditorTabManager mixins Widget {
  Layout: string;
  Tabs: JavascriptEditorTab[];
  static Load(ResourceName: string): JavascriptEditorTabManager;
  static Find(Outer: UObject, ResourceName: string): JavascriptEditorTabManager;
  static GetDefaultObject(): JavascriptEditorTabManager;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorTabManager;
  static C(Other: UObject | any): JavascriptEditorTabManager;
}
declare class JavascriptEditorTick mixins UObject {
  OnTick: UnrealEngineDelegate<(DeltaSeconds: number) => void>;
  static Load(ResourceName: string): JavascriptEditorTick;
  static Find(Outer: UObject, ResourceName: string): JavascriptEditorTick;
  static GetDefaultObject(): JavascriptEditorTick;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorTick;
  GetEngine(): EditorEngine;
  ForceTick(DeltaTime: number): void;
  static C(Other: UObject | any): JavascriptEditorTick;
}
declare class JavascriptEditorToolbar mixins Widget {
  OnHook: UnrealEngineDelegate<() => JavascriptMenuBuilder>;
  static Load(ResourceName: string): JavascriptEditorToolbar;
  static Find(Outer: UObject, ResourceName: string): JavascriptEditorToolbar;
  static GetDefaultObject(): JavascriptEditorToolbar;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorToolbar;
  static C(Other: UObject | any): JavascriptEditorToolbar;
}
declare class JavascriptInputEventState {
  clone(): JavascriptInputEventState;
  static C(Other: UObject | any): JavascriptInputEventState;
  GetInputEvent(): EInputEventT;
  GetKey(): Key;
  IsAltButtonEvent(): boolean;
  IsAltButtonPressed(): boolean;
  IsAnyMouseButtonDown(): boolean;
  IsButtonPressed(InKey: Key): boolean;
  IsCtrlButtonEvent(): boolean;
  IsCtrlButtonPressed(): boolean;
  IsLeftMouseButtonPressed(): boolean;
  IsMiddleMouseButtonPressed(): boolean;
  IsMouseButtonEvent(): boolean;
  IsRightMouseButtonPressed(): boolean;
  IsShiftButtonEvent(): boolean;
  IsShiftButtonPressed(): boolean;
  IsSpaceBarPressed(): boolean;
  static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEventT;
  static GetKey(InputEvent: JavascriptInputEventState): Key;
  static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
  static IsButtonPressed(
    InputEvent: JavascriptInputEventState,
    InKey: Key
  ): boolean;
  static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsLeftMouseButtonPressed(
    InputEvent: JavascriptInputEventState
  ): boolean;
  static IsMiddleMouseButtonPressed(
    InputEvent: JavascriptInputEventState
  ): boolean;
  static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsRightMouseButtonPressed(
    InputEvent: JavascriptInputEventState
  ): boolean;
  static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
}
declare type EJavascriptWidgetModeT =
  | "WM_Translate"
  | "WM_TranslateRotateZ"
  | "WM_2D"
  | "WM_Rotate"
  | "WM_Scale"
  | "WM_Max"
  | "WM_None";
declare var EJavascriptWidgetMode: {
  WM_Translate: "WM_Translate",
  WM_TranslateRotateZ: "WM_TranslateRotateZ",
  WM_2D: "WM_2D",
  WM_Rotate: "WM_Rotate",
  WM_Scale: "WM_Scale",
  WM_Max: "WM_Max",
  WM_None: "WM_None"
};
declare class JavascriptEditorViewport mixins PanelWidget {
  OnClick: UnrealEngineDelegate<
    (
      ViewportClick: JavascriptViewportClick,
      HitProxy: JavascriptHitProxy,
      Instance: JavascriptEditorViewport
    ) => void
  >;
  OnTrackingStarted: UnrealEngineDelegate<
    (
      InputState: JavascriptInputEventState,
      bIsDraggingWidget: boolean,
      bNudge: boolean,
      Instance: JavascriptEditorViewport
    ) => void
  >;
  OnTrackingStopped: UnrealEngineDelegate<
    (Instance: JavascriptEditorViewport) => void
  >;
  OnInputWidgetDelta: UnrealEngineDelegate<
    (
      Drag: Vector,
      Rot: Rotator,
      Scale: Vector,
      Instance: JavascriptEditorViewport
    ) => boolean
  >;
  OnInputKey: UnrealEngineDelegate<
    (
      ControllerId: number,
      Key: Key,
      Event: EInputEventT,
      Instance: JavascriptEditorViewport
    ) => boolean
  >;
  OnInputAxis: UnrealEngineDelegate<
    (
      ControllerId: number,
      Key: Key,
      Delta: number,
      DeltaTime: number,
      Instance: JavascriptEditorViewport
    ) => boolean
  >;
  OnMouseEnter: UnrealEngineDelegate<
    (X: number, Y: number, Instance: JavascriptEditorViewport) => boolean
  >;
  OnMouseMove: UnrealEngineDelegate<
    (X: number, Y: number, Instance: JavascriptEditorViewport) => boolean
  >;
  OnMouseLeave: UnrealEngineDelegate<
    (Instance: JavascriptEditorViewport) => boolean
  >;
  OnDraw: UnrealEngineDelegate<
    (PDI: JavascriptPDI, Instance: JavascriptEditorViewport) => void
  >;
  OnDrawCanvas: UnrealEngineDelegate<
    (Canvas: Canvas, Instance: JavascriptEditorViewport) => void
  >;
  OnGetWidgetLocation: UnrealEngineDelegate<
    (Instance: JavascriptEditorViewport) => Vector
  >;
  OnGetWidgetRotation: UnrealEngineDelegate<
    (Instance: JavascriptEditorViewport) => Rotator
  >;
  OnGetWidgetMode: UnrealEngineDelegate<
    (Instance: JavascriptEditorViewport) => EJavascriptWidgetModeT
  >;
  static Load(ResourceName: string): JavascriptEditorViewport;
  static Find(Outer: UObject, ResourceName: string): JavascriptEditorViewport;
  static GetDefaultObject(): JavascriptEditorViewport;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEditorViewport;
  SetWidgetMode(WidgetMode: EJavascriptWidgetModeT): void;
  SetViewRotation(ViewRotation: Rotator): void;
  SetViewportType(InViewportType: ELevelViewportTypeT): void;
  SetViewMode(InViewModeIndex: EViewModeIndexT): void;
  SetViewLocation(ViewLocation: Vector): void;
  SetViewFOV(InViewFOV: number): void;
  SetSkyBrightness(SkyBrightness: number): void;
  SetSimulatePhysics(bShouldSimulatePhysics: boolean): void;
  SetRealtime(bInRealtime: boolean, bStoreCurrentValue: boolean): void;
  SetProfileIndex(InProfileIndex: number): void;
  SetLightDirection(InLightDir: Rotator): void;
  SetLightColor(LightColor: Color): void;
  SetLightBrightness(LightBrightness: number): void;
  SetFloorOffset(InFloorOffset: number): void;
  SetEngineShowFlags(In: string): boolean;
  SetCameraSpeedSetting(SpeedSetting: number): void;
  SetBackgroundColor(BackgroundColor: LinearColor): void;
  RestoreRealtime(bAllowDisable: boolean): void;
  Redraw(): void;
  ProjectWorldToScreen(
    WorldPosition: Vector,
    OutScreenPosition?: Vector2D
  ): {
    OutScreenPosition: Vector2D
  };
  OverridePostProcessSettings(
    PostProcessSettings: PostProcessSettings,
    Weight: number
  ): void;
  GetWidgetMode(): EJavascriptWidgetModeT;
  GetViewRotation(): Rotator;
  GetViewportWorld(): World;
  GetViewLocation(): Vector;
  GetViewFOV(): number;
  GetSkyComponent(): StaticMeshComponent;
  GetFloorMeshComponent(): StaticMeshComponent;
  GetEngineShowFlags(): string;
  GetDefaultSphereReflectionComponent(): SphereReflectionCaptureComponent;
  GetDefaultSkySphereComponent(): StaticMeshComponent;
  GetDefaultSkyLightComponent(): SkyLightComponent;
  GetDefaultPostProcessComponent(): PostProcessComponent;
  GetDefaultInstancedSkyMaterial(): MaterialInstanceConstant;
  GetDefaultDirectionalLightComponent(): DirectionalLightComponent;
  GetDefaultAssetViewerSettings(): AssetViewerSettings;
  GetCurrentProfileIndex(): number;
  GetCameraSpeedSetting(): number;
  DeprojectScreenToWorld(
    ScreenPosition: Vector2D,
    OutRayOrigin?: Vector,
    OutRayDirection?: Vector
  ): {
    OutRayOrigin: Vector,
    OutRayDirection: Vector
  };
  static C(Other: UObject | any): JavascriptEditorViewport;
}
declare class JavascriptEdViewport {
  clone(): JavascriptEdViewport;
  static C(Other: UObject | any): JavascriptEdViewport;
  GetHitProxy(): JavascriptHitProxy;
  static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
}
declare class JavascriptEditorModeTools {
  clone(): JavascriptEditorModeTools;
  static C(Other: UObject | any): JavascriptEditorModeTools;
  ActivateDefaultMode(): {
    Tools: JavascriptEditorModeTools
  };
  ActivateMode(
    InID?: string,
    bToggle?: boolean
  ): {
    Tools: JavascriptEditorModeTools
  };
  DeactivateAllModes(): {
    Tools: JavascriptEditorModeTools
  };
  DeactivateMode(
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  DestroyMode(
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  EndTracking(Viewport: JavascriptEdViewport): boolean;
  EnsureNotInMode(
    ModeId?: string,
    ErrorMsg?: string,
    bNotifyUser?: boolean
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  IsDefaultModeActive(): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  IsModeActive(
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  IsTracking(): boolean;
  SetDefaultMode(
    DefaultID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  StartTracking(Viewport: JavascriptEdViewport): boolean;
  static ActivateDefaultMode(
    Tools?: JavascriptEditorModeTools
  ): {
    Tools: JavascriptEditorModeTools
  };
  static ActivateMode(
    Tools?: JavascriptEditorModeTools,
    InID?: string,
    bToggle?: boolean
  ): {
    Tools: JavascriptEditorModeTools
  };
  static DeactivateAllModes(
    Tools?: JavascriptEditorModeTools
  ): {
    Tools: JavascriptEditorModeTools
  };
  static DeactivateMode(
    Tools?: JavascriptEditorModeTools,
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  static DestroyMode(
    Tools?: JavascriptEditorModeTools,
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  static EndTracking(
    Tools: JavascriptEditorModeTools,
    Viewport: JavascriptEdViewport
  ): boolean;
  static EnsureNotInMode(
    Tools?: JavascriptEditorModeTools,
    ModeId?: string,
    ErrorMsg?: string,
    bNotifyUser?: boolean
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  static IsDefaultModeActive(
    Tools?: JavascriptEditorModeTools
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  static IsModeActive(
    Tools?: JavascriptEditorModeTools,
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  static IsTracking(Tools: JavascriptEditorModeTools): boolean;
  static SetDefaultMode(
    Tools?: JavascriptEditorModeTools,
    DefaultID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  static StartTracking(
    Tools: JavascriptEditorModeTools,
    Viewport: JavascriptEdViewport
  ): boolean;
}
declare class JavascriptEditorMode {
  clone(): JavascriptEditorMode;
  static C(Other: UObject | any): JavascriptEditorMode;
  GetCurrentWidgetAxis(): number;
  GetModeManager(): JavascriptEditorModeTools;
  SelectNone(): void;
  SetCurrentWidgetAxis(InAxis: number): void;
  static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
  static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
  static SelectNone(Mode: JavascriptEditorMode): void;
  static SetCurrentWidgetAxis(Mode: JavascriptEditorMode, InAxis: number): void;
}
declare type EJavascriptEditActionT =
  | "Skip"
  | "Process"
  | "Halt"
  | "EJavascriptEditAction_MAX";
declare var EJavascriptEditAction: {
  Skip: "Skip",
  Process: "Process",
  Halt: "Halt",
  EJavascriptEditAction_MAX: "EJavascriptEditAction_MAX"
};
declare class JavascriptEdMode mixins UObject {
  OnGetWidgetLocation: UnrealEngineDelegate<
    (Instance: JavascriptEditorMode) => Vector
  >;
  OnSelect: UnrealEngineDelegate<
    (
      Actor: Actor,
      bSelected: boolean,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnDraw: UnrealEngineDelegate<
    (PDI: JavascriptPDI, Instance: JavascriptEditorMode) => void
  >;
  OnDrawHUD: UnrealEngineDelegate<
    (Canvas: Canvas, Instance: JavascriptEditorMode) => void
  >;
  IsSelectionAllowed: UnrealEngineDelegate<
    (
      Actor: Actor,
      bSelected: boolean,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnClick: UnrealEngineDelegate<
    (
      ViewportClick: JavascriptViewportClick,
      HitProxy: JavascriptHitProxy,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnQuery: UnrealEngineDelegate<
    (Request: string, Instance: JavascriptEditorMode) => boolean
  >;
  OnStartTracking: UnrealEngineDelegate<
    (Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean
  >;
  OnEndTracking: UnrealEngineDelegate<
    (Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean
  >;
  OnInputAxis: UnrealEngineDelegate<
    (
      Viewport: JavascriptEdViewport,
      ControllerId: number,
      Key: Key,
      Delta: number,
      DeltaTime: number,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnInputKey: UnrealEngineDelegate<
    (
      Viewport: JavascriptEdViewport,
      Key: Key,
      Event: EInputEventT,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnInputDelta: UnrealEngineDelegate<
    (
      Viewport: JavascriptEdViewport,
      Drag: Vector,
      Rot: Rotator,
      Scale: Vector,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnCapturedMouseMove: UnrealEngineDelegate<
    (
      Viewport: JavascriptEdViewport,
      X: number,
      Y: number,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnMouseEnter: UnrealEngineDelegate<
    (
      Viewport: JavascriptEdViewport,
      X: number,
      Y: number,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnMouseLeave: UnrealEngineDelegate<
    (Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean
  >;
  OnMouseMove: UnrealEngineDelegate<
    (
      Viewport: JavascriptEdViewport,
      X: number,
      Y: number,
      Instance: JavascriptEditorMode
    ) => boolean
  >;
  OnLostFocus: UnrealEngineDelegate<
    (Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean
  >;
  OnReceivedFocus: UnrealEngineDelegate<
    (Viewport: JavascriptEdViewport, Instance: JavascriptEditorMode) => boolean
  >;
  OnSelectionChanged: UnrealEngineDelegate<
    (Tools: JavascriptEditorModeTools, Item: UObject) => void
  >;
  OnGetContent: UnrealEngineDelegate<() => Widget>;
  OnProcess: UnrealEngineDelegate<
    (Request: string, Instance: JavascriptEditorMode) => boolean
  >;
  OnGetAction: UnrealEngineDelegate<
    (Request: string, Instance: JavascriptEditorMode) => EJavascriptEditActionT
  >;
  OnActorMoved: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
  OnActorsDuplicated: UnrealEngineDelegate<
    (
      PreDuplicateSelection: Actor[],
      PostDuplicateSelection: Actor[],
      bOffsetLocations: boolean,
      Instance: JavascriptEditorMode
    ) => void
  >;
  OnActorSelectionChanged: UnrealEngineDelegate<
    (Instance: JavascriptEditorMode) => void
  >;
  OnActorPropChanged: UnrealEngineDelegate<
    (Instance: JavascriptEditorMode) => void
  >;
  OnMapChanged: UnrealEngineDelegate<(Instance: JavascriptEditorMode) => void>;
  ModeId: string;
  SlateIcon: JavascriptSlateIcon;
  ModeName: string;
  bVisible: boolean;
  PriorityOrder: number;
  static Load(ResourceName: string): JavascriptEdMode;
  static Find(Outer: UObject, ResourceName: string): JavascriptEdMode;
  static GetDefaultObject(): JavascriptEdMode;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEdMode;
  Unregister(): void;
  Register(): void;
  static C(Other: UObject | any): JavascriptEdMode;
}
declare class JavascriptEdModeLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptEdModeLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptEdModeLibrary;
  static GetDefaultObject(): JavascriptEdModeLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptEdModeLibrary;
  static StartTracking(
    Tools: JavascriptEditorModeTools,
    Viewport: JavascriptEdViewport
  ): boolean;
  static SetDefaultMode(
    Tools?: JavascriptEditorModeTools,
    DefaultID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  static SetCurrentWidgetAxis(Mode: JavascriptEditorMode, InAxis: number): void;
  static SelectNone(Mode: JavascriptEditorMode): void;
  static IsTracking(Tools: JavascriptEditorModeTools): boolean;
  static IsModeActive(
    Tools?: JavascriptEditorModeTools,
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  static IsDefaultModeActive(
    Tools?: JavascriptEditorModeTools
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  static GetModeManager(Mode: JavascriptEditorMode): JavascriptEditorModeTools;
  static GetHitProxy(Viewport: JavascriptEdViewport): JavascriptHitProxy;
  static GetCurrentWidgetAxis(Mode: JavascriptEditorMode): number;
  static EnsureNotInMode(
    Tools?: JavascriptEditorModeTools,
    ModeId?: string,
    ErrorMsg?: string,
    bNotifyUser?: boolean
  ): {
    Tools: JavascriptEditorModeTools,
    $: boolean
  };
  static EndTracking(
    Tools: JavascriptEditorModeTools,
    Viewport: JavascriptEdViewport
  ): boolean;
  static DestroyMode(
    Tools?: JavascriptEditorModeTools,
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  static DeactivateMode(
    Tools?: JavascriptEditorModeTools,
    InID?: string
  ): {
    Tools: JavascriptEditorModeTools
  };
  static DeactivateAllModes(
    Tools?: JavascriptEditorModeTools
  ): {
    Tools: JavascriptEditorModeTools
  };
  static ActivateMode(
    Tools?: JavascriptEditorModeTools,
    InID?: string,
    bToggle?: boolean
  ): {
    Tools: JavascriptEditorModeTools
  };
  static ActivateDefaultMode(
    Tools?: JavascriptEditorModeTools
  ): {
    Tools: JavascriptEditorModeTools
  };
  static C(Other: UObject | any): JavascriptEdModeLibrary;
}
declare class JavascriptInputEventStateLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptInputEventStateLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptInputEventStateLibrary;
  static GetDefaultObject(): JavascriptInputEventStateLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptInputEventStateLibrary;
  static IsSpaceBarPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsShiftButtonPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsShiftButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsRightMouseButtonPressed(
    InputEvent: JavascriptInputEventState
  ): boolean;
  static IsMouseButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsMiddleMouseButtonPressed(
    InputEvent: JavascriptInputEventState
  ): boolean;
  static IsLeftMouseButtonPressed(
    InputEvent: JavascriptInputEventState
  ): boolean;
  static IsCtrlButtonPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsCtrlButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static IsButtonPressed(
    InputEvent: JavascriptInputEventState,
    InKey: Key
  ): boolean;
  static IsAnyMouseButtonDown(InputEvent: JavascriptInputEventState): boolean;
  static IsAltButtonPressed(InputEvent: JavascriptInputEventState): boolean;
  static IsAltButtonEvent(InputEvent: JavascriptInputEventState): boolean;
  static GetKey(InputEvent: JavascriptInputEventState): Key;
  static GetInputEvent(InputEvent: JavascriptInputEventState): EInputEventT;
  static C(Other: UObject | any): JavascriptInputEventStateLibrary;
}
declare type EJSCheckBoxStateT =
  | "Unchecked"
  | "Checked"
  | "Undetermined"
  | "EJSCheckBoxState_MAX";
declare var EJSCheckBoxState: {
  Unchecked: "Unchecked",
  Checked: "Checked",
  Undetermined: "Undetermined",
  EJSCheckBoxState_MAX: "EJSCheckBoxState_MAX"
};
declare class JavascriptNotification mixins UObject {
  text: string;
  bUseImage: boolean;
  UImage: SlateBrush;
  FadeInDuration: number;
  FadeOutDuration: number;
  ExpireDuration: number;
  bUseThrobber: boolean;
  bUseSuccessFailIcons: boolean;
  bUseLargeFont: boolean;
  bFireAndForget: boolean;
  CheckBoxState: EJSCheckBoxStateT;
  CheckBoxStateChanged: UnrealEngineDelegate<(State: ECheckBoxStateT) => void>;
  CheckBoxText: string;
  Hyperlink: UnrealEngineDelegate<() => void>;
  HyperlinkText: string;
  bAllowThrottleWhenFrameRateIsLow: boolean;
  static Load(ResourceName: string): JavascriptNotification;
  static Find(Outer: UObject, ResourceName: string): JavascriptNotification;
  static GetDefaultObject(): JavascriptNotification;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptNotification;
  Success(): void;
  SetText(InText: string): void;
  Reset(): void;
  Pending(): void;
  Fire(): void;
  Fail(): void;
  Fadeout(): void;
  static C(Other: UObject | any): JavascriptNotification;
}
declare type EPropertyAccessResultT =
  | "MultipleValues"
  | "Fail"
  | "Success"
  | "EPropertyAccessResult_MAX";
declare var EPropertyAccessResult: {
  MultipleValues: "MultipleValues",
  Fail: "Fail",
  Success: "Success",
  EPropertyAccessResult_MAX: "EPropertyAccessResult_MAX"
};
declare class JavascriptPropertyHandle {
  clone(): JavascriptPropertyHandle;
  static C(Other: UObject | any): JavascriptPropertyHandle;
  CreatePropertyNameWidget(
    NameOverride: string,
    ToolTipOverride: string,
    bDisplayResetToDefault: boolean,
    bHideText: boolean,
    bHideThumbnail: boolean
  ): JavascriptSlateWidget;
  CreatePropertyValueWidget(
    bHideDefaultPropertyButtons: boolean
  ): JavascriptSlateWidget;
  GetChildHandle(Name: string): JavascriptPropertyHandle;
  GetMetaData(Key: string): string;
  GetProperty(): Property;
  GetValueAsFormattedString(
    OutValue?: string
  ): {
    OutValue: string,
    $: EPropertyAccessResultT
  };
  IsEditConst(): boolean;
  IsValidHandle(): boolean;
  SetOnPropertyValueChanged(Custom: JavascriptPropertyCustomization): void;
  SetValueFromFormattedString(InValue: string): EPropertyAccessResultT;
  static CreatePropertyNameWidget(
    Handle: JavascriptPropertyHandle,
    NameOverride: string,
    ToolTipOverride: string,
    bDisplayResetToDefault: boolean,
    bHideText: boolean,
    bHideThumbnail: boolean
  ): JavascriptSlateWidget;
  static CreatePropertyValueWidget(
    Handle: JavascriptPropertyHandle,
    bHideDefaultPropertyButtons: boolean
  ): JavascriptSlateWidget;
  static GetChildHandle(
    Parent: JavascriptPropertyHandle,
    Name: string
  ): JavascriptPropertyHandle;
  static GetMetaData(Handle: JavascriptPropertyHandle, Key: string): string;
  static GetProperty(Handle: JavascriptPropertyHandle): Property;
  static GetValueAsFormattedString(
    Handle: JavascriptPropertyHandle,
    OutValue?: string
  ): {
    OutValue: string,
    $: EPropertyAccessResultT
  };
  static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
  static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
  static SetOnPropertyValueChanged(
    Handle: JavascriptPropertyHandle,
    Custom: JavascriptPropertyCustomization
  ): void;
  static SetValueFromFormattedString(
    Handle: JavascriptPropertyHandle,
    InValue: string
  ): EPropertyAccessResultT;
}
declare class JavascriptDetailWidgetDecl {
  clone(): JavascriptDetailWidgetDecl;
  static C(Other: UObject | any): JavascriptDetailWidgetDecl;
  SetContent(Widget: JavascriptSlateWidget): void;
  SetHAlign(InAlignment: EHorizontalAlignmentT): void;
  SetMaxDesiredWidth(MaxWidth: number): void;
  SetMinDesiredWidth(MinWidth: number): void;
  SetVAlign(InAlignment: EVerticalAlignmentT): void;
  static SetContent(
    Decl: JavascriptDetailWidgetDecl,
    Widget: JavascriptSlateWidget
  ): void;
  static SetHAlign(
    Decl: JavascriptDetailWidgetDecl,
    InAlignment: EHorizontalAlignmentT
  ): void;
  static SetMaxDesiredWidth(
    Decl: JavascriptDetailWidgetDecl,
    MaxWidth: number
  ): void;
  static SetMinDesiredWidth(
    Decl: JavascriptDetailWidgetDecl,
    MinWidth: number
  ): void;
  static SetVAlign(
    Decl: JavascriptDetailWidgetDecl,
    InAlignment: EVerticalAlignmentT
  ): void;
}
declare class JavascriptDetailWidgetRow {
  clone(): JavascriptDetailWidgetRow;
  static C(Other: UObject | any): JavascriptDetailWidgetRow;
  NameContent(): JavascriptDetailWidgetDecl;
  SetFilterString(InFilterString: string): void;
  ValueContent(): JavascriptDetailWidgetDecl;
  WholeRowContent(): JavascriptDetailWidgetDecl;
  static NameContent(
    Row: JavascriptDetailWidgetRow
  ): JavascriptDetailWidgetDecl;
  static SetFilterString(
    Row: JavascriptDetailWidgetRow,
    InFilterString: string
  ): void;
  static ValueContent(
    Row: JavascriptDetailWidgetRow
  ): JavascriptDetailWidgetDecl;
  static WholeRowContent(
    Row: JavascriptDetailWidgetRow
  ): JavascriptDetailWidgetDecl;
}
declare class JavascriptPropertyTypeCustomizationUtils {
  clone(): JavascriptPropertyTypeCustomizationUtils;
  static C(Other: UObject | any): JavascriptPropertyTypeCustomizationUtils;
  RequestRefresh(bForce: boolean): void;
  static RequestRefresh(
    CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,
    bForce: boolean
  ): void;
}
declare class JavascriptSimpleGetBoolDelegateWrapper mixins UObject {
  delegate: UnrealEngineDelegate<() => boolean>;
  static Load(ResourceName: string): JavascriptSimpleGetBoolDelegateWrapper;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptSimpleGetBoolDelegateWrapper;
  static GetDefaultObject(): JavascriptSimpleGetBoolDelegateWrapper;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptSimpleGetBoolDelegateWrapper;
  static C(Other: UObject | any): JavascriptSimpleGetBoolDelegateWrapper;
}
declare class JavascriptDetailPropertyRow {
  clone(): JavascriptDetailPropertyRow;
  static C(Other: UObject | any): JavascriptDetailPropertyRow;
  BindVisibility(Wrapper: JavascriptSimpleGetBoolDelegateWrapper): void;
  CustomWidget(bShowChildren: boolean): JavascriptDetailWidgetRow;
  static BindVisibility(
    Row: JavascriptDetailPropertyRow,
    Wrapper: JavascriptSimpleGetBoolDelegateWrapper
  ): void;
  static CustomWidget(
    Row: JavascriptDetailPropertyRow,
    bShowChildren: boolean
  ): JavascriptDetailWidgetRow;
}
declare class JavascriptDetailChildrenBuilder {
  clone(): JavascriptDetailChildrenBuilder;
  static C(Other: UObject | any): JavascriptDetailChildrenBuilder;
  AddChildContent(SearchString: string): JavascriptDetailWidgetRow;
  AddChildProperty(
    PropertyHandle: JavascriptPropertyHandle
  ): JavascriptDetailPropertyRow;
  AddExternalObjectProperty(
    Objects?: UObject[],
    PropertyName?: string,
    UniqueIdName?: string,
    bAllowChildrenOverride?: boolean,
    bCreateCategoryNodesOverride?: boolean
  ): {
    Objects: UObject[],
    $: JavascriptDetailPropertyRow
  };
  AddExternalObjects(
    Objects?: UObject[],
    UniqueIdName?: string
  ): {
    Objects: UObject[],
    $: JavascriptDetailPropertyRow
  };
  GenerateStructValueWidget(
    StructPropertyHandle: JavascriptPropertyHandle
  ): JavascriptSlateWidget;
  static AddChildContent(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    SearchString: string
  ): JavascriptDetailWidgetRow;
  static AddChildProperty(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    PropertyHandle: JavascriptPropertyHandle
  ): JavascriptDetailPropertyRow;
  static AddExternalObjectProperty(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    Objects?: UObject[],
    PropertyName?: string,
    UniqueIdName?: string,
    bAllowChildrenOverride?: boolean,
    bCreateCategoryNodesOverride?: boolean
  ): {
    Objects: UObject[],
    $: JavascriptDetailPropertyRow
  };
  static AddExternalObjects(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    Objects?: UObject[],
    UniqueIdName?: string
  ): {
    Objects: UObject[],
    $: JavascriptDetailPropertyRow
  };
  static GenerateStructValueWidget(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    StructPropertyHandle: JavascriptPropertyHandle
  ): JavascriptSlateWidget;
}
declare class JavascriptPropertyCustomization mixins UObject {
  PropertyTypeName: string;
  OnDestroy: UnrealEngineDelegate<(ID: number) => void>;
  OnCustomizeHeader: UnrealEngineDelegate<
    (
      Handle: JavascriptPropertyHandle,
      HeaderRow: JavascriptDetailWidgetRow,
      Utils: JavascriptPropertyTypeCustomizationUtils,
      ID: number
    ) => void
  >;
  OnCustomizeChildren: UnrealEngineDelegate<
    (
      Handle: JavascriptPropertyHandle,
      ChildBuilder: JavascriptDetailChildrenBuilder,
      Utils: JavascriptPropertyTypeCustomizationUtils,
      ID: number
    ) => void
  >;
  OnPropertyValueChanged: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): JavascriptPropertyCustomization;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptPropertyCustomization;
  static GetDefaultObject(): JavascriptPropertyCustomization;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptPropertyCustomization;
  Unregister(): void;
  Register(): void;
  static C(Other: UObject | any): JavascriptPropertyCustomization;
}
declare class JavascriptPropertyCustomizationLibrary
  mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptPropertyCustomizationLibrary;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptPropertyCustomizationLibrary;
  static GetDefaultObject(): JavascriptPropertyCustomizationLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptPropertyCustomizationLibrary;
  static WholeRowContent(
    Row: JavascriptDetailWidgetRow
  ): JavascriptDetailWidgetDecl;
  static ValueContent(
    Row: JavascriptDetailWidgetRow
  ): JavascriptDetailWidgetDecl;
  static SetValueFromFormattedString(
    Handle: JavascriptPropertyHandle,
    InValue: string
  ): EPropertyAccessResultT;
  static SetVAlign(
    Decl: JavascriptDetailWidgetDecl,
    InAlignment: EVerticalAlignmentT
  ): void;
  static SetOnPropertyValueChanged(
    Handle: JavascriptPropertyHandle,
    Custom: JavascriptPropertyCustomization
  ): void;
  static SetMinDesiredWidth(
    Decl: JavascriptDetailWidgetDecl,
    MinWidth: number
  ): void;
  static SetMaxDesiredWidth(
    Decl: JavascriptDetailWidgetDecl,
    MaxWidth: number
  ): void;
  static SetHAlign(
    Decl: JavascriptDetailWidgetDecl,
    InAlignment: EHorizontalAlignmentT
  ): void;
  static SetFilterString(
    Row: JavascriptDetailWidgetRow,
    InFilterString: string
  ): void;
  static SetContent(
    Decl: JavascriptDetailWidgetDecl,
    Widget: JavascriptSlateWidget
  ): void;
  static RequestRefresh(
    CustomizationUtils: JavascriptPropertyTypeCustomizationUtils,
    bForce: boolean
  ): void;
  static NameContent(
    Row: JavascriptDetailWidgetRow
  ): JavascriptDetailWidgetDecl;
  static IsValidHandle(Handle: JavascriptPropertyHandle): boolean;
  static IsEditConst(Handle: JavascriptPropertyHandle): boolean;
  static GetValueAsFormattedString(
    Handle: JavascriptPropertyHandle,
    OutValue?: string
  ): {
    OutValue: string,
    $: EPropertyAccessResultT
  };
  static GetProperty(Handle: JavascriptPropertyHandle): Property;
  static GetMetaData(Handle: JavascriptPropertyHandle, Key: string): string;
  static GetChildHandle(
    Parent: JavascriptPropertyHandle,
    Name: string
  ): JavascriptPropertyHandle;
  static GenerateStructValueWidget(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    StructPropertyHandle: JavascriptPropertyHandle
  ): JavascriptSlateWidget;
  static CustomWidget(
    Row: JavascriptDetailPropertyRow,
    bShowChildren: boolean
  ): JavascriptDetailWidgetRow;
  static CreatePropertyValueWidget(
    Handle: JavascriptPropertyHandle,
    bHideDefaultPropertyButtons: boolean
  ): JavascriptSlateWidget;
  static CreatePropertyNameWidget(
    Handle: JavascriptPropertyHandle,
    NameOverride: string,
    ToolTipOverride: string,
    bDisplayResetToDefault: boolean,
    bHideText: boolean,
    bHideThumbnail: boolean
  ): JavascriptSlateWidget;
  static BindVisibility(
    Row: JavascriptDetailPropertyRow,
    Wrapper: JavascriptSimpleGetBoolDelegateWrapper
  ): void;
  static AddExternalObjects(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    Objects?: UObject[],
    UniqueIdName?: string
  ): {
    Objects: UObject[],
    $: JavascriptDetailPropertyRow
  };
  static AddExternalObjectProperty(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    Objects?: UObject[],
    PropertyName?: string,
    UniqueIdName?: string,
    bAllowChildrenOverride?: boolean,
    bCreateCategoryNodesOverride?: boolean
  ): {
    Objects: UObject[],
    $: JavascriptDetailPropertyRow
  };
  static AddChildProperty(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    PropertyHandle: JavascriptPropertyHandle
  ): JavascriptDetailPropertyRow;
  static AddChildContent(
    ChildBuilder: JavascriptDetailChildrenBuilder,
    SearchString: string
  ): JavascriptDetailWidgetRow;
  static C(Other: UObject | any): JavascriptPropertyCustomizationLibrary;
}
declare class JavascriptRawMeshLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): JavascriptRawMeshLibrary;
  static Find(Outer: UObject, ResourceName: string): JavascriptRawMeshLibrary;
  static GetDefaultObject(): JavascriptRawMeshLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptRawMeshLibrary;
  static SetSectionInfo(
    StaticMesh: StaticMesh,
    LODIndex: number,
    SectionIndex: number,
    Info: MeshSectionInfo
  ): void;
  static SaveRawMesh(
    StaticMesh: StaticMesh,
    SourceModelIndex: number,
    InMesh?: JavascriptRawMesh
  ): {
    InMesh: JavascriptRawMesh
  };
  static LoadRawMesh(
    StaticMesh: StaticMesh,
    SourceModelIndex: number,
    OutMesh?: JavascriptRawMesh
  ): {
    OutMesh: JavascriptRawMesh
  };
  static IsValidOrFixable(RawMesh: JavascriptRawMesh): boolean;
  static IsValid(RawMesh: JavascriptRawMesh): boolean;
  static GetWedgePosition(
    RawMesh: JavascriptRawMesh,
    WedgeIndex: number
  ): Vector;
  static GetSectionInfo(
    StaticMesh: StaticMesh,
    LODIndex: number,
    SectionIndex: number
  ): MeshSectionInfo;
  static Empty(
    RawMesh?: JavascriptRawMesh
  ): {
    RawMesh: JavascriptRawMesh
  };
  static CompactMaterialIndices(
    RawMesh?: JavascriptRawMesh
  ): {
    RawMesh: JavascriptRawMesh
  };
  static Build(StaticMesh: StaticMesh): void;
  static C(Other: UObject | any): JavascriptRawMeshLibrary;
}
declare class JavascriptScrubControlPanel mixins Widget {
  OnClick_Forward_Delegate: UnrealEngineMulticastDelegate<() => void>;
  OnClick_Forward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
  OnClick_Forward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
  OnClick_Backward_Delegate: UnrealEngineMulticastDelegate<() => void>;
  OnClick_Backward_Step_Delegate: UnrealEngineMulticastDelegate<() => void>;
  OnClick_Backward_End_Delegate: UnrealEngineMulticastDelegate<() => void>;
  OnClick_ToggleLoop_Delegate: UnrealEngineMulticastDelegate<() => void>;
  SetPlaybackPosition_Delegate: UnrealEngineMulticastDelegate<() => void>;
  static Load(ResourceName: string): JavascriptScrubControlPanel;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): JavascriptScrubControlPanel;
  static GetDefaultObject(): JavascriptScrubControlPanel;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): JavascriptScrubControlPanel;
  SetViewRange(NewMin: number, NewMax: number): void;
  SetSumFrames(NewSumFrames: number): void;
  SetPlaybackPosition(NewTime: number): void;
  SetLooping(NewbLooping: boolean): void;
  SetFramesPerSecond(NewFramesPerSecond: number): void;
  IsLooping(): boolean;
  GetViewRangeMin(): number;
  GetViewRangeMax(): number;
  GetTotalSequenceLength(): number;
  GetTotalFrameCount(): any;
  GetPlaybackPosition(): number;
  GetFramesPerSecond(): number;
  static C(Other: UObject | any): JavascriptScrubControlPanel;
}
declare type EPropertyEditorNameAreaSettingsT =
  | "HideNameArea"
  | "ObjectsUseNameArea"
  | "ActorsUseNameArea"
  | "ComponentsAndActorsUseNameArea"
  | "EPropertyEditorNameAreaSettings_MAX";
declare var EPropertyEditorNameAreaSettings: {
  HideNameArea: "HideNameArea",
  ObjectsUseNameArea: "ObjectsUseNameArea",
  ActorsUseNameArea: "ActorsUseNameArea",
  ComponentsAndActorsUseNameArea: "ComponentsAndActorsUseNameArea",
  EPropertyEditorNameAreaSettings_MAX: "EPropertyEditorNameAreaSettings_MAX"
};
declare class PropertyEditor mixins Widget {
  OnChange: UnrealEngineMulticastDelegate<
    (PropertyName: string, MemberPropertyName: string) => void
  >;
  bUpdateFromSelection: boolean;
  bLockable: boolean;
  bAllowSearch: boolean;
  bHideSelectionTip: boolean;
  bReadOnly: boolean;
  bEnablePropertyPath: boolean;
  NameAreaSettings: EPropertyEditorNameAreaSettingsT;
  static Load(ResourceName: string): PropertyEditor;
  static Find(Outer: UObject, ResourceName: string): PropertyEditor;
  static GetDefaultObject(): PropertyEditor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PropertyEditor;
  SetObjects(
    Objects: UObject[],
    bForceRefresh: boolean,
    bOverrideLock: boolean
  ): void;
  SetObject(UObject: UObject, bForceRefresh: boolean): void;
  IsPropertyVisible(
    PropertName: string,
    ParentPropertyName: string,
    PropertyPaths: string[]
  ): boolean;
  IsPropertyReadOnly(
    PropertyName: string,
    ParentPropertyName: string,
    PropertyPaths: string[]
  ): boolean;
  Destruct(): void;
  Construct(): void;
  static C(Other: UObject | any): PropertyEditor;
}
declare class GlobalEditorUtilityBase mixins UObject {
  HelpText: string;
  bDirtiedSelectionSet: boolean;
  bAutoRunDefaultAction: boolean;
  OnEachSelectedActor: UnrealEngineMulticastDelegate<
    (Actor: Actor, index: number) => void
  >;
  OnEachSelectedAsset: UnrealEngineMulticastDelegate<
    (Asset: UObject, index: number) => void
  >;
  static Load(ResourceName: string): GlobalEditorUtilityBase;
  static Find(Outer: UObject, ResourceName: string): GlobalEditorUtilityBase;
  static GetDefaultObject(): GlobalEditorUtilityBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): GlobalEditorUtilityBase;
  SetActorSelectionState(Actor: Actor, bShouldBeSelected: boolean): void;
  SelectNothing(): void;

  OnDefaultActionClicked(): void;
  GetSelectionSet(): Actor[];
  GetSelectionBounds(
    Origin?: Vector,
    BoxExtent?: Vector,
    SphereRadius?: number
  ): {
    Origin: Vector,
    BoxExtent: Vector,
    SphereRadius: number
  };
  GetSelectedAssets(): UObject[];
  GetEditorUserSettings(): EditorPerProjectUserSettings;
  GetActorReference(PathToActor: string): Actor;
  ForEachSelectedAsset(): void;
  ForEachSelectedActor(): void;
  ClearActorSelectionSet(): void;
  static C(Other: UObject | any): GlobalEditorUtilityBase;
}
declare class ActorActionUtility mixins GlobalEditorUtilityBase {
  static Load(ResourceName: string): ActorActionUtility;
  static Find(Outer: UObject, ResourceName: string): ActorActionUtility;
  static GetDefaultObject(): ActorActionUtility;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ActorActionUtility;
  GetSupportedClass(): UnrealEngineClassT;
  static C(Other: UObject | any): ActorActionUtility;
}
declare class AssetActionUtility mixins GlobalEditorUtilityBase {
  static Load(ResourceName: string): AssetActionUtility;
  static Find(Outer: UObject, ResourceName: string): AssetActionUtility;
  static GetDefaultObject(): AssetActionUtility;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AssetActionUtility;
  GetSupportedClass(): UnrealEngineClassT;
  static C(Other: UObject | any): AssetActionUtility;
}
declare class EditorAutomationActor mixins Actor {
  static GetDefaultObject(): EditorAutomationActor;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorAutomationActor;
  static C(Other: UObject | any): EditorAutomationActor;
}
declare class EditorAutomationActorComponent mixins ActorComponent {
  static Load(ResourceName: string): EditorAutomationActorComponent;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EditorAutomationActorComponent;
  static GetDefaultObject(): EditorAutomationActorComponent;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorAutomationActorComponent;
  static C(Other: UObject | any): EditorAutomationActorComponent;
}
declare class EditorAutomationObject mixins UObject {
  static Load(ResourceName: string): EditorAutomationObject;
  static Find(Outer: UObject, ResourceName: string): EditorAutomationObject;
  static GetDefaultObject(): EditorAutomationObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorAutomationObject;
  static C(Other: UObject | any): EditorAutomationObject;
}
declare class EditorUtilityBlueprint mixins Blueprint {
  static Load(ResourceName: string): EditorUtilityBlueprint;
  static Find(Outer: UObject, ResourceName: string): EditorUtilityBlueprint;
  static GetDefaultObject(): EditorUtilityBlueprint;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityBlueprint;
  static C(Other: UObject | any): EditorUtilityBlueprint;
}
declare class EditorUtilityBlueprintFactory mixins Factory {
  ParentClass: UnrealEngineClassT;
  static Load(ResourceName: string): EditorUtilityBlueprintFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EditorUtilityBlueprintFactory;
  static GetDefaultObject(): EditorUtilityBlueprintFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityBlueprintFactory;
  static C(Other: UObject | any): EditorUtilityBlueprintFactory;
}
declare class EditorUtilityContext mixins UObject {
  LoadedUIs: SoftObjectPath[];
  static Load(ResourceName: string): EditorUtilityContext;
  static Find(Outer: UObject, ResourceName: string): EditorUtilityContext;
  static GetDefaultObject(): EditorUtilityContext;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityContext;
  static C(Other: UObject | any): EditorUtilityContext;
}
declare class EditorUtilityLibrary mixins BlueprintFunctionLibrary {
  static Load(ResourceName: string): EditorUtilityLibrary;
  static Find(Outer: UObject, ResourceName: string): EditorUtilityLibrary;
  static GetDefaultObject(): EditorUtilityLibrary;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityLibrary;
  static RenameAsset(Asset: UObject, NewName: string): void;
  static GetSelectionSet(): Actor[];
  static GetSelectionBounds(
    Origin?: Vector,
    BoxExtent?: Vector,
    SphereRadius?: number
  ): {
    Origin: Vector,
    BoxExtent: Vector,
    SphereRadius: number
  };
  static GetSelectedAssets(): UObject[];
  GetActorReference(PathToActor: string): Actor;
  static C(Other: UObject | any): EditorUtilityLibrary;
}
declare class EditorUtilityWidget mixins UserWidget {
  HelpText: string;
  bAlwaysReregisterWithWindowsMenu: boolean;
  bAutoRunDefaultAction: boolean;
  static Load(ResourceName: string): EditorUtilityWidget;
  static Find(Outer: UObject, ResourceName: string): EditorUtilityWidget;
  static GetDefaultObject(): EditorUtilityWidget;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityWidget;
  OnDefaultActionClicked(): void;
  static C(Other: UObject | any): EditorUtilityWidget;
}
declare class EditorUtilityWidgetBlueprint mixins WidgetBlueprint {
  static Load(ResourceName: string): EditorUtilityWidgetBlueprint;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EditorUtilityWidgetBlueprint;
  static GetDefaultObject(): EditorUtilityWidgetBlueprint;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityWidgetBlueprint;
  static C(Other: UObject | any): EditorUtilityWidgetBlueprint;
}
declare class EditorUtilityWidgetBlueprintFactory mixins Factory {
  BlueprintType: EBlueprintTypeT;
  ParentClass: UnrealEngineClassT;
  static Load(ResourceName: string): EditorUtilityWidgetBlueprintFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EditorUtilityWidgetBlueprintFactory;
  static GetDefaultObject(): EditorUtilityWidgetBlueprintFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorUtilityWidgetBlueprintFactory;
  static C(Other: UObject | any): EditorUtilityWidgetBlueprintFactory;
}
declare class PlacedEditorUtilityBase mixins Actor {
  HelpText: string;
  static GetDefaultObject(): PlacedEditorUtilityBase;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): PlacedEditorUtilityBase;
  SetLevelViewportCameraInfo(
    CameraLocation: Vector,
    CameraRotation: Rotator
  ): void;
  SetActorSelectionState(Actor: Actor, bShouldBeSelected: boolean): void;
  SelectNothing(): void;
  GetSelectionSet(): Actor[];
  GetLevelViewportCameraInfo(
    CameraLocation?: Vector,
    CameraRotation?: Rotator
  ): {
    CameraLocation: Vector,
    CameraRotation: Rotator,
    $: boolean
  };
  GetActorReference(PathToActor: string): Actor;
  ClearActorSelectionSet(): void;
  static C(Other: UObject | any): PlacedEditorUtilityBase;
}
declare class LocalizationDashboardSettings mixins UObject {
  static Load(ResourceName: string): LocalizationDashboardSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): LocalizationDashboardSettings;
  static GetDefaultObject(): LocalizationDashboardSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): LocalizationDashboardSettings;
  static C(Other: UObject | any): LocalizationDashboardSettings;
}
declare type EMeshInstancingReplacementMethodT =
  | "RemoveOriginalActors"
  | "KeepOriginalActorsAsEditorOnly"
  | "EMeshInstancingReplacementMethod_MAX";
declare var EMeshInstancingReplacementMethod: {
  RemoveOriginalActors: "RemoveOriginalActors",
  KeepOriginalActorsAsEditorOnly: "KeepOriginalActorsAsEditorOnly",
  EMeshInstancingReplacementMethod_MAX: "EMeshInstancingReplacementMethod_MAX"
};
declare class MeshInstancingSettings {
  ActorClassToUse: UnrealEngineClassT;
  InstanceReplacementThreshold: number;
  MeshReplacementMethod: EMeshInstancingReplacementMethodT;
  bSkipMeshesWithVertexColors: boolean;
  bUseHLODVolumes: boolean;
  clone(): MeshInstancingSettings;
  static C(Other: UObject | any): MeshInstancingSettings;
}
declare class MeshInstancingSettingsObject mixins UObject {
  Settings: MeshInstancingSettings;
  static Load(ResourceName: string): MeshInstancingSettingsObject;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): MeshInstancingSettingsObject;
  static GetDefaultObject(): MeshInstancingSettingsObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshInstancingSettingsObject;
  static C(Other: UObject | any): MeshInstancingSettingsObject;
}
declare class MeshMergingSettingsObject mixins UObject {
  Settings: MeshMergingSettings;
  static Load(ResourceName: string): MeshMergingSettingsObject;
  static Find(Outer: UObject, ResourceName: string): MeshMergingSettingsObject;
  static GetDefaultObject(): MeshMergingSettingsObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshMergingSettingsObject;
  static C(Other: UObject | any): MeshMergingSettingsObject;
}
declare class MeshProxySettingsObject mixins UObject {
  Settings: MeshProxySettings;
  static Load(ResourceName: string): MeshProxySettingsObject;
  static Find(Outer: UObject, ResourceName: string): MeshProxySettingsObject;
  static GetDefaultObject(): MeshProxySettingsObject;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MeshProxySettingsObject;
  static C(Other: UObject | any): MeshProxySettingsObject;
}
declare type EIOSCloudKitSyncStrategyT =
  | "None"
  | "OnlyAtGameStart"
  | "Always"
  | "EIOSCloudKitSyncStrategy_MAX";
declare var EIOSCloudKitSyncStrategy: {
  None: "None",
  OnlyAtGameStart: "OnlyAtGameStart",
  Always: "Always",
  EIOSCloudKitSyncStrategy_MAX: "EIOSCloudKitSyncStrategy_MAX"
};
declare class IOSBuildResourceDirectory {
  Path: string;
  clone(): IOSBuildResourceDirectory;
  static C(Other: UObject | any): IOSBuildResourceDirectory;
}
declare class IOSBuildResourceFilePath {
  FilePath: string;
  clone(): IOSBuildResourceFilePath;
  static C(Other: UObject | any): IOSBuildResourceFilePath;
}
declare type EIOSLandscapeOrientationT =
  | "LandscapeLeft"
  | "LandscapeRight"
  | "EIOSLandscapeOrientation_MAX";
declare var EIOSLandscapeOrientation: {
  LandscapeLeft: "LandscapeLeft",
  LandscapeRight: "LandscapeRight",
  EIOSLandscapeOrientation_MAX: "EIOSLandscapeOrientation_MAX"
};
declare type EPowerUsageFrameRateLockT =
  | "PUFRL_None"
  | "PUFRL_20"
  | "PUFRL_30"
  | "PUFRL_60"
  | "PUFRL_MAX";
declare var EPowerUsageFrameRateLock: {
  PUFRL_None: "PUFRL_None",
  PUFRL_20: "PUFRL_20",
  PUFRL_30: "PUFRL_30",
  PUFRL_60: "PUFRL_60",
  PUFRL_MAX: "PUFRL_MAX"
};
declare type EIOSVersionT =
  | "IOS_61"
  | "IOS_7"
  | "IOS_8"
  | "IOS_9"
  | "IOS_10"
  | "IOS_11"
  | "IOS_12"
  | "IOS_MAX";
declare var EIOSVersion: {
  IOS_61: "IOS_61",
  IOS_7: "IOS_7",
  IOS_8: "IOS_8",
  IOS_9: "IOS_9",
  IOS_10: "IOS_10",
  IOS_11: "IOS_11",
  IOS_12: "IOS_12",
  IOS_MAX: "IOS_MAX"
};
declare class PlatformRuntimeAudioCompressionOverrides {
  bOverrideCompressionTimes: boolean;
  DurationThreshold: number;
  MaxNumRandomBranches: number;
  SoundCueQualityIndex: number;
  clone(): PlatformRuntimeAudioCompressionOverrides;
  static C(Other: UObject | any): PlatformRuntimeAudioCompressionOverrides;
}
declare class IOSRuntimeSettings mixins UObject {
  bEnableGameCenterSupport: boolean;
  bEnableCloudKitSupport: boolean;
  IOSCloudKitSyncStrategy: EIOSCloudKitSyncStrategyT;
  bEnableRemoteNotificationsSupport: boolean;
  bEnableBackgroundFetch: boolean;
  bSupportsMetal: boolean;
  bSupportsMetalMRT: boolean;
  bCookPVRTCTextures: boolean;
  bCookASTCTextures: boolean;
  bSupportsOpenGLES2: boolean;
  EnableRemoteShaderCompile: boolean;
  bGeneratedSYMFile: boolean;
  bGeneratedSYMBundle: boolean;
  bGenerateCrashReportSymbols: boolean;
  bGenerateXCArchive: boolean;
  bDevForArmV7: boolean;
  bDevForArm64: boolean;
  bDevForArmV7S: boolean;
  bShipForArmV7: boolean;
  bShipForArm64: boolean;
  bShipForArmV7S: boolean;
  bShipForBitcode: boolean;
  bEnableAdvertisingIdentifier: boolean;
  AdditionalLinkerFlags: string;
  AdditionalShippingLinkerFlags: string;
  RemoteServerName: string;
  bUseRSync: boolean;
  RSyncUsername: string;
  DeltaCopyInstallPath: IOSBuildResourceDirectory;
  SSHPrivateKeyLocation: string;
  SSHPrivateKeyOverridePath: IOSBuildResourceFilePath;
  bTreatRemoteAsSeparateController: boolean;
  bAllowRemoteRotation: boolean;
  bUseRemoteAsVirtualJoystick: boolean;
  bUseRemoteAbsoluteDpadValues: boolean;
  bAllowControllers: boolean;
  bSupportsPortraitOrientation: boolean;
  bSupportsUpsideDownOrientation: boolean;
  bSupportsLandscapeLeftOrientation: boolean;
  bSupportsLandscapeRightOrientation: boolean;
  bSupportsITunesFileSharing: boolean;
  PreferredLandscapeOrientation: EIOSLandscapeOrientationT;
  BundleDisplayName: string;
  BundleName: string;
  BundleIdentifier: string;
  VersionInfo: string;
  FrameRateLock: EPowerUsageFrameRateLockT;
  MinimumiOSVersion: EIOSVersionT;
  bSupportsIPad: boolean;
  bSupportsIPhone: boolean;
  AdditionalPlistData: string;
  bEnableFacebookSupport: boolean;
  FacebookAppID: string;
  MobileProvision: string;
  SigningCertificate: string;
  bAutomaticSigning: boolean;
  IOSTeamID: string;
  bDisableHTTPS: boolean;
  MaxShaderLanguageVersion: number;
  UseFastIntrinsics: boolean;
  ForceFloats: boolean;
  EnableMathOptimisations: boolean;
  bUseIntegratedKeyboard: boolean;
  AudioSampleRate: number;
  AudioCallbackBufferFrameSize: number;
  AudioNumBuffersToEnqueue: number;
  AudioMaxChannels: number;
  AudioNumSourceWorkers: number;
  SpatializationPlugin: string;
  ReverbPlugin: string;
  OcclusionPlugin: string;
  CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
  bResampleForDevice: boolean;
  MaxSampleRate: number;
  HighSampleRate: number;
  MedSampleRate: number;
  LowSampleRate: number;
  MinSampleRate: number;
  CompressionQualityModifier: number;
  AutoStreamingThreshold: number;
  static Load(ResourceName: string): IOSRuntimeSettings;
  static Find(Outer: UObject, ResourceName: string): IOSRuntimeSettings;
  static GetDefaultObject(): IOSRuntimeSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): IOSRuntimeSettings;
  static C(Other: UObject | any): IOSRuntimeSettings;
}
declare type EAndroidInstallLocationT =
  | "InternalOnly"
  | "PreferExternal"
  | "Auto"
  | "EAndroidInstallLocation_MAX";
declare var EAndroidInstallLocation: {
  InternalOnly: "InternalOnly",
  PreferExternal: "PreferExternal",
  Auto: "Auto",
  EAndroidInstallLocation_MAX: "EAndroidInstallLocation_MAX"
};
declare type EAndroidScreenOrientationT =
  | "Portrait"
  | "ReversePortrait"
  | "SensorPortrait"
  | "Landscape"
  | "ReverseLandscape"
  | "SensorLandscape"
  | "Sensor"
  | "FullSensor"
  | "EAndroidScreenOrientation_MAX";
declare var EAndroidScreenOrientation: {
  Portrait: "Portrait",
  ReversePortrait: "ReversePortrait",
  SensorPortrait: "SensorPortrait",
  Landscape: "Landscape",
  ReverseLandscape: "ReverseLandscape",
  SensorLandscape: "SensorLandscape",
  Sensor: "Sensor",
  FullSensor: "FullSensor",
  EAndroidScreenOrientation_MAX: "EAndroidScreenOrientation_MAX"
};
declare type EAndroidAntVerbosityT =
  | "Quiet"
  | "Normal"
  | "Verbose"
  | "EAndroidAntVerbosity_MAX";
declare var EAndroidAntVerbosity: {
  Quiet: "Quiet",
  Normal: "Normal",
  Verbose: "Verbose",
  EAndroidAntVerbosity_MAX: "EAndroidAntVerbosity_MAX"
};
declare type EAndroidDepthBufferPreferenceT =
  | "Default"
  | "Bits16"
  | "Bits24"
  | "Bits32"
  | "EAndroidDepthBufferPreference_MAX";
declare var EAndroidDepthBufferPreference: {
  Default: "Default",
  Bits16: "Bits16",
  Bits24: "Bits24",
  Bits32: "Bits32",
  EAndroidDepthBufferPreference_MAX: "EAndroidDepthBufferPreference_MAX"
};
declare type EGoogleVRCapsT =
  | "Cardboard"
  | "Daydream33"
  | "Daydream63"
  | "Daydream66"
  | "EGoogleVRCaps_MAX";
declare var EGoogleVRCaps: {
  Cardboard: "Cardboard",
  Daydream33: "Daydream33",
  Daydream63: "Daydream63",
  Daydream66: "Daydream66",
  EGoogleVRCaps_MAX: "EGoogleVRCaps_MAX"
};
declare class GooglePlayAchievementMapping {
  Name: string;
  AchievementID: string;
  clone(): GooglePlayAchievementMapping;
  static C(Other: UObject | any): GooglePlayAchievementMapping;
}
declare class GooglePlayLeaderboardMapping {
  Name: string;
  LeaderboardID: string;
  clone(): GooglePlayLeaderboardMapping;
  static C(Other: UObject | any): GooglePlayLeaderboardMapping;
}
declare type EAndroidAudioT = "Default" | "OGG" | "ADPCM" | "EAndroidAudio_MAX";
declare var EAndroidAudio: {
  Default: "Default",
  OGG: "OGG",
  ADPCM: "ADPCM",
  EAndroidAudio_MAX: "EAndroidAudio_MAX"
};
declare type EAndroidGraphicsDebuggerT =
  | "None"
  | "Mali"
  | "Adreno"
  | "EAndroidGraphicsDebugger_MAX";
declare var EAndroidGraphicsDebugger: {
  None: "None",
  Mali: "Mali",
  Adreno: "Adreno",
  EAndroidGraphicsDebugger_MAX: "EAndroidGraphicsDebugger_MAX"
};
declare class AndroidRuntimeSettings mixins UObject {
  PackageName: string;
  StoreVersion: number;
  ApplicationDisplayName: string;
  VersionDisplayName: string;
  MinSDKVersion: number;
  TargetSDKVersion: number;
  InstallLocation: EAndroidInstallLocationT;
  bEnableGradle: boolean;
  bEnableLint: boolean;
  bPackageDataInsideApk: boolean;
  bCreateAllPlatformsInstall: boolean;
  bDisableVerifyOBBOnStartUp: boolean;
  bAllowLargeOBBFiles: boolean;
  bUseExternalFilesDir: boolean;
  Orientation: EAndroidScreenOrientationT;
  MaxAspectRatio: number;
  bUseDisplayCutout: boolean;
  AntVerbosity: EAndroidAntVerbosityT;
  bFullScreen: boolean;
  bEnableNewKeyboard: boolean;
  DepthBufferPreference: EAndroidDepthBufferPreferenceT;
  bValidateTextureFormats: boolean;
  ExtraManifestNodeTags: string[];
  ExtraApplicationNodeTags: string[];
  ExtraApplicationSettings: string;
  ExtraActivityNodeTags: string[];
  ExtraActivitySettings: string;
  ExtraPermissions: string[];
  bAndroidVoiceEnabled: boolean;
  bPackageForGearVR: boolean;
  bRemoveOSIG: boolean;
  GoogleVRCaps: EGoogleVRCapsT[];
  bGoogleVRSustainedPerformance: boolean;
  KeyStore: string;
  KeyAlias: string;
  KeyStorePassword: string;
  KeyPassword: string;
  bBuildForArmV7: boolean;
  bBuildForArm64: boolean;
  bBuildForX8664: boolean;
  bBuildForES2: boolean;
  bBuildForES31: boolean;
  bSupportsVulkan: boolean;
  bDetectVulkanByDefault: boolean;
  bBuildWithHiddenSymbolVisibility: boolean;
  bSaveSymbols: boolean;
  bEnableGooglePlaySupport: boolean;
  bUseGetAccounts: boolean;
  GamesAppID: string;
  AchievementMap: GooglePlayAchievementMapping[];
  LeaderboardMap: GooglePlayLeaderboardMapping[];
  bEnableSnapshots: boolean;
  bSupportAdMob: boolean;
  AdMobAdUnitID: string;
  AdMobAdUnitIDs: string[];
  GooglePlayLicenseKey: string;
  GCMClientSenderID: string;
  bShowLaunchImage: boolean;
  bAllowIMU: boolean;
  bAllowControllers: boolean;
  bBlockAndroidKeysOnControllers: boolean;
  AndroidAudio: EAndroidAudioT;
  AudioSampleRate: number;
  AudioCallbackBufferFrameSize: number;
  AudioNumBuffersToEnqueue: number;
  AudioMaxChannels: number;
  AudioNumSourceWorkers: number;
  SpatializationPlugin: string;
  ReverbPlugin: string;
  OcclusionPlugin: string;
  CompressionOverrides: PlatformRuntimeAudioCompressionOverrides;
  bResampleForDevice: boolean;
  MaxSampleRate: number;
  HighSampleRate: number;
  MedSampleRate: number;
  LowSampleRate: number;
  MinSampleRate: number;
  CompressionQualityModifier: number;
  AutoStreamingThreshold: number;
  AndroidGraphicsDebugger: EAndroidGraphicsDebuggerT;
  MaliGraphicsDebuggerPath: DirectoryPath;
  bMultiTargetFormat_ETC1: boolean;
  bMultiTargetFormat_ETC1a: boolean;
  bMultiTargetFormat_ETC2: boolean;
  bMultiTargetFormat_DXT: boolean;
  bMultiTargetFormat_PVRTC: boolean;
  bMultiTargetFormat_ATC: boolean;
  bMultiTargetFormat_ASTC: boolean;
  TextureFormatPriority_ETC1: number;
  TextureFormatPriority_ETC1a: number;
  TextureFormatPriority_ETC2: number;
  TextureFormatPriority_DXT: number;
  TextureFormatPriority_PVRTC: number;
  TextureFormatPriority_ATC: number;
  TextureFormatPriority_ASTC: number;
  SDKAPILevelOverride: string;
  NDKAPILevelOverride: string;
  static Load(ResourceName: string): AndroidRuntimeSettings;
  static Find(Outer: UObject, ResourceName: string): AndroidRuntimeSettings;
  static GetDefaultObject(): AndroidRuntimeSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AndroidRuntimeSettings;
  static C(Other: UObject | any): AndroidRuntimeSettings;
}
declare class HTML5SDKSettings mixins UObject {
  static Load(ResourceName: string): HTML5SDKSettings;
  static Find(Outer: UObject, ResourceName: string): HTML5SDKSettings;
  static GetDefaultObject(): HTML5SDKSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): HTML5SDKSettings;
  static C(Other: UObject | any): HTML5SDKSettings;
}
declare type ECanvasScalingModeT =
  | "Stretch"
  | "Aspect"
  | "Fixed"
  | "ECanvasScalingMode_MAX";
declare var ECanvasScalingMode: {
  Stretch: "Stretch",
  Aspect: "Aspect",
  Fixed: "Fixed",
  ECanvasScalingMode_MAX: "ECanvasScalingMode_MAX"
};
declare class HTML5TargetSettings mixins UObject {
  EnableIndexedDB: boolean;
  UseFixedTimeStep: boolean;
  EnableMultithreading: boolean;
  EnableTracing: boolean;
  CanvasScalingMode: ECanvasScalingModeT;
  Compressed: boolean;
  DeployServerPort: number;
  UploadToS3: boolean;
  S3Region: string;
  S3KeyID: string;
  S3SecretAccessKey: string;
  S3BucketName: string;
  S3FolderName: string;
  SpatializationPlugin: string;
  ReverbPlugin: string;
  OcclusionPlugin: string;
  static Load(ResourceName: string): HTML5TargetSettings;
  static Find(Outer: UObject, ResourceName: string): HTML5TargetSettings;
  static GetDefaultObject(): HTML5TargetSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): HTML5TargetSettings;
  static C(Other: UObject | any): HTML5TargetSettings;
}
declare class MagicLeapSDKSettings mixins UObject {
  MLSDKPath: DirectoryPath;
  static Load(ResourceName: string): MagicLeapSDKSettings;
  static Find(Outer: UObject, ResourceName: string): MagicLeapSDKSettings;
  static GetDefaultObject(): MagicLeapSDKSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): MagicLeapSDKSettings;
  static C(Other: UObject | any): MagicLeapSDKSettings;
}
declare class AndroidSDKSettings mixins UObject {
  SDKPath: DirectoryPath;
  NDKPath: DirectoryPath;
  ANTPath: DirectoryPath;
  JavaPath: DirectoryPath;
  SDKAPILevel: string;
  NDKAPILevel: string;
  static Load(ResourceName: string): AndroidSDKSettings;
  static Find(Outer: UObject, ResourceName: string): AndroidSDKSettings;
  static GetDefaultObject(): AndroidSDKSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): AndroidSDKSettings;
  static C(Other: UObject | any): AndroidSDKSettings;
}
declare type ETutorialContentT =
  | "None"
  | "Text"
  | "UDNExcerpt"
  | "RichText"
  | "ETutorialContent_MAX";
declare var ETutorialContent: {
  None: "None",
  Text: "Text",
  UDNExcerpt: "UDNExcerpt",
  RichText: "RichText",
  ETutorialContent_MAX: "ETutorialContent_MAX"
};
declare class TutorialContent {
  Type: ETutorialContentT;
  Content: string;
  ExcerptName: string;
  text: string;
  clone(): TutorialContent;
  static C(Other: UObject | any): TutorialContent;
}
declare type ETutorialAnchorIdentifierT =
  | "None"
  | "NamedWidget"
  | "Asset"
  | "ETutorialAnchorIdentifier_MAX";
declare var ETutorialAnchorIdentifier: {
  None: "None",
  NamedWidget: "NamedWidget",
  Asset: "Asset",
  ETutorialAnchorIdentifier_MAX: "ETutorialAnchorIdentifier_MAX"
};
declare class TutorialContentAnchor {
  Type: ETutorialAnchorIdentifierT;
  WrapperIdentifier: string;
  Asset: SoftObjectPath;
  bDrawHighlight: boolean;
  TabToFocusOrOpen: string;
  FriendlyName: string;
  GuidString: string;
  OuterName: string;
  clone(): TutorialContentAnchor;
  static C(Other: UObject | any): TutorialContentAnchor;
}
declare class TutorialWidgetContent {
  Content: TutorialContent;
  WidgetAnchor: TutorialContentAnchor;
  HorizontalAlignment: EHorizontalAlignmentT;
  VerticalAlignment: EVerticalAlignmentT;
  Offset: Vector2D;
  ContentWidth: number;
  bAutoFocus: boolean;
  clone(): TutorialWidgetContent;
  static C(Other: UObject | any): TutorialWidgetContent;
}
declare class TutorialStage {
  Name: string;
  Content: TutorialContent;
  WidgetContent: TutorialWidgetContent[];
  NextButtonText: string;
  BackButtonText: string;
  PlatformsToTest: string[];
  bInvertPlatformTest: boolean;
  clone(): TutorialStage;
  static C(Other: UObject | any): TutorialStage;
}
declare class EditorTutorial mixins UObject {
  Title: string;
  SortOrder: number;
  Icon: string;
  Texture: Texture2D;
  Category: string;
  SummaryContent: TutorialContent;
  Stages: TutorialStage[];
  PreviousTutorial: SoftClassPath;
  NextTutorial: SoftClassPath;
  bIsStandalone: boolean;
  AssetToUse: SoftObjectPath;
  ImportPath: string;
  bHideInBrowser: boolean;
  SearchTags: string;
  static Load(ResourceName: string): EditorTutorial;
  static Find(Outer: UObject, ResourceName: string): EditorTutorial;
  static GetDefaultObject(): EditorTutorial;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorTutorial;
  static SetEngineFolderVisibilty(bNewVisibility: boolean): void;
  static OpenAsset(Asset: UObject): void;
  OnTutorialStageStarted(StageName: string): void;
  OnTutorialStageEnded(StageName: string): void;
  OnTutorialLaunched(): void;
  OnTutorialClosed(): void;
  static GoToPreviousTutorialStage(): void;
  static GoToNextTutorialStage(): void;
  static GetEngineFolderVisibilty(): boolean;
  GetActorReference(PathToActor: string): Actor;
  static BeginTutorial(
    TutorialToStart: EditorTutorial,
    bRestart: boolean
  ): void;
  static C(Other: UObject | any): EditorTutorial;
}
declare class EditorTutorialFactory mixins Factory {
  static Load(ResourceName: string): EditorTutorialFactory;
  static Find(Outer: UObject, ResourceName: string): EditorTutorialFactory;
  static GetDefaultObject(): EditorTutorialFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorTutorialFactory;
  static C(Other: UObject | any): EditorTutorialFactory;
}
declare class EditorTutorialImportFactory mixins Factory {
  static Load(ResourceName: string): EditorTutorialImportFactory;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): EditorTutorialImportFactory;
  static GetDefaultObject(): EditorTutorialImportFactory;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorTutorialImportFactory;
  static C(Other: UObject | any): EditorTutorialImportFactory;
}
declare class TutorialCategory {
  Identifier: string;
  Title: string;
  SortOrder: number;
  Description: string;
  Icon: string;
  Texture: SoftObjectPath;
  clone(): TutorialCategory;
  static C(Other: UObject | any): TutorialCategory;
}
declare class TutorialContext {
  Context: string;
  BrowserFilter: string;
  AttractTutorial: SoftClassPath;
  LaunchTutorial: SoftClassPath;
  clone(): TutorialContext;
  static C(Other: UObject | any): TutorialContext;
}
declare class EditorTutorialSettings mixins UObject {
  bDisableAllTutorialAlerts: boolean;
  Categories: TutorialCategory[];
  StartupTutorial: SoftClassPath;
  TutorialContexts: TutorialContext[];
  static Load(ResourceName: string): EditorTutorialSettings;
  static Find(Outer: UObject, ResourceName: string): EditorTutorialSettings;
  static GetDefaultObject(): EditorTutorialSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): EditorTutorialSettings;
  static C(Other: UObject | any): EditorTutorialSettings;
}
declare class TutorialSettings mixins UObject {
  Categories: TutorialCategory[];
  StartupTutorial: SoftClassPath;
  static Load(ResourceName: string): TutorialSettings;
  static Find(Outer: UObject, ResourceName: string): TutorialSettings;
  static GetDefaultObject(): TutorialSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TutorialSettings;
  static C(Other: UObject | any): TutorialSettings;
}
declare class TutorialProgress {
  Tutorial: SoftClassPath;
  CurrentStage: number;
  bUserDismissed: boolean;
  clone(): TutorialProgress;
  static C(Other: UObject | any): TutorialProgress;
}
declare class TutorialStateSettings mixins UObject {
  TutorialsProgress: TutorialProgress[];
  bDismissedAllTutorials: boolean;
  static Load(ResourceName: string): TutorialStateSettings;
  static Find(Outer: UObject, ResourceName: string): TutorialStateSettings;
  static GetDefaultObject(): TutorialStateSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): TutorialStateSettings;
  static C(Other: UObject | any): TutorialStateSettings;
}
declare class ClothPainterSettings mixins MeshPaintSettings {
  ViewMin: number;
  ViewMax: number;
  bAutoViewRange: boolean;
  AutoCalculatedViewMin: number;
  AutoCalculatedViewMax: number;
  ClothingAssets: ClothingAsset[];
  bFlipNormal: boolean;
  bCullBackface: boolean;
  Opacity: number;
  static Load(ResourceName: string): ClothPainterSettings;
  static Find(Outer: UObject, ResourceName: string): ClothPainterSettings;
  static GetDefaultObject(): ClothPainterSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ClothPainterSettings;
  static C(Other: UObject | any): ClothPainterSettings;
}
declare class ClothPaintTool_BrushSettings mixins UObject {
  PaintValue: number;
  static Load(ResourceName: string): ClothPaintTool_BrushSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ClothPaintTool_BrushSettings;
  static GetDefaultObject(): ClothPaintTool_BrushSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ClothPaintTool_BrushSettings;
  static C(Other: UObject | any): ClothPaintTool_BrushSettings;
}
declare class ClothPaintTool_GradientSettings mixins UObject {
  GradientStartValue: number;
  GradientEndValue: number;
  bUseRegularBrush: boolean;
  static Load(ResourceName: string): ClothPaintTool_GradientSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ClothPaintTool_GradientSettings;
  static GetDefaultObject(): ClothPaintTool_GradientSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ClothPaintTool_GradientSettings;
  static C(Other: UObject | any): ClothPaintTool_GradientSettings;
}
declare class ClothPaintTool_SmoothSettings mixins UObject {
  Strength: number;
  static Load(ResourceName: string): ClothPaintTool_SmoothSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ClothPaintTool_SmoothSettings;
  static GetDefaultObject(): ClothPaintTool_SmoothSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ClothPaintTool_SmoothSettings;
  static C(Other: UObject | any): ClothPaintTool_SmoothSettings;
}
declare class ClothPaintTool_FillSettings mixins UObject {
  Threshold: number;
  FillValue: number;
  static Load(ResourceName: string): ClothPaintTool_FillSettings;
  static Find(
    Outer: UObject,
    ResourceName: string
  ): ClothPaintTool_FillSettings;
  static GetDefaultObject(): ClothPaintTool_FillSettings;
  static CreateDefaultSubobject(
    Name: string,
    Transient?: boolean,
    Required?: boolean,
    Abstract?: boolean
  ): ClothPaintTool_FillSettings;
  static C(Other: UObject | any): ClothPaintTool_FillSettings;
}
declare var Context: JavascriptContext;
declare var Root: JavascriptEditorTick;
