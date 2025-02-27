/*
Copyright 2022 Šimon Brandner <simon.bra.ag@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export enum ReceiptType {
    Read = "m.read",
    FullyRead = "m.fully_read",
    ReadPrivate = "m.read.private",
    /**
     * @deprecated Please use the ReadPrivate type when possible. This value may be removed at any time without notice.
     */
    UnstableReadPrivate = "org.matrix.msc2285.read.private",
}
