import ZoomComponent from "./ZoomComponent";

const HomePage = () => {
    // Example static data
    const joinInfo = {
        meetingNumber: '123456789',
        userName: 'John Doe',
        userEmail: 'john.doe@example.com',
        signature: 'example_signature',
        meetingPassword: 'password123',
    };

    return (
        <div>
            <ZoomComponent 
                meetingNumber={joinInfo.meetingNumber}
                userName={joinInfo.userName}
                userEmail={joinInfo.userEmail}
                signature={joinInfo.signature}
                meetingPassword={joinInfo.meetingPassword}
            />
        </div>
    );
}

export default HomePage;
