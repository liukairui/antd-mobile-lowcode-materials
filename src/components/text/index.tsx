import React, { ElementType, ReactNode, createElement } from 'react';

export interface ITextProps {
  attributes?: Record<string, string>;
  code?: boolean;
  content?: string;
  customChildren?: ReactNode;
  deleteline?: boolean;
  elementType?: ElementType;
  italics?: boolean;
  mark?: boolean;
  strong?: boolean;
  underline?: boolean;
}

class Text extends React.Component<ITextProps> {
  render() {
    const {
      attributes,
      code,
      content,
      customChildren,
      deleteline,
      elementType,
      italics,
      mark,
      strong,
      underline,
      ...restProps
    } = this.props;

    let child: ReactNode = content ?? '文本';

    if (code) child = createElement('code', null, child);
    if (deleteline) child = createElement('del', null, child);
    if (italics) child = createElement('i', null, child);
    if (mark) child = createElement('mark', null, child);
    if (strong) child = createElement('strong', null, child);
    if (underline) child = createElement('u', null, child);

    const Tag: ElementType = elementType || ('span' as unknown as ElementType);
    return (
      <Tag {...attributes} {...restProps}>
        {child}
        {customChildren}
      </Tag>
    );
  }
}

export { Text };
