/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * The contents of this file are subject to the Netscape Public License
 * Version 1.0 (the "NPL"); you may not use this file except in
 * compliance with the NPL.  You may obtain a copy of the NPL at
 * http://www.mozilla.org/NPL/
 *
 * Software distributed under the NPL is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the NPL
 * for the specific language governing rights and limitations under the
 * NPL.
 *
 * The Initial Developer of this code under the NPL is Netscape
 * Communications Corporation.  Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation.  All Rights
 * Reserved.
 */

#ifndef nsIHttpProtocolConnection_h___
#define nsIHttpProtocolConnection_h___

#include "nsIProtocolConnection.h"

// XXX regenerate:
#define NS_IHTTPPROTOCOLCONNECTION_IID               \
{ /* 677d9a90-93ee-11d2-816a-006008119d7a */         \
    0x677d9a90,                                      \
    0x93ee,                                          \
    0x11d2,                                          \
    {0x83, 0x6a, 0x00, 0x60, 0xb8, 0x11, 0x9d, 0x7a} \
}

class nsIHttpProtocolConnection : public nsIProtocolConnection
{
public:
    NS_DEFINE_STATIC_IID_ACCESSOR(NS_IHTTPPROTOCOLCONNECTION_IID);

    NS_IMETHOD Get(void) = 0;

    NS_IMETHOD GetByteRange(PRUint32 from, PRUint32 to) = 0;

    NS_IMETHOD Put(void) = 0;

    NS_IMETHOD Post(void) = 0;

};

#endif /* nsIIHttpProtocolConnection_h___ */
