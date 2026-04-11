'use client';

const InstallToggleButton = () => {

    const handleInstallNow = () => {
        // Logic to handle installation
        console.log("Install Now button clicked");
    }

    return (
        <div>
            <button onClick={handleInstallNow}
             className="btn btn-primary btn-lg">Install Now</button>
        </div>
    );
};

export default InstallToggleButton;