//from o-ads/utils

/** 
 * Uses object prototype toString method to get at the type of object we are dealing
 * @param {object} object Any Javascript object
 * @returns JavaScript Object Type: Null, Undefined, Array, Function
 * @example 
 *  is([1,2,3]) 
 *  得到"Array"
 */
function is(object) {
  const type = Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];//此处得到圆括号中匹配的值
   /** wycNOTE:
    ** Object.prototype.toString(): 
    如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]", type可以为Null, Undefined, Array, Function
      * 直接对数组或函数进行调用，如[1,2,3].toString()不能实现，因为数组的toString()覆盖了Object.prototype.toString()
    ** String.prototype.match(regexp):当一个字符串与一个正则表达式匹配时，检索匹配项。
     * return值：如果字符串匹配到了表达式，会返回一个数组，数组的第1项是进行匹配完整的字符串，之后的项是圆括号捕获的结果。如果没有匹配到，返回null
    */
  return type;
}

/**
 * Creates a method for testing the type of an Object
 * @param {string} className The name of the object type to be tested e.g. Array,Function,Null
 * @returns a method that takes any javascript object and tests if it is of
 * the supplied className
 * @example createIsTest("Array")([1,2,3])
 */
function createIsTest(className) {
  return function(obj) {
    return is(obj) === className;
  };
}

