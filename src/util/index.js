export const mergeSort = (function() {

  // 合并

  var _merge = function(left, right, prop) {

    var result = [];

    // 对数组内成员的某个属性排序

    if (prop) {

      while (left.length && right.length) {

        if (left[0][prop] <= right[0][prop]) {

          result.push(left.shift());

        } else {

          result.push(right.shift());

        }

      }

    } else {

      // 数组成员直接排序

      while (left.length && right.length) {

        if (left[0] <= right[0]) {

          result.push(left.shift());

        } else {

          result.push(right.shift());

        }

      }

    }



    while (left.length)

      result.push(left.shift());



    while (right.length)

      result.push(right.shift());



    return result;

  };



  var _mergeSort = function(arr, prop) { // 采用自上而下的递归方法

    var len = arr.length;

    if (len < 2) {

      return arr;

    }

    var middle = Math.floor(len / 2),

      left = arr.slice(0, middle),

      right = arr.slice(middle);

    return _merge(_mergeSort(left, prop), _mergeSort(right, prop), prop);

  };



  return function(arr, prop, order) {

    var result = _mergeSort(arr, prop);

    if (!order || order.toLowerCase() === 'asc') {

      // 升序

      return result;

    } else {

      // 降序

      var _ = [];

      result.forEach(function(item) {

        _.unshift(item);

      });

      return _;

    }

  };

})();
