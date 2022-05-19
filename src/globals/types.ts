export interface IRequestFilterAttribute<T> {
  value: T;
}

export interface IRangeFilterAttribute extends IRequestFilterAttribute<number[]> {
  step: number;
  min: number;
  max: number;
  minStepsBetweenThumbs?: number;
  unit?: string | null;
}

export interface INumberFilterAttribute extends IRequestFilterAttribute<number[]> {}

export interface IRequestFilterBase {
  q?: IRequestFilterAttribute<string>;
  cat?: INumberFilterAttribute;
  rarity?: INumberFilterAttribute;
  mp?: IRangeFilterAttribute;
  cd?: IRangeFilterAttribute;
  luck?: IRangeFilterAttribute;
  part?: INumberFilterAttribute;
  geneClass?: INumberFilterAttribute;
}
