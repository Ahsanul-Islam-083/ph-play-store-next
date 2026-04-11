'use client';

import { InstallAppsContext } from "@/context/install.context";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallToggleButton = ({app}) => {

    const {installedApps, setInstalledApps} = useContext(InstallAppsContext)
    // console.log(installedApps, 'tgbtn');
    

    const handleInstallNow = () => {
        // Logic to handle installation
        console.log("Install Now button clicked");
        setInstalledApps([...installedApps, app]);
        toast.success(`${app.title} is installed!`);
    }
    const isInstalled = installedApps.find(InstalledApp=> InstalledApp.id === app.id);
    console.log({isInstalled, app},'isInstalled');
    

    return (
        <div>
            <button disabled={isInstalled ? true : false} onClick={handleInstallNow}
             className="btn btn-primary btn-lg">Install Now</button>
        </div>
    );
};

export default InstallToggleButton;