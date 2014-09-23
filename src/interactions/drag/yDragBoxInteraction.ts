///<reference path="../../reference.ts" />

module Plottable {
export module Interaction {
  export class YDragBox extends DragBox {
    public _drag(){
      super._drag();
      this.setBox(this._selectionOrigin[1], this._location[1]);
    }

    public setBox(y0: number, y1: number) {
      super.setBox(0, this._componentToListenTo.width(), y0, y1);
      return this;
    }

    public _cursorStyle(x: number, y: number): string {
      var topPosition = this._dragBoxAttr.y;
      var height = this._dragBoxAttr.height;
      var bottomPosition = height + topPosition;
      if (this._isCloseEnoughLeft(y, topPosition, height) ||
          this._isCloseEnoughRight(y, bottomPosition, height)) {
        return "ns-resize";
      } else {
        return "";
      }
    }
  }
}
}
