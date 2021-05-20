import { useLocation } from "react-router";

function useQuery(param) {
	return new URLSearchParams(useLocation().search).get(param);
}

export default useQuery;