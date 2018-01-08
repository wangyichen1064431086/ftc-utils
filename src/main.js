function getRandomInt(min, max) {
  /**
   * @dest 生成min~max之间的随机整数，如果min和max都为整数，那么生成区间包含min,不包含max
   * @param min TYPE Number, the min value of the range min~max
   * @param max TYPE Number, the max value of the range min~max
   * @return TYPE Int, the random int between min~max, witch containing min ,not containg max
   */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
