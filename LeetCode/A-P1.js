/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
   //se crea el HASH
    const hash = {};
    // se realiza un loop de los nums recibidos
    for (let param = 0; param < nums.length; param++) {
        const x = nums[param];//tomamos el valor actual de nums
        if (hash[target - x] !== undefined) { // evaluamos si el numero que necesitamos ADD al valor acutal {x} para llegar a nuestro objetivo {target} ha sido visto
            return [hash[target - x], param];//tomamos el index del numero visto y el index del valor actual.
        }
        hash[x] = param;//actualizamos el el hash para incluir el valor que recien se evaluo junto con su index.
    }
    return []; // si no se agregan numeros que sumados den el target se  regresa un array vacio.
};
twoSum('twoSum: ',[2, 3, 4, 5], 9);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
        console.log(l1.reverse());
};