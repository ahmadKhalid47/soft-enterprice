import React, { useState, useEffect } from 'react';
import Nestable from 'react-nestable';
import 'react-nestable/dist/styles/index.css';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from './TextInput';

const NestedList = ({ proposedSitemap, setSiteMap, shortcutKey }) => {
    // const sitemap = useSelector((state) => console.log(state));
    const sitemap = useSelector((state) => proposedSitemap == 1 ? state.proposedSitemap.sitemap : state.proposedSitemap2.sitemap2);
    console.log(sitemap)
    const formId = useSelector((state) => state.page.formId);
    const [items, setItems] = useState(sitemap || []);
    const [addCardText, setAddCardText] = useState('');
    const [showAddCardForm, setShowAddCardForm] = useState(false);
    const dispatch = useDispatch();

    const [nestableKey, setNestableKey] = useState(0);

    const handleDragEnd = (newItems) => {
        setItems(newItems.items);
        dispatch(setSiteMap(newItems.items));
    };
    useEffect(() => {
        dispatch(setSiteMap(items))
    }, [items])

    const handleAddCard = () => {
        setShowAddCardForm(true);
    };

    const handleSaveCard = (e) => {

        if (addCardText) {
            const newCard = { id: Date.now(), text: addCardText, children: [] };
            setItems([...items, newCard]);
            setAddCardText('');
            setShowAddCardForm(false);
            setNestableKey(nestableKey + 1);
        }
    };
    const handleDeleteCard = (cardId) => {
        // Deep copy the items array
        const updatedItems = JSON.parse(JSON.stringify(items));

        // Helper function to recursively remove a card with a given ID
        const removeCard = (arr, id) => {
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i].id === id) {
                    // If the current item matches the cardId, remove it
                    arr.splice(i, 1);
                } else if (arr[i].children) {
                    // If the item has children, recursively remove the child with the cardId
                    removeCard(arr[i].children, id);
                }
            }
        };

        // Call the removeCard function to remove the card with the specified ID
        removeCard(updatedItems, cardId);

        setItems(updatedItems);
        setNestableKey(nestableKey + 1);
    };

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (formId == '5' && e.ctrlKey && (e.key === shortcutKey || e.key === shortcutKey.toUpperCase())) {
                
                handleAddCard()
            }
        })
    }, [])

    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center'>
                <label className='text-gray-900 3xl:text-2xl text-lg '>Create your Nested List for <span className='font-bold'>Main pages</span></label>
                <button className="border bg-blue-400 rounded-xl p-3 py-3 text-white" onClick={handleAddCard}>Add Card <span className='border text-sm p-1 rounded-lg bg-[#6a6a6a2f]'>CTRL + A</span></button>
            </div>

            <div className='w-full  mt-2 flex gap-3 justify-center items-start'>
                <div className='flex-1 w-[45%]'>
                    <Nestable
                        items={items}
                        renderItem={({ item }) => (
                            <div
                                className="bg-white p-2 rounded-xl select-none text-xl flex justify-between cursor-grab"
                              
                            >
                                <div>{item.text}</div>
                                <button onClick={() => handleDeleteCard(item.id)}>
                                    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20" />
                                    </svg>

                                </button>
                            </div>
                        )}
                        onChange={(newItems) => handleDragEnd(newItems)}
                        key={nestableKey}
                    />
                </div>
            </div>
            {showAddCardForm && (
                <form
                    className='flex gap-3 items-end'
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent the default form submission
                        handleSaveCard();
                    }}
                >
                    <TextInput
                        label="Card Text"
                        type="text"
                        value={addCardText}
                        autoFocus
                        onChange={(e) => setAddCardText(e.target.value)}
                    />
                    <button type='submit' className="border bg-blue-400 h-fit rounded-xl p-[.66rem] text-white">Save <span className='border text-sm p-1 rounded-lg bg-[#6a6a6a2f]'>Enter</span></button>
                </form>


            )}
        </div>
    );
};



const NestedListB = ({ proposedSitemap, setSiteMap, shortcutKey }) => {
    // const sitemap = useSelector((state) => console.log(state));
    const sitemap = useSelector((state) => proposedSitemap == 1 ? state.proposedSitemap.sitemap : state.proposedSitemap2.sitemap2);
    console.log(sitemap)
    const formId = useSelector((state) => state.page.formId);
    const [items, setItems] = useState(sitemap || []);
    const [addCardText, setAddCardText] = useState('');
    const [showAddCardForm, setShowAddCardForm] = useState(false);
    const dispatch = useDispatch();

    const [nestableKey, setNestableKey] = useState(0);

    const handleDragEnd = (newItems) => {
        setItems(newItems.items);
        dispatch(setSiteMap(newItems.items));
    };
    useEffect(() => {
        dispatch(setSiteMap(items))
    }, [items])

    const handleAddCard = () => {
        setShowAddCardForm(true);
    };

    const handleSaveCard = (e) => {

        if (addCardText) {
            const newCard = { id: Date.now(), text: addCardText, children: [] };
            setItems([...items, newCard]);
            setAddCardText('');
            setShowAddCardForm(false);
            setNestableKey(nestableKey + 1);
        }
    };
    const handleDeleteCard = (cardId) => {
        // Deep copy the items array
        const updatedItems = JSON.parse(JSON.stringify(items));

        // Helper function to recursively remove a card with a given ID
        const removeCard = (arr, id) => {
            for (let i = arr.length - 1; i >= 0; i--) {
                if (arr[i].id === id) {
                    // If the current item matches the cardId, remove it
                    arr.splice(i, 1);
                } else if (arr[i].children) {
                    // If the item has children, recursively remove the child with the cardId
                    removeCard(arr[i].children, id);
                }
            }
        };

        // Call the removeCard function to remove the card with the specified ID
        removeCard(updatedItems, cardId);

        setItems(updatedItems);
        setNestableKey(nestableKey + 1);
    };

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (formId == '5' && e.ctrlKey && (e.key === shortcutKey || e.key === shortcutKey.toUpperCase())) {
                
                handleAddCard()
            }
        })
    }, [])

    return (
        <div className='mt-5'>
            <div className='flex justify-between items-center'>
                <label className='text-gray-900 3xl:text-2xl text-lg '>Create your Nested List for <span className='font-bold'>Addon pages</span></label>
                <button className="border bg-blue-400 rounded-xl p-3 py-3 text-white" onClick={handleAddCard}>Add Card <span className='border text-sm p-1 rounded-lg bg-[#6a6a6a2f]'>CTRL + B</span></button>
            </div>

            <div className='w-full  mt-2 flex gap-3 justify-center items-start'>
                <div className='flex-1 w-[45%]'>
                    <Nestable
                        items={items}
                        renderItem={({ item }) => (
                            <div
                                className="bg-white p-2 rounded-xl select-none text-xl flex justify-between cursor-grab"
                              
                            >
                                <div>{item.text}</div>
                                <button onClick={() => handleDeleteCard(item.id)}>
                                    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="#000000" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20" />
                                    </svg>

                                </button>
                            </div>
                        )}
                        onChange={(newItems) => handleDragEnd(newItems)}
                        key={nestableKey}
                    />
                </div>
            </div>
            {showAddCardForm && (
                <form
                    className='flex gap-3 items-end'
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent the default form submission
                        handleSaveCard();
                    }}
                >
                    <TextInput
                        label="Card Text"
                        type="text"
                        value={addCardText}
                        autoFocus
                        onChange={(e) => setAddCardText(e.target.value)}
                    />
                    <button type='submit' className="border bg-blue-400 h-fit rounded-xl p-[.66rem] text-white">Save <span className='border text-sm p-1 rounded-lg bg-[#6a6a6a2f]'>Enter</span></button>
                </form>


            )}
        </div>
    );
};

export default NestedList;
export { NestedListB };