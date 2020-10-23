// Taken from Reid's answer at http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
(function() {
  if(!Array.prototype.move) {
    Array.prototype.move = function (old_index, new_index) {
        if ( this.length === 0 ) {
            return this;
        }
        
        this.splice(new_index, 0, this.splice(this[old_index - 1], 1)[0]);
      
        return this; // for testing purposes
    };
  }
  
  if(!Array.prototype.moveElement) {
    Array.prototype.moveElement = function (element, new_index) {
        if ( this.length === 0 ) {
            return this;
        }
        
        this.splice(new_index, 0, this.splice(this.indexOf(element), 1)[0]);
      
        return this; // for testing purposes
    };
  }
  
  if(!Array.prototype.swap) {
    Array.prototype.swap = function (toSwapIndex, swapToIndex) {
        if ( this.length === 0 ) {
            return this;
        }
        
        var temp = this[swapToIndex];
        this[swapToIndex] = this[toSwapIndex];
        this[toSwapIndex] = temp;
      
        return this; // for testing purposes
    };
  }
})(this);

