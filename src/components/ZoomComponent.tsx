import React, { useEffect } from 'react';
import { ZoomMtg } from "@zoomus/websdk";
import { ZoomComponentProps } from '../types/ZoomTypes';

const zoomSdkKey = `${import.meta.env.VITE_APP_ZOOM_SDK_KEY = 'asdf'}`;

const ZoomComponent: React.FC<ZoomComponentProps> = ({
    meetingNumber,
    userName,
    userEmail,
    signature,
    meetingPassword,
}) => {

    useEffect(() => {
        ZoomMtg.setZoomJSLib('https://source.zoom.us/2.0.1/lib', '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
        initiateMeeting();
    }, []);

    const initiateMeeting = (): void => {
        ZoomMtg.init({
            leaveUrl: window.location.origin,
            isSupportAV: true,
            success: () => {
                ZoomMtg.join({
                    meetingNumber: meetingNumber.toString(),
                    userName,
                    userEmail,
                    passWord: meetingPassword ?? '',
                    sdkKey: zoomSdkKey as string,
                    signature,
                    success: () => {
                        console.log('Join meeting success');
                    },
                    error: (error: Function) => {
                        console.error('Error joining meeting:', error);
                    }
                });
            },
            error: (error: Function) => {
                console.error('Error initializing meeting:', error);
            }
        });
    };

    return <div id="zmmtg-root"></div>; // Zoom Meeting UI attaches here
};

export default ZoomComponent;
