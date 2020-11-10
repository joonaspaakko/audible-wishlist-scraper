// V.1.0.
(function() {
  
  var slimMarkdown = false;
  
  String.prototype.trimAll = function(){
    return this.trim().replace(/\s+/g,' ');
  }
  
  // https://github.com/Mikhus/domurl
  !function(t){"use strict";var y=/^[a-z]+:/,d=/[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,v=/\/\/(.*?)(?::(.*?))?@/,r=/^win/i,g=/:$/,m=/^\?/,q=/^#/,w=/(.*\/)/,A=/^\/{2,}/,I=/(^\/?)/,e=/'/g,o=/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,n=/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,i=/%([0-7][0-9a-f])/gi,s=/\+/g,a=/^\w:$/,C=/[^/#?]/;var p,S="undefined"==typeof window&&"undefined"!=typeof global&&"function"==typeof require,b=!S&&t.navigator&&t.navigator.userAgent&&~t.navigator.userAgent.indexOf("MSIE"),x=S?t.require:null,j={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},z={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};function E(){return S?p=p||"file://"+(process.platform.match(r)?"/":"")+x("fs").realpathSync("."):"about:srcdoc"===document.location.href?self.parent.document.location.href:document.location.href}function h(t,r,e){var o,n,i;r=r||E(),S?o=x("url").parse(r):(o=document.createElement("a")).href=r;var a,s,p=(s={path:!0,query:!0,hash:!0},(a=r)&&y.test(a)&&(s.protocol=!0,s.host=!0,d.test(a)&&(s.port=!0),v.test(a)&&(s.user=!0,s.pass=!0)),s);for(n in i=r.match(v)||[],j)p[n]?t[n]=o[j[n]]||"":t[n]="";if(t.protocol=t.protocol.replace(g,""),t.query=t.query.replace(m,""),t.hash=F(t.hash.replace(q,"")),t.user=F(i[1]||""),t.pass=F(i[2]||""),t.port=z[t.protocol]==t.port||0==t.port?"":t.port,!p.protocol&&C.test(r.charAt(0))&&(t.path=r.split("?")[0].split("#")[0]),!p.protocol&&e){var h=new L(E().match(w)[0]),u=h.path.split("/"),c=t.path.split("/"),f=["protocol","user","pass","host","port"],l=f.length;for(u.pop(),n=0;n<l;n++)t[f[n]]=h[f[n]];for(;".."===c[0];)u.pop(),c.shift();t.path=("/"!==r.charAt(0)?u.join("/"):"")+"/"+c.join("/")}t.path=t.path.replace(A,"/"),b&&(t.path=t.path.replace(I,"/")),t.paths(t.paths()),t.query=new U(t.query)}function u(t){return encodeURIComponent(t).replace(e,"%27")}function F(t){return(t=(t=(t=t.replace(s," ")).replace(o,function(t,r,e,o){var n=parseInt(r,16)-224,i=parseInt(e,16)-128;if(0==n&&i<32)return t;var a=(n<<12)+(i<<6)+(parseInt(o,16)-128);return 65535<a?t:String.fromCharCode(a)})).replace(n,function(t,r,e){var o=parseInt(r,16)-192;if(o<2)return t;var n=parseInt(e,16)-128;return String.fromCharCode((o<<6)+n)})).replace(i,function(t,r){return String.fromCharCode(parseInt(r,16))})}function U(t){for(var r=t.split("&"),e=0,o=r.length;e<o;e++){var n=r[e].split("="),i=decodeURIComponent(n[0].replace(s," "));if(i){var a=void 0!==n[1]?F(n[1]):null;void 0===this[i]?this[i]=a:(this[i]instanceof Array||(this[i]=[this[i]]),this[i].push(a))}}}function L(t,r){h(this,t,!r)}U.prototype.toString=function(){var t,r,e="",o=u;for(t in this){var n=this[t];if(!(n instanceof Function||void 0===n))if(n instanceof Array){var i=n.length;if(!i){e+=(e?"&":"")+o(t)+"=";continue}for(r=0;r<i;r++){var a=n[r];void 0!==a&&(e+=e?"&":"",e+=o(t)+(null===a?"":"="+o(a)))}}else e+=e?"&":"",e+=o(t)+(null===n?"":"="+o(n))}return e},L.prototype.clearQuery=function(){for(var t in this.query)this.query[t]instanceof Function||delete this.query[t];return this},L.prototype.queryLength=function(){var t=0;for(var r in this.query)this.query[r]instanceof Function||t++;return t},L.prototype.isEmptyQuery=function(){return 0===this.queryLength()},L.prototype.paths=function(t){var r,e="",o=0;if(t&&t.length&&t+""!==t){for(this.isAbsolute()&&(e="/"),r=t.length;o<r;o++)t[o]=!o&&a.test(t[o])?t[o]:u(t[o]);this.path=e+t.join("/")}for(o=0,r=(t=("/"===this.path.charAt(0)?this.path.slice(1):this.path).split("/")).length;o<r;o++)t[o]=F(t[o]);return t},L.prototype.encode=u,L.prototype.decode=F,L.prototype.isAbsolute=function(){return this.protocol||"/"===this.path.charAt(0)},L.prototype.toString=function(){return(this.protocol&&this.protocol+"://")+(this.user&&u(this.user)+(this.pass&&":"+u(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+u(this.hash))},t[t.exports?"exports":"Url"]=L}("undefined"!=typeof module&&module.exports?module:window);
  
  var currentPage = 1; var pagesTotal;
  var loading = function( staticText, pageCounter ) {
    var h = ['.  ', '.. ', '...', '   '];
    var i = 0;
    return setInterval(() => {
      i = (i > 3) ? 0 : i;
      console.clear();
      console.log( (pageCounter ? currentPage +'/'+ pagesTotal + ' pages - ' : '') + (staticText ? staticText : 'Loading') + h[i]);
      i++;
    }, 300);
  };
  
  var get = function( url, callback ) {
    var script = document.createElement('script');
    script.onload = function () {
      callback();
    };
    script.src = url;
    document.head.appendChild(script);
  }
  
  get('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js', function() {
    get('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js', init);
  });

  function init() {
    
    var inWishlist = $('#wishlist-content-main').length > 0;
    if ( inWishlist ) {
      
      // Get max pageSize - We have to load the page once with the desired pageSize url param in order to get the total number of pages
      
      var probeTimer = loading('Fetching wishlist pages');
      axios.get( getUrl() ).then(function( response ) {
          
        var audible = $($.parseHTML(response.data)).find('div.adbl-main');
        var lastPageNumberEl = audible.find('#pagination-a11y-skiplink-target .pageNumberElement.bc-link:last');
        lastPageNumber = lastPageNumberEl.length > 0 ? parseFloat( lastPageNumberEl.data('value') ) : 1;
        
        pagesTotal = lastPageNumber;
        clearInterval( probeTimer );
        console.clear();
        var pageTimer = loading('Processing pages', true);
        var pageRange = _.range(1, lastPageNumber+1 );
        
        ajaxios({
          request: _.map( pageRange, function( page ) { return	getUrl( page ); }),
          step: function( response ) {
            
            if (response.status >= 400) {
              console.log( 'something went wrong with this page' );
            }
            else {
              
              ++currentPage;
              
              var audible = $($.parseHTML(response.data)).find('div.adbl-main');
              var contentWrapper = audible.find('#wishlist-content-main');
              var titles = contentWrapper.find('[id^="lib-item-row-"]');
              
              var books = [];
              titles.each(function() {
                var getBooks = fetchBookDetails( $(this) );
                books.push( getBooks );
              });
              
              return books;
              
            }
            
            
          },
          done: function(responses) {

            clearInterval( pageTimer );
            console.clear();
            
            const books = _.flatten( responses );
            processOutput( books );
            
          }
        });
        
      });
      
    }
    else {
      console.log("Error: You need to be in your wishlist page, this doesn't seem to be it...");
    }
    
  }
  
  function getUrl( page ) {
    
    var url;
    url = new Url( window.location.href );
    
    url.query.pageSize = 30;
    if ( page ) url.query.page = page;
    else url.query.page = 1;
    
    url = url.toString();
    return url;
    
  }
  
  function urlPurify( url, retainArray ) {
    
    url = new Url( url );
    
    if ( retainArray ) retainQueries( url, retainArray );
    else url.clearQuery();
    
    url.query.ipRedirectOverride = true;
    url.query.overrideBaseCountry = true;
    
    return url.toString();
    
  }
  
  function retainQueries( url, queries ) {
	
    var storageBox = [];
    
    $.each( queries, function( i, query ) {
      var queryString = url.query[ query ];
      if ( queryString ) storageBox.push({
        name: query,
        string: queryString
      });
    });
    
    url.clearQuery();
    
    $.each( storageBox, function( i, query ) {
      url.query[ query.name ] = query.string;
    });
    
  }
  
  // Goes through ever row of titles in the current page and fetches relevant data
  function fetchBookDetails( row ) {
    
    var book = {};
    
    var cover = row.find('[data-asin] [data-bc-hires]');
    if ( cover.length > 0 ) book.cover = cover.attr('src');

    var sample = row.find('[data-mp3]');
    if ( sample.length > 0 ) book.sample = sample.data('mp3');
    
    var title  = row.find('[id^="title-"]');
    if ( title.length > 0 ) {
      book.title = title.text().trimAll();
      var pageUrl = title.attr('href');
      book.page  = urlPurify( pageUrl );
    }
    
    var authors  = row.find('> td:nth-child(3) > div > span > div > a');
    if ( authors.length > 0 ) book.authors = makeLinkArray( authors );
    
    var narrators  = row.find('> td:nth-child(4) > div > span > div > a');
    if ( narrators.length > 0 ) book.narrators = makeLinkArray( narrators );
    
    var series  = row.find('td:nth-child(2) > div > span > span > ul > li:nth-child(2) > div > a');
    if ( series.length > 0 ) {
      
      var seriesString = row.find('> td:nth-child(2) > div > span > span > ul > li:nth-child(2) > div').html().trimAll();
      seriesString = seriesString.substring(seriesString.indexOf(':')+1).trim();
      seriesString = $.parseHTML(seriesString);
      series = [];
      $.each( seriesString, function( index, object ) {
        
        var string = object.textContent.trim().replace(/^\,/,'').trim().replace(/\,$/, "");
        
        var titleRow = (index+1) % 2;
        var numberRow = !titleRow;
        
        if ( titleRow ) {
          series.push({
            name: string,
            page: urlPurify( object.href, ['asin'])
          });
        }
        else if ( numberRow ) {
          if ( string.match(/\d/) ) {
            // Trims text from the front ("Book ") and splits numbers separated by commas
            var numbers = string.replace(/^[^0-9]*/g, '').trim().split(',');
            // Numbers are added to the previous item
            var lastItem = series[ series.length-1 ];
            lastItem.bookNumbers  = jQuery.map( numbers, function( n, i ) {
              return parseFloat( n );
            });
          }
        }

      });
      
      if ( series.length > 0 ) book.series = series;
      
    }
    else { book.series = null; }
    
    var length = row.find('> td:nth-child(2) > div > span > span > ul > li:nth-child(3) > span');
    if ( length.length > 0 ) book.length = length.text().split(':')[1].trimAll();
    
    var releaseDate  = row.find('> td:nth-child(2) > div > span > span > ul > li:nth-child(4) > span');
    if ( releaseDate.length > 0 ) book.releaseDate = releaseDate.text().split(':')[1].trimAll();
    
    var rating  = row.find('> td:nth-child(2) > div > span > span > ul > li:nth-child(5) > span');
    if ( rating.length > 0 ) book.rating = rating.text().trimAll().match(/([0-9]\.[0-9]|[0-9])+/)[0];
    
    var ratings  = row.find('> td:nth-child(2) > div > span > span > ul > li:nth-child(5)');
    if ( ratings ) {
      ratings.find('*').each(function() {
        $(this).remove();
      });
      var foundRatings = ratings.text().trimAll().match(/([0-9]|\,)+/g);
      if ( foundRatings ) book.ratings = foundRatings[0];
    }
    
    // console.log( book.title );
    
    return book;
    
  }
  
  function makeLinkArray( links ) {
    
    var array = [];
    links.each(function() {
      array.push({
        name: $(this).text().trimAll(),
        page: urlPurify( $(this).attr('href'), ['searchNarrator'] )
      });
    });
    return array;
  }
  function linkArrayToMarkdown( array, series ) {
    
    var md = [];
    $.each( array, function( key, object ) {
      var bookNumbers = series && object.bookNumbers ? ' book ' + object.bookNumbers.join(',') : '';
      md.push( '[' + object.name + ']('+ object.page +')' + bookNumbers );
    });
    return md.join(', ');
    
  }
  function linkArrayToHTML( array, series ) {
    
    var html = [];
    $.each( array, function( key, object ) {
      var bookNumbers = series && object.bookNumbers ? ' book ' + object.bookNumbers.join(',') : '';
      html.push( '<a target="_blank" href="' + object.page + '">'+ object.name +'</a>' + bookNumbers );
    });
    return html.join(', ');
    
  }
  
  function processOutput( books ) {
    
    var markdown = '';
    var html = '';
    var plaintext = '';
    $.each( books, function( index, book ) {
      
      // MARKDOWN
      /*   title     */  markdown += (index+1) + '. ['+ book.title +']('+ book.page +') \n' ;
      if ( !slimMarkdown ) {
        /* authors   */  markdown += '    - **Authors:** ' + linkArrayToMarkdown( book.authors ) + '\n';
        /* narrators */  markdown += '    - **Narrators:** ' + linkArrayToMarkdown( book.narrators ) + '\n';
        /* series    */  if (book.series) markdown += '    - **Series:** ' + linkArrayToMarkdown(book.series, true) + '\n';
        /* sample    */  if (book.sample) markdown += '    - **Sample:** [play sample](' + book.sample + ') \n';
        /* length    */  markdown += '    - **Length:** ' + book.length + '\n' ;
        /* released  */  markdown += '    - **Released:** ' + book.releaseDate + '\n' ;
        /* language  */  if ( book.language ) markdown += '    - **Language:** ' + book.language + '\n';
      }
      /* rating    */  if ( book.rating ) markdown += '    - **Rating:** ' + book.rating + ' ('+ book.ratings +') \n';
      
      // HTML
      html += '\n\n<div class="book"> \n' +
        '<div class="cover"><a target="_blank" href="' + book.page +'"><img src="' + book.cover +'" alt=""/></a></div> \n' +
        '<div class="book-info"> \n'+
          '<a class="title" target="_blank" href="'+ book.page +'">'+ book.title +'</a> \n' +
          '<div class="authors"><strong>Authors:</strong> ' + linkArrayToHTML( book.authors ) + '</div>'+
          '<div class="narrators"><strong>Narrators:</strong> ' + linkArrayToHTML( book.narrators ) + '</div>'+
          (book.series ? '<div class="series"><strong>Series:</strong> ' + linkArrayToHTML( book.series, true ) + '</div>' : '') +
          (book.sample ? '<div class="sample"><strong>Sample:</strong> <a target="_blank" href="'+ book.sample +'">play sample</a></div>' : '') +
          '<div class="length"><strong>Length:</strong> '+ book.length +'</div> \n' +
          '<div class="release"><strong>Released:</strong> '+ book.releaseDate +'</div> \n' +
          (book.language ? '<div class="language"><strong>Language:</strong> '+ book.language +'</div> \n' : '') +
          (book.rating ? '<div class="rating"><strong>Rating:</strong> '+ book.rating + '<span class="ratings"> ('+ book.ratings +')</span>' +'</div> \n' : '') +
        '</div> \n' +
      '</div> \n';
      
      // PLAINTEXT
      plaintext += book.title + ' → '+ book.page +' \n\n';
      
    });
    
    // HTML styling
    html += '\n\n<style>' +
      '.top-nav, .top-nav li {' +
        'margin: 0;' +
        'padding: 0;' +
      '}' +
      '.top-nav li {' +
        'margin-bottom: 8px;' +
      '}' +
      '.top-nav,' +
      '.category-title {' +
        "font-family: 'Helvetica Neue', sans-serif;" +
        'max-width: 600px;' +
        'padding: 0 10px;' +
      '}' +
      '.top-nav,' +
      '.category-title, ' +
      '.book {' +
        "font-family: 'Helvetica Neue', sans-serif;" +
        'max-width: 600px;' +
        'margin: 0 auto;' +
      '}' +
      '.top-nav {' +
        'margin-top: 20px;' +
      '}' +
      '.category-title {' +
        'margin-top: 80px;' +
        'margin-bottom: 13px;' +
      '}' +
      '.category-title:first-child { margin-top: 0; }' +
      '.book {' +
        'border: 1px solid rgba(0,0,0, .08);' +
        'background: rgba(0,0,0, .03);' +
        'display: flex;' +
        'flex-direction: row;' +
        'padding: 20px;' +
        'margin-bottom: 10px;' +
      '}' +
      '.book:first-child {' +
        'margin-top: 40px;' +
      '}' +
      '.book .cover {' +
        'justify-self: center;' +
        'align-self: start;' +
        'padding-right: 20px;' +
      '}' +
      '.book .cover img {' +
        'width: 130px;' +
        'height: auto;' +
      '}' +
      '.book .h3 {' +
        'margin: 0;' +
      '}' +
      '.book .title {' +
        'margin: 0;' +
      '}' +
    '</style>';
    
    $('body').html('');
    
    var textareaCSS = {
      width: '100%',
      height: 200,
      marginBottom: 30
    };
    
    $('<style> html, body, .scraper-row { height: 100% !important; margin-bottom: 0 !important; } .scraper-row, .scraper-col-wrapper { display: flex; flex-direction: row; align-content: stretch; align-items: stretch; margin: 0 !important; height: 100%; flex-grow: 1; width: 100%; } .scraper-col-wrapper { flex-direction: column; margin-left: 20px !important; text-align: center; padding-top: 20px; } .scraper-col-wrapper:first-child { margin-left: 0px !important; } textarea { margin-bottom: 0px !important; height: unset !important; flex-grow: 1; height: 100%; }</style>').appendTo('body');
    
    var row = $('<div class="scraper-row">').appendTo('body');
    
    var markdownWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>Markdown:</strong>').appendTo( markdownWrapper );
    $('<textarea/>', { text: markdown.trim(), css: textareaCSS }).appendTo( markdownWrapper );
    
    var htmlWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>HTML:</strong>').appendTo( htmlWrapper );
    $('<textarea/>', { text: html.trim(), css: textareaCSS }).appendTo( htmlWrapper );
    
    var plaintextWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>Plain Text:</strong>').appendTo( plaintextWrapper );
    $('<textarea/>', { text: plaintext.trim(), css: textareaCSS }).appendTo( plaintextWrapper );
    
    var jsonWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>JSON:</strong>').appendTo( jsonWrapper );
    $('<textarea/>', { text: JSON.stringify(books, null, 2), css: textareaCSS }).appendTo( jsonWrapper );
    
  }
  
  function ajaxios( options ) {
    
    var vue = this;
    
    Promise.all(
      options.request.map( function( url, index, array ) {
        return axios.get( url ).then(function( response ) {
          return response ? options.step(response, index, array) : null;
        }).catch(function( e ) {
          return e.response ? options.step(e.response, index, array) : null;
        });
      })
    ).then( function( response ) {
      options.done( response ); 
    }).catch(function (error) {
      // handle error
      console.log(error);
    });
    
  }
  
}());