/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSNodeBase} from "@romejs/ast";
import {createQuickBuilder} from "../utils";

export type JSXIdentifier = JSNodeBase & {
	type: "JSXIdentifier";
	name: string;
};

export const jsxIdentifier = createQuickBuilder<JSXIdentifier, "name">(
	"JSXIdentifier",
	"name",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
