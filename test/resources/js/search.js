var myHistory = [],
    h = -1,
    accentMap = {
	    'ẚ':'a',
	    'Á':'a',
	    'á':'a',
	    'À':'a',
	    'à':'a',
	    'Ă':'a',
	    'ă':'a',
	    'Ắ':'a',
	    'ắ':'a',
	    'Ằ':'a',
	    'ằ':'a',
	    'Ẵ':'a',
	    'ẵ':'a',
	    'Ẳ':'a',
	    'ẳ':'a',
	    'Â':'a',
	    'â':'a',
	    'Ấ':'a',
	    'ấ':'a',
	    'Ầ':'a',
	    'ầ':'a',
	    'Ẫ':'a',
	    'ẫ':'a',
	    'Ẩ':'a',
	    'ẩ':'a',
	    'Ǎ':'a',
	    'ǎ':'a',
	    'Å':'a',
	    'å':'a',
	    'Ǻ':'a',
	    'ǻ':'a',
	    'Ä':'a',
	    'ä':'a',
	    'Ǟ':'a',
	    'ǟ':'a',
	    'Ã':'a',
	    'ã':'a',
	    'Ȧ':'a',
	    'ȧ':'a',
	    'Ǡ':'a',
	    'ǡ':'a',
	    'Ą':'a',
	    'ą':'a',
	    'Ā':'a',
	    'ā':'a',
	    'Ả':'a',
	    'ả':'a',
	    'Ȁ':'a',
	    'ȁ':'a',
	    'Ȃ':'a',
	    'ȃ':'a',
	    'Ạ':'a',
	    'ạ':'a',
	    'Ặ':'a',
	    'ặ':'a',
	    'Ậ':'a',
	    'ậ':'a',
	    'Ḁ':'a',
	    'ḁ':'a',
	    'Ⱥ':'a',
	    'ⱥ':'a',
	    'Ǽ':'a',
	    'ǽ':'a',
	    'Ǣ':'a',
	    'ǣ':'a',
	    'Ḃ':'b',
	    'ḃ':'b',
	    'Ḅ':'b',
	    'ḅ':'b',
	    'Ḇ':'b',
	    'ḇ':'b',
	    'Ƀ':'b',
	    'ƀ':'b',
	    'ᵬ':'b',
	    'Ɓ':'b',
	    'ɓ':'b',
	    'Ƃ':'b',
	    'ƃ':'b',
	    'Ć':'c',
	    'ć':'c',
	    'Ĉ':'c',
	    'ĉ':'c',
	    'Č':'c',
	    'č':'c',
	    'Ċ':'c',
	    'ċ':'c',
	    'Ç':'c',
	    'ç':'c',
	    'Ḉ':'c',
	    'ḉ':'c',
	    'Ȼ':'c',
	    'ȼ':'c',
	    'Ƈ':'c',
	    'ƈ':'c',
	    'ɕ':'c',
	    'Ď':'d',
	    'ď':'d',
	    'Ḋ':'d',
	    'ḋ':'d',
	    'Ḑ':'d',
	    'ḑ':'d',
	    'Ḍ':'d',
	    'ḍ':'d',
	    'Ḓ':'d',
	    'ḓ':'d',
	    'Ḏ':'d',
	    'ḏ':'d',
	    'Đ':'d',
	    'đ':'d',
	    'ᵭ':'d',
	    'Ɖ':'d',
	    'ɖ':'d',
	    'Ɗ':'d',
	    'ɗ':'d',
	    'Ƌ':'d',
	    'ƌ':'d',
	    'ȡ':'d',
	    'ð':'d',
	    'É':'e',
	    'Ə':'e',
	    'Ǝ':'e',
	    'ǝ':'e',
	    'é':'e',
	    'È':'e',
	    'è':'e',
	    'Ĕ':'e',
	    'ĕ':'e',
	    'Ê':'e',
	    'ê':'e',
	    'Ế':'e',
	    'ế':'e',
	    'Ề':'e',
	    'ề':'e',
	    'Ễ':'e',
	    'ễ':'e',
	    'Ể':'e',
	    'ể':'e',
	    'Ě':'e',
	    'ě':'e',
	    'Ë':'e',
	    'ë':'e',
	    'Ẽ':'e',
	    'ẽ':'e',
	    'Ė':'e',
	    'ė':'e',
	    'Ȩ':'e',
	    'ȩ':'e',
	    'Ḝ':'e',
	    'ḝ':'e',
	    'Ę':'e',
	    'ę':'e',
	    'Ē':'e',
	    'ē':'e',
	    'Ḗ':'e',
	    'ḗ':'e',
	    'Ḕ':'e',
	    'ḕ':'e',
	    'Ẻ':'e',
	    'ẻ':'e',
	    'Ȅ':'e',
	    'ȅ':'e',
	    'Ȇ':'e',
	    'ȇ':'e',
	    'Ẹ':'e',
	    'ẹ':'e',
	    'Ệ':'e',
	    'ệ':'e',
	    'Ḙ':'e',
	    'ḙ':'e',
	    'Ḛ':'e',
	    'ḛ':'e',
	    'Ɇ':'e',
	    'ɇ':'e',
	    'ɚ':'e',
	    'ɝ':'e',
	    'Ḟ':'f',
	    'ḟ':'f',
	    'ᵮ':'f',
	    'Ƒ':'f',
	    'ƒ':'f',
	    'Ǵ':'g',
	    'ǵ':'g',
	    'Ğ':'g',
	    'ğ':'g',
	    'Ĝ':'g',
	    'ĝ':'g',
	    'Ǧ':'g',
	    'ǧ':'g',
	    'Ġ':'g',
	    'ġ':'g',
	    'Ģ':'g',
	    'ģ':'g',
	    'Ḡ':'g',
	    'ḡ':'g',
	    'Ǥ':'g',
	    'ǥ':'g',
	    'Ɠ':'g',
	    'ɠ':'g',
	    'Ĥ':'h',
	    'ĥ':'h',
	    'Ȟ':'h',
	    'ȟ':'h',
	    'Ḧ':'h',
	    'ḧ':'h',
	    'Ḣ':'h',
	    'ḣ':'h',
	    'Ḩ':'h',
	    'ḩ':'h',
	    'Ḥ':'h',
	    'ḥ':'h',
	    'Ḫ':'h',
	    'ḫ':'h',
	    'H':'h',
	    '̱':'h',
	    'ẖ':'h',
	    'Ħ':'h',
	    'ħ':'h',
	    'Ⱨ':'h',
	    'ⱨ':'h',
	    'Í':'i',
	    'í':'i',
	    'Ì':'i',
	    'ì':'i',
	    'Ĭ':'i',
	    'ĭ':'i',
	    'Î':'i',
	    'î':'i',
	    'Ǐ':'i',
	    'ǐ':'i',
	    'Ï':'i',
	    'ï':'i',
	    'Ḯ':'i',
	    'ḯ':'i',
	    'Ĩ':'i',
	    'ĩ':'i',
	    'İ':'i',
	    'i':'i',
	    'Į':'i',
	    'į':'i',
	    'Ī':'i',
	    'ī':'i',
	    'Ỉ':'i',
	    'ỉ':'i',
	    'Ȉ':'i',
	    'ȉ':'i',
	    'Ȋ':'i',
	    'ȋ':'i',
	    'Ị':'i',
	    'ị':'i',
	    'Ḭ':'i',
	    'ḭ':'i',
	    'I':'i',
	    'ı':'i',
	    'Ɨ':'i',
	    'ɨ':'i',
	    'Ĵ':'j',
	    'ĵ':'j',
	    'J':'j',
	    'ǰ':'j',
	    'ȷ':'j',
	    'Ɉ':'j',
	    'ɉ':'j',
	    'ʝ':'j',
	    'ɟ':'j',
	    'ʄ':'j',
	    'Ḱ':'k',
	    'ḱ':'k',
	    'Ǩ':'k',
	    'ǩ':'k',
	    'Ķ':'k',
	    'ķ':'k',
	    'Ḳ':'k',
	    'ḳ':'k',
	    'Ḵ':'k',
	    'ḵ':'k',
	    'Ƙ':'k',
	    'ƙ':'k',
	    'Ⱪ':'k',
	    'ⱪ':'k',
	    'Ĺ':'a',
	    'ĺ':'l',
	    'Ľ':'l',
	    'ľ':'l',
	    'Ļ':'l',
	    'ļ':'l',
	    'Ḷ':'l',
	    'ḷ':'l',
	    'Ḹ':'l',
	    'ḹ':'l',
	    'Ḽ':'l',
	    'ḽ':'l',
	    'Ḻ':'l',
	    'ḻ':'l',
	    'Ł':'l',
	    'ł':'l',
	    'Ł':'l',
	    'ł':'l',
	    'ƚ':'l',
	    'Ⱡ':'l',
	    'ⱡ':'l',
	    'Ɫ':'l',
	    'ɫ':'l',
	    'ɬ':'l',
	    'ɭ':'l',
	    'ȴ':'l',
	    'Ḿ':'m',
	    'ḿ':'m',
	    'Ṁ':'m',
	    'ṁ':'m',
	    'Ṃ':'m',
	    'ṃ':'m',
	    'ɱ':'m',
	    'Ń':'n',
	    'ń':'n',
	    'Ǹ':'n',
	    'ǹ':'n',
	    'Ň':'n',
	    'ň':'n',
	    'Ñ':'n',
	    'ñ':'n',
	    'Ṅ':'n',
	    'ṅ':'n',
	    'Ņ':'n',
	    'ņ':'n',
	    'Ṇ':'n',
	    'ṇ':'n',
	    'Ṋ':'n',
	    'ṋ':'n',
	    'Ṉ':'n',
	    'ṉ':'n',
	    'Ɲ':'n',
	    'ɲ':'n',
	    'Ƞ':'n',
	    'ƞ':'n',
	    'ɳ':'n',
	    'ȵ':'n',
	    'N':'n',
	    'n':'n',
	    'Ó':'o',
	    'ó':'o',
	    'Ò':'o',
	    'ò':'o',
	    'Ŏ':'o',
	    'ŏ':'o',
	    'Ô':'o',
	    'ô':'o',
	    'Ố':'o',
	    'ố':'o',
	    'Ồ':'o',
	    'ồ':'o',
	    'Ỗ':'o',
	    'ỗ':'o',
	    'Ổ':'o',
	    'ổ':'o',
	    'Ǒ':'o',
	    'ǒ':'o',
	    'Ö':'o',
	    'ö':'o',
	    'Ȫ':'o',
	    'ȫ':'o',
	    'Ő':'o',
	    'ő':'o',
	    'Õ':'o',
	    'õ':'o',
	    'Ṍ':'o',
	    'ṍ':'o',
	    'Ṏ':'o',
	    'ṏ':'o',
	    'Ȭ':'o',
	    'ȭ':'o',
	    'Ȯ':'o',
	    'ȯ':'o',
	    'Ȱ':'o',
	    'ȱ':'o',
	    'Ø':'o',
	    'ø':'o',
	    'Ǿ':'o',
	    'ǿ':'o',
	    'Ǫ':'o',
	    'ǫ':'o',
	    'Ǭ':'o',
	    'ǭ':'o',
	    'Ō':'o',
	    'ō':'o',
	    'Ṓ':'o',
	    'ṓ':'o',
	    'Ṑ':'o',
	    'ṑ':'o',
	    'Ỏ':'o',
	    'ỏ':'o',
	    'Ȍ':'o',
	    'ȍ':'o',
	    'Ȏ':'o',
	    'ȏ':'o',
	    'Ơ':'o',
	    'ơ':'o',
	    'Ớ':'o',
	    'ớ':'o',
	    'Ờ':'o',
	    'ờ':'o',
	    'Ỡ':'o',
	    'ỡ':'o',
	    'Ở':'o',
	    'ở':'o',
	    'Ợ':'o',
	    'ợ':'o',
	    'Ọ':'o',
	    'ọ':'o',
	    'Ộ':'o',
	    'ộ':'o',
	    'Ɵ':'o',
	    'ɵ':'o',
	    'Ṕ':'p',
	    'ṕ':'p',
	    'Ṗ':'p',
	    'ṗ':'p',
	    'Ᵽ':'p',
	    'Ƥ':'p',
	    'ƥ':'p',
	    'P':'p',
	    'p':'p',
	    'ẗ':'t',
	    'Ṫ':'t',
	    'ṫ':'t',
      	    'W':'w',
	    'ẘ':'w',
	    'Ẅ':'w',
	    'Ẅ':'w',
	    'ẅ':'w',
	    'Ẇ':'w',
	    'ẇ':'w',
	    'Ẉ':'w',
	    'ẉ':'w',
	    'Ẍ':'x',
	    'ẍ':'x',
	    'Ẋ':'x',
	    'ẋ':'x',
	    'Ý':'y',
	    'ý':'y',
	    'Ỳ':'y',
	    'ỳ':'y',
	    'Ŷ':'y',
	    'ŷ':'y',
	    'Y':'y',
	    'ẙ':'y',
	    'Ÿ':'y',
	    'ÿ':'y',
	    'Ỹ':'y',
	    'ỹ':'y',
	    'Ẏ':'y',
	    'ẏ':'y',
	    'Ȳ':'y',
	    'ȳ':'y',
	    'Ỷ':'y',
	    'ỷ':'y',
	    'Ỵ':'y',
	    'ỵ':'y',
	    'ʏ':'y',
	    'Ɏ':'y',
	    'ɏ':'y',
	    'Ƴ':'y',
	    'ƴ':'y',
	    'Ź':'z',
	    'ź':'z',
	    'Ẑ':'z',
	    'ẑ':'z',
	    'Ž':'z',
	    'ž':'z',
	    'Ż':'z',
	    'ż':'z',
	    'Ẓ':'z',
	    'ẓ':'z',
	    'Ẕ':'z',
	    'ẕ':'z',
	    'Ƶ':'z',
	    'ƶ':'z',
	    'Ȥ':'z',
	    'ȥ':'z',
	    'ʐ':'z',
	    'ʑ':'z',
	    'Ⱬ':'z',
	    'ⱬ':'z',
	    'Ǯ':'z',
	    'ǯ':'z',
            'ƺ':'z'
    }

$(function() {
    var normalize = function(term) {
	var ret = "";
        for (var i = 0; i < term.length; i++) {
            ret += accentMap[term.charAt(i)] || term.charAt(i);
        }
        return ret;
    };

    function extractLast(term) {
	return term.split(/,\s*/).pop();
    }
    
    $("#tags").textinput({
        //select first option in dropdown menu when pushing return    
        
        create: function(event, ui) {
	    h++;
            $(this).val(ui.item.label); 
            loadTreeFromFile(ui.item.value);
            myHistory[h] = ui.item.value;        
            myHistory.splice(h + 1, myHistory.length - 1);
            return false;
        }
    });

    $("#go-forward").click(function(){
        if (h === myHistory.length - 1){
        } else {
	    h++;
            $("#tags").val(myHistory[h]);
            loadTreeFromFile(myHistory[h]);
        }      
    })

    $("#go-back").click(function(){
        if (h == 0){
        } else {
	    h --;
            $("#tags").val(myHistory[h]);
            loadTreeFromFile(myHistory[h]);  
        }
    })
})
