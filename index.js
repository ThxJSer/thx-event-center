let eventCenterUuid = '';
  
const useEventCenter = (setUuid) => {

    eventCenterUuid = setUuid;
    
    return {
        initEventCenter: initEventCenter,
        callCenter : callCenter
    };
};

const callCenter = (v) => {

        const event = new CustomEvent(eventCenterUuid, {
        detail: v
    });
    document.dispatchEvent( event ) ;
};

const initEventCenter = (controller) => {

    document.addEventListener(eventCenterUuid, (e) => {

    const {eventName, params} = e.detail;
        // alert(eventName);
        // alert(params);

        if(typeof controller[eventName] == 'undefined'){

            console.log('no controller in initEventCenter!');
            return;
        }

        controller[eventName](params);
    }); 
};

module.exports = useEventCenter;