
import { FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';

export function StarIcon() {
    return <FaStar className="text-yellow-500" />;
}

export function ForkIcon() {
    return <FaCodeBranch className="text-green-500" />;
}

export function IssueIcon() {
    return <FaExclamationCircle className="text-red-500" />;
}
