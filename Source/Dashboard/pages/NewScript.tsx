import React, { Component } from 'react';

import { getTranslations } from '../../Translations';

import addToStore from '../../Store/addToStore';

import customKey from '../../AppFiles/Functions/customKey';

import FullScreenListObjects from '../../AppFiles/Modules/FullScreenListObjects';

import InputAnimation from '../../AppFiles/Modules/InputAnimation';

import SelectWrapper from '../../AppFiles/Modules/SelectWrapper';

import LoadingBoxTop from '../../AppFiles/Modules/LoadingBoxTop';

const alien = '💉';

class NewScript extends Component {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    constructor(props) {
        super(props);
        this.setCodeName = this.setCodeName.bind(this);
        this.setValueScriptRuntime = this.setValueScriptRuntime.bind(this);
        this.setValueScriptType = this.setValueScriptType.bind(this);
        this.setCode = this.setCode.bind(this);
        this.saveCode = this.saveCode.bind(this);
        this.setAttributeName = this.setAttributeName.bind(this);
        this.removeAttribute = this.removeAttribute.bind(this);
        this.saveAttribute = this.saveAttribute.bind(this);
        this.setAttributeValue = this.setAttributeValue.bind(this);
        this.toggleDisplayFullscreenlistRuntime = this.toggleDisplayFullscreenlistRuntime.bind(this);
        this.toggleDisplayFullscreenlistCode = this.toggleDisplayFullscreenlistCode.bind(this);
        

        this.state = {
            showLoading: false,
            /**
             * Type
             */
            type: '',
            typeText: '',
            /**
             * Code
             */
            newCode: '',
            /**
             * Name
             */
            codename: '',
            /**
             * Runtime
             */
            runtime: '',
            runtimeText: '',
            /**
             * Tags attributes
             */
            tagsAttributes: [],
            singleAttribute: '',
            singleAttributeValue: '',
            /**
             * 
             */
            displayFullscreenlistCode: false,
            displayFullscreenlistRuntime: false,
        };

        this.translations = getTranslations();
    }

    toggleDisplayFullscreenlistRuntime(){
        this.setState({
            displayFullscreenlistRuntime: !this.state.displayFullscreenlistRuntime
        });
    }

    toggleDisplayFullscreenlistCode(){
        this.setState({
            displayFullscreenlistCode: !this.state.displayFullscreenlistCode
        });
    }
    /**
     * Set the type of the script
     * @param event 
     */
    setValueScriptType(event: React.ChangeEvent<HTMLInputElement>, object: { text: string, value: string }) {
        this.setState({
            type: object.value,
            typeText: object.text
        });
    }

    /**
     * Set script runtime 
     * while loading a website
     * @param event 
     */
    setValueScriptRuntime(event: React.ChangeEvent<HTMLInputElement>, object: { text: string, value: string }) {
        this.setState({
            runtime: object.value,
            runtimeText: object.text,
        });
    }

    /**
     * Set the name of the new script
     */
    setCodeName(codename: string) {
        this.setState({
            codename
        });
    }

    /**
     * Set the scripts code
     */
    setCode(e: any) {
        this.setState({
            newCode: e.target.value
        });
    }

    saveCode() {
        const { tagsAttributes, type, newCode, codename, runtime, runtimeText } = this.state;

        if (!type.length || !codename.length) {
            return addToStore(`All fields with the icon ${alien} are required to add a new script.`, -1);
        }

        this.setState({
            showLoading: true,
            newCode: '',
        }, () => {
            //@ts-ignore
            browser.runtime.sendMessage({
                action: 'save-new-code',
                data: newCode,
                name: codename,
                attributes: tagsAttributes,
                runtime,
                runtimeText,
                type,
            })
                .then(() => {
                    addToStore('Script saved', 0);

                    return this.setState({
                        showLoading: false,
                        type: '',
                        typeText: '',
                        newCode: '',
                        codename: '',
                        runtime: '',
                        runtimeText: '',
                        tagsAttributes: [],
                        singleAttribute: '',
                        singleAttributeValue: '',
                        displayFullscreenlistCode: false,
                        displayFullscreenlistRuntime: false,
                    });
                })
                .catch(e => {
                    addToStore(`Error while saving new script. Error message: ${e}`, -1);
                    return this.setState({
                        showLoading: false,
                        type: '',
                        typeText: '',
                        newCode: '',
                        codename: '',
                        runtime: '',
                        runtimeText: '',
                        tagsAttributes: [],
                        singleAttribute: '',
                        singleAttributeValue: '',
                        displayFullscreenlistCode: false,
                        displayFullscreenlistRuntime: false,
                    });
                });
        });
    }

    codeList() {
        let htmlTags = [
            'a',
            'abbr',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'base',
            'bdi',
            'bdo',
            'blockquote',
            'body',
            'button',
            'canvas',
            'caption',
            'cite',
            'code',
            'col',
            'colgroup',
            'data',
            'datalist',
            'dd',
            'del',
            'details',
            'dfn',
            'dialog',
            'div',
            'dl',
            'dom-module',
            'dom-repeat',
            'dt',
            'em',
            'embed',
            'fieldset',
            'figure',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'hgroup',
            'hidden',
            'html',
            'i',
            'iframe',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'link',
            'main',
            'map',
            'mark',
            'menu',
            'menuitem',
            'meta',
            'nav',
            'noscript',
            'object',
            'ol',
            'optgroup',
            'option',
            'p',
            'pre',
            'progress',
            's',
            'script',
            'section',
            'select',
            'small',
            'source',
            'span',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'svg',
            'table',
            'tbody',
            'td',
            'template',
            'textarea',
            'tfoot',
            'th',
            'time',
            'title',
            'tr',
            'track',
            'u',
            'ul',
            'var',
            'video'
        ];

        htmlTags = htmlTags.sort();

        return htmlTags.map(tagName => {
            return {
                text: `${tagName.toUpperCase()} - innerText injection into the tag: ${tagName}`,
                value: tagName
            }
        });
    }

    /**
     * Set the singleAttributes name
     */
    setAttributeName(singleAttribute: string) {
        this.setState({
            singleAttribute
        });
    }

    /**
     * Set the singleAttributes value
     */
    setAttributeValue(singleAttributeValue: string) {
        this.setState({
            singleAttributeValue
        });
    }

    saveAttribute() {
        const { tagsAttributes, singleAttribute, singleAttributeValue } = this.state;

        if (!singleAttribute.length || !singleAttributeValue.length) {
            return addToStore('Tag: name and value required as pair.', -1);
        }

        tagsAttributes.push({
            name: singleAttribute,
            value: singleAttributeValue,
            customKey: customKey()
        });

        this.setState({
            tagsAttributes,
            singleAttribute: '',
            singleAttributeValue: ''
        });
    }

    removeAttribute(key: string) {
        this.setState({
            tagsAttributes: this.state.tagsAttributes.filter(o => o.customKey !== key)
        });
    }

    render() {
        const { typeText, runtimeText, showLoading, tagsAttributes } = this.state;

        return (
            <div className="NewCode">
                {
                    showLoading && <LoadingBoxTop />
                }
                <div className="h1-box">
                    <h1>
                        {
                            this.translations.add_script
                        }
                    </h1>
                    <div className='analyser'>
                        <div className="box">
                            <SelectWrapper
                                callback={this.toggleDisplayFullscreenlistCode}
                                iconDown={<i className="fas fa-angle-down down"></i>}
                                iconAttributes={undefined}
                                title={`${alien} ${this.translations.select_script_type}`}
                                selectedType={typeText}
                            />
                        </div>
                        <div className="box">
                            <SelectWrapper
                                callback={this.toggleDisplayFullscreenlistRuntime}
                                iconDown={<i className="fas fa-angle-down down"></i>}
                                iconAttributes={undefined}
                                title={this.translations.select_script_runtime}
                                selectedType={runtimeText}
                            />
                        </div>
                    </div>

                    <div className='analyser'>
                        <div className="box">
                            <span className="description-span">
                                {`${alien} ${this.translations.select_script_name}`}
                            </span>
                            <InputAnimation
                                placeholder='Unique script name'
                                type="text"
                                callback={this.setCodeName}
                                value={this.state.codename}
                            />
                        </div>
                        <div className="box box-attributes">
                            <span className="description-span">
                                {
                                    this.translations.attributes
                                }
                            </span>
                            {
                                tagsAttributes.map(object => {
                                    return (
                                        <div
                                            className="tag-pairs"
                                            key={customKey()}
                                        >
                                            <span
                                                className="icon-delete"
                                                onClick={(e) => this.removeAttribute(object.customKey)}
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </span>
                                            <p>
                                                {`${object.name}="${object.value}"`}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                            <InputAnimation
                                placeholder={this.translations.attributeName}
                                type="text"
                                callback={this.setAttributeName}
                                value={this.state.singleAttribute}
                            />
                            <InputAnimation
                                placeholder={this.translations.attributeValue}
                                type="text"
                                callback={this.setAttributeValue}
                                value={this.state.singleAttributeValue}
                            />
                            <button onClick={this.saveAttribute}>
                                {
                                    this.translations.add
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h1-box">
                    <h1>
                        {
                            this.translations.code
                        }
                    </h1>
                    <div className="textarea-holder">
                        <textarea
                            defaultValue={this.state.newCode}
                            onChange={(e) => this.setCode(e)}
                        />
                        <button onClick={this.saveCode}>
                            {
                                this.translations.save
                            }
                        </button>
                    </div>
                </div>
                <FullScreenListObjects
                    display={this.state.displayFullscreenlistCode}
                    callback={this.setValueScriptType}
                    iconClose="✖"
                    callbackClose={this.toggleDisplayFullscreenlistCode}
                    closeOnCallback={true}
                    closeOnDimmedClick={true}
                    closeOnEsc={true}
                    inputActive={true}
                    inputPlaceholder={'style, javascript ....'}
                    noDataText={'🤯'}
                    animation='top' // scale, top, right, bottom, left
                    data={this.codeList()}
                />
                <FullScreenListObjects
                    display={this.state.displayFullscreenlistRuntime}
                    callback={this.setValueScriptRuntime}
                    iconClose="✖"
                    callbackClose={this.toggleDisplayFullscreenlistRuntime}
                    closeOnCallback={true}
                    closeOnDimmedClick={true}
                    closeOnEsc={true}
                    inputActive={true}
                    inputPlaceholder={'Interactive, Timeout 60 ....'}
                    noDataText={'🤯'}
                    animation='top' // scale, top, right, bottom, left
                    data={
                        [
                            {
                                text: `Interactive - ${this.translations.interactive}`,
                                value: 'interactive',
                            },
                            {
                                text: `Complete - ${this.translations.loaded}`,
                                value: 'complete',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 0.1`,
                                value: 'timeout01',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 0.2`,
                                value: 'timeout02',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 0.3`,
                                value: 'timeout03',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 0.4`,
                                value: 'timeout04',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 0.5`,
                                value: 'timeout05',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 1`,
                                value: 'timeout1',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 2`,
                                value: 'timeout2',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 3`,
                                value: 'timeout3',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 4`,
                                value: 'timeout4',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 5`,
                                value: 'timeout5',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 10`,
                                value: 'timeout10',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 20`,
                                value: 'timeout20',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 30`,
                                value: 'timeout30',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 40`,
                                value: 'timeout40',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 50`,
                                value: 'timeout50',
                            },
                            {
                                text: `Timeout - ${this.translations.timeout}: 60`,
                                value: 'timeout60',
                            },
                        ]
                    }
                />
            </div>
        );
    }
}

export default NewScript;

