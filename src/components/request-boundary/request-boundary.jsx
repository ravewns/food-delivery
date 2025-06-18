import {REQUEST_STATUS} from "../../constants/request-status.js";

export const RequestBoundary = ({status, loading, error, children}) => {
    if (status === REQUEST_STATUS.REJECTED) {
        return error || <div>Ошибка загрузки</div>;
    }

    if (
        status === REQUEST_STATUS.PENDING ||
        status === REQUEST_STATUS.IDLE
    ) {
        return loading || <div>Загрузка...</div>;
    }

    return children;
};