/*!
 * mdk-photo-upload-index.js
 * 
 * Created by Ju2ender on 2013-08-08 13:48:12.
 */

$(function () {
  
  $('.ui-loader').hide();

  $('.container-inner').css('min-height', $('.ui-page').css('min-height'));
  
  var txtWidth = $('.txt-member-card').outerWidth() - $('.txt-title').outerWidth() - $('.txt-left').outerWidth() - $('.txt-right').outerWidth();
  $('.txt-mid').width(txtWidth);
  
});
