class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /** 向列表尾部添加元素*/
  append(element) {
    const node = new Node(element);
    let current = null;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      // 找到最末尾的元素
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  /** 向特定位置插入元素
   * @param {Number} position 要将元素插入链表的位置
   * @param {any}
   * @return {Boolean} 返回插入状态
   */
  insert(position, element) {
    const node = new Node(element);
    let current = this.head,
      previous = null;

    const isValidPosition =
      (typeof position === 'number') && (position >= 0) && (position < this.length);
    if (!isValidPosition) {
      return false
    }

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      for (let i = 0; i < position; i++) {
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  /** 移除指定元素
   * @return 移除成功时，返回被移除的元素
   */
  remove(element) {
    let current = this.head,
      previous = null;

    if (this.head.element === element) {
      this.head = current.next;
      this.length--;
      return current.element;
    }

    while (current.next) {
      previous = current;
      current = current.next;

      if (current.element === element) {
        previous.next = current.next;
        this.length--;
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
      (typeof position === 'number') && (position >= 0) && (position < this.length);

    if (isValidPosition) {
      let current = this.head,
        previous = null;

      if (position === 0) {
        this.head = current.next;
      } else {
        for (let i = 0; i < position; i++) {
          previous = current;
          current = current.next;
        }

        // 将 current node 从链表 链中移除
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }

    if (!isValidPosition) {
      return null
    }
  }

  /** 返回元素在列表中的索引；若无改元素，返回 -1
   * 
   */
  indexOf(element) {

  }

  /** 检查链表为空时，返回 true
   * 
   */
  isEmpty() {

  }

  /** 返回链表元素个数 
   * @return {Number}
   */
  size() {

  }

}

export default LinkedList;