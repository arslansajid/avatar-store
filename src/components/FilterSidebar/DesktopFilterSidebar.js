import React, { useEffect, useState } from "react";
// import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
// import {input} from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'
import InputRange from 'react-input-range';
import { Colors, Sizes } from "../../../static/Filters";
import { fetchFramesByPrice } from "../../Api/index"

const CategoryFilter = (props) => {
    const {updateFrames} = props;
    useEffect(() => {
    }, [filter, priceValue])

    const [priceValue, setPriceValue] = useState({ min: 10, max: 300 });
    const [filter, setFilter] = useState({
        category: false,
        designer: false,
        size: false,
        occassion: false,
        color: false,
        price: false,
        discount: false,
    });

    const toggleFilters = (event) => {
        // event.persist();
        console.log("called")
        const { name } = event.target;
        let obj = {};
        obj[name] = !filter[name];
        let updatedState = Object.assign(filter, obj);
        setFilter({ ...updatedState });
    }

    const handlePriceChange = (newValue) => {
        setPriceValue(newValue);
    };

    const priceChangeHandler = (newValue) => {
        fetchFramesByPrice(newValue.min, newValue.max)
        .then((res) => {
            console.log("res", res)
            !!updateFrames && updateFrames(res.data.items)
        })
        .catch((err) => {
            console.log("err", err)
            updateFrames([]);
        })
    }

    return (
        <div className="category-filter sticky">
            {/* <div className="filter-tab" >
                <button style={
                    { zIndex: 100 }}
                    className={`filter ${filter["category"] ? "selected" : ""}`}
                    onClick={
                        (event) => toggleFilters(event)}
                    name="category" >
                    Category
                    <Icon name={filter["category"] ? "angle up" : "angle down"} />
                </button>

                {filter["category"] ?
                    <div className="filter-container" >
                        <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />
                            <div className="ml-3 radio-label-text" >
                                Family </div> </div> <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />
                            <div className="ml-3 radio-label-text" >
                                Single </div> </div> <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />
                            <div className="ml-3 radio-label-text" >
                                Festive </div> </div> <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />
                            <div className="ml-3 radio-label-text">
                                Holiday
                                </div>
                        </div>
                        <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />
                            <div className="ml-3 radio-label-text" >
                                Trip </div> </div>
                    </div> :
                    null
                }
            </div> */}

            {/* <div className="filter-tab" >

                <button className={`filter ${filter["designer"] ? "selected" : ""}`}
                    onClick={
                        (event) => toggleFilters(event)}
                    name="designer" >
                    Designer
                    <Icon name={filter["designer"] ? "angle up" : "angle down"} />
                </button>
                {filter["designer"] ?
                    <div className="pt-3 filter-container" >
                        <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />
                            <div className="ml-3 radio-label-text" >
                                Ben Holland
                        </div>
                        </div>
                        <div className="d-flex my-3 align-items-center" >
                            <input className="mr-3"
                                type="radio" />

                            <div className="ml-3 radio-label-text" >
                                Mark X
                            </div>
                        </div>
                        <div>
                            <div className="d-flex my-3 align-items-center" >
                                <input className="mr-3"
                                    type="radio" />
                                <div className="ml-3 radio-label-text" >
                                    Philip Lim
                                        </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div> */}


            {/* <div className="filter-tab" >

                <button className={`filter ${filter["size"] ? "selected" : ""}`}
                    onClick={(event) => toggleFilters(event)}
                    name="size" >
                    Size
                    <Icon name={filter["size"] ? "angle up" : "angle down"} />
                </button>
                <div className="d-flex flex-wrap" >
                    {
                        filter["size"] ?
                            Sizes.map((size, index) => {
                                return (
                                    <button
                                        className="ui button my-3 mr-3 size-btn"
                                        key={index}>
                                        {size.name}
                                    </button>
                                )
                            }) :
                            null
                    }
                </div>
            </div> */}
            {/* <div className="filter-tab">

                <button className={`filter ${filter["color"] ? "selected" : ""}`}
                    onClick={(event) => toggleFilters(event)}
                    name="color">
                    Color
                        <Icon name={filter["color"] ? "angle up" : "angle down"}
                    />
                </button> {
                    filter["color"] ?
                        Colors.map((color, index) => {
                            return (
                                <div className="d-flex my-3 align-items-center filter-container"
                                    key={index} >
                                    <div style={
                                        { backgroundColor: `${color.name.toLowerCase()}` }}
                                        className={`color-shade ${color}`}
                                    />
                                    <div className="ml-3 radio-label-text" > {color.name} </div>
                                </div>
                            )
                        }) :
                        null
                }
            </div> */}
            <div className="filter-tab" >
                <button className={`filter ${filter["price"] ? "selected" : ""}`}
                    onClick={
                        (event) => toggleFilters(event)}
                    name="price" >
                    Price
            <Icon name={filter["price"] ? "angle up" : "angle down"} />
                </button>
                {
                    filter["price"]
                        ?
                        <div className="py-3 price-filter" >
                            <div className="d-flex justify-content-between" >
                                {/* <input className="price-input"
                                    value={`$ ${priceValue.min}`}
                                    onChange={
                                        () => { }}
                                />
                                <input className="price-input"
                                    value={`$ ${priceValue.max}`}
                                    onChange={
                                        () => { }}
                                /> */}
                                <div className="price-input">{`$ ${priceValue.min}`}</div>
                                <div className="price-input">{`$ ${priceValue.max}`}</div>
                            </div>
                            <InputRange
                                maxValue={1000}
                                minValue={0}
                                value={priceValue}
                                onChange={(value) => handlePriceChange(value)}
                                onChangeComplete={(value) => priceChangeHandler(value)}
                            />
                        </div>
                        :
                        null
                }
            </div>
        </div>
    );
}

export default CategoryFilter;