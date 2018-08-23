class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

let head = Symbol('head');
let length = Symbol('length');

class LinkedList {
  constructor() {
    this[length] = 0;
    this[head] = null;
  }

  /** 向列表尾部添加元素*/
  append(element) {
    const node = new Node(element);
    let current = null;

    if (!this[head]) {
      this[head] = node;
    } else {
      current = this[head];

      // 找到最末尾的元素
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this[length]++;
  }

  /** 向特定位置插入元素
   * @param {Number} position 要将元素插入链表的位置
   * @param {any}
   * @return {Boolean} 返回插入状态
   */
  insert(position, element) {
    const node = new Node(element);
    let current = this[head],
      previous = null;

    const isValidPosition =
      (typeof position === 'number') && (position >= 0) && (position < this[length]);
    if (!isValidPosition) { return false }

    if (position === 0) {
      node.next = current;
      this[head] = node;
    } else {
      for (let i = 0; i < position; i++) {
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }
    this[length]++;
    return true;
  }

  /** 移除指定元素
   * @return 移除成功时，返回被移除的元素
   */
  remove(element) {
    let current = this[head],
      previous = null;

    if (this[head].element === element) {
      this[head] = current.next;
      this[length]--;
      return current.element;
    }

    while (current.next) {
      previous = current;
      current = current.next;

      if (current.element === element) {
        previous.next = current.next;
        this[length]--;
        return current.element;
      }
    }

    return null;
  }

  /** 从列表的特定位置移除一项
   * @return 移除成功时，返回被移除的元素
   */
  removeAt(position) {
    const isValidPosition =
      (typeof position === 'number') && (position >= 0) && (position < this[length]);

    if (!isValidPosition) { return null }

    if (isValidPosition) {
      let current = this[head],
        previous = null;

      if (position === 0) {
        this[head] = current.next;
      } else {
        for (let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }

        // 将 current node 从链表 链中移除
        previous.next = current.next;
      }
      this[length]--;
      return current.element;
    }
  }

  /** 类似 Array.prototype.join*/
  join(sign = '-') {
    let current = this[head],
      result = '';

    while (current) {
      result += current.element + (current.next ? sign : '');
      current = current.next;
    }

    return result;
  }

  /** 返回元素在列表中的索引；若无改元素，返回 -1
   * @return {Number} 相当于链表的下标 index
   */
  indexOf(element) {
    let current = this[head],
      index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  /** 检查链表是否为空*/
  isEmpty() {
    return this[length] === 0;
  }

  /** 返回链表元素个数*/
  size() {
    return this[length];
  }

  /** 获得头部节点*/
  getHead() {
    return this[head];
  }
}

export default LinkedList;
