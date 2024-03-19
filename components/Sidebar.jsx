'use client';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from '@app/store/pageSclice';
import { resetSquence, setPageSequence } from '@app/store/pageSequence';

const Sidebar = () => {
    const pageSequence = useSelector(state => state.pageSequence).pageSequence;
    const [items, setItems] = useState(pageSequence);

    const dispatch = useDispatch();
    const onDragEnd = (result) => {
        if (!result.destination) return; // If dropped outside the list
        const reorderedItems = Array.from(pageSequence);
        const [movedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, movedItem);
        setItems(reorderedItems);
        dispatch(setPageSequence(reorderedItems));
    };
    const generate = () => {
        dispatch(updatePage('100'));
    }

    const handleChangeChecked = (e, itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, checked: e.target.checked } : item
            )
        );
    };
    useEffect(() => {
        dispatch(setPageSequence(items))

    }, [items])

    return (
        <div className='w-[20vw] h-fit custom-bg shadow-lg top-[20vh] rounded-r-3xl p-3'>
            <h1 className='head_text whitespace-nowrap'>Proposal Pages</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="item_list">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="flex flex-col"
                        >
                            {pageSequence.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                            onClick={() => dispatch(updatePage(item.id))}

                                        >
                                            <div className="desc mt-2 flex-start p-3 bg-white rounded-2xl border select-none gap-2 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    checked={item.checked}
                                                    id={item.id}
                                                    onChange={(e) => handleChangeChecked(e, item.id)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                                {item.content}
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <div className='flex flex-col gap-3'>

                                <button type="button" className='mt-8 button border border-gray-200 p-3 rounded-3xl bg-white' onClick={() => generate()}>Generate</button>
                                <button type="button" className=' button border border-gray-200 p-3 rounded-3xl bg-white' onClick={() => {
                                    dispatch(resetSquence());
                                    setItems([
                                        { id: '1', content: 'Cover Page', checked: true },
                                        { id: '2', content: 'Table of Contents', checked: true },
                                        { id: '3', content: 'Cover Letter', checked: true },
                                        { id: '4', content: 'About your Project', checked: true },
                                        { id: '5', content: 'Proposed Sitemap', checked: true },
                                        { id: '6', content: 'About Us', checked: true },
                                        { id: '7', content: 'Our Process', checked: true },
                                        { id: '8', content: 'Why Soft Enterprise', checked: true },
                                        { id: '9', content: 'Estimate Budget', checked: true },
                                        { id: '10', content: 'Terms & conditions', checked: true },
                                        { id: '11', content: 'Last Page', checked: true },
                                    ])
                                }
                                }>Reset all</button>
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>

    );
};

export default Sidebar;