angular.module('freedomsworn')

	// Available BB code snippets
	.value('snippets', {
		"b": "<b>$1</b>",
		"u": "<u>$1</u>",
		"i": "<i>$1</i>",
		"s": "<s>$1</s>",
		"size=([^\\[\\]<>]+?)": "<span style='font-size: $1px'>$2</span>",
		"color=([^\\[\\]<>]+?)": "<span style='color: $1'>$2</span>",
		
		"left": "<div style='text-align: left'>$1</div>",
		"right": "<div style='text-align: right'>$1</div>",
		"center": "<div style='text-align: center'>$1</div>",
		
		"quote": "<blockquote>$1</blockquote>",
		"quote=([^\\[\\]<>]+?)": "<blockquote><p>$2</p><footer>&nbsp;- $1</footer></blockquote>",
		
		"img": "<img src=\"$1\" />",
		"img=([^\\[\\]<>]+?)": "<img src=\"$1\" alt=\"$2\" />",
		"url": "<a href=\"$1\" target=\"_blank\" title=\"$1\">$1</a>",
		"url=([^\\[\\]<>]+?)": "<a href=\"$1\" title=\"$2\">$2</a>",
		
	})
	
	// Format BB code
	.component('fsBbcode', {
		controllerAs: 'vm',
		bindings: {
			content: '='
		},
		controller($reactive, $scope, $element, snippets) {
			'ngInject';
			
			$reactive(this).attach($scope);
			
			this.autorun(()=> {
				this.getReactively('content');
				
				if(!this.content) return;
				
				var contents = this.content.toString();
				
				contents.replace(/^\s+|\s+$/i, '');
				
				for(var i in snippets) {
					var regexp = new RegExp('\\[' + i + '\\](.+?)\\[\/' + i.replace(/[^a-z]/g, '') + '\\]', 'gi');
					
					contents = contents.replace(regexp, snippets[i]);
					
				}
				
				contents = contents.replace(/(?:\r\n|\n|\r)/gi, '<br>');
				
				$element.html(contents);
				
			});
			
		}
	});