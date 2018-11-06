define(function(require){
	var shortcut	=	function(){
	//キー１つだけ押すショートカット
		Mousetrap.bind("j", function(e) {
			console.log(e);
		console.log("[j] 次の記事へ移動");
		});
		Mousetrap.bind("k", function(e) {
		console.log("[k] 前の記事に移動");
		});

		// 2つ以上のキーを組み合わせたショートカット
		Mousetrap.bind("g a", function(e) {
		console.log("[g a] すべての記事を表示");
		});
		Mousetrap.bind("g s", function(e) {
		console.log("[g s] スターのついた記事を表示");
		});

		// shift を押す必要があるショートカット
		Mousetrap.bind("K", function(e) {
		console.log("[K] 前のフィードを表示");
		});
		Mousetrap.bind("shift+j", function(e) {
		console.log("[J] 次のフィードを表示");
		});
		Mousetrap.bind("?", function(e) {
		console.log("[?] ヘルプを表示");
		});


		// コナミコマンド
		Mousetrap.bind("up up down down left right left right b a", function(e) {
		console.log("[up up down down left right left right b a] コナミコマンド");
		});
	};
	
	return shortcut;
});