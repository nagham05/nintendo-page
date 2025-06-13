import esrb from '../assets/esrb.png';

const Esrb = () => {
    return (
        <div className="flex items-start gap-3 mt-8 w-90">
        <img src={esrb} alt="ESRB" className="w-10 h-14" />
        <div className="text-xs text-gray-700 ">
            <div className="border-b border-gray-500 ">                            
                Fantasy Violence, Mild Blood, Mild Language, Simulated Gambling, Use of Alcohol, Use of Tobacco
            </div>
            <div className="mt-1">Users Interact</div>
        </div>
    </div>
    )
}

export default Esrb;