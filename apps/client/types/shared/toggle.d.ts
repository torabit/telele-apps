export interface ToggleState {
  readonly isSelected: boolean;
  setSelected(isSelected: boolean): void;
  toggle(): void;
}
