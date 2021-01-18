import * as React from 'react';

interface ProgressProps {
    favor: number
    contrary: number
    abstention: number
    unknown: number
}

const Progress: React.FC<ProgressProps> = ({ favor, contrary, abstention, unknown }) => {
    const total = [favor, contrary, abstention, unknown].reduce((acc, curr) => acc + curr, 0)

    return (
        <div className="flex text-xs text-center" style={{ height: '36px' }}>
            <div style={{ width: `${favor / total * 100 }%` }}>
                <div className="h-full bg-blue-400">{ favor }</div>
                <div className="truncate">A FAVOR</div>
            </div>
            <div style={{ width: `${contrary / total * 100}%` }} >
                <div className="h-full bg-red-400">{ contrary }</div>
                <div className="truncate">CONTRA</div>
            </div>
            <div style={{ width: `${abstention / total * 100}%` }}>
                <div className="h-full bg-yellow-500">{ abstention }</div>
                <div className="truncate">ABSTENÇÃO</div>
            </div>
            <div style={{ width: `${unknown / total * 100}%` }}>
                <div className="h-full bg-gray-400">{ unknown }</div>
                <div className="truncate">DESCONHECIDO</div>
            </div>
        </div>
    );
};

export default Progress;
