/**
 * Typed.js - A library for typing animations
 * Minimal version for your project
 */
class Typed {
    constructor(element, options) {
      this.element = document.querySelector(element);
      this.options = Object.assign({
        strings: ["Default text"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        showCursor: true,
        cursorChar: "|",
        backDelay: 700,
        startDelay: 0
      }, options);
  
      this.isTyping = false;
      this.loopCount = 0;
      this.init();
    }
  
    init() {
      this.textContent = this.element.textContent;
      this.element.textContent = '';
      if (this.options.showCursor) {
        this.cursor = document.createElement('span');
        this.cursor.className = 'typed-cursor';
        this.cursor.textContent = this.options.cursorChar;
        this.element.parentNode.insertBefore(this.cursor, this.element.nextSibling);
      }
      setTimeout(() => this.type(), this.options.startDelay);
    }
  
    type() {
      this.isTyping = true;
      const currentString = this.options.strings[this.loopCount % this.options.strings.length];
      this.typeString(currentString, 0, () => {
        if (this.options.loop) {
          this.loopCount++;
          setTimeout(() => this.backspace(currentString), this.options.backDelay);
        }
      });
    }
  
    typeString(string, index, callback) {
      if (index < string.length) {
        this.element.textContent += string.charAt(index);
        setTimeout(() => this.typeString(string, index + 1, callback), this.options.typeSpeed);
      } else {
        callback();
        this.isTyping = false;
      }
    }
  
    backspace(string) {
      if (string.length > 0) {
        this.element.textContent = string.substring(0, string.length - 1);
        setTimeout(() => this.backspace(this.element.textContent), this.options.backSpeed);
      } else {
        this.type();
      }
    }
  }
  
  // Inisialisasi otomatis untuk element dengan data-typed attribute
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-typed]');
    elements.forEach(el => {
      const options = JSON.parse(el.getAttribute('data-typed-options') || {});
      new Typed(`#${el.id}`, options);
    });
  });