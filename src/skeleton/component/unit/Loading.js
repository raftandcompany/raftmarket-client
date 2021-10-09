import SvgLoading from "asset/SvgLoading.svg";

export function Loading({ info }) {
    return (
        <div className="loading">
            <div className="loading-inner">
                <img src={SvgLoading} alt="loading.." />
                <p>
                    {info == null ? "loading..." : info}
                </p>
            </div>
        </div>
    )
}