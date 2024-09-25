

const FAQ = () => {
    return (
        <div>
            <h3 className="text-center text-2xl text-rose-400 font-bold">
                :: FAQ Page ::
            </h3>

            <div className="join join-vertical w-full mt-6">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is React.js and Explain the concept of "components" in React.</div>
                    <div className="collapse-content">
                        <p>React.js is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications where a smooth, interactive experience is essential.</p>

                        <p>
                        In React, the concept of components is central to building user interfaces. A component is a self-contained piece of the UI that encapsulates its own structure, style, and behavior. Components can be thought of as building blocks that make it easier to manage complex UIs by breaking them down into smaller, manageable parts.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
                    <div className="collapse-content">
                        <p>JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows developers to write HTML-like code directly within their JavaScript files. It makes it easier to create and visualize the structure of React components by blending markup with JavaScript logic.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Explain the concept of "props" in React and how they are used</div>
                    <div className="collapse-content">
                        <p>In React, props (short for "properties") are a mechanism for passing data from one component to another, primarily from parent components to child components. They enable component reusability and help manage the flow of data within an application.
                        </p>
                    </div>
                </div>


                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is "state" in React, and how does it differ from props?</div>
                    <div className="collapse-content">
                        <p>In React, state and props are both used to manage and pass data, but they serve different purposes and have distinct characteristics.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is the purpose of the useEffect hook in React, and when would you use it?</div>
                    <div className="collapse-content">
                        <p>The useEffect hook in React serves to manage side effects in functional components. Side effects are operations that can affect other components and cannot be done during rendering, such as data fetching, subscriptions, or manually changing the DOM.
                        </p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default FAQ;