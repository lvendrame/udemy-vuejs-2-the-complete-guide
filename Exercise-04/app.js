new Vue({
  el: '#exercise',
  data: {
  	effect: '',
    myClass: '',
    textClass: '',
    putSize: 'false',
    paddingValue: '0',
    progress: 0
  },
  computed: {
  	composedClasses: function(){
      var vm = this;
    	return [
      	this.textClass,
        {size: vm.putSize==="true"}
      ];
    },
    progressStyle: function(){
      var vm = this;
    	return {
      	'border-left-width': (vm.progress * 2) + 'px',
        'border-right-width': (200 - (vm.progress * 2)) + 'px'
      };
    }
  },
  methods: {
    startEffect: function() {
    	var vm = this;
    	setInterval(function(){
      	vm.effect = (vm.effect!=='highlight') ? 'highlight' : 'shrink';
      }, 1000);
    },
    startProgress: function(){
    	var vm = this;
    	setInterval(function(){
      	vm.progress = vm.progress + 1;
        if(vm.progress > 100){
          vm.progress = 0;
        }
      }, 100);
    }
  }
});
