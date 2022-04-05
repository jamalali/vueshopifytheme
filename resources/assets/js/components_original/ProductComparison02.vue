<template>
  <mobile-product-comparison v-if="! isBreakpoint('md')"
    :superior="superior">
    <slot></slot>
  </mobile-product-comparison>

  <div v-else
    id="desktop-table"
    class="items-center overflow-x-scroll py-8 xl:py-16 mx-8 xl:flex xl:mx-24 cursor-grab">
    <div class="flex-grow pointer-events-none">
      <comparison-table-02
        :data="superior.data"
        :featured-col="superior.featuredCol"
        :headings="superior.headings">
      </comparison-table-02>
    </div>
  </div>
</template>

<script>
import breakpoints from '../breakpoints';
import MobileProductComparison from './MobileProductComparison02';

export default {
  props: ['superior'],

  components: { MobileProductComparison },

  data: function () {
    return {
      viewportWidth: window.innerWidth,
      el: '',
      startx: 0,
      starty: 0,
      diffx: 0,
      diffy: 0,
      drag: false
    };
  },

  methods: {
    isBreakpoint (breakpoint) {
      return this.viewportWidth >= breakpoints[breakpoint];
    },

    selectClick () {
      this.$refs['table-select'].click();
    },

    addEvent (name, el, func) {
      if (el.addEventListener) {
        el.addEventListener(name, func, false);
      } else if (el.attachEvent) {
        el.attachEvent('on' + name, func);
      } else {
        el[name] = func;
      }
    },

    onMouseDown (e) {
      if (!e) { e = window.event; }
      if (e.target && e.target.nodeName === 'IMG') {
        e.preventDefault();
      } else if (e.srcElement && e.srcElement.nodeName === 'IMG') {
        e.returnValue = false;
      }
      this.startx = e.clientX + this.el.scrollLeft;
      this.starty = e.clientY + this.el.scrollTop;
      this.diffx = 0;
      this.diffy = 0;
      this.drag = true;
    },

    onMouseMove (e) {
      if (this.drag === true) {
        if (!e) { e = window.event; }
        this.diffx = (this.startx - (e.clientX + this.el.scrollLeft));
        this.diffy = (this.starty - (e.clientY + this.el.scrollTop));
        this.el.scrollLeft += this.diffx;
        this.el.scrollTop += this.diffy;
      }
    },

    onMouseUp (e) {
      if (!e) { e = window.event; }
      this.drag = false;
      var el = this.el;
      var diffx = this.diffx;
      var diffy = this.diffy;
      var start = 1;
      var animate = function () {
        const step = Math.sin(start);
        if (step <= 0) {
          window.cancelAnimationFrame(animate);
        } else {
          el.scrollLeft += diffx * step;
          el.scrollTop += diffy * step;
          start -= 0.02;
          window.requestAnimationFrame(animate);
        }
      };
      animate();
    }
  },

  created () {
    window.addEventListener('resize', () => {
      this.viewportWidth = window.innerWidth;
    });
  },
  mounted () {
    if (this.isBreakpoint('md')) {
      this.el = document.getElementById('desktop-table');
      this.addEvent('mousedown', this.el, this.onMouseDown);
      this.addEvent('mousemove', this.el, this.onMouseMove);
      this.addEvent('mouseup', this.el, this.onMouseUp);
    }
  },
  destroyed () {
    window.removeEventListener('resize', () => {
      this.viewportWidth = window.innerWidth;
    });
  }
};
</script>
