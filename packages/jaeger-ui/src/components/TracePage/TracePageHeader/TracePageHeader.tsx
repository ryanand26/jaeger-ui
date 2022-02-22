// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from 'react';
import _get from 'lodash/get';
import _maxBy from 'lodash/maxBy';
import _values from 'lodash/values';

import SpanGraph from './SpanGraph';
import { TUpdateViewRangeTimeFunction, IViewRange, ViewRangeTimeUpdate, ETraceViewType } from '../types';
import { TNil } from '../../../types';
import { Trace } from '../../../types/trace';

import './TracePageHeader.css';

type TracePageHeaderEmbedProps = {
  canCollapse: boolean;
  clearSearch: () => void;
  focusUiFindMatches: () => void;
  hideMap: boolean;
  hideSummary: boolean;
  linkToStandalone: string;
  nextResult: () => void;
  onArchiveClicked: () => void;
  onSlimViewClicked: () => void;
  onTraceViewChange: (viewType: ETraceViewType) => void;
  prevResult: () => void;
  resultCount: number;
  showArchiveButton: boolean;
  showShortcutsHelp: boolean;
  showStandaloneLink: boolean;
  showViewOptions: boolean;
  slimView: boolean;
  textFilter: string | TNil;
  toSearch: string | null;
  trace: Trace;
  viewType: ETraceViewType;
  updateNextViewRangeTime: (update: ViewRangeTimeUpdate) => void;
  updateViewRangeTime: TUpdateViewRangeTimeFunction;
  viewRange: IViewRange;
};

export function TracePageHeaderFn(props: TracePageHeaderEmbedProps & { forwardedRef: React.Ref<any> }) {
  const {
    hideMap,
    slimView,
    trace,
    updateNextViewRangeTime,
    updateViewRangeTime,
    viewRange
  } = props;

  if (!trace) {
    return null;
  }

  return (
    <header className="TracePageHeader">
      {/* <AltViewOptions onTraceViewChange={onTraceViewChange} traceID={trace.traceID} viewType={viewType} /> */}
      {!hideMap && !slimView && (
        <SpanGraph
          trace={trace}
          viewRange={viewRange}
          updateNextViewRangeTime={updateNextViewRangeTime}
          updateViewRangeTime={updateViewRangeTime}
        />
      )}
    </header>
  );
}

export default React.forwardRef((props: TracePageHeaderEmbedProps, ref: React.Ref<any>) => (
  <TracePageHeaderFn {...props} forwardedRef={ref} />
));
