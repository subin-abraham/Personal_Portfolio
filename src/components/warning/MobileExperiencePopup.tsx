'use client'
import React, { useEffect, useState } from 'react';

const MobileExperiencePopup: React.FC = () => {
    const [deviceType, setDeviceType] = useState<null | 'mobile' | 'tablet'>(null);

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem('device-warning-shown');
        if (alreadyShown) return;

        const width = window.innerWidth;

        if (width < 768) {
            setDeviceType('mobile');
        } else if (width >= 768 && width < 1024) {
            setDeviceType('tablet');
        }
    }, []);

    useEffect(() => {
        if (deviceType) {
            sessionStorage.setItem('device-warning-shown', 'true');
        }
    }, [deviceType]);

    if (!deviceType) return null;

    const warningText =
        deviceType === 'mobile'
            ? 'You’re viewing this site on a mobile device.'
            : 'You’re viewing this site on a tablet.';

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div
                className="absolute inset-0 z-0"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            ></div>

            {/* Warning modal */}
            <div className="relative z-10 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded shadow-lg max-w-sm w-full text-center">
                <div className="text-4xl mb-2">⚠️</div>
                <h2 className="text-lg font-bold mb-2">Limited Experience on {deviceType}</h2>
                <p className="mb-4 text-sm">
                    {warningText} This site is best experienced on a desktop or laptop. Some layout may not display correctly on smaller screens.
                </p>
                <button
                    className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600"
                    onClick={() => setDeviceType(null)}
                >
                    Continue Anyway
                </button>
            </div>
        </div>
    );
};

export default MobileExperiencePopup;
