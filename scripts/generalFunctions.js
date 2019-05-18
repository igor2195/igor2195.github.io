



//remove elements from 'selectorElementsToRemove' and add 'list' of elements
//by 'selectorElementsToAdd' with 'addingElementPrefix' and 'addingElementPostfix'
//f.e. '#lastChanels li', lastResults, '#lastChanels', '<li>', '</li>'
function removeElementsInList(selectorElementsToRemove){
    while ($(selectorElementsToRemove).length){
        $(selectorElementsToRemove).first().remove();
    }
}

// //resize text for correct imaging (without missed words) in section
// function resizeFontForContainer(containerSelector, elementSelector){
//     var fontsize = $(elementSelector).css('font-size');
    
//     if($(elementSelector).height() >= $(containerSelector).height()){
//         $(elementSelector).css('fontSize', parseFloat(fontsize) - 1);
//         resizeFontForContainer(containerSelector, elementSelector);
//     }
// }

function addStreamToStreamsList(logoUrl, preview, status, channelName, viewers, gameName, sectionSelector){
    $(sectionSelector).append($(
        // "<div class='gameInList'>" + 
        //     // "<div class='streamImage'><img src=" + logoUrl + "></img></div>" +
        //     "<div class='streamPreview'><img src=" + preview + "></img></div>" +
        //     "<duv class='streamTextInfo'>" +
        //     "<div class='streamTitle'>" + status + "</div>" +
        //     "<div class='streamInfo'><div class='mainStreamInfo'><b>" + channelName + "</b>" + "<label> playing </label><b>" + gameName + "</b></div>" + 
        //     "<div class='viewers' class='floatRight'><label>" + viewers + "<i class='far fa-eye'></i></label></div></div>" +                
        //     "</div>" +
        // "</div>"
        `<div class='gameInList'> 
            <div class='streamPreview'><img src="${preview}"></img>
            <div class="overlay">
            <div class='viewers' class='floatRight'><label>${viewers} <i class='far fa-eye'></i></label></div>
            </div>
            </div>
            <div class='streamTextInfo'>
            <div class='streamTitle'>${status}</div>
            <div class='streamInfo'><div class='mainStreamInfo'><b>${channelName}</b><label> playing </label><b>${gameName}</b></div> 
            </div>
        </div>`
    ));
    
};