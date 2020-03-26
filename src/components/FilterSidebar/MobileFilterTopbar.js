import React from 'react'
import { Button } from 'semantic-ui-react'

const MobileFilterTopbar = () => {
    return (
        // <div className="filter-sticky">
            <div className="mobile only row sm-filter">
                <div className="mobile-filter column">
                    <div className="filter-container-sm">
                        <Button secondary>Category</Button>
                    </div>
                </div>
                {/* <div className="four wide column">
                    <div className="filter-container-sm">
                        <Button>Designer</Button>
                    </div>
                </div> */}
                <div className="mobile-filter column">
                    <div className="filter-container-sm">
                        <Button secondary>Color</Button>
                    </div>
                </div>
                <div className="mobile-filter column">
                    <div className="filter-container-sm">
                        <Button secondary>Price</Button>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default MobileFilterTopbar;