import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SET_POST_FORM } from '~/model/action/post';
import { InputLayout, RemarkSpan } from './style';
import Input from '~/components/atom/Input';
import Select from '~/components/atom/Select';
import TextArea from '~/components/atom/TextArea';
import Label from '~/components/atom/Label';
import ToggleButton from '~/components/atom/ToggleButton';

const mapTypeToElement = (type) => {
    switch (type) {
        case 'input':
            return Input;
        case 'select':
            return Select;
        case 'textarea':
            return TextArea;
        case 'label':
            return Label;
        case 'toggle_button':
            return ToggleButton;
        default:
            return Input;
    }
};
function PostInput(props) {
    const dispatch = useDispatch();
    const handleChange = useCallback(
        (e) => {
            dispatch({
                type: SET_POST_FORM,
                payload: {
                    keyName: props.keyName,
                    value: e.target.value,
                    index: props.index,
                },
            });
        },
        [dispatch, props.keyName, props.value, props.index]
    );

    const Element = mapTypeToElement(props.type);
    return (
        <InputLayout width={props.width}>
            <Element {...props} value={props.value} onChange={handleChange} />
            {props.remark && <RemarkSpan>{`*${props.remark}`}</RemarkSpan>}
        </InputLayout>
    );
}

export default PostInput;
